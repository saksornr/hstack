# Worked example: an agent-engineering talk

This is a **storyboard example**, not a live fact-checked presentation. It preserves the source talk's progression from fundamentals to implementation, evaluation, production, and agent construction. Recheck APIs, research results, vendor capabilities, and image rights before authoring a new deck. Do not copy private branding or the original Google Slides file into public examples.

## Suggested brief

Audience: engineers familiar with LLM calls. Outcome: understand the components, implementation choices, and evidence required to release an agent. Format: 16:9 native Google Slides and PDF. Style: white-and-purple, original published visuals, concise native text, source links and notes. Running example: a fictional lost-card support workflow governed by explicitly supplied mock policies, not real banking advice.

## 22-slide route: 28 minutes plus 2 minutes of questions

| # | Takeaway / role | Seconds | Information and visual to seek |
| --- | --- | ---: | --- |
| 1 | Engineering agents is more than prompting | 30 | Learning outcome; relevant book illustration or original neutral title composition |
| 2 | A workflow follows code; an agent chooses next steps | 75 | Operational distinction; original workflow/agent figure |
| 3 | Feedback closes the action loop | 75 | Actions, observations, termination; source loop diagram |
| 4 | Tool interfaces define what the system can do | 75 | Typed inputs, permissions, errors; original annotated tool code |
| 5 | Context, memory, and authoritative state differ | 75 | Definitions and mock case; original context figure with commentary |
| 6 | Use the least autonomy that passes the tests | 90 | Choice criteria, latency/risk; two comparable source patterns |
| 7 | The API defines an execution contract | 90 | Input schema, persistent objects, events; verified docs fragment |
| 8 | Portability needs a tested adapter boundary | 75 | Unchanged code, changed runtime, unsupported features; architecture + detail |
| 9 | Data, system, and evaluation must be explicit | 75 | Cases, implementation, verifier; clearly labeled pseudocode |
| 10 | Choose a reasoning/action scaffold before a framework | 90 | Procedure and failure modes; original ReAct trajectory |
| 11 | A framework's abstraction should fit the task | 75 | Control/state boundaries; short verified examples, not a logo wall |
| 12 | Evaluate behavior through the same external interface | 90 | Fresh fixtures/sessions, events, final-state check; real trace screenshot |
| 13 | Optimize prompts and programs against evidence | 90 | Method, metric, baseline, fixed budget; verified published result |
| 14 | A candidate revision is not yet an improvement | 75 | Before/candidate, fixed controls, held-out gate; original comparison |
| 15 | Enterprise data foundations constrain scale | 60 | Source framework and concrete implications; dated source exhibit |
| 16 | The harness supplies control and accountability | 60 | Named framework components with engineering meanings; source exhibit or explicit synthesis |
| 17 | A good answer can conceal an incomplete task | 90 | Expected vs actual state, policy checks; simulation screenshot |
| 18 | Production failures should become regression cases | 90 | Monitoring, replay, canary, rollback; trace or product screenshot |
| 19 | Shared infrastructure makes many agents maintainable | 60 | Reusable services and delivery path; original platform architecture |
| 20 | Coding agents can build; independent gates approve | 60 | Engineering tasks, credentials, held-out tests; real builder interface |
| 21 | Buy, compose, and build require different ownership | 60 | Workflow fit and trade-offs; sourced examples, not a universal ranking |
| 22 | What evidence would justify trusting an AI-built agent? | 120 | Verified construction-benchmark setup, scoped results, open question |

Total: 1,680 seconds. This is a brisk technical route. For a less experienced audience, move framework comparison, detailed portability, and controlled optimization to an appendix; do not race through dense figures.

## Complete slide example A: explain a mechanism

**Title:** Actions bring new evidence into the reasoning loop.

**Job:** Explain how reasoning, actions, and returned observations interleave. One precise claim; no leaderboard claim.

**Visual:** The original HotpotQA example from the [ReAct project](https://react-lm.github.io/), linked [figure](https://react-lm.github.io/files/hotpotqa.png). Show the complete comparison at a readable size. The HTML gallery offers an opt-in load; it does not bundle the image.

**Visible explanation:** “Inspect the action, its observation, and the next decision.”

**Notes:** Walk through one action/observation pair. Explain how the observation changes the next step. A single trajectory is explanatory evidence, not a production reliability guarantee. Move to tool design next. Suggested time: 90 seconds. The source page was checked 2026-10-20; image reuse terms must still be assessed for the intended distribution.

## Complete slide example B: show an interface

**Title:** A contract makes the boundary testable.

**Job:** Teach the relationship between input, execution, recorded output, and verification without inventing SDK syntax.

**Editable pseudocode:**

```python
case = load_fixture("case-001")
world = reset_environment(case.initial_state)
run = adapter.start(case.input, world)
trace = adapter.collect(run)
score = verify(world.snapshot(), case.expected_state)
```

**What the slide must disclose:** These are illustrative functions, not a particular provider's runnable API. A real implementation must specify authentication, timeouts, session isolation, error handling, and the observed final-state source.

**Suggested visual:** A genuine short docs or trace excerpt when available. For a method-only slide, the code itself is the main exhibit. Add two notes: “Freeze the starting fixture” and “Verify outside the agent.”

**Notes:** An agent's assertion that it completed work is not the authoritative final-state check. A captured trace helps diagnosis but does not replace an independent verifier. These are the example's proposed design choices, not a claim that a named API enforces them automatically.

## Complete slide example C: communicate a measured result safely

**Title:** Compare candidates on the same held-out task.

**Required evidence fields:** dataset/version, population, split, metric direction, denominator, model/harness versions, search/evaluation budget, repeated runs or uncertainty, original table/figure, and limitation.

**Gallery values:** Baseline 60%, candidate A 72%, candidate B 79%. All are **synthetic layout data**. No company, paper, method, or product is associated with them. Their only purpose is to demonstrate a zero-baseline chart with explicit labels.

**Replacement rule:** Before using this layout in a real talk, replace both the numbers and the title/interpretation from one comparable verified source. Do not substitute a relevance-judge score for end-to-end agent success. Explain what changed and what remained fixed; do not infer significance without evidence.

**Notes:** Discuss practical significance and safety constraints independently. The gallery's question is what the audience would need to know before believing an apparent gain.

## Example D: a candidate prompt and release gate

Baseline: “Resolve this support request.” Candidate: “Confirm the goal; retrieve applicable policy; request authorization where required; act through scoped tools; verify the expected final state.” Both are illustrative, not optimizer outputs.

Hold tools, permissions, fixtures, and verifier fixed for this experiment. Optimize on development data; select on a validation set; use a separately protected final test set for the final estimate. Repeatedly choosing on the final test set leaks evaluation information even when the file itself is unchanged.

A clear objective is “maximize task success subject to policy/safety constraints and a defined cost/latency budget.” Avoid ambiguous arithmetic such as subtracting cost divided by latency, which can unintentionally reward greater latency.
