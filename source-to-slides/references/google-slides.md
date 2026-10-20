# Native Google Slides workflow

Use the actual connected authoring tool and its currently available schema. This guide is a workflow, not a promise that any particular tool name, connector, or endpoint is installed. It does not supply credentials.

## Read and plan

Identify the canonical presentation ID and role: style reference, factual source, or edit target. Read the live structure before writing. Save the original response and a PDF/render in the private task workspace. Record slide IDs, object IDs, media slots, text/style runs, notes IDs, layout/master IDs, and revision.

For an existing deck, edit only the requested scope. For a new presentation using a reference, copy the reference once and modify the copy. Reuse suitable existing layouts and editable objects. Classify every inherited image and label as keep, replace, or remove; do not leave the old presenter, customer name, palette instructions, or hidden template guides in the output.

## Geometry

Google Slides elements use intrinsic size plus transforms. Read both; width alone is not the displayed width. Use one coordinate system consistently. For an unrotated image of intrinsic dimensions `(iw, ih)` fitted into `(W, H)`:

```text
s = min(W / iw, H / ih)
displayed_width = iw * s
displayed_height = ih * s
x = frame_x + (W - displayed_width) / 2
y = frame_y + (H - displayed_height) / 2
```

Use equal x/y scale for undistorted images. Do not independently stretch a screenshot to match a frame. For rotated or grouped elements, account for the full affine transform. Keep complete evidence figures; use labeled detail crops only when the omitted region is not being misrepresented.

References: [element transforms](https://developers.google.com/workspace/slides/api/guides/transform) and [page elements](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages#PageElement).

## Mutate deliberately

Prepare valid JSON programmatically when many requests are needed; avoid hand-editing large repeated payloads. Use sensible batches and unique IDs. A batch is validated before changes are applied and its requests are processed in order; inspect the error rather than retrying unchanged invalid requests. See [batch requests](https://developers.google.com/workspace/slides/api/guides/batch).

Preserve mixed-style text. Before replacing content, record semantic runs and rebuild their ranges if character positions change. Never calculate new ranges from stale text offsets. Keep original source links and notes unless replacing them with the correct new ones.

Read the live revision before a write. On a revision conflict, stop, refresh, and reconcile the intended changes; do not remove concurrency controls simply to overwrite someone else's edits. A stale object ID or expired image URL needs a fresh read or a new valid asset source, not repeated `replaceImage` calls.

Prefer original public media URLs or a supported upload mechanism. Private images require explicit authorization before being sent to any public hosting or conversion service. The final deck must not depend on an expiring image link still working; verify the image is embedded in the exported file.

Create/duplicate slides before reordering. When reordering, obey the API's current-order requirements; move individual slides sequentially if a reversed list is invalid. Read back the final order and numbering. Use the existing footer treatment rather than stacking a second one on top.

## Export and inspect

Export once after the intended final structure is established. Render every page locally and review both overview and individual views. Use `slide-polish/scripts/render_review.py` when available, or an equivalent renderer. Record exact deck revision, page count, and review date. A local HTML/PPTX preview is not proof that Google Slides imported the design correctly.

Check: preserved fonts or documented substitutions; aspect ratios; clipped code; legible charts; notes matching the slide; no stale template content; sources and numbers; complete, unambiguous footer. Repair in consolidated batches and inspect the changed final export again.

Return the verified native deck link, requested exports, and any material limitation. Never create a sandbox download link based only on a filename.
