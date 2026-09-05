# hstack

A collection of reusable agent skills, research workflows, and design references for building higher-quality technical outputs with Codex and other AI-assisted development workflows.

The repository focuses on practical, source-grounded work: code assessment, literature review, research-paper writing, editable PowerPoint diagrams, and reusable design-system references.

## Contents

| Path | Purpose |
| --- | --- |
| [`code-assessments/`](./code-assessments/) | Produce detailed, source-backed code assessment reports with explicit inputs, outputs, provenance, configuration, formulas, schemas, and unknowns. |
| [`extensive-literature-review/`](./extensive-literature-review/) | Run structured literature reviews from papers, URLs, DOIs, PDFs, BibTeX, or citation exports and synthesize findings into a critical review. |
| [`research-paper-writing/`](./research-paper-writing/) | Draft and revise ML/CV/NLP-style research papers with stronger structure, paragraph flow, claim-to-evidence alignment, and reviewer-facing presentation. |
| [`presentation-pptx-diagram-skill/`](./presentation-pptx-diagram-skill/) | Build dense corporate/process diagrams from an HTML preview and export editable PowerPoint slides with PptxGenJS. |
| [`design_skills/`](./design_skills/) | Reusable design-system references extracted for consistent visual styling across generated interfaces and artifacts. |

## Skills

### Code Assessments

[`code-assessments/SKILL.md`](./code-assessments/SKILL.md) defines a source-backed workflow for documenting repositories, notebooks, pipelines, ML systems, LLM/API systems, schemas, configs, formulas, prompts, and data provenance.

The default reporting style is table-first and stage-by-stage, with explicit treatment of facts that cannot be verified from the reviewed source.

Use it when you need:

- repository or module assessments;
- pipeline input/output documentation;
- architecture and data-flow summaries;
- schema, formula, configuration, model, and prompt documentation;
- traceable source provenance;
- explicit gaps and unknowns instead of unsupported assumptions.

### Extensive Literature Review

[`extensive-literature-review/SKILL.md`](./extensive-literature-review/SKILL.md) turns a seed set of papers into a transparent, critical synthesis rather than a simple annotated bibliography.

It supports inputs such as paper titles, DOI or arXiv links, PDFs, BibTeX, RIS, CSV citation exports, and mixed source lists. The workflow covers source normalization, deduplication, citation-neighborhood expansion, thematic synthesis, evidence tracking, and bibliography verification.

Useful for:

- narrative or thematic reviews;
- systematic or scoping reviews;
- related-work surveys;
- critical reviews of a claim or research direction;
- identifying themes, methodological differences, and research gaps.

### Research Paper Writing

[`research-paper-writing/SKILL.md`](./research-paper-writing/SKILL.md) provides a reviewer-oriented workflow for improving academic papers, especially ML, CV, and NLP manuscripts.

It emphasizes the paper's story before sentence-level editing, one clear message per paragraph, logical sentence-to-sentence flow, evidence-backed claims, reverse outlining, and adversarial self-review.

It can be applied to:

- abstracts;
- introductions;
- related work;
- methods;
- experiments;
- conclusions;
- figure and table presentation;
- final pre-submission review.

The accompanying [`references/`](./research-paper-writing/references/) directory contains section-specific guidance and examples.

### Presentation PPTX Diagram Skill

[`presentation-pptx-diagram-skill/SKILL.md`](./presentation-pptx-diagram-skill/SKILL.md) is a diagram-first workflow for complex presentation graphics.

The bundled template in [`assets/html-diagram-template/`](./presentation-pptx-diagram-skill/assets/html-diagram-template/) uses:

- `index.html` for a 16:9 browser preview;
- `theme.css` for visual styling;
- `diagram-data.mjs` for diagram structure and content;
- `export-pptx.mjs` for editable PowerPoint export;
- PptxGenJS for native PowerPoint shapes and connectors.

It is intended for system architectures, process maps, swimlanes, data flows, workflow engines, legends, and other dense diagrams where the exported slide should remain editable.

## Design References

The [`design_skills/`](./design_skills/) directory contains reusable visual specifications that can be used as references when generating interfaces or presentation artifacts.

Current references include:

- [`apple-DESIGN.md`](./design_skills/apple-DESIGN.md)
- [`edge0-DESIGN.md`](./design_skills/edge0-DESIGN.md)
- [`openai-DESIGN.md`](./design_skills/openai-DESIGN.md)
- [`seacrowd-DESIGN.md`](./design_skills/seacrowd-DESIGN.md)
- [`typhoon-DESIGN.md`](./design_skills/typhoon-DESIGN.md)

These files capture design tokens and visual conventions such as color, typography, spacing, and component styling.

## Repository Structure

```text
hstack/
├── code-assessments/
│   ├── SKILL.md
│   └── agents/
├── design_skills/
│   └── *-DESIGN.md
├── extensive-literature-review/
│   └── SKILL.md
├── presentation-pptx-diagram-skill/
│   ├── SKILL.md
│   ├── agents/
│   ├── assets/
│   └── references/
├── research-paper-writing/
│   ├── SKILL.md
│   ├── agents/
│   └── references/
└── README.md
```

## Using a Skill

Each workflow skill is self-contained around a `SKILL.md` file. Start by opening the relevant skill and use its instructions as the operating procedure for the task.

For example:

```text
code-assessments/SKILL.md
extensive-literature-review/SKILL.md
research-paper-writing/SKILL.md
presentation-pptx-diagram-skill/SKILL.md
```

Some skills also include:

- `agents/` for agent configuration;
- `references/` for detailed supporting guidance;
- `assets/` for reusable templates or implementation scaffolds.

When copying a skill into another environment, preserve these supporting directories when the `SKILL.md` references them.

## Clone

```bash
git clone https://github.com/saksornr/hstack.git
cd hstack
```

## Philosophy

The skills in this repository generally favor:

- evidence over assumption;
- explicit provenance over opaque summaries;
- reusable workflows over one-off prompts;
- structured outputs over unorganized prose;
- editable artifacts over flattened exports;
- clear handling of uncertainty and missing information.

## Contributing

When adding a new skill, keep the workflow self-contained and make its intended use obvious from the top-level metadata and documentation. Include supporting references, templates, or agent configuration only when they materially improve repeatability.

For design references, use descriptive filenames and keep tokens and visual rules explicit enough to be reused without relying on the original source site.