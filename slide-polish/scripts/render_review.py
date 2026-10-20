#!/usr/bin/env python3
"""Render a PDF into review images, not a quality verdict. No network access.

Requires Python 3.10+, PyMuPDF, and Pillow. Refuses nonempty output directories.
Run: python render_review.py deck.pdf --out review/before --dpi 120
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import pymupdf as fitz
except ImportError:
    try:
        import fitz  # Compatibility with earlier PyMuPDF releases.
    except ImportError:
        raise SystemExit("Missing PyMuPDF. Install with: python -m pip install pymupdf pillow")
try:
    from PIL import Image, ImageDraw
except ImportError:
    raise SystemExit("Missing Pillow. Install with: python -m pip install pymupdf pillow")


def render_review(pdf_path: Path, out: Path, dpi: int = 120,
                  columns: int = 3, per_sheet: int = 12,
                  thumb_width: int = 480) -> dict:
    """Write a manifest, page PNGs, and numbered JPEG contact sheets.

    Parameters are bounded to limit accidental oversized renders. On failure,
    partial files remain for diagnosis; rerun into a fresh directory.
    """
    pdf_path, out = Path(pdf_path).resolve(), Path(out).resolve()
    if not pdf_path.is_file():
        raise ValueError(f"Input is not a file: {pdf_path}")
    if not 36 <= dpi <= 240:
        raise ValueError("dpi must be between 36 and 240")
    if not 1 <= columns <= 6 or not 1 <= per_sheet <= 36:
        raise ValueError("columns must be 1–6 and per_sheet 1–36")
    if not 160 <= thumb_width <= 800:
        raise ValueError("thumb_width must be between 160 and 800")
    if out.exists() and (not out.is_dir() or any(out.iterdir())):
        raise ValueError("Output must be absent or an empty directory; use a fresh revision folder")

    with fitz.open(pdf_path) as doc:
        if not doc.is_pdf:
            raise ValueError("Input must be a PDF")
        if doc.needs_pass:
            raise ValueError("Encrypted PDF requires an authorized decrypted copy")
        if not 1 <= len(doc) <= 500:
            raise ValueError("PDF must contain 1–500 pages; split larger documents before review")
        for page in doc:
            area = (page.rect.width * dpi / 72) * (page.rect.height * dpi / 72)
            if not math.isfinite(area) or area <= 0 or area > 35_000_000:
                raise ValueError("A page exceeds the 35-megapixel render limit; reduce dpi or page size")
        out.mkdir(parents=True, exist_ok=True)
        manifest = {
            "input_name": pdf_path.name,
            "input_sha256": sha256_file(pdf_path),
            "created_at": datetime.now(timezone.utc).isoformat(),
            "renderer": f"PyMuPDF {fitz.VersionBind}",
            "dpi": dpi,
            "page_count": len(doc),
            "visually_reviewed": False,
            "note": "Rendering only. Open every slide and record the actual visual review separately.",
            "pages": [],
            "contact_sheets": [],
        }
        for index, page in enumerate(doc, start=1):
            name = f"slide-{index:03d}.png"
            pix = page.get_pixmap(matrix=fitz.Matrix(dpi / 72, dpi / 72),
                                  colorspace=fitz.csRGB, alpha=False)
            pix.save(str(out / name))
            manifest["pages"].append({"page": index, "file": name,
                "width_px": pix.width, "height_px": pix.height,
                "width_pt": page.rect.width, "height_pt": page.rect.height,
                "visually_reviewed": False})
            del pix
    for start in range(0, len(manifest["pages"]), per_sheet):
        rows = manifest["pages"][start:start + per_sheet]
        name = f"contact-{start // per_sheet + 1:03d}.jpg"
        make_sheet(out, rows, out / name, columns, thumb_width)
        manifest["contact_sheets"].append(name)
    (out / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return manifest


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def make_sheet(root: Path, pages: list[dict], target: Path,
               columns: int, width: int) -> None:
    """Fit complete page images into equal cells, including portrait slides."""
    gap, label = 18, 28
    height = round(width * 0.75)
    cols = min(columns, len(pages))
    sheet = Image.new("RGB", (cols * (width + gap) + gap,
        math.ceil(len(pages) / cols) * (height + label + gap) + gap), "#eeeaf0")
    draw = ImageDraw.Draw(sheet)
    for index, record in enumerate(pages):
        x = gap + (index % cols) * (width + gap)
        y = gap + (index // cols) * (height + label + gap)
        draw.text((x, y + 4), f"Slide {record['page']:02d}", fill="#27242c")
        draw.rectangle((x, y + label, x + width - 1, y + label + height - 1), fill="white")
        with Image.open(root / record["file"]) as source:
            image = source.convert("RGB")
            image.thumbnail((width, height), Image.Resampling.LANCZOS)
            sheet.paste(image, (x + (width - image.width) // 2,
                y + label + (height - image.height) // 2))
            image.close()
    sheet.save(target, quality=90)
    sheet.close()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--dpi", type=int, default=120)
    parser.add_argument("--columns", type=int, default=3)
    parser.add_argument("--per-sheet", type=int, default=12)
    parser.add_argument("--thumb-width", type=int, default=480)
    args = parser.parse_args()
    try:
        result = render_review(args.pdf, args.out, args.dpi, args.columns,
                               args.per_sheet, args.thumb_width)
    except Exception as exc:
        print(f"Render failed: {exc}", file=sys.stderr)
        return 2
    print(json.dumps({"output": str(args.out.resolve()), "pages": result["page_count"],
        "contact_sheets": result["contact_sheets"], "visually_reviewed": False}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
