# Visual QA rubric

This rubric combines lessons from source-led technical slide revisions with the [W3C presentation guidance](https://www.w3.org/WAI/teach-advocate/accessible-presentations/) and the [Assertion–Evidence approach](https://www.assertion-evidence.com/). The priority categories are this skill's own review method.

## Severity

| Priority | Examples | Action |
| --- | --- | --- |
| P0 — meaning or safety | Wrong metric, misleading crop, private content exposed, synthetic data presented as a real result | Stop delivery; resolve or explicitly exclude/qualify |
| P1 — unreadable or missing | Clipped title/code, missing image, distorted chart, illegible main figure | Repair before delivery |
| P2 — comprehension | Weak hierarchy, excessive prose, inconsistent terminology, duplicated footer, unexplained screenshot | Consolidate repairs |
| P3 — cosmetic | Minor spacing, optional line break, nonessential decoration | Fix only when it does not destabilize the deck |

## Inspect seven dimensions

**Narrative.** Titles convey a coherent story. One slide has one main job. Its exhibit supports the headline; a product logo does not prove a performance claim. A closing question follows from the talk, rather than introducing an unrelated topic.

**Readability.** Important content can be read at realistic presentation size. Enlarge dense paper figures, show a labeled detail, or choose a different example. Do not treat 100% zoom on a large monitor as proof of lecture-room readability.

**Geometry.** No clipping, overlap, distorted aspect ratio, collision with badges, or text outside the canvas. Check transformed/grouped elements and inherited content, not only the nominal bounding boxes.

**Hierarchy.** Titles, subheads, labels, explanations, captions, and citations have distinct roles. Do not make the entire box bold. Avoid arbitrary changes to the source/template font. Shorten a long title before squeezing it between a badge and a logo.

**Evidence.** Numbers match their source and units. Baselines, splits, budgets, model/harness versions, and uncertainty are visible when necessary. An illustrative candidate is not a measured optimization. A screenshot's demo values are not benchmark results.

**Continuity.** Footers occur once; numbering and section labels match the actual sequence. Speaker notes belong to the slide. Palette guides, sample names, and master instructions are not audience content.

**Accessibility and delivery.** Contrast is adequate, color is not the only signal, meaningful images have useful descriptions, and an editable/adaptable format is available when requested. Final output is the actual export from the target application.

## Common before → after repairs

| Before | Better repair |
| --- | --- |
| A whole webpage reduced to a thumbnail | Use the original exhibit and preserve its source link |
| A complete architecture too dense to read | Full map for orientation + enlarged, labeled relevant region |
| Tiny annotated code beside a long bullet list | Full-width code figure + a short teaching caption |
| A large decorative rounded panel around ten lines of code | Resize the panel to the content; improve line breaks and label code status |
| Source headings partly bold after text replacement | Recompute semantic style ranges from the new text |
| “Optimized prompt” without an experiment | “Candidate prompt — illustrative, not a measured result” |
| A score chart repeated in the commentary | Use the explanation area for mechanism and limitation instead |
| A new footer over an inherited footer | Edit or remove the responsible duplicate, then re-render |
| A scalar formula mixes incompatible units | Define weights/units or state the constrained objective in words |

## Verification record

Record input/output revision or file hash, slide count, renderer, date, reviewed slides, issue status, and remaining limitations. Use `null` or `unverified` until a check actually happens. Do not assign a passing score to a deck that has not been inspected.
