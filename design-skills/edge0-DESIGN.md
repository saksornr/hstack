---
version: alpha
name: Edge0-inspired-design-analysis
description: "A reusable interpretation of Edge0's current design language — a technical retail-AI brand built around editorial black-and-white contrast, compact numbered section labels, device and code mockups, restrained warm accenting, thin rules, and data-forward evidence blocks. The system combines a clean grotesk display face with monospace technical detail, generous vertical rhythm, low-radius product chrome, and a single high-contrast CTA hierarchy. It should feel like applied research made product-ready: specific, measured, and closer to an engineering field note than a conventional SaaS landing page."

colors:
  ink: "#111111"
  ink-soft: "#2C2C2C"
  ink-muted: "#6E6E6E"
  ink-faint: "#969696"
  canvas: "#F7F6F2"
  canvas-pure: "#FFFFFF"
  canvas-soft: "#EFEDE7"
  panel-dark: "#171717"
  panel-darker: "#0E0E0E"
  line: "#D7D4CC"
  line-strong: "#B9B5AB"
  accent: "#D6FF3F"
  accent-soft: "#EBFF9A"
  accent-ink: "#171A0A"
  signal-blue: "#A9C7FF"
  signal-coral: "#F3A58C"
  signal-green: "#A7D9B3"
  on-dark: "#F6F5F1"

typography:
  display-xxl:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 68px
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: -2.4px
  display-xl:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 52px
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -1.7px
  display-lg:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 38px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -1.0px
  heading-lg:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.5px
  heading-md:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.25px
  heading-sm:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.1px
  body-lg:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.1px
  body-md:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 1.25px
    textTransform: uppercase
  mono-md:
    fontFamily: "'SFMono-Regular', 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.1px
  mono-sm:
    fontFamily: "'SFMono-Regular', 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  metric:
    fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -1.4px
    fontFeature: tnum

rounded:
  none: 0px
  xs: 3px
  sm: 6px
  md: 10px
  lg: 16px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 72px
  huge: 112px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 11px 18px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 11px 18px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  section-index:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0px
  code-panel:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.md}"
    padding: 20px
  device-frame:
    backgroundColor: "{colors.panel-darker}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 10px
  evidence-card:
    backgroundColor: "{colors.canvas-pure}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 24px
  research-card:
    backgroundColor: "{colors.canvas-pure}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 18px
  step-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 0px 20px 0px 0px
  chip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.pill}"
    padding: 6px 10px
  input-chat:
    backgroundColor: "{colors.canvas-pure}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 10px 14px
  metric-large:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.metric}"
    rounded: "{rounded.none}"
    padding: 0px
  footer-minimal:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 40px 24px
---

## Overview

Edge0's current site presents on-device retail AI as a measured engineering system rather than a futuristic spectacle. The page is organized like a technical argument: a direct product proposition, a working device/code proof, a numbered deployment sequence, an illustrative economics section, a device-capability curve, benchmark evidence, a research foundation, and a single pilot CTA.

The visual language should therefore feel **technical, editorial, and bounded**. Its strongest signature is not a decorative brand motif but the repeated structure of evidence: numbered section labels such as `01 / ON-DEVICE SHOPPING`, tightly written headings, runnable-looking code, device UI, measured charts, research benchmark comparisons, and precise disclaimer copy.

This design system is an **inspired reusable interpretation** of the live Edge0 site reviewed on 2026-09-05. The public crawl exposed the information architecture and interface copy but not the production stylesheet, so the token values below are calibrated for faithful reuse rather than claimed as source-extracted CSS.

**Key Characteristics:**
- Editorial black / warm-white base with very restrained accent color.
- Large, compact grotesk headlines with tight negative tracking.
- Uppercase numbered section labels (`01 / ...`, `02 / ...`) as the main navigation rhythm through a long page.
- Device mockups and code panels treated as first-class evidence, not decoration.
- One bright accent reserved for current / active / confirmable states.
- Thin borders and low-radius panels instead of soft, floating SaaS cards.
- Data graphics, benchmark percentages, and citations integrated into the main narrative.
- Clear distinction between "current proof", "illustrative preview", and "research evidence".
- Minimal footer and a final single-task CTA instead of a broad conversion funnel.

## Colors

> **Source page:** `https://edge0.app/` reviewed 2026-09-05. Exact CSS tokens were not exposed by the public crawl; these values are reusable approximations calibrated to the site's observed monochrome engineering character.

### Core Neutral System

- **Ink** (`{colors.ink}` — `#111111`): Main headline and text color.
- **Ink Soft** (`{colors.ink-soft}` — `#2C2C2C`): Secondary headings, dark UI body text.
- **Ink Muted** (`{colors.ink-muted}` — `#6E6E6E`): Section indexes, captions, axis labels, explanatory text.
- **Ink Faint** (`{colors.ink-faint}` — `#969696`): Tertiary metadata and inactive states.
- **Canvas** (`{colors.canvas}` — `#F7F6F2`): Preferred page background; slightly warm rather than stark white.
- **Canvas Pure** (`{colors.canvas-pure}` — `#FFFFFF`): Cards, phone interiors, evidence panels.
- **Canvas Soft** (`{colors.canvas-soft}` — `#EFEDE7`): Chips, alternate bands, code labels.
- **Line** (`{colors.line}` — `#D7D4CC`): Default hairline rules.
- **Line Strong** (`{colors.line-strong}` — `#B9B5AB`): Dividers that need more structure.

### Technical Dark Surfaces

- **Panel Dark** (`{colors.panel-dark}` — `#171717`): Code editor and dark data surfaces.
- **Panel Darker** (`{colors.panel-darker}` — `#0E0E0E`): Device shell and strongest dark framing.
- **On Dark** (`{colors.on-dark}` — `#F6F5F1`): Text and linework on dark panels.

### Accent

- **Accent** (`{colors.accent}` — `#D6FF3F`): High-visibility action / active / current-state color.
- **Accent Soft** (`{colors.accent-soft}` — `#EBFF9A`): Low-intensity highlight.
- **Accent Ink** (`{colors.accent-ink}` — `#171A0A`): Text on accent surfaces.

The accent is intentionally scarce. In a typical viewport it should appear in only one or two meaningful places: the primary CTA, an active platform tab, a current local-route indicator, or a selected control.

### Data Accent Set

Use muted data colors only when a chart or evidence comparison requires multiple series:

- **Signal Blue** (`{colors.signal-blue}` — `#A9C7FF`)
- **Signal Coral** (`{colors.signal-coral}` — `#F3A58C`)
- **Signal Green** (`{colors.signal-green}` — `#A7D9B3`)

These are chart colors, not CTA colors.

### Color Principles

- Monochrome carries the brand; accent color carries state.
- Keep most surfaces flat and neutral.
- Do not introduce gradients unless the data visualization itself requires one.
- Use dark panels to indicate executable or device-local material.
- Use accent as a semantic signal, not a decorative wash.
- Disclaimers and "illustrative" labels should be muted by typography, not hidden through low contrast.

## Typography

### Font Family

Use a neutral modern grotesk such as **Inter** as the reusable default. The live site's public crawl does not expose the production font, so avoid claiming an exact family unless source CSS becomes available.

Display fallback:

```css
font-family:
  Inter,
  "Helvetica Neue",
  Arial,
  system-ui,
  -apple-system,
  sans-serif;
```

Technical / code fallback:

```css
font-family:
  "SFMono-Regular",
  "SF Mono",
  Menlo,
  Monaco,
  Consolas,
  "Liberation Mono",
  monospace;
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.display-xxl}` | 68px | 500 | 0.98 | -2.4px | Landing-page hero |
| `{typography.display-xl}` | 52px | 500 | 1.02 | -1.7px | Major section statement |
| `{typography.display-lg}` | 38px | 500 | 1.08 | -1.0px | Evidence section opener |
| `{typography.heading-lg}` | 28px | 500 | 1.12 | -0.5px | Card / chart headline |
| `{typography.heading-md}` | 22px | 500 | 1.2 | -0.25px | Step / benchmark title |
| `{typography.heading-sm}` | 17px | 500 | 1.3 | -0.1px | Compact panel title |
| `{typography.body-lg}` | 18px | 400 | 1.55 | -0.1px | Hero standfirst |
| `{typography.body-md}` | 15px | 400 | 1.55 | 0 | Main body |
| `{typography.body-sm}` | 13px | 400 | 1.5 | 0 | Captions / evidence notes |
| `{typography.label}` | 11px | 600 | 1.2 | +1.25px | Section index / eyebrow |
| `{typography.mono-md}` | 13px | 400 | 1.55 | -0.1px | Code panel |
| `{typography.mono-sm}` | 11px | 400 | 1.45 | 0 | Device metadata / chips |
| `{typography.metric}` | 48px | 500 | 1.0 | -1.4px | Benchmark percentage |

### Principles

- **Medium, not black.** Headlines should feel exact rather than loud; weight 500 is the default ceiling.
- **Tight tracking at display scale.** The visual tension comes from compact large type, not oversized weight.
- **Mono signals execution.** Use monospace for code, model IDs, platform tabs, trace labels, device metadata, and compact technical status.
- **Uppercase labels are structural.** Apply uppercase + tracked type to section indexes and small categories, never to paragraph copy.
- **Metrics use tabular figures.** Percentages, price/RAM axes, and numbered steps should enable `font-variant-numeric: tabular-nums`.
- **Disclaimers remain readable.** Small evidence caveats should stay around 12–13px with healthy line-height.

## Layout

### Page Container

Use a broad editorial container rather than a narrow article measure:

```css
.shell {
  width: min(1180px, calc(100vw - 48px));
  margin-inline: auto;
}
```

The hero and evidence sections should feel spacious enough to place text beside technical media.

### Text Measure

Recommended line lengths:

- hero proposition: 12–17 words per line
- major section body: 55–68ch
- card body: 32–48ch
- disclaimers: 60–80ch where space allows

### Section Rhythm

The page is built as a sequence of arguments. Use generous separation:

- major section top/bottom padding: 72–112px
- section index to title: 16–24px
- title to explanatory text: 16–20px
- narrative to proof object: 28–40px
- proof object to caveat: 12–18px

### Two-Column Proof Layout

At desktop, the first major product proof should use asymmetric columns:

```text
left:  code / integration surface      ~48–52%
right: device / retail UI proof        ~40–46%
gap:   40–64px
```

Do not center both as identical cards. The asymmetry reinforces "implementation + outcome".

### Section Index Grid

A recurring section opener should use:

```text
01 / CATEGORY
Large section headline
Short supporting paragraph
```

The number/category line stays small and muted; the headline carries the visual weight.

### Full-Width Evidence

Charts, research strips, and paper carousels can use the full container width. Supporting explanation should still return to a narrower measure.

### Whitespace Philosophy

Whitespace is a proof of confidence. Do not fill every gap with cards, icons, or decoration. The intended rhythm is closer to an industrial design catalogue or research exhibit than a dense software dashboard.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat surface + hairline | Most content |
| 1 | `0 8px 24px rgba(0,0,0,.06)` | Evidence cards |
| 2 | `0 20px 50px rgba(0,0,0,.12)` | Phone/device mockup |
| 3 | Dark framing + nested borders | Code/device interiors |

### Principle

Depth comes primarily from **nested technical framing**, not dramatic shadow.

The strongest dimensional object should usually be the device proof. Other cards remain comparatively flat so the device feels physical and current.

## Shapes

### Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0px | Section rules, tables |
| `{rounded.xs}` | 3px | Tiny technical labels |
| `{rounded.sm}` | 6px | Evidence cards |
| `{rounded.md}` | 10px | Code panels |
| `{rounded.lg}` | 16px | Device shell / hero media |
| `{rounded.pill}` | 9999px | CTA, compact tabs, chat input |

### Principle

The system should never look "bubble UI". Larger radii are reserved for actual product/device surfaces. Content cards remain 6px or less.

## Components

### `section-index`

The numbered eyebrow that gives the page its serial research-report rhythm.

Example:

```text
01 / ON-DEVICE SHOPPING
```

- Type `{typography.label}`
- Color `{colors.ink-muted}`
- Uppercase
- No background
- Use tabular figures
- Do not render as a pill or badge

### `button-primary`

Primary conversion control.

- Background `{colors.ink}`
- Text `{colors.canvas}`
- Padding `11px 18px`
- Pill radius
- One principal CTA per major band
- Arrow glyph may be appended: `Request a retail pilot →`

Hover:
- background lifts to `{colors.ink-soft}`
- optional 1–2px translateY upward
- no large glow

### `button-accent`

Use when the action is explicitly "current / confirm / active".

- Background `{colors.accent}`
- Text `{colors.accent-ink}`
- Same geometry as primary

Do not use both black and accent filled CTAs at equal prominence in the same action group.

### `button-ghost`

- Transparent background
- Thin `{colors.line-strong}` border where needed
- Text `{colors.ink}`
- Good for language/platform switching or secondary references

### `code-panel`

A core signature component.

Structure:

```text
Edge0Agent.swift                    iOS
──────────────────────────────────────
import Edge0Kit
let cartside = ...
...
```

Rules:
- Dark background
- Light monospace text
- Small filename / platform header
- 10px radius
- 18–22px padding
- Horizontal scrolling on mobile
- Syntax color should be minimal: 2–4 muted token colors maximum
- Avoid neon IDE themes

The code is evidence that an integration can exist; it should be legible enough to inspect.

### `platform-tabs`

Tabs such as `Swift`, `Kotlin`, `WebGPU` should look like compact technical switches.

Default:
- low-contrast border
- neutral text
- compact monospace

Active:
- accent or strong monochrome fill
- no oversized pill

Inactive previews should support qualifiers such as "illustrative" where relevant.

### `device-frame`

The device/product UI proof is the visual anchor of the on-device section.

Recommended layers:

```text
outer device shell
└── screen
    ├── time / status strip
    ├── app/model header
    ├── assistant message
    ├── prompt suggestion chips
    └── rounded chat input + send control
```

Rules:
- Dark shell
- 14–18px outer radius
- Screen inside uses a clean retail-app surface
- Product proof content remains simple and text-forward
- Model ID can use monospace
- Confirmation language should be visibly part of the interface
- Avoid unrealistic sci-fi UI

### `prompt-chip`

Suggested shopper prompts.

- Light neutral background
- 1px line
- 8–12px radius
- Body-sm type
- Can wrap to 2–3 lines
- The chip is a task example, not a decorative tag

### `deployment-steps`

Four-part sequence:

1. Connect retailer systems
2. Test shopping tasks
3. Route each request
4. Verify the outcome

Desktop:
- 4 columns
- strong numeric index
- thin vertical or top divider
- little or no card fill

Mobile:
- vertical sequence with horizontal rules

The structure should feel like a process specification, not four marketing feature cards.

### `cost-curve`

An illustrative economics chart.

Visual rules:
- use two clearly distinguished series
- label "Cloud-only" vs "Hybrid local + cloud fallback"
- use restrained data colors or solid/dashed monochrome
- axis and scale copy stay muted
- disclaimer remains attached immediately below the chart

Never convert an illustrative curve into a precise savings claim.

### `device-curve-chart`

A second evidence visual that pairs:
- average smartphone price
- average RAM
- observed history
- projected future values

Rules:
- historical vs projected series must be visually different
- label projection boundary
- use tabular axis numerics
- emphasize trajectory, not decorative chart effects

### `benchmark-comparison`

Used for legal and medical research evidence.

Structure:

```text
DOMAIN
Evidence headline

78.02%                75.34%
specialist            generalist

One-sentence interpretation.
Scope caveat.
Paper link
```

- Large metric type
- Two-column comparison
- Specialist metric can receive accent emphasis
- Generalist baseline remains neutral
- Caveat is mandatory
- Paper link remains text-level rather than a giant button

### `evidence-card`

- Canvas-pure background
- Hairline border
- 6px radius
- 24px padding
- Minimal shadow, if any

Use for bounded comparisons, not every section.

### `research-carousel`

A horizontally browsable paper collection.

Each entry contains:
- category / research type
- paper title
- author line
- optional venue or outbound link

Rules:
- title is primary
- authors are muted and compact
- category is uppercase/tracked or small mono
- carousel controls are minimal arrows
- avoid card-thumbnail imagery unless the paper has a meaningful visual

### `venue-strip`

A row of venue marks such as NeurIPS, ICLR, Interspeech, ACL, EMNLP, SIGIR.

Use:
- muted monochrome logos by default
- equal visual height
- large horizontal spacing
- no individual boxes around each logo

### `pilot-cta-band`

The final conversion section should be singular and specific.

Structure:

```text
ONE SHOPPING TASK · ONE MEASURABLE OUTCOME

Pilot one measurable
shopping task

Request a retail pilot →
```

Rules:
- high contrast
- large but not extravagant heading
- one CTA
- no feature list
- no secondary "book demo / learn more / pricing" clutter

### `footer-minimal`

Keep the footer extremely small:

```text
On-device AI shopping agents for retailers.           © 2026 Edge0
```

Recommended:
- dark surface
- 13px type
- 40px vertical padding
- no five-column sitemap unless the product grows into one

## Content Design

The copy is part of the interface system.

### Evidence Before Adjectives

Prefer:

> A 4-bit, 2B-class retail model handles supported catalog search on the phone.

Avoid:

> Revolutionary next-generation edge intelligence transforms commerce.

### Bound Claims

Use explicit qualifiers:
- `current native proof`
- `illustrative preview`
- `research only`
- `not a pricing or savings claim`
- `subject to testing`
- `task-specific result`

These caveats should not be treated as legal fine print. They are part of the product's trust design.

### Name the Object Being Measured

Use concrete nouns:
- shopping task
- route
- constraint
- basket proposal
- fallback
- benchmark
- release gate
- model ID

Avoid vague nouns such as "transformation", "journey", and "innovation" when a technical object can be named.

### One Claim Per Heading

The section headline should make exactly one argument:
- supported shopping tasks can run on-device
- deployment is a four-step route/verify loop
- device capability is improving
- specialist small models can outperform larger generalists on bounded tasks
- research foundation is broad
- pilot starts with one measurable task

## Interaction Language

### Hover

Use:
- color change
- underline
- 1–2px translation
- thin border intensification

Avoid:
- cards scaling to 1.05
- animated gradient glows
- perspective tilt
- cursor-following effects

### Motion

Recommended:
- controls: 160–220ms
- card/border state: 220–300ms
- carousel transition: 350–450ms
- chart draw-in: optional, under 600ms

Honor `prefers-reduced-motion`.

### Focus

Every interactive element needs a visible focus treatment.

Recommended:

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

On accent surfaces, use a dark focus ring.

## Do's and Don'ts

### Do

- Use section indexes as the backbone of long landing pages.
- Keep the overall palette overwhelmingly neutral.
- Let product proof appear as code + device UI rather than stock photography.
- Use monospace for model IDs, code, technical tabs, and route state.
- Keep benchmark percentages large and easy to compare.
- Pair every evidence claim with a short scope caveat.
- Distinguish live/current proof from illustrative future platform support.
- Use charts as argumentative evidence, not background decoration.
- Keep cards low-radius and mostly flat.
- Use one clear final CTA centered on a measurable pilot task.
- Preserve terms such as route, fallback, confirmation, constraint, and verification when adapting the system to agentic products.

### Don't

- Don't use gradients as a generic AI aesthetic.
- Don't add purple/blue neon glows around the phone.
- Don't use dozens of floating glass cards.
- Don't give every section a colored background.
- Don't turn caveats into 9px low-contrast legal text.
- Don't present projections as historical measurements.
- Don't imply benchmark superiority beyond the specific cited task.
- Don't make platform previews look equally verified if one platform is the current proof.
- Don't use oversized pill badges for every metadata item.
- Don't make the research carousel visually louder than the product proof.
- Don't add generic stock imagery of shoppers holding phones.
- Don't use "AI magic" language where an explicit route/tool/constraint can be described.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Wide | ≥ 1440px | Full 1180px shell; hero and proof breathe generously |
| Desktop | 1024–1439px | Two-column code/device proof; 4-step row |
| Tablet | 768–1023px | Proof columns tighten; research carousel shows fewer papers |
| Mobile | < 768px | Single-column proof; vertical steps; benchmark metrics stack |

### Hero Type

Suggested stair-step:

```text
68px → 56px → 44px → 36px
```

Do not let the hero collapse below ~34–36px unless the viewport is unusually narrow.

### Device / Code Proof

Desktop:
- side-by-side

Tablet:
- side-by-side if both remain legible; otherwise code above device

Mobile:
- code first
- device second
- no horizontal page overflow
- code panel may scroll internally

### Deployment Steps

Desktop:
- 4 columns

Tablet:
- 2 × 2

Mobile:
- 1 column

### Benchmark Cards

Desktop:
- legal and medical evidence can sit in a 2-column grid

Mobile:
- one at a time
- comparison values remain side-by-side if width allows
- metric size reduces from 48px to 38–40px

### Research Carousel

Desktop:
- show 3–4 items

Tablet:
- 2 items

Mobile:
- 1 item with peek of the next item where appropriate

### Touch Targets

- CTAs: ≥44px height
- carousel controls: ≥40×40px
- platform tabs: ≥40px height
- suggested prompt chips: ≥44px on touch surfaces
- chat send button: ≥40×40px

## Accessibility

### Claim Comprehension

Do not make a user infer the status of a statement from color alone. Explicitly label:
- current
- illustrative
- projected
- research benchmark
- fallback
- confirmation required

### Chart Accessibility

Every chart should include:
- a descriptive heading
- series names in text
- a prose summary of the trend
- distinction between historical and projected data
- no dependence on red/green color alone

### Code Accessibility

- preserve high contrast
- code font at least 12–13px on desktop
- horizontal scroll rather than tiny auto-scaling
- code block should be copyable when practical

### Device UI

If a phone mockup conveys key product behavior, provide equivalent HTML text outside or adjacent to the visual so the message is not trapped inside an image.

## Page Recipes

### Product Landing Page

1. Hero: one technical proposition + one sentence of explanation.
2. On-device proof: code + device.
3. Deployment steps.
4. Economics / routing evidence.
5. Device capability curve.
6. Research benchmark evidence.
7. Research foundation.
8. One-task pilot CTA.
9. Minimal footer.

### Technical Product Page

1. Section index + H1.
2. Runtime / model / route summary.
3. Code panel.
4. Device or API execution trace.
5. Boundary table: local / cloud fallback / human handoff.
6. Verification rules.
7. Caveats.
8. Single implementation CTA.

### Research Evidence Page

1. H1 + scope statement.
2. Benchmark category index.
3. Large metric comparison.
4. methodology note.
5. paper link.
6. additional related paper carousel.
7. limitations.
8. small CTA back to a bounded product application.

### Pilot Page

1. "One task / one outcome" hero.
2. Define the retail task.
3. Define approved data.
4. Define on-device vs fallback boundary.
5. Define confirmation boundary.
6. Define evaluation metric.
7. Minimal contact / request form.

## Adaptation Rules

When adapting Edge0's design language to another product:

### Keep

- serialized numbered section rhythm
- monochrome editorial canvas
- code + product proof pairing
- strong mono secondary typography
- restrained radius
- measurable evidence blocks
- visible caveats
- one-task / one-outcome CTA structure

### Change

- accent hue
- domain-specific mockups
- model IDs
- research categories
- benchmark data
- device shell
- integration language
- exact section count

### Preserve the Relationship

The key relationship is:

```text
claim
→ implementation proof
→ measurable evidence
→ limitation / scope
→ next bounded action
```

That sequence is more important than any exact color value.

## Iteration Guide

1. Focus on one component or section at a time.
2. Reference token names directly (`{colors.ink}`, `{components.code-panel}`, `{typography.label}`).
3. Keep the YAML frontmatter syntactically valid before editing prose.
4. Run `npx @google/design.md lint DESIGN.md` after edits when using the Design.md toolchain.
5. If exact source CSS becomes available, replace approximate color and font tokens before changing component relationships.
6. Preserve numbered section labels across all long-form product pages.
7. Default body copy to `{typography.body-md}` and technical metadata to `{typography.mono-sm}`.
8. Use `{typography.metric}` only for measured values or explicit research results.
9. Treat "illustrative", "projected", and "current proof" as visible component states.
10. Remove any decorative component that does not strengthen the sequence `claim → proof → evidence → scope`.
11. Use accent sparingly; if more than ~10% of a viewport is accent-colored, reduce it.
12. Keep the final conversion request specific and measurable rather than generic.

## Source Basis

Reviewed live public source:

- `https://edge0.app/` — 2026-09-05

Observed page structure used in this design analysis:

- hero: "On-device AI Shopping Agents"
- `01 / ON-DEVICE SHOPPING`
- code + Cartside iPhone proof
- `02 / DEPLOYMENT & ROUTING`
- four-step retail deployment flow
- illustrative inference-cost comparison
- `03 / THE DEVICE CURVE`
- smartphone price / RAM scenario chart
- `04 / RESEARCH EVIDENCE`
- legal and medical specialist-vs-generalist benchmark comparisons
- `05 / RESEARCH FOUNDATION`
- horizontally browsable research catalogue and publication-venue strip
- final "ONE SHOPPING TASK · ONE MEASURABLE OUTCOME" pilot CTA
- minimal Edge0 footer

The live public crawl did **not** expose exact production CSS or font declarations. Consequently, exact hex values, font-family selection, spacing dimensions, and shadows in this file are intentionally reusable approximations, while the page architecture, component taxonomy, content hierarchy, and claim/evidence behavior are derived from the live site.
