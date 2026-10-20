# Source to Slides

Research → storyline → original visuals → editable slides → visual verification.

A reusable workflow for technical talks, tutorials, research explainers, and adding one slide to an existing deck. Inspired by the image-led *Engineering AI Agents* presentation, but independent of its topic, branding, and private files.

## Start here

Read [SKILL.md](SKILL.md). Then use:

```text
Use source-to-slides to create a 30-minute presentation about [TOPIC]
for [AUDIENCE]. The audience should leave able to [OUTCOME].
Use [REFERENCE DECK] for visual style and research [SOURCE LINKS]
alongside current primary sources from the internet.
Prefer original published figures and real screenshots, with large visuals,
editable text, source links, and presenter notes. Include fundamentals,
a practical walkthrough, evaluation, production trade-offs, and an open question.
Plan the storyline, build the deck in Google Slides, and visually review
the exported result before delivering it.
```

For exactly one slide:

```text
Use source-to-slides in single-slide mode. Add one slide about [TOPIC]
after [SLIDE TITLE/ID] in [DECK]. Its takeaway is [MESSAGE].
Match the neighboring slides. Search for a credible original visual,
include a concrete example and a caveat, and keep the text editable.
Do not change unrelated slides. Check the exported slide visually.
```

For an existing draft: use [slide-polish](../slide-polish/SKILL.md).

## Included

- [Prompt cookbook](references/prompts.md): full deck, plan-only, one-slide, extension, and visual-review prompts.
- [Brief](assets/brief.json): the information to supply.
- [Slide recipes and design preset](references/design.md): eight archetypes with sizes, purpose, and failure modes.
- [Six-slide HTML gallery](examples/gallery.html): open the file locally. Text, code, charts, and shapes are editable HTML/CSS. One specimen can load a public ReAct figure on request; no external requests occur before that button is used.
- [Worked example](references/worked-example.md): a timed 22-slide outline and three detailed examples.
- [Research playbook](references/research.md): claims, internet searches, visual provenance, and references.
- [Native Google Slides guide](references/google-slides.md): safe edits and export validation.

The gallery is an example/template, not a completed research presentation. Third-party visuals, company logos, the private reference deck, and font binaries are not bundled.

## Use with an agent

In a repository-aware chat, ask the agent to read `source-to-slides/SKILL.md` and follow it. Copy or symlink the entire directory—not only the Markdown file—when installing into a skill-aware client.

For Codex local discovery, the documented user directory is `~/.agents/skills`. From a local clone of hstack:

```bash
mkdir -p "$HOME/.agents/skills"
# These commands fail rather than replace an existing installation.
ln -s "$PWD/source-to-slides" "$HOME/.agents/skills/source-to-slides"
ln -s "$PWD/slide-polish" "$HOME/.agents/skills/slide-polish"
```

Invoke the installed skill by name, or explicitly request `$source-to-slides` where the client supports that syntax. Installing instructions does not grant browsing or Google Slides permissions. Check the client's current documentation for other installation methods.

Format reference: [Agent Skills](https://agentskills.io/specification). Local discovery: [OpenAI skill documentation](https://developers.openai.com/codex/skills). Checked 2026-10-20.
