---
name: executive-consulting
description: Turn business notes, analyses, and rough decks into consulting-style executive narratives, decision frameworks, strategic roadmaps, and slide-ready storyboards. Use for leadership presentations, board updates, transformation proposals, and Thai or English executive communication.
---

# Executive Consulting

Turn an ordinary observation into a defensible executive decision and a polished deliverable. Preserve the user's preferred consulting vocabulary: Framework, Key Pillars, Key Challenges, Strategic Roadmap, Value Creation, and Strategic Imperatives. Give each term analytical substance.

The inspiration is the user's Thai consulting satire: ordinary business observations become named frameworks and immaculate slides. Keep the craft, confidence, and visual precision. Do not interpret its exaggerated page counts, three pillars, or decorative charts as requirements. Do not claim affiliation with or proprietary methods from any consulting firm.

## Choose the deliverable

Infer the audience, decision, scope, language, and format from the request and supplied material. Ask only for missing context that would materially change the recommendation; otherwise proceed with explicit assumptions.

- **Executive framing:** produce the core recommendation, supporting reasons, evidence gaps, and decision ask.
- **Storyboard:** produce slide-by-slide specifications with message titles, evidence, visual choices, and speaker notes.
- **Deck:** complete the storyline, then create the requested editable presentation using available presentation tooling. Render and inspect it. If export tooling is unavailable, deliver a clearly labeled storyboard and explain the limitation.
- **Deck revision:** preserve valid evidence and brand conventions, strengthen the argument, then improve layout.

Use the requested length. Otherwise choose the shortest narrative that supports the decision; a complex analysis belongs in the appendix when it does not change the main argument. An executive memo need not become a deck unless requested.

## Frame the decision before naming the framework

1. Write the decision in one sentence: who must decide what, by when, under which constraints?
2. Establish the baseline, desired outcome, time horizon, and consequence of inaction. Separate observations from explanations.
3. Structure the question into distinct drivers. Use a quantitative identity when possible; check branch overlap, omissions, and units. A workstream structure is not automatically an additive financial decomposition.
4. Form a provisional answer and identify evidence that could disprove it. Maintain a compact claim ledger: claim, source/location/date, calculation, confidence, and caveat.
5. Compare realistic options, including continuing the current approach where meaningful. Show value, cost, time, feasibility, risk, dependencies, and reversibility using consistent criteria.
6. Recommend a course of action with reasons, trade-offs, and the conditions that would change the recommendation.

Read [consulting-methods.md](references/consulting-methods.md) when selecting a framework, evaluating options, or building a value case. Avoid presenting inference as fact, a target as a forecast, or a correlation as a proven cause. Never invent client metrics, benchmarks, quotes, or source citations.

## Build the executive narrative

Lead with the answer when evidence supports one. With sparse evidence, lead with the decision needed to resolve the uncertainty.

Use Situation → Complication → Question → Answer to establish context, then group the supporting reasons under the recommendation. Each group should answer a different executive question. Use two to five pillars when helpful; let the business logic determine the number.

Write slide titles as claims or decisions: “Pilot targeted reactivation before expanding acquisition spend.” A label such as “Customer Retention” can name a workstream but does not carry a slide's argument.

The executive summary must stand alone: decision/recommendation, why now, strongest evidence, expected value with assumptions, principal trade-off, and explicit ask. Introduce no new claims that the body cannot support.

Read only the titles in sequence. They should convey a complete argument. Check both:
- **Across slides:** context → diagnosis → choice → execution → decision.
- **Within a slide:** the exhibit supports the title and the implication follows from the exhibit.

## Package the framework

Use a short, specific name tied to the actual business outcome. “Revenue Recovery Framework” is usually clearer than a long stack of abstract adjectives. More ceremonial wording is appropriate when the user explicitly requests it, with plain-language meaning underneath.

For each Key Pillar, connect:
challenge → intervention → mechanism of value → KPI → accountable owner.

A Strategic Roadmap needs phases, deliverables, owners, dependencies, resources, and decision gates. “Assess / Build / Scale” alone is insufficient. Define how the team knows it is ready to advance, and when it should stop or revise the approach.

For “Value Creation,” specify which value: incremental contribution, cash released, reduced cycle time, lower risk exposure, or another defined outcome. Separate revenue from profit, one-time from recurring effects, and realized benefits from assumptions. Avoid double-counting overlapping initiatives.

## Design and production

Read [executive-slides.md](references/executive-slides.md) for storyboards, visual selection, layout, and production QA. Read [worked-example.md](references/worked-example.md) for the Thai/English revenue case and tone calibration.

Use the user's brand/template first. Otherwise favor a restrained corporate style with consistent typography, exact alignment, repeated spacing, and a clear emphasis color. Select exhibits to answer questions; do not add waterfalls, bubbles, boxes, or arrows to imply analytical depth.

This skill owns the business argument and slide specification. If installed, a presentation-authoring skill can handle file generation. The companion hstack skill `presentation-pptx-diagram-skill` is useful for complex editable process diagrams when its workflow fits; it is not a dependency for ordinary executive slides.

## Delivery gate

Before delivery, check:
- The opening states the decision and the requested action.
- Each material claim is supported, labeled as a hypothesis, or explicitly unknown.
- Calculations reconcile; periods, populations, units, and denominators match.
- Alternatives and the main downside are visible.
- The roadmap includes ownership, measures, and gates.
- Charts communicate evidence without misleading scales or invented precision.
- The actual exported deck has been inspected when a deck was produced; report any unverified rendering.
- The final response identifies the deliverable and any material limitations briefly.

Illustrative examples are teaching data, never client facts. Preserve the requested Thai, English, or bilingual register, and keep bilingual labels consistent.
