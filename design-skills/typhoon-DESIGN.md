---
version: alpha
name: Typhoon-Inspired-design-analysis
description: A reusable interpretation of Typhoon's analytical-editorial design language — a research-report system built on violet hierarchy, deep aubergine feature surfaces, cool lavender and cerulean analytical accents, warm sand and pink counterpoints, and a strong distinction between narrative prose and structured evidence. Rubik carries compact display headings while Inter/Sarabun handles multilingual body text and UI. Dense tables, transcript comparisons, rule cards, score strips, and equation banners are treated as first-class editorial components rather than generic dashboard widgets.

colors:
  primary: "#726BDF"
  primary-dark: "#28204B"
  primary-soft: "#A77BE8"
  accent-sand: "#F0BFAA"
  accent-pink: "#E19EC8"
  accent-blue: "#6CA1C7"
  rhythm: "#7C7399"
  near-black: "#0A0624"
  canvas: "#FFFFFF"
  surface: "#FFFFFF"
  card: "#F7F6FD"
  sunk: "#F0EEFA"
  ink: "#313131"
  ink-secondary: "#5A5470"
  ink-muted: "#7C7399"
  hairline: "#DEDAF0"
  hairline-soft: "#EBE8F8"
  ask: "#726BDF"
  retrieve: "#4E8CB4"
  analyze: "#8F5FD8"
  alert: "#C4568F"
  success: "#3E7D63"
  on-dark: "#FFFFFF"

typography:
  display-xl:
    fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 45px
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: -0.675px
  display-lg:
    fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 33px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: -0.396px
  display-md:
    fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 29px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  heading-lg:
    fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.26
    letterSpacing: 0
  heading-md:
    fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, Sarabun, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, Sarabun, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Sarabun, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, Sarabun, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro-cap:
    fontFamily: "Inter, Sarabun, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.2px
    textTransform: uppercase
  mono-md:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  mono-sm:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: 11.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 3px
  sm: 4px
  md: 5px
  lg: 6px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 28px
  huge: 36px
  section: 44px

components:
  cover-hero:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: 76px 30px 52px
  meta-pill:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 5px 12px
  section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xs}"
    padding: 38px 30px 34px
  thesis-callout:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 24px 28px
  data-table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0px
  task-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 0px
  task-card-header:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 13px 18px
  layer-tag-ask:
    backgroundColor: "rgba(114,107,223,.10)"
    textColor: "{colors.ask}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 3px 9px
  layer-tag-retrieve:
    backgroundColor: "rgba(108,161,199,.13)"
    textColor: "{colors.retrieve}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 3px 9px
  layer-tag-analyze:
    backgroundColor: "rgba(167,123,232,.13)"
    textColor: "{colors.analyze}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 3px 9px
  alert-tag:
    backgroundColor: "rgba(240,191,170,.28)"
    textColor: "{colors.alert}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 3px 9px
  transcript-bubble:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 9px 12px
  equation-banner:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.lg}"
    padding: 22px 26px
  flow-node:
    backgroundColor: "rgba(114,107,223,.10)"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 12px 13px
  footer-dark:
    backgroundColor: "{colors.near-black}"
    textColor: "rgba(255,255,255,.72)"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 32px 30px 38px
---

## Overview

Typhoon's design language is **analytical editorial**, not dashboard-first. A dark, atmospheric cover opens the document; numbered section dividers create a strong reading rhythm; the body returns to a bright canvas where evidence is carried by tables, transcript comparisons, score strips, task cards, rule blocks, and equation diagrams.

The color system is led by **violet** (`{colors.primary}` — `#726BDF`) and a deep aubergine (`{colors.primary-dark}` — `#28204B`). Lavender, cerulean, pink, and sand are support colors rather than equal brand primaries. They help separate analytical layers, highlight failure states, and create the blurred atmospheric light used in dark feature surfaces.

Typography deliberately mixes two roles. **Rubik** is the compact, geometric display family for cover titles, section headings, and numbered dividers. **Inter + Sarabun** is the reading/UI stack, allowing English and Thai content to coexist without a visual break. Monospace is reserved for equations, tool calls, IDs, scores, and trace-like content.

**Key Characteristics:**
- Dark radial-gradient cover with violet/pink blurred orbs and a thin multicolor ribbon.
- Numbered section dividers (`01`, `02`, `03`...) that function as the document's main navigation rhythm.
- Narrow reading measure: body prose stays around 70–72ch even when tables and transcript panels go wider.
- Semantic analytical colors: ASK = violet, RETRIEVE = blue, ANALYZE = lavender-purple.
- Compact 4–6px radii; the design is editorial and technical, not pill-heavy.
- Evidence-first components: data tape, score tables, task cards, paired transcripts, rule boxes, flow diagrams.
- Dark mode is a deliberate token swap, not a filter or inversion.

## Colors

### Brand & Accent
- **Violet** (`{colors.primary}` — `#726BDF`): Main hierarchy color for section headings, IDs, selected states, and ASK-layer semantics.
- **Deep Aubergine** (`{colors.primary-dark}` — `#28204B`): Thesis blocks, equations, dark feature panes, and high-contrast analytical emphasis.
- **Lavender** (`{colors.primary-soft}` — `#A77BE8`): Section-number accents, ANALYZE-family support, and decorative glow.
- **Cerulean** (`{colors.accent-blue}` — `#6CA1C7`): RETRIEVE-family accent and ribbon color.
- **Kobi Pink** (`{colors.accent-pink}` — `#E19EC8`): Warm contrast in ribbons, dark-pane numerics, and atmospheric lighting.
- **Sand** (`{colors.accent-sand}` — `#F0BFAA`): Warm warning wash and ribbon endpoint.
- **Rhythm** (`{colors.rhythm}` — `#7C7399`): Labels, microcopy, column headings, and subdued metadata.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default page background.
- **Card** (`{colors.card}` — `#F7F6FD`): Soft analytical card surface.
- **Sunk** (`{colors.sunk}` — `#F0EEFA`): Table headers, task headers, tool messages, code backgrounds.
- **Hairline** (`{colors.hairline}` — `#DEDAF0`): Standard structural border.
- **Hairline Soft** (`{colors.hairline-soft}` — `#EBE8F8`): Row separators and secondary rules.
- **Near Black** (`{colors.near-black}` — `#0A0624`): Cover/footer base and deepest dark-mode background.

### Text
- **Ink** (`{colors.ink}` — `#313131`): Default body copy.
- **Ink Secondary** (`{colors.ink-secondary}` — `#5A5470`): Explanatory copy and secondary UI text.
- **Ink Muted** (`{colors.ink-muted}` — `#7C7399`): Notes, labels, low-priority metadata.
- **On Dark** (`{colors.on-dark}` — `#FFFFFF`): White text on deep surfaces.

### Semantic
- **ASK** (`{colors.ask}`): User-information elicitation and required-slot states.
- **RETRIEVE** (`{colors.retrieve}`): Retrieval/tool/document evidence.
- **ANALYZE** (`{colors.analyze}`): Constraint evaluation and analytical outcomes.
- **Alert** (`{colors.alert}`): Failures, prohibited behavior, hot rows, blocking states.
- **Success** (`{colors.success}`): Passing trajectories and allowed behavior.

## Typography

### Font Family

Display typography uses **Rubik** at weight 700. It is compact, geometric, and strong enough to organize long research documents without needing oversized scale.

Body copy uses **Inter** with **Sarabun** immediately behind it so Thai script remains native-looking. Keep the multilingual fallback order intact when Thai content is expected.

Monospace uses a system stack (`ui-monospace`, SF Mono, Menlo, Consolas) and should only appear where content behaves like data: code, equations, IDs, tool calls, numeric score strips, and trace lines.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| `{typography.display-xl}` | 45px | 700 | 1.13 | Cover headline |
| `{typography.display-lg}` | 33px | 700 | 1.14 | Main section divider title |
| `{typography.display-md}` | 29px | 700 | 1.0 | Section number |
| `{typography.heading-lg}` | 23px | 700 | 1.26 | In-section heading |
| `{typography.heading-md}` | 18px | 700 | 1.3 | Card/subsection heading |
| `{typography.body-lg}` | 17px | 400 | 1.62 | Lead / standfirst |
| `{typography.body-md}` | 16px | 400 | 1.58 | Main prose |
| `{typography.body-sm}` | 14px | 400 | 1.5 | Tables and dense cards |
| `{typography.caption}` | 12.5px | 400 | 1.45 | Notes, transcript bubbles |
| `{typography.micro-cap}` | 10px | 700 | 1.2 | Labels and tags |
| `{typography.mono-md}` | 13px | 400 | 1.6 | Equations, score vectors |
| `{typography.mono-sm}` | 11.5px | 400 | 1.5 | Tool traces and tiny code |

### Principles
- **Rubik owns hierarchy.** Do not replace main section headings with the body family.
- **Body copy is generous.** Dense research material still uses roughly 1.58–1.62 line-height.
- **Monospace means evidence.** Use it for machine-like artifacts, not decorative tech flavor.
- **Uppercase is micro-only.** Column labels and tiny section labels can be uppercase; prose headings should not be.
- **Balance headings, pretty-wrap prose.** Keep large headings compact while allowing body paragraphs to wrap naturally.

## Layout

### Spacing System
- The design uses a compact rhythm: 4 / 6 / 8 / 12 / 16 / 20 / 28 / 36px.
- Main text sections use about 36px top padding and modest bottom padding.
- Section dividers are visually larger than ordinary section gaps and carry their own internal 34–38px padding.
- Task cards typically use 16–18px internal padding, while high-emphasis thesis/equation blocks use 22–28px.

### Grid & Container
- Primary document container: approximately **1000px** max-width.
- Horizontal page padding: approximately **30px** desktop.
- Prose measure: approximately **70–72ch**.
- Tables and transcript panels may use the full container width and become horizontally scrollable when necessary.
- Paired transcript layouts switch from one column to two columns around 900px.
- Three-way analytical lists switch to a three-column layout around 840px.

### Whitespace Philosophy

Typhoon is dense but never cramped. White space is used to separate **claims from evidence**, not to create luxury-brand emptiness. A paragraph can be followed quickly by a table, but major conceptual changes are marked by numbered dividers or dark callout surfaces.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat canvas + 1px hairlines | Most document content |
| 1 | Soft tinted surface (`{colors.card}` / `{colors.sunk}`) | Tables, task headers, explanatory boxes |
| 2 | Dark high-contrast surface | Thesis, equation, comparison emphasis |
| 3 | Blurred radial glow | Cover, footer, dark feature panes |

### Decorative Depth

Depth is produced mostly through **surface polarity and blurred color fields**, not heavy box-shadow. The cover uses a near-black radial field with large blurred violet and pink circles. Section dividers use a partially clipped, rotated gradient ellipse. Keep these shapes soft, oversized, and partially off-canvas.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.xs}` | 3px | Inline code, tiny UI chrome |
| `{rounded.sm}` | 4px | Notes, setup blocks |
| `{rounded.md}` | 5px | Tables, transcript bubbles, flow nodes |
| `{rounded.lg}` | 6px | Thesis blocks, task cards, major callouts |
| `{rounded.pill}` | 9999px | Small tags and metadata only |

### Geometry

The system is intentionally **low-radius**. Do not turn cards into 16–24px soft rectangles. Pills are reserved for compact semantic tags and cover metadata; they are not the default container shape.

## Components

### Cover Hero

**`cover-hero`** — a dark editorial opening band.
- Background: near-black radial gradient with a slightly lighter aubergine center.
- Large blurred violet orb near bottom-right plus smaller pink orb.
- H1 in `{typography.display-xl}` with maximum width around 20ch.
- Standfirst in `{typography.body-lg}` with translucent white.
- Metadata shown as small bordered pills.
- Finish with a 4px ribbon: violet → cerulean → pink → sand.

### Section Divider

**`section-divider`** — the primary structural navigation pattern.
- Large two-digit step number in lavender.
- H2 in violet.
- Baseline-aligned row.
- Thin bottom rule.
- Optional clipped/rotated gradient ellipse behind the right side.

### Thesis Callout

**`thesis-callout`** — use for the strongest argument or conceptual reframing.
- Deep aubergine surface.
- White, slightly italic body copy.
- 6px radius.
- Optional lavender glow in bottom-right.
- Keep copy to one compact paragraph; this is not a generic card.

### Tables

**`data-table`** — core evidence surface.
- White background, 1px violet-tinted border, 5px frame radius.
- Header row in `{colors.sunk}`.
- Column headers use micro uppercase labels with increased tracking.
- Body rows separated by `{colors.hairline-soft}`.
- Highlight critical rows with an alert wash rather than a full saturated fill.
- Numeric cells and IDs may switch to monospace.

### Task Cards

**`task-card`** — structured case-study or benchmark unit.
- 1px border and 6px radius.
- Header on sunk background, body on white.
- Header title gets one or two compact semantic tags.
- Inside, use small uppercase sublabels, setup blocks, mini tables, transcript comparisons, and key-insight blocks.
- Cards should feel like mini research appendices, not product cards.

### Transcript Threads

**`transcript-bubble`** — turn-by-turn evidence display.
- Two-column micro grid: turn number + bubble.
- User/default message: sunk background.
- Agent/ASK message: violet wash.
- Tool message: transparent with dashed rule and monospace.
- System message: transparent dashed rule with italic explanatory text.
- Divergence turns receive a 3px semantic inset rule.
- Good and bad trajectories may be presented side-by-side with green/red headers and score footers.

### Analytical Layer Tags

Use compact semantic tags:
- `{layer-tag-ask}` for elicitation/required-slot logic.
- `{layer-tag-retrieve}` for tools/documents/retrieval.
- `{layer-tag-analyze}` for constraints/conclusion checks.
- `{alert-tag}` for failure, over-action, prohibited behavior.

Do not use these colors interchangeably; the three-layer distinction is part of the system's information architecture.

### Comparison Pane

For before/after or old/new reasoning:
- Use a two-column responsive grid.
- Old/default pane on `{colors.card}`.
- New/high-emphasis pane on `{colors.primary-dark}` with white text.
- Numeric vectors use monospace and pink accents.

### Equation Banner

**`equation-banner`** — a single formula or conceptual model.
- Deep surface, centered monospace formula.
- Important variables in pink/lavender.
- Small human-readable legend beneath in body type.
- Optional soft glow in the lower-right.

### Flow Nodes

Use compact flex-wrapped nodes for process diagrams.
- Variable nodes: violet wash.
- Fixed/context nodes: sunk neutral.
- Output/evaluator nodes: lavender wash.
- Arrows stay neutral and monospace-like.
- Each node has a large one-letter symbol, a short label, and tiny explanatory copy.

### Footer

**`footer-dark`** — a closing editorial band, not a multi-column marketing footer.
- Near-black radial background.
- Thin multicolor ribbon at top.
- One concise note paragraph in translucent white.
- Optional low-intensity violet glow.

## Do's and Don'ts

### Do
- Keep violet as the main document-hierarchy color.
- Use dark aubergine surfaces sparingly for thesis-level emphasis.
- Maintain the ASK / RETRIEVE / ANALYZE semantic color mapping.
- Let tables and transcript evidence go wider than prose.
- Use Rubik for main headings and Inter/Sarabun for multilingual body copy.
- Use monospace only for data-like artifacts.
- Keep borders thin and radii compact.
- Use notes and micro-labels to explain dense evidence instead of adding decorative icons.

### Don't
- Don't convert the document into a SaaS dashboard.
- Don't use large soft shadows on every card.
- Don't make every section a rounded container.
- Don't use pills as the default button/card geometry.
- Don't replace the dark hero with a bright gradient marketing hero.
- Don't use saturated pink/sand as primary CTA colors.
- Don't collapse ASK / RETRIEVE / ANALYZE into one generic accent.
- Don't center long-form prose.
- Don't remove horizontal scrolling from tables if doing so destroys data readability.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1000px | Full 1000px document container; transcript comparison can be 2-up |
| Desktop | 840–999px | Three-layer sections can be 3-up; tables remain full-width |
| Tablet | 640–839px | Two-column comparison blocks where useful; transcript threads become 1-up |
| Mobile | < 640px | Single-column cards; compact divider typography; horizontally scroll wide tables |

### Typography Scaling
- Cover H1 should use `clamp()` from roughly 29px to 45px.
- Main section H2 should use `clamp()` from roughly 23px to 33px.
- In-section H3 should use `clamp()` from roughly 18px to 23px.
- Do not scale body text below 14–16px merely to preserve desktop layouts.

### Collapsing Strategy
- Transcript pairs collapse to one column.
- Three-column analytical groups collapse to one column.
- Flow diagrams wrap rather than scale down.
- Tables receive horizontal scrolling and retain minimum widths.
- Cover metadata pills wrap naturally.

### Accessibility
- Use a 2px violet `:focus-visible` outline with about 3px offset.
- Respect `prefers-reduced-motion`; disable nonessential transitions.
- Keep alert/success states labeled textually, not by color alone.
- Preserve high-contrast text on deep surfaces.
- Keep Thai fallbacks and adequate line-height when multilingual content is present.

## Iteration Guide

1. Focus on one component or editorial pattern at a time.
2. Reference tokens directly (`{colors.primary}`, `{typography.body-md}`, `{task-card}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits when the Design.md tooling is available.
4. Add new variants as separate component entries rather than silently changing existing tokens.
5. Keep prose at roughly 70–72ch and allow evidence components to exceed that width.
6. Preserve the three analytical semantic colors as stable roles.
7. Use dark surfaces only for high-value emphasis; the default reading canvas stays light.
8. Test both light and dark theme token mappings before shipping new components.
