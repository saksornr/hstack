---
name: extensive-literature-review
description: Conduct an extensive, source-grounded literature review from a list of papers, titles, URLs, DOIs, arXiv links, PDFs, BibTeX, or citation exports. Use when the user asks to survey related work, expand a paper list, trace cited/citing and neighboring work, compare studies, identify themes or research gaps, or draft a polished review in Markdown or LaTeX with a readable PDF and verified citations.
---

# Extensive Literature Review

## Mission

Act as a research analyst and scholarly writer. Turn a supplied seed list into a transparent, critical synthesis of the field—not an annotated bibliography. Produce a polished Markdown or LaTeX manuscript, a verified bibliography, and a PDF when the required renderer is available.

Treat the supplied papers as seeds. Expand the set only through an explicit, documented search process, and distinguish facts taken directly from papers from inferences made across papers.

## Choose the review mode

Use the user's wording to select a mode; ask only for decisions that materially change the result.

- **Narrative/thematic review:** default when the user wants a readable overview, related-work section, or research map.
- **Systematic/scoping review:** use when the user requests exhaustive coverage, a formal search, inclusion/exclusion screening, PRISMA-like accounting, or a reproducible protocol.
- **Critical/position review:** use when the user asks whether a claim, method, benchmark, or research direction is convincing.
- **Chronological or methodological review:** use when the field's evolution or study designs are the central question.

If scope is underspecified, ask for at most three high-impact choices: (1) the review question and boundaries, (2) output format and target venue/style, and (3) whether to perform citation-neighborhood expansion. For an explicit “extensive” request, default to deep expansion, a thematic structure, Markdown plus LaTeX/PDF when possible, and a search cutoff of the current date. Do not block on low-impact preferences.

## End-to-end workflow

### 1. Build a source inventory

Accept paper titles, author-year references, DOI/URL/arXiv/OpenReview links, local PDFs, BibTeX/RIS/CSV, or a mixture. For every seed:

1. Assign a stable citation key and a short internal paper ID.
2. Resolve and normalize title, authors, year, venue, DOI, URL, version, and source type.
3. Deduplicate by DOI, repository identifier, normalized title, and author-year similarity.
4. Record whether the evidence is full text, abstract only, metadata only, or a secondary mention.
5. Flag ambiguous, inaccessible, retracted, superseded, or duplicate versions instead of silently choosing.

Never invent missing metadata. Preserve the original identifier and record the canonical source used.

### 2. Define the question and protocol

Convert the topic into one primary review question and a small set of subquestions. Use PICO/PICOS where appropriate; for technical work, define the task, setting, methods, data, baselines, evaluation, and outcomes instead.

Before screening, state:

- scope and terminology, including synonyms and boundary cases;
- publication and version date range, language, venue, and study-type limits;
- inclusion and exclusion criteria with reasons;
- search lanes and query terms;
- the date searched and any access limitations.

For an extensive review, search in parallel across these lanes:

1. **Seed lane:** the supplied papers and exact-title/identifier searches.
2. **Backward lane:** references of central papers and foundational work.
3. **Forward lane:** papers that cite each central seed.
4. **Neighborhood lane:** related-work, “similar papers,” author, venue, dataset, benchmark, and method searches.
5. **Synthesis lane:** surveys, reviews, position papers, critiques, replications, and benchmark papers.
6. **Recency lane:** recent papers that update, challenge, reproduce, or operationalize the main findings.
7. **Adjacent lane:** neighboring fields that use the same concepts, data, or evaluation but different terminology.

Use authoritative paper pages and primary papers for technical claims. Use reviews for discovery and field-level framing, but verify important claims against the underlying primary source. When browsing is unavailable, work from supplied files and say exactly what could not be checked.

### 3. Retrieve, read, and track evidence

Read full text when available. For each included paper, capture an evidence record with:

| Field | Required content |
| --- | --- |
| Contribution | What the paper claims to add |
| Problem and setting | Task, population, domain, assumptions |
| Method | Model, intervention, dataset, protocol, or theory |
| Evidence | Main result, comparison, uncertainty, and evaluation design |
| Limitations | Stated and analyst-identified limitations |
| Relation | Confirms, extends, contradicts, or reframes other work |
| Locator | Page, section, table, figure, or stable URL for the evidence |
| Confidence | High, medium, or low, with the reason |

Maintain a claim ledger while reading. Each substantive claim in the draft must map to one or more paper IDs and an evidence locator. Mark cross-paper conclusions as **synthesis/inference** and explain the comparison that supports them. Do not treat search snippets, abstracts, or a paper's self-description as equivalent to full-text evidence.

### 4. Organize the literature before drafting

Cluster papers by the review question, not by discovery order. Use a matrix or graph with dimensions such as theme, method, data, evaluation, population, chronology, and evidence strength. Choose the organizing principle that best answers the question:

- **Thematic:** concepts, mechanisms, use cases, or debates;
- **Chronological:** foundational work, turning points, consolidation, and current frontier;
- **Methodological:** qualitative, quantitative, experimental, theoretical, benchmark, or deployment approaches;
- **Comparative:** settings, assumptions, datasets, metrics, or outcomes.

Prefer a hybrid structure when needed: brief chronology in the background, thematic synthesis in the body, and a comparative table or methodological discussion near the end. Avoid a paper-by-paper sequence except for a short historical subsection.

### 5. Synthesize, critique, and identify gaps

Write each major section as a conversation among studies:

1. State the theme or argument.
2. Compare multiple papers in the same paragraph or subsection.
3. Identify confirmation, extension, contradiction, or non-comparability.
4. Explain plausible reasons for differences: data, population, task definition, method, measurement, implementation, or publication bias.
5. State the implication for the review question.

Critique methods in proportion to the claim. Check construct validity, data quality, sample or benchmark coverage, baselines, ablations, uncertainty, statistical design, reproducibility, external validity, and whether conclusions exceed the evidence. Keep the voice balanced: acknowledge strengths, limitations, and unresolved ambiguity.

Classify gaps instead of listing generic “future work”: conceptual, empirical, methodological, data/coverage, evaluation, reproducibility, theoretical, deployment, or equity/safety gaps. Tie every proposed direction to a specific pattern or limitation in the evidence matrix.

### 6. Draft the manuscript

Unless the venue requires another structure, use:

1. Title, abstract, and keywords.
2. Introduction: context, problem, need for this review, contribution, and roadmap.
3. Review question, scope, and search/screening protocol.
4. Terminology or background needed to compare the studies.
5. Thematic, chronological, or methodological synthesis sections.
6. Cross-study comparison table or taxonomy when it improves comprehension.
7. Critical assessment, unresolved debates, and evidence limitations.
8. Research gaps and concrete future directions.
9. Conclusion.
10. References and an optional appendix containing the search log or evidence matrix.

Use citations at the sentence or claim level. Cite several sources together only when they genuinely support the same proposition. Paraphrase in original language; use direct quotations sparingly and with a locator. Do not claim that the search is exhaustive unless the search coverage and screening process justify it. Never pad the bibliography with papers that are not used.

### 7. Produce and verify the requested format

- For **Markdown**, use the bundled `assets/review_template.md`, Pandoc citation syntax such as `[@key]`, and a companion `references.bib`.
- For **LaTeX**, use `assets/review_template.tex`, stable `\citep{key}`/`\citet{key}` keys, and a companion `references.bib`.
- Run `scripts/check_citations.py` against the manuscript and bibliography. Resolve every missing citation key, duplicate key, and unintended unused entry; inspect warnings about incomplete metadata.
- Run `scripts/render_review.py` to create the PDF. It uses Pandoc + XeLaTeX for Markdown or latexmk/XeLaTeX for LaTeX. If a renderer is unavailable, return the source files and the exact command needed, clearly labeling the PDF as not generated.
- Inspect the rendered PDF when possible. Check page breaks, table width, citation rendering, unresolved references, Unicode, headings, figure captions, dense paragraphs, and orphaned headings. Revise and render again if the layout is poor.

Deliver the smallest complete bundle appropriate to the request: the manuscript (`.md` or `.tex`), `references.bib`, a search log, an evidence matrix or paper table when useful, and `review.pdf` when successfully rendered. Keep an internal claim ledger even if the user does not request it; expose it when auditability matters.

## Quality gate before handoff

Confirm all of the following:

- The review question, scope, search cutoff, and inclusion logic are explicit.
- Seed papers are present and important citation-neighborhood additions are explained.
- Every included paper has enough evidence for the claims made about it.
- The body synthesizes themes and relationships rather than listing summaries.
- Agreements, contradictions, non-comparable results, and methodological weaknesses are visible.
- Gaps and future directions follow from the evidence matrix.
- Citations resolve, bibliography metadata is plausible, and cited/uncited entries are intentional.
- Facts, author claims, and the reviewer's cross-paper inferences are distinguishable.
- Terminology, paper names, dates, metrics, and acronyms are consistent.
- The output is readable in its requested format and the PDF has been visually checked when available.

## Bundled resources

Read these only when needed:

- `references/review-method.md`: expanded guidance adapted from the supplied review-paper guide, including review types, search design, synthesis patterns, and revision checks.
- `references/source-evidence-protocol.md`: provenance, evidence-strength, citation, and search-audit rules.
- `assets/review_template.md`: export-ready Markdown scaffold.
- `assets/review_template.tex`: export-ready LaTeX scaffold.
- `scripts/check_citations.py`: detect missing, duplicate, and unused citation keys.
- `scripts/render_review.py`: render Markdown or LaTeX drafts to PDF with actionable dependency errors.
