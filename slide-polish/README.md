# Slide Polish

Render → inspect → repair → verify.

Use this companion to [Source to Slides](../source-to-slides/) when a deck already exists and needs a visual quality pass. Read [SKILL.md](SKILL.md).

```text
Use slide-polish to visually review [DECK/FILE] for [AUDIENCE].
Keep the existing design and source-led visuals. Inspect every rendered
slide. Fix unreadable figures, cramped code, clipping, inconsistent
hierarchy, distorted screenshots, and duplicate footers.
Apply targeted repairs to the editable original, export again, and verify.
Keep source attributions, presenter notes, and factual caveats intact.
```

## Optional renderer

The helper requires Python 3.10+, PyMuPDF, and Pillow. It reads a local PDF and writes PNGs, a contact sheet, and a JSON manifest. It does not access Google Drive, upload content, or claim visual correctness.

```bash
python -m pip install pymupdf pillow
python slide-polish/scripts/render_review.py presentation.pdf \
  --out review/before --dpi 120
```

Use a new output directory for the revised export. A nonempty directory is refused to prevent accidentally mixing revisions. Large decks produce multiple numbered contact sheets. Open the individual slides as well as the overview.

[QA rubric](references/qa-rubric.md) · [Review-log template](assets/review-log.json) · [Behavioral checks](references/behavior-tests.md)
