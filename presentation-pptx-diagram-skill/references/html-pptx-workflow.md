# HTML To PPTX Workflow

Use this reference when producing a deck from the bundled HTML diagram template.

## Workflow

1. Copy `assets/html-diagram-template/` into the working output folder.
2. Edit `diagram-data.mjs` for slide title, lanes, nodes, groups, connectors, legend items, and notes.
3. Edit `theme.css` for all style changes, including palette, typography, spacing, shadows, and component variants.
4. Preview the slide with a local static server:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765` from the copied template directory.

5. Install dependencies in the copied template when needed:

```bash
npm install
```

6. Export editable PPTX:

```bash
npm run export
```

7. Open or render `diagram-deck.pptx` and inspect it separately from the HTML preview.

## PPTX Editability

- Use editable text boxes for every label.
- Use editable shapes for every block, lane, group, dashed boundary, and connector segment.
- Use rendered images only when the user explicitly values visual fidelity over editability.
- Keep PPTX geometry tied to the same percentage-based model used by the HTML preview.

## QA Checklist

- Confirm Century Gothic appears in template CSS and `fontFace` values.
- Confirm the legend explains source, process, data, dashed, and accent styles.
- Confirm text fits inside boxes without clipping.
- Confirm connector segments do not cross important labels.
- Confirm dashed objects are visually distinct from active process blocks.
- Confirm no reference-image labels, proprietary names, footers, dates, or classifications remain.
