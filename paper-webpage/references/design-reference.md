# Academic paper page design reference

## Primary reference: SEATauBench

Open [the bundled SEATauBench HTML](../assets/seataubench/index.html). This snapshot includes its stylesheet, citation-copy script, original research figures, approved wide overview, sitaw icons, and web manifest. Serve the `assets/seataubench/` directory with a local static server to inspect the complete page. No external design website or original workspace path is required.

This is a working visual and HTML reference, not a source of research claims for other papers. Inspect the rendered example and its `assets/style.css` when matching it closely. Copy the structure and reusable interactions into the target project, then replace its paper-specific content and assets. Do not publish an unedited copy as a different paper's page.

The reference has a white background, a centered reading column with left-aligned content, a large bold title, underlined links, compact author metadata, generous section spacing, and prominent unframed research figures. It feels like a readable research article rather than a marketing landing page. Avoid adding dashboards, card grids, decorative gradients, or a large navigation system unless the user asks for them.

### Useful starting values

| Element | Desktop starting point | Mobile adjustment |
| --- | --- | --- |
| Reading column | 900px max-width, 32px top margin | 20–24px side gutters |
| Typeface | System sans-serif | Same stack |
| Body | 16px, 1.5–1.6 line-height, #37352f | Maintain readable size |
| Title | 40px, weight 700, 1.2 line-height | About 29px; allow natural wrapping |
| Section heading | 21–23px, bold | About 21px |
| Section spacing | About 52px | About 40px |
| Caption | 14px, muted neutral | Keep full-size figure link accessible |
| Figures | Natural aspect ratio, maximum 100% width | Scale to container; allow opening original |
| Citation | Light neutral background, wrapping monospace | Wrap long title and author lines |

These are starting values, not fixed requirements. Match the supplied reference and existing site when they differ.

### Header and figures

Keep the full paper title, then the venue, author names with superscript affiliations, institution list, relevant author notes, and Paper / Code / Data links. Link only authors with supplied or verified homepages. Preserve publication name spelling even when a personal website uses a nickname.

For a wide overview, use the full reading-column width. For a tall figure, constrain its desktop width to avoid excessive page length. Do not retain a portrait-specific maximum width after swapping in a landscape image. Keep detailed plots legible through full-size links instead of stretching or cropping away scientific content.

Wide tables can scroll within their own container on mobile; the whole page should not scroll horizontally. Use visible keyboard focus and meaningful link labels.

## SEATauBench visual identity and adaptation

The bundled example uses the following choices. Preserve them for SEATauBench or when the user requests this exact style; adapt branding to the target paper otherwise.

- Accent: sitaw green `#779955` for highlighted findings, venue text, and link hover. Keep ordinary body text dark. Check contrast for the actual text size; flag a needed accessible alternative rather than silently changing a user-specified color.
- Branding: a clean 8-bit sitaw bundle with green beans, a curved silhouette, and a small orange tie, used as a favicon. Reuse user-provided or approved artwork; other papers should use their own identity.
- Overview: a wide, three-panel user-provided figure rather than the original portrait PDF crop.
- End the visible page after BibTeX when following the approved example. Keep source and asset provenance in the README instead of adding an unsolicited attribution footer.
- Keep conference acceptance text independent of citation source: this example displays “Findings of EMNLP 2026” while citing arXiv until proceedings metadata is verified.

Do not copy SEATauBench authors, findings, venue, logo, or personal homepage links into an unrelated paper website.

## Bundled figure provenance

The research figure source is [SEATauBench, arXiv v2](https://arxiv.org/abs/2606.28715v2), by My Chiffon Nguyen, Aulia Adila, Saksorn Ruangtanusak, Kittiphat Leesombatwathana, Vissuta Gunawan Lim, Patomporn Payoungkhamdee, and Samuel Cahyawijaya, under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Figures 2–4 are rendered PDF crops with adapted web captions. The wide overview was supplied by the user. The sitaw icon was generated from the user's visual reference. These assets support previewing the reference; replace them with the target paper's assets when creating another site.
