# Diagram Patterns

Use this reference when building dense process maps, data-flow diagrams, system diagrams, or multi-lane operating models.

## Layout Grammar

- Start with lanes before objects. Use lanes to separate major domains such as Input, Decisioning, Activation, and Governance.
- Use system boundaries for large ownership groups. Keep boundaries subtle so the actual process blocks stay dominant.
- Use nested groups for engines, modules, and logic bundles. A group should have a clear title and 2-5 child blocks.
- Use legends when line styles, block colors, or dashed areas encode meaning.
- Use note callouts sparingly. Put notes near the element they qualify, not in a detached paragraph.

## Object Types

- Source blocks: dark or primary-filled blocks for incoming systems, datasets, or event streams.
- Process blocks: light purple filled blocks for transformation, filtering, scoring, routing, or orchestration.
- Data blocks: neutral or dark blocks for stores, outputs, and persistent records.
- Decision blocks: prominent purple groups for rules, scoring, prioritization, or optimization.
- External or future blocks: dashed outlines with muted text.
- Guardrail blocks: blue or high-contrast blocks when a decision gate must stand out from the main purple system.

## Connectors

- Prefer orthogonal connectors with horizontal and vertical segments.
- Keep arrows short where possible; route long arrows through clear corridors.
- Use dashed connectors only for optional, future, feedback, or informational flows.
- Add connector labels only when the meaning is not obvious from the connected blocks.
- Avoid line crossings through text. If a crossing cannot be avoided, route around labels or add a small label backing.

## Dense Slide Rules

- Reserve a consistent top area for title, subtitle, and legend.
- Use repeated sizes for similar blocks so the reader can compare them quickly.
- Keep child blocks inside parent groups with even padding.
- Use no more than 2 accent colors beyond purple, neutral, and gray unless the user supplies a required palette.
- Make the most important engine or handoff visually dominant through size and position.
- Leave edge margins so export and projection do not crop labels or arrows.

## Reference Hygiene

- Use reference screenshots only for structure and density.
- Do not copy proprietary names, dates, classifications, footers, or business labels.
- Replace sample text with neutral terms such as Source Hub, Profile Store, Feature Builder, Eligibility Rules, Decision Engine, Channel Router, and Outcomes.
