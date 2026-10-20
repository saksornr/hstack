# Image-led design and slide recipes

## What to carry forward

The reference presentation's reusable strengths are white space, a restrained purple accent, a short headline, a dominant source visual, concise editable explanation, attribution, and a consistent footer. Its subject, company logo, private links, and exact slide count are not part of the preset.

Use the user's template first. Otherwise start with this **proposed preset**, not an external design standard:

| Element | 960 × 540 pt canvas |
| --- | --- |
| Canvas | 16:9, white `#FFFFFF` |
| Main text | Near-black `#17171C` |
| Accent | Purple `#7F268D` |
| Quiet surface | `#F8F5FA`; use only when grouping is meaningful |
| Muted text | `#585560` |
| Font | Poppins if installed, otherwise an available readable sans-serif; verify actual export substitution |
| Title | 27–32 pt, bold, usually one line; title slide 46–56 pt |
| Body | 18–22 pt; technical labels 14–17 pt when genuinely necessary |
| Code | Readable monospace, normally 14–17 pt; shorten code rather than shrinking |
| Source/footer | 9–11 pt; never use a source-note size for narrative explanation |
| Margins | About 40–48 pt left/right; content below title, above sources/footer |
| Title region | x ≈ 42, y ≈ 24, w ≈ 730, h ≈ 42 |
| Main exhibit | y ≈ 108 to 450; adjust to aspect ratio and caption |
| Footer | One treatment only: slide number + section; no duplicated inherited footer |

For a smaller canvas, scale geometry and type together. Those font sizes assume the large 960 × 540 pt reference; blindly applying them to a 720 × 405 pt slide changes the visual proportions.

Whitespace is useful only when the important content is already readable. A tiny paper figure surrounded by empty space is not minimalism. Avoid repeated rounded panels, decorative dividers, and unsupported “maturity” staircases.

## Eight archetypes

| Archetype | Required information | Visual treatment | Common failure |
| --- | --- | --- | --- |
| 1. Opening | Topic, audience promise, presenter, scope | Large title and relevant illustration or typographic composition | A crowded agenda before the audience understands the goal |
| 2. Concept explainer | Definition, boundary, concrete example | One original figure with two or three annotations | Adding stock art that teaches nothing |
| 3. Full-width exhibit | A precise takeaway, visual evidence, implication | Large paper/book/course figure; short caption below | Whole-page screenshot with unreadable text |
| 4. Overview + detail | What part matters and why | Complete source map plus labeled enlarged crop | Cropping away the legend or changing the apparent system boundary |
| 5. Code/API contract | Inputs, minimal operation, outputs, failure/validation | Short editable code plus real docs/trace excerpt when useful | Invented SDK methods presented as runnable code |
| 6. Evaluation/result | Task, metric, baseline, split, uncertainty, caveat | Labeled chart or trace + independent verifier | Turning product-demo numbers into benchmark results |
| 7. Before/candidate | Baseline, intended change, fixed controls, acceptance rule | Side-by-side prompt/code excerpts | Labeling an untested revision “optimized” or “proven” |
| 8. Closing question | What was learned, unresolved gap, decision/evidence needed | One large question with a concrete scenario or result | A generic “Thank you” that drops the argument |

A production case needs the workflow, trigger, state, tools, safeguards, observed outcome, and limits. A method slide needs input → procedure → output, how it is evaluated, and when it fails. An enterprise framework needs mechanisms, ownership, and concrete implications—not only named pillars.

## Layout selection

**Figure-led:** give the exhibit most of the width, with a two-line explanation below. Best for source diagrams and code illustrations.

**Visual + explanation:** about 60/40, but let intrinsic aspect ratio determine the split. Use a short subheading and two to four explanation blocks.

**Overview + detail:** use a small complete figure for orientation and a larger region for the relevant detail. Label the crop and explain the relationship; do not pretend the crop is the full architecture.

**Evidence + interpretation:** chart on the larger side, concise interpretation on the smaller side. Keep the source, metric direction, and limitation visible.

**Comparison:** equal-size panels and matched criteria. Differences in panel size must not imply measured superiority.

## Charts and technical content

Use a common scale for comparable bars; normally begin quantitative bars at zero. Preserve units and denominators. If normalization, truncation, or log scales are necessary, label them. Do not fabricate significance, error bars, or a ranking from incomparable tasks.

A minimal API slide should answer: what object is created, what input is sent, what output/events are returned, how state persists, what the adapter changes, and what must be retested. A single line such as “change the base URL” is insufficient evidence of compatibility.

Keep authored code native/editable. Separate source code copied from documented examples from illustrative pseudocode. Show at most the lines needed for the point; put runnable setup and dependencies in notes or a companion file.

## Accessibility and visual checks

Use text labels in addition to color. Describe meaningful visual information in notes, supply alt text when supported, and retain an adaptable output. Check important figure text at intended viewing size. The [W3C presentation guidance](https://www.w3.org/WAI/teach-advocate/accessible-presentations/) recommends readable visuals and contrast; exact sizes above are our preset, not W3C requirements.

The [Assertion–Evidence approach](https://www.assertion-evidence.com/) motivates the takeaway-title-plus-evidence pattern. Do not claim that any aesthetic choice or fixed slide count is scientifically mandated.
