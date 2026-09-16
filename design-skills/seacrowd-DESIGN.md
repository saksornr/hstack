---
version: alpha
name: SEACrowd-Inspired-design-analysis
description: A reusable interpretation of SEACrowd's design language — a multilingual Southeast Asian research-community system built on ASEAN-derived red, blue, yellow, and green accents; Geist typography; narrow editorial reading widths; restrained bordered cards; compact navigation; and image-led announcements. The system is deliberately content-first and academic rather than SaaS-like, with saturated color reserved for semantic emphasis and a true light/dark role swap.

colors:
  red: "#ED2939"
  blue: "#0042A6"
  yellow: "#F9E300"
  green: "#009639"
  white: "#FFFFFF"
  black: "#111111"
  primary-light: "#ED2939"
  secondary-light: "#0042A6"
  primary-dark: "#0042A6"
  secondary-dark: "#ED2939"
  accent: "#F9E300"
  success: "#009639"
  canvas-light: "#FFFFFF"
  canvas-dark: "#111111"
  ink-light: "#111111"
  ink-dark: "#FFFFFF"
  muted-light: "#777777"
  muted-dark: "#AAAAAA"
  border-light: "#D9D9D9"
  border-dark: "#4A4A4A"
  on-primary: "#FFFFFF"
  on-accent: "#111111"

typography:
  display-xl:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0
  display-lg:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-lg:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 25.6px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  heading-sm:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16.8px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  button:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 13.6px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro-cap:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.3px
    textTransform: uppercase
  mono:
    fontFamily: "GeistMono, 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  huge: 48px
  hero: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.nav}"
    rounded: "{rounded.xs}"
    padding: 8px 16px
  button-primary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.secondary-light}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  hero-tinted:
    backgroundColor: "rgba(0,66,166,.08)"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
  hero-badge:
    backgroundColor: "{colors.secondary-light}"
    textColor: "{colors.on-primary}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 6px 18px
  card-base:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  card-project:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 14px 16px
  carousel-caption:
    backgroundColor: "rgba(0,0,0,.75)"
    textColor: "{colors.white}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 16px
  link-editorial:
    backgroundColor: transparent
    textColor: "{colors.secondary-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.muted-light}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px 0px
---

## Overview

SEACrowd's design language is a **research-community publishing system** rather than a product-marketing shell. The pages use a narrow editorial reading measure, direct section headings, image-led announcements, modest card framing, compact navigation, and a clear color hierarchy derived from the ASEAN palette.

The color system is intentionally saturated but disciplined. **Red** and **blue** carry the primary/secondary brand roles, **yellow** is the interaction accent, and **green** is reserved for positive status. The default page is mostly white in light mode and near-black in dark mode; saturated colors appear in headings, links, buttons, active states, badges, and focused interaction rather than as large decorative backgrounds.

Typography uses **Geist** for both editorial and interface roles, with **Geist Mono** for technical content. The key layout signature is a long-form reading width around **70ch**; only structured content such as project grids, carousels, team listings, and publication/resource collections should extend wider.

**Key Characteristics:**
- ASEAN-derived red / blue / yellow / green semantic palette.
- Narrow ~70ch prose measure with wider exceptions for media and structured collections.
- Geist typography with moderate rather than dramatic display scaling.
- Blue-led editorial hierarchy in light mode; red and blue swap primary/secondary roles in dark mode.
- White/near-black structural surfaces with saturated color used sparingly.
- 12px bordered cards with restrained hover/focus elevation.
- Image-led announcement carousel with compact dark caption overlays.
- Bootstrap-style responsive behavior and compact mobile navigation.
- Multilingual-friendly composition suitable for Southeast Asian scripts and research metadata.

## Colors

### Brand & Accent
- **Red** (`{colors.red}` — `#ED2939`): Primary action and active emphasis in light mode.
- **Blue** (`{colors.blue}` — `#0042A6`): Secondary action, editorial headings, and text-link hierarchy in light mode.
- **Yellow** (`{colors.yellow}` — `#F9E300`): High-visibility hover/focus/selection accent. Pair with near-black text.
- **Green** (`{colors.green}` — `#009639`): Positive or success status only.

### Theme Role Mapping

| Role | Light | Dark | Use |
|---|---|---|---|
| Primary | `{colors.red}` | `{colors.blue}` | Main CTA, active state |
| Secondary | `{colors.blue}` | `{colors.red}` | H2s, links, alternate CTA |
| Accent | `{colors.yellow}` | `{colors.yellow}` | Hover, highlight, selected navigation |
| Success | `{colors.green}` | `{colors.green}` | Positive status |
| Canvas | `{colors.white}` | `{colors.black}` | Main page surface |
| Ink | `{colors.black}` | `{colors.white}` | Main text |

### Surface
- **Canvas Light** (`{colors.canvas-light}`): Default light page background.
- **Canvas Dark** (`{colors.canvas-dark}`): Default dark page background.
- **Border Light** (`{colors.border-light}`): Soft structural line on light surfaces.
- **Border Dark** (`{colors.border-dark}`): Stronger structural line on dark surfaces.

### Text
- **Ink Light** (`{colors.ink-light}`): Near-black main text.
- **Ink Dark** (`{colors.ink-dark}`): White main text in dark mode.
- **Muted Light** (`{colors.muted-light}`): Secondary metadata and helper copy.
- **Muted Dark** (`{colors.muted-dark}`): Secondary text on dark surfaces.

### Contrast Rule

Yellow is an **accent surface**, not a small text color. Use `{colors.on-accent}` on yellow. Do not set small yellow body text on white or another bright surface.

## Typography

### Font Family

The primary family is **Geist**, followed by system UI fallbacks. It should feel neutral, contemporary, and research-oriented rather than decorative. Use the variable font when available.

Technical content uses **Geist Mono** or a neutral system monospace fallback.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| `{typography.display-xl}` | 40px | 600 | 1.15 | Main page title |
| `{typography.display-lg}` | 36px | 700 | 1.25 | Program/hero title |
| `{typography.heading-lg}` | 32px | 500 | 1.2 | H2 section heading |
| `{typography.heading-md}` | 25.6px | 500 | 1.25 | H3 subsection heading |
| `{typography.heading-sm}` | 20px | 600 | 1.3 | Card/compact section title |
| `{typography.body-lg}` | 16.8px | 400 | 1.6 | Lead / hero subtitle |
| `{typography.body-md}` | 16px | 400 | 1.6 | Default prose |
| `{typography.body-sm}` | 14.4px | 400 | 1.5 | Cards and compact metadata |
| `{typography.nav}` | 14px | 500 | 1.2 | Navigation |
| `{typography.button}` | 16px | 500 | 1.0 | Button labels |
| `{typography.caption}` | 13.6px | 400 | 1.45 | Footer and helper copy |
| `{typography.micro-cap}` | 12px | 600 | 1.2 | Badges and micro labels |
| `{typography.mono}` | 14px | 400 | 1.5 | Code / technical metadata |

### Principles
- **Moderate hierarchy.** Do not turn every page into an oversized marketing hero.
- **Readable prose first.** Body copy stays around 16px with `line-height: 1.6`.
- **H2 carries color.** In light mode, major editorial section headings can use blue.
- **Uppercase is selective.** Use it for compact H5/H6-like labels, not every heading.
- **Multilingual safety.** Avoid forced uppercase where scripts do not support it naturally.

## Layout

### Spacing System
- Base rhythm is approximately 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64px.
- Standard paragraph bottom margin is about 20px.
- Cards use 12–16px internal padding by default.
- Large text heroes use about 64px vertical padding on desktop and 40px on mobile.
- Section spacing is clear but not luxurious; research content should remain efficiently scannable.

### Grid & Container
- Default long-form shell: approximately **70ch**.
- Wide exceptions: project grids, publication/resource lists, team grids, carousels, and media embeds.
- Card grids should collapse naturally rather than preserve fixed column counts.
- After a wide component, explanatory prose should return to the editorial reading width.

### Whitespace Philosophy

SEACrowd uses whitespace to preserve **clarity and reading flow**, not to create empty marketing spectacle. The site should feel like an active public research hub: enough breathing room for scanning, but frequent useful content and direct links.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat white/black surface | Main page body |
| 1 | 1px border | Standard content cards |
| 2 | Small shadow + accent-tinted border | Interactive card hover/focus |
| 3 | Image + translucent dark overlay | Carousel feature media |

### Shadows

Keep literal shadow subtle. Navigation may use a light `0 2px 4px` shadow. Interactive cards may use a modest `0 4px 12px` hover/focus shadow. Static cards should remain mostly flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.xs}` | 4px | Tiny chrome / utility controls |
| `{rounded.sm}` | 6px | Buttons, carousel caption |
| `{rounded.md}` | 8px | Compact media / utility cards |
| `{rounded.lg}` | 12px | Main cards and image containers |
| `{rounded.pill}` | 9999px | Badges only |

### Geometry

Use medium radii, not exaggerated softness. Most content cards should land around 12px. Buttons should read as compact rounded rectangles rather than ubiquitous pills.

## Components

### Navigation

**`nav-bar`** — compact site navigation.
- Background matches the page canvas.
- Type is approximately 14px / 500.
- Optional subtle bottom/elevation shadow.
- Active item uses primary color.
- Hover/focus uses yellow accent.
- Do not add large background pills behind ordinary nav links.

Mobile navigation uses a simple three-line hamburger around 24px wide. When open, top/bottom bars rotate into an X and the middle bar fades out over roughly 0.3s.

### Buttons

**`button-primary`** — dominant action.
- Light mode: red background, white text.
- Dark mode: blue background, white text.
- Compact rounded-rectangle geometry.
- Hover darkens slightly and may add a modest shadow.
- Active state may use `transform: scale(0.95)`.

**`button-secondary`** — alternate action.
- Light mode: blue background, white text.
- Dark mode: red background, white text.

**`button-accent`** — attention/selection action.
- Yellow background.
- Near-black text.
- Use sparingly; it is highly visible.

Outline variants may begin transparent and fill with their border color on hover.

### Restrained Text Hero

**`hero-tinted`** — use for program, project, application, or structured community pages.
- Center aligned.
- Light blue-tinted background in light mode.
- About 64px vertical padding on desktop.
- Title around 36px / 700.
- Subtitle max-width around 700px, centered, line-height 1.6.
- Action group centered and allowed to wrap.

On mobile:
- Reduce padding to about 40px 16px.
- Title drops to about 24px.
- Buttons may become full-width.

### Hero Badge

**`hero-badge`** — compact year/status/program marker.
- Secondary color background.
- White text.
- Fully rounded pill.
- Small and informational; not a large decorative chip.

### Image-led Carousel

Use when current projects, calls, papers, or milestones need to lead the page.
- Desktop feature media is roughly 400px tall.
- Images use `object-fit: cover`.
- Container uses about 12px radius and modest shadow.
- Provide indicators and previous/next controls.

**`carousel-caption`** — compact bottom-left overlay.
- Black at approximately 75% opacity.
- Backdrop blur around 8px.
- Faint white border.
- 6px radius.
- Maximum width around 350px.
- One short message and at most one CTA.

Caption entrance may use opacity plus `translateY(20px)` over about 0.4s ease-out.

### Cards

**`card-base`** — default bounded content region.
- 1px border at about 50% border intensity.
- 12px radius.
- 12px 16px padding.
- No permanent heavy shadow.
- Static hover: strengthen border only.

**Clickable card** variant:
- Accent-tinted border on hover.
- Restrained elevated shadow.
- Focus/active uses primary border and faint primary background tint.
- Whole-card click only when there is a single clear destination.

### Project Cards

**`card-project`** — compact project/community unit.
- Slightly denser than a generic card.
- Title around 17–18px / 600.
- Summary around 14–15px.
- Optional role/team area separated by a faint top rule.
- Primary/secondary colors may distinguish lead/mentor/member roles.
- Avoid excessive pill labels.

### Editorial Links

**`link-editorial`** — default inline link.
- Blue in light mode, red in dark mode according to the secondary role.
- No underline by default.
- Underline on hover.
- Navigation, buttons, card-wide links, dropdown items, and pagination should not adopt this underline behavior.

### Tables

Use tables for comparison or structured academic metadata.
- Width 100%, font around 14–15px, line-height 1.5.
- Header gets a 2px bottom rule.
- Body rows get 1px bottom rules.
- No zebra striping by default.
- Keep left alignment for textual metadata.
- On narrow screens, scroll or reflow rather than shrink text aggressively.

### Blockquotes

Use an editorial treatment:
- 2rem vertical margin.
- 1.5rem left padding.
- 4px left border.
- Muted foreground.
- Italic copy.

### People / Avatars

- Circular crop.
- `aspect-ratio: 1 / 1`.
- `object-fit: cover`.
- Compact profile thumbnails around 80px work well in mentor/member cards.
- Avoid decorative rings and gradients around every portrait.

### Footer

**`footer-light`** — understated closing region.
- 1px top border.
- Muted text.
- About 16px vertical padding for compact footer rows; larger multi-link footers may expand modestly.
- Social links display horizontally and wrap when needed.
- Social hover may shift to primary color and translate upward about 2px.

## Do's and Don'ts

### Do
- Keep long-form prose around 70ch.
- Use red and blue as stable semantic brand roles rather than decorative confetti.
- Keep yellow for high-visibility interaction and pair it with near-black text.
- Use Geist-like neutral typography and moderate heading scale.
- Use H2 color to structure editorial pages.
- Let project/resource/team grids expand wider than prose.
- Use bordered cards only when content is meaningfully grouped.
- Prefer real project imagery for major announcements.
- Keep motion small and interaction-driven.
- Test target Southeast Asian scripts with real content.

### Don't
- Don't turn the palette into a rainbow.
- Don't use all four saturated colors equally in every section.
- Don't replace white/black structural surfaces with colorful gradients.
- Don't make every section a card.
- Don't use very large startup-style hero typography.
- Don't center long-form body copy.
- Don't use yellow text on white.
- Don't fill carousel captions with long paragraphs.
- Don't turn academic/resource links into oversized conversion CTAs.
- Don't add glassmorphism, neon AI styling, or heavy decorative motion.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1200px | Full content grids; carousels/media can extend beyond 70ch |
| Desktop | 768–1199px | Standard compact nav; multi-column project/resource layouts |
| Tablet | 600–767px | Navbar collapse; cards reduce columns; carousel caption insets tighten |
| Mobile | < 600px | One-column cards; hero buttons full-width; smaller title scale |

### Touch Targets
- Interactive controls should remain comfortably tappable on mobile.
- Do not reduce font size to preserve desktop navigation.
- Full-width mobile CTAs are appropriate in centered program heroes.

### Collapsing Strategy
- Multi-column cards collapse to one column.
- Navbar collapses to hamburger.
- Hero action rows wrap and then become full-width.
- Carousel captions inset to about 1rem and use available width.
- Tables scroll/reflow instead of compressing content.
- Long-form text remains at a readable font size and naturally fills the viewport.

### Motion
- Text/link color: 0.2–0.3s.
- Button response: about 0.2s.
- Card state: about 0.3s.
- Carousel caption entrance: about 0.4s.
- Hamburger transform: about 0.3s.
- Honor `prefers-reduced-motion` in new implementations.

### Accessibility & Multilingual Safeguards
- Provide visible keyboard focus on every interactive component.
- Do not rely on red/blue/green alone to encode meaning; pair with text or icons.
- Verify contrast after theme/color-mix calculations.
- If a carousel auto-rotates, keep intervals slow and provide navigation plus a pause mechanism where feasible.
- Test line-height and wrapping with Thai, Khmer, Lao, Burmese, Vietnamese diacritics, and other target scripts.
- Avoid forced uppercase on scripts where it is inappropriate.

## Iteration Guide

1. Focus on one component at a time.
2. Reference tokens directly (`{colors.red}`, `{colors.blue}`, `{card-base}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits when the Design.md tooling is available.
4. Add new component variants as separate entries.
5. Keep prose around 70ch; only structured/media components should routinely exceed it.
6. Preserve the red/blue role swap between light and dark modes.
7. Use yellow only with near-black text and only where extra interaction visibility is useful.
8. Test multilingual content before considering the design finished.
