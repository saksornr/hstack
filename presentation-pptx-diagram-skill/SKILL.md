---
name: presentation-pptx-diagram-skill
description: Create complex corporate diagram decks from an HTML preview and theme.css design system, then export editable PPTX with PptxGenJS. Use for dense process maps, data flows, swimlanes, system architecture diagrams, nested workflow engines, legends, orthogonal connectors, and presentation-ready diagrams that need Century Gothic styling, purple dashboard colors, HTML preview, and PowerPoint output.
---

# Presentation PPTX Diagram Skill

## Overview

Create diagram-first slide decks by previewing the composition in HTML, keeping all visual styling in `theme.css`, and exporting editable PowerPoint objects with PptxGenJS. Start from `assets/html-diagram-template/` when no project scaffold exists.

## Core Workflow

1. Plan the diagram before drawing: list lanes, systems, grouped engines, sources, process blocks, data stores, connectors, legends, and notes.
2. Use neutral labels unless the user provides approved labels. Do not copy names, dates, footers, classifications, or business-specific text from reference images.
3. Edit `diagram-data.mjs` for slide structure and content.
4. Edit only `theme.css` for color, typography, spacing, shadows, and component styling. Use Century Gothic as the primary template font.
5. Preview `index.html` in a browser at 16:9 before exporting.
6. Export with `export-pptx.mjs` so boxes, labels, lines, dashed boundaries, and arrow connectors remain editable in PowerPoint.
7. QA both HTML and PPTX for overlap, connector collisions, cramped labels, missing legends, and inconsistent spacing.

## Template

Use `assets/html-diagram-template/`:

- `index.html` renders a 16:9 HTML preview from the shared diagram model.
- `theme.css` contains the purple design system and Century Gothic font stack.
- `diagram-data.mjs` contains neutral sample data for a dense multi-lane process diagram.
- `export-pptx.mjs` exports editable PPTX shapes using the same diagram model.
- `package.json` declares the local PptxGenJS dependency for export.

Copy the template into the user's working output folder before making task-specific changes. Keep the skill's bundled template generic and free of user or proprietary content.

## References

Read these only when needed:

- `references/diagram-patterns.md` for dense diagram layout rules, connector patterns, legends, and swimlanes.
- `references/html-pptx-workflow.md` for the preview-to-export workflow and QA sequence.

## Design Rules

- Use `#9333EA` for primary emphasis, `#A855F7` for secondary purple surfaces, `#10B981` for success, `#F59E0B` for warning, `#EF4444` for danger, `#FFFFFF` for surfaces, and `#09090B` for body text.
- Use Century Gothic for HTML and PPTX text when available. Fall back to Arial or a system sans-serif.
- Prefer clear hierarchy over decoration: lane bands, grouped blocks, legends, and connector labels should make the system readable at a glance.
- Keep dense diagrams organized with consistent coordinates, repeated component sizes, and orthogonal connectors.
- Use dashed boundaries only for optional, future, excluded, or externally owned areas.

## Export Rules

- Export as editable PPTX objects, not slide screenshots.
- Use PptxGenJS text boxes, rounded rectangles, plain rectangles, lines, and tables/charts only when they remain legible.
- Strip `#` from hex colors before passing them to PptxGenJS.
- Use fresh option objects for every PptxGenJS call; do not reuse mutated shape options.
- Keep connectors behind text blocks and place labels after connector lines so labels remain readable.

## QA

Before final delivery:

1. Run the HTML preview and inspect the full slide at the intended aspect ratio.
2. Run the PPTX export and open or render the deck.
3. Confirm text remains readable, connectors do not cross labels unnecessarily, and the legend explains visual encodings.
4. Search the output files for copied reference terms if any reference image or existing deck was used.
5. Run the skill validator after editing the skill itself.
