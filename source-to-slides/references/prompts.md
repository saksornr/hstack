# Prompt cookbook

Replace bracketed fields. Explicitly identify whether a linked deck is a style reference, factual source, or the edit target. These are different roles.

## Minimum useful brief

| Input | Example | Why it matters |
| --- | --- | --- |
| Topic | Engineering reliable AI agents | Bounds the research. |
| Audience | Software engineers familiar with LLM APIs | Sets prerequisites and vocabulary. |
| Outcome | Design, test, and safely deploy a first agent | Determines the story. |
| Time | 30 minutes, including 2 minutes of questions | Controls depth and slide count. |
| Mode and scope | New deck; or one slide after a named slide | Prevents unwanted edits. |
| Sources | Papers, book/repository, course PDFs, official docs | Provides evidence and visuals. |
| Style reference | An accessible Google Slides deck or PDF | Makes “like these” actionable. |
| Deliverable | Native Google Slides and PDF | Defines completion. |

Helpful extras: required topics, forbidden content, language, a recurring domain example, confidentiality/reuse constraints, research cutoff, desired technical depth, presenter name, and permitted branding. When inputs are absent, infer conservatively and make assumptions visible; do not invent company facts.

## Full technical talk

```text
Use source-to-slides.
Topic: [TOPIC]
Audience and prerequisites: [AUDIENCE]
Learning outcome: [WHAT THEY SHOULD UNDERSTAND OR DO]
Length: [MINUTES], including [Q&A TIME]
Required sections: [SECTIONS]
Core example: [DOMAIN/SCENARIO]
Starting sources: [LINKS OR FILES]
Style reference: [REFERENCE URL/FILE]
Output: native Google Slides plus PDF.

Research the internet using current primary sources. Select original
figures from papers, books, courses, official docs, and engineering blogs.
Make the talk easy to follow but give the methodology real depth:
mechanism, implementation example, evaluation, trade-offs, and failure cases.
Use the reference's clean image-led style, not generic box-and-arrow filler.
Keep explanatory text and code editable. Cite each borrowed visual and
measured claim. Put detailed explanation and caveats in presenter notes.
Budget the speaking time, build the deck, then render and inspect every slide.
```

## Plan only

```text
Use source-to-slides in plan mode for [TOPIC] and [AUDIENCE].
Research [SOURCES] plus primary internet sources. Propose a [MINUTES]-minute
storyline. For each slide give the takeaway title, speaking time, required
information, proposed visual with source, worked example, and caveat.
Flag evidence gaps. Do not create or edit slides yet.
```

## Add exactly one slide

```text
Use source-to-slides in single-slide mode.
Edit target: [DECK URL]
Insert after: [SLIDE ID OR EXACT TITLE]
Topic: [TOPIC]
Takeaway: [ONE SENTENCE]
Audience: [AUDIENCE]
Speaking time: [60–120 SECONDS]
Starting sources: [LINKS]

Read neighboring slides. Search for one strong original source visual.
Match their fonts, colors, spacing, source notes, and footer treatment.
Show the mechanism, one concrete example, and the key limitation—not a
catalog of products. Keep text editable. Update numbering only as needed.
Do not rewrite unrelated slides. Verify the final exported slide and neighbors.
```

## Extend a methodology section

```text
Use source-to-slides to add [NUMBER] methodology slides to [DECK].
Cover [METHODS]. For each method explain the input, what changes,
what stays fixed, how it is evaluated, one sourced result or explicitly
illustrative example, and when not to use it.
Search the latest official docs for API syntax and original papers for results.
Retain the existing narrative and design. Keep within [TIME BUDGET], marking
optional deep dives rather than shrinking content. Finish with visual QA.
```

## Visual review and repair

```text
Use slide-polish on [DECK URL/FILE]. Render the actual deliverable and inspect
every slide visually, not only its extracted text. Fix small source figures,
clipping, crowded code, weak contrast, inconsistent hierarchy, duplicate
footers, and distorted screenshots. Preserve valid evidence and the design.
Do not relabel an illustrative candidate as an experimentally proven result.
Apply consolidated repairs, re-export, and verify the final version.
```

## Without an installed skill

```text
Read source-to-slides/SKILL.md and its relevant references from the hstack
repository, then follow that workflow for this task: [BRIEF].
```

Client-specific `$skill-name` syntax is optional. Supplying the skill file explicitly also makes the instruction understandable to an agent without automatic skill discovery.
