---
name: slide-polish
description: Visually inspect and repair an existing presentation, slide, or exported deck. Use for unreadable source figures, cramped code, clipped titles, weak hierarchy, distorted screenshots, duplicate footers, or requests to make slides cleaner and easier to present. Preserve valid evidence and the reference design, apply targeted repairs, then verify the final export.
---

# Slide Polish

Review the slides the audience will actually see. An outline, object list, or successful API write is not visual verification. Preserve useful content and source visuals; avoid replacing a source-led deck with generic boxes and arrows.

Read [the QA rubric](references/qa-rubric.md) for defect severity and repair rules. Use [the review log](assets/review-log.json) to record findings. The optional [rendering helper](scripts/render_review.py) creates page PNGs, a contact sheet, and a manifest from a PDF; it does not judge slide quality or edit the deck.

## 1. Establish scope and baseline

Identify the editable original, current exported version, audience, presentation size, and requested changes. A reference deck is not automatically an edit target. Inspect the live deck before writing. When only a PDF exists, state whether an editable source is available; do not claim to have repaired native Google Slides from a PDF-only edit.

If the user asks for review only, report prioritized findings without mutation. If they request improvements, edit within the authorized scope. Keep a private baseline copy/export, not a public duplicate. Do not overwrite concurrent edits or change sharing permissions.

## 2. Render and inspect

Render all slides from one export. Use an overview to check rhythm, repeated layouts, sequence, and empty or overcrowded pages. Then inspect every individual slide at useful reading size, especially code, charts, source figures, and product screenshots. Do not rely on thumbnail OCR.

For each slide, ask:

- Can the audience identify the takeaway quickly?
- Does the visual support that takeaway, and can its important labels be read?
- Is the reading order obvious without the presenter pointing at everything?
- Are the title, content, sources, and footer separated and unclipped?
- Are editable text, notes, sources, numbers, and caveats preserved?

Check original-source crops against the full figure. Expand a tiny meaningful visual rather than leaving a large unused region. Preserve the legend, metric axis, and contextual qualifications. Label a detail crop explicitly.

## 3. Record concrete defects before editing

Use a compact issue table: slide number/ID, object or region, severity, observation, proposed repair, and verification status. Examples: “Page 8: control-plane labels unreadable at presentation size; enlarge that detail and retain the complete map”; “Page 11: code extends beyond panel; shorten and wrap before enlarging the panel.”

Prioritize semantic or evidence errors, missing content, distorted/illegible evidence, clipping, hierarchy, then cosmetic consistency. Do not replace a correct fact merely because another story sounds simpler. Flag evidence gaps; use external research only when requested or necessary to verify a proposed factual change, and distinguish that work from the source content.

## 4. Repair by preserving the argument

Shorten flexible copy, increase the useful media area, improve line breaks, and choose a better layout before reducing font size. Keep source notes small but readable; never use footnote-sized body text to force a fit. Preserve the template's typography and colors unless the user asks for a redesign or a concrete readability problem requires a local change.

Keep images proportionate. Prefer one dominant exhibit over several unreadable thumbnails. Author annotations outside the figure when possible. Keep authored code/editable chart labels native; do not flatten an entire slide to a screenshot.

Fix duplicate inherited footers in the responsible master/layout or local object as appropriate. Do not add a second footer layer. Check notes after duplication: a slide about an API must not retain notes about an unrelated survey.

Separate `Illustrative pseudocode` from runnable code, `Candidate revision` from measured improvement, `Synthetic data` from benchmark scores, and vendor demos from production evidence. A clearer label is often more important than a prettier chart.

## 5. Verify the repaired deliverable

Apply one consolidated repair pass, export again, and inspect the complete deck or all changed slides plus affected neighbors. A structural change invalidates the earlier slide-order review. Use a second repair pass only for remaining concrete defects; do not iterate endlessly on subjective cosmetic preferences.

Check slide count/order, images, sources, editable text, note alignment, and current revision. Record what was actually rendered and visually inspected. A script can confirm files and dimensions, but cannot certify that a slide is pedagogically clear or visually correct.

If final rendering is unavailable, say “edits applied; final rendering unverified” and list the remaining checks. Never report complete visual QA from a text-only readback.

## Delivery

Return the verified native link and requested exports, a brief summary of meaningful improvements, and material unresolved issues. Retain review artifacts privately unless the user requests them. For a new image-led presentation rather than a repair, use the companion `source-to-slides` skill when available; it is not required for this skill to work.
