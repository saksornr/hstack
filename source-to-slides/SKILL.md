---
name: source-to-slides
description: Research and build image-led technical presentations or single slides from papers, books, courses, documentation, and engineering blogs. Use for sourced explainers, research talks, production walkthroughs, or adding slides in an existing deck's style. Plan the story, find original visuals, preserve editable text, cite evidence, and visually verify the exported deck.
---

# Source to Slides

Turn credible sources into a teachable visual story—not a document pasted onto slides. Support one slide, a new deck, an extension, or a plan-only request. Use the user's reference deck for design, not as automatic proof of its factual claims.

## Read only what the task needs

- [Prompt cookbook](references/prompts.md): copy-paste prompts and required inputs.
- [Research playbook](references/research.md): internet searches, source selection, claim and media provenance.
- [Design and slide recipes](references/design.md): the white-and-purple preset and eight layout archetypes.
- [Worked example](references/worked-example.md): a 30-minute agent-engineering storyline and three complete slide specifications.
- [Google Slides workflow](references/google-slides.md): native authoring, media geometry, batching, and conflict recovery.
- [Example gallery](examples/gallery.html): six original, brand-neutral slide specimens; open locally in a browser.
- [Brief template](assets/brief.json): structured intake. [Slide specification](assets/slide-spec.json): a completed single-slide example.

For visual repair, use the companion `slide-polish` skill when available. It is optional; the delivery checks below still apply without it. Use `executive-consulting` for decision-led executive framing; use `presentation-pptx-diagram-skill` only when a genuinely complex editable diagram is requested. Do not turn an image-led talk into a diagram deck merely because that skill exists.

## 1. Establish the commission

Infer from the conversation and accessible material: topic, audience and prerequisites, learning outcome or decision, duration, language, required sections, source links, reference style, output format, and edit scope. Ask only for missing information that would materially change the work.

Choose exactly one mode:

| Mode | Scope |
| --- | --- |
| `plan` | Research and storyboard only. Do not mutate the deck. |
| `single-slide` | Create or insert exactly one slide; read neighboring slides first. |
| `deck` | Build a new presentation using an agreed or inferred brief. |
| `extend` | Add the requested section while preserving the existing argument and style. |
| `revise` | Improve selected content and layout; preserve valid evidence and unrelated slides. |

State assumptions briefly. Do not force an approval round when the user already requested creation. Honor an explicit “plan first” or “do not make slides yet.”

A skill supplies a workflow, not credentials or tools. Inspect the authoring, browsing, file-reading, and rendering capabilities actually available. Use connected tools for private documents. Never claim a Google Slides write or a visual review succeeded unless it did.

## 2. Inspect the reference before designing

Read the actual deck structure when available and render representative slides. Inspect at least the title, an image-led slide, a dense technical slide, a comparison, and the closing slide when those roles exist. A text outline cannot establish visual style.

Record canvas size, fonts, colors, margins, title geometry, source notes, numbering, image treatment, and recurring layouts. Map source media to keep, replace, or remove. Preserve useful editable objects and the user's protected branding in the authorized deck, but do not copy that branding into unrelated work or public skill assets.

Read the supplied content in its own terms. Preserve distinctions such as context versus memory versus state. Keep source statements, outside research, and your recommendations distinguishable. Do not silently repair an unsupported source claim with an invented explanation.

## 3. Research claims and visuals together

Follow [research.md](references/research.md). Search beyond the supplied links when research is requested. For technical claims, prioritize original papers, author/project sites, official docs and repositories, and first-party engineering reports. Search results are leads; open the actual source.

For each material claim, record the source URL, location, publication/version date, date checked, supporting evidence, and limitation. For every image, also record the original page, asset URL or PDF page, creator, reuse status, dimensions, crop, and caption. Keep private source details in the task workspace—not in a public repository.

Find the visual before filling the slide with text. Prefer original figures, book illustrations, course diagrams, product screenshots, annotated code, and measured charts. “Real image” includes a real published diagram; it does not require unrelated photography. Avoid decorative robots, fake product screenshots, and generic boxes that merely repeat the prose.

Do not assume that public availability or a repository's code license grants reuse rights for every figure. Check applicable terms; when unclear, link to the source or use an original, explicitly labeled explanatory visual. Never remove attribution or materially misleadingly crop evidence.

For “latest” or “SOTA,” date the search and state the task, benchmark/version, metric, configuration, evaluation split, and budget. Distinguish the best result within a stated comparison from a universal claim. Product claims and vendor case studies are not independent benchmark evidence.

## 4. Build a timed storyboard

Start with the audience's question. For an introductory technical talk, a useful sequence is:

**Why it matters → mental model → mechanism → implementation → evaluation → production → research question.**

Make the progression fit the subject; maturity “levels” are optional teaching devices, not an industry standard. Avoid framework inventories without a decision rule.

For every slide specify:

1. A takeaway title, narrative role, and speaking time.
2. One main claim, with two to four supporting points when needed.
3. A selected visual and a sentence explaining what the audience should notice.
4. A concrete example, code fragment, or measured result where useful.
5. A source/caveat and presenter notes connecting this slide to the next.

Budget speaking time, not just slide count. For a 30-minute session, reserve discussion time and mark optional deep dives. The worked example uses 28 minutes of content plus two minutes for questions. Move long code, derivations, additional comparisons, and implementation caveats into notes or an appendix rather than shrinking them.

## 5. Build source-led, editable slides

Apply the user's template first; otherwise use the preset in [design.md](references/design.md). Choose a layout to fit the evidence rather than forcing every slide into the same two-column card.

- Give the main visual roughly 55–75% of the content area when it carries the explanation. These are design targets, not mandatory quotas.
- Keep titles, explanations, captions, code you author, chart labels, and notes editable in the native output. Text intrinsic to an original screenshot can remain rasterized.
- Preserve image aspect ratios. Fit complete charts and UI; use a clearly labeled detail view when the original is too dense. A contact sheet is for review, not a substitute for readable individual slides.
- Use short, meaningful captions and a clickable source note. Explain the image instead of merely decorating with it.
- Label `Illustrative pseudocode`, `Synthetic example`, `Candidate revision—not a measured result`, or `Vendor-reported result` where appropriate.
- Verify current API syntax before calling a snippet runnable. Record the tested package/version and test result; otherwise label it pseudocode. Do not imply that changing a base URL guarantees complete feature parity.
- Separate runtime trace visibility from proof of task success. Separate an improved judge metric from end-to-end agent performance. Separate a production target from an observed result.

Speaker notes should contain timing, explanation of the exhibit, the worked example, limitations, full sources, and the transition. Do not invent personal experience, client deployments, measurements, or quotes.

## 6. Verify the actual deliverable

Read back the final structure, verify slide order/count, then export once and render every slide. Inspect both a contact sheet and individual slides at a useful reading size. Check content, visual hierarchy, text clipping, image quality, contrast, source notes, and repeated headers/footers. Review the Google Slides export after conversion, not only a local precursor.

Collect defects into a single repair list. Prefer one consolidated repair pass and a final verification; use a second pass only for remaining concrete defects. Check all changed slides and affected neighbors. An API success response is not a visual check, and a PDF text extraction is not proof that text is legible.

For an existing native deck, edit it in place only within the requested scope. For a new deck using a reference, copy the template rather than altering the reference. Never publish private decks, source screenshots, or font files as part of a reusable public skill.

## Delivery contract

Return the verified native presentation link and requested exports, plus a short summary of substantive changes. Include a brief unresolved-evidence or rendering limitation when necessary. In plan mode, deliver the storyboard, candidate visuals, and evidence gaps—not a claim that slides were created.

The reusable workflow must work on a new topic. Do not hard-code the agent-engineering section count, old benchmark values, organization branding, or a particular provider's API into future decks.
