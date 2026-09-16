# Worked example: from ordinary observation to executive decision

## Sparse input: no numbers supplied

User: “ยอดขายตก เพราะลูกค้าน้อยลง” (“Sales fell because we have fewer customers.”)

Treat this as a reported observation and possible explanation. Do not invent a revenue decline, churn rate, budget, or promised uplift.

Executive framing:
- **Key Challenge:** Revenue has reportedly declined alongside the customer base; the relative roles of acquisition, retention, and spending per customer remain unverified.
- **Decision:** Approve a focused diagnosis and a bounded recovery experiment before committing to a broad rollout.
- **Framework:** Revenue Recovery Framework.
- **Key Pillars:** Customer Acquisition, Customer Retention, Revenue Optimization.
- **Value Creation:** Incremental contribution from economically attractive customer growth and repeat purchase.

Thai summary:
“ข้อเสนอคือวิเคราะห์สาเหตุของฐานลูกค้าที่ลดลง และทดสอบแนวทางฟื้นรายได้ในขอบเขตจำกัดก่อนขยายผล โดยแยกดูการได้ลูกค้าใหม่ การรักษาลูกค้าเดิม และรายได้ต่อลูกค้า ขณะนี้ยังไม่มีข้อมูลเพียงพอที่จะสรุปว่าสาเหตุใดสำคัญที่สุดหรือคาดการณ์ผลตอบแทน”

| Key Pillar | Question | Candidate action, conditional on evidence | Measure |
| --- | --- | --- | --- |
| Customer Acquisition | Are fewer qualified prospects converting? | Test channel or funnel changes where economics justify them | Incremental acquired customers and acquisition cost |
| Customer Retention | Which cohorts are leaving or buying less often? | Test targeted reactivation or service improvements | Incremental repeat purchase and contribution |
| Revenue Optimization | Did frequency, net price, or mix change? | Test offer, pricing, or assortment changes | Contribution per customer; churn guardrail |

These are diagnostic workstreams. Their benefits are not automatically additive.

## Illustrative data only

The following numbers are synthetic teaching data, not user facts or an industry benchmark.

Prior period: 1,000 active customers × 2 orders/customer × THB 500/order = THB 1,000,000.
Current period: 900 active customers × 2 orders/customer × THB 480/order = THB 864,000.
Change: −THB 136,000 (−13.6%).

Sequential bridge, changing customers then order value:
- Customer-count effect: (900 − 1,000) × 2 × 500 = −THB 100,000.
- Frequency effect: 900 × (2 − 2) × 500 = THB 0.
- Net-order-value effect: 900 × 2 × (480 − 500) = −THB 36,000.
- Reconciliation: 1,000,000 − 100,000 + 0 − 36,000 = 864,000.

The ordering allocates interactions to later factors. This bridge explains the arithmetic, not why customers declined. Do not label the customer-count effect “churn” without cohort evidence.

Evidence-backed title for this synthetic case:
“Fewer active customers explain THB 100k of the THB 136k revenue decline.”

Unsupported title:
“Retention investment will recover 13.6% revenue in 90 days.”

## Example seven-slide storyline

All numerical evidence below remains illustrative.

| Slide | Message title | Exhibit / evidence |
| --- | --- | --- |
| 1 | Diagnose customer loss before committing recovery spend | Recommendation, known decline, unknown cause, decision ask |
| 2 | Active customers and net order value both declined | Comparable-period KPI table |
| 3 | The customer-count effect accounts for THB 100k of the decline | Reconciled waterfall above |
| 4 | Acquisition, retention, and spending require distinct tests | Three workstreams with hypotheses and required data |
| 5 | Select a bounded pilot using contribution economics and feasibility | Options table; value estimates left unknown until evidence exists |
| 6 | Release resources in phases as evidence clears each gate | Diagnose → pilot → scale, proposed role owners and gates |
| 7 | Approve diagnostic access and agree pilot selection criteria | Explicit sponsor decisions and next actions |

## Strategic Roadmap example

Use actual timing when provided. Otherwise label timing and owners proposed.

| Phase | Deliverable | Proposed owner | Gate |
| --- | --- | --- | --- |
| Diagnose | Reconciled baseline and cohort/channel diagnosis | Analytics lead | Commercial and finance leads agree the baseline and testable hypothesis |
| Pilot | Bounded experiment with comparison and economic tracking | Growth or retention lead | Sponsor reviews incremental contribution and customer guardrails |
| Scale | Resourced rollout with benefit tracking | Commercial lead | Finance validates economics; operations confirms capacity |

Budget, targets, dates, and named owners remain open until supplied or agreed. A phase diagram does not authorize spending.

## Tone calibration

| Ordinary wording | Consulting label | Substance that earns the label |
| --- | --- | --- |
| แนวคิด / concept | Framework | Explicit components and how they relate |
| หัวข้อหลัก / main topics | Key Pillars | Distinct levers tied to outcomes |
| ปัญหา / problem | Key Challenges | Measurable gap, scope, and implications |
| จะทำอะไรต่อ / next steps | Strategic Roadmap | Sequence, ownership, dependencies, gates |
| ขายเพิ่ม ลดต้นทุน / sell more, cut cost | Value Creation | Incremental economics with assumptions and trade-offs |

Use English labels with clear Thai explanations when the audience prefers that register. Strong typography and precise language should make the decision easier to understand.
