# Worked examples

The two full abstracts below are edited teaching adaptations of the supplied proposals. They describe planned work, not verified findings. Exact model names, unverified literature claims, and quoted generation prices are omitted. They illustrate structure rather than a fixed template. No one-page rendering is claimed for these Markdown examples.

## Example 1: Turn an audit plan into a proposal abstract

**Example request:** “Use $proposal-abstract-writing-onepage to turn my video-safety study plan into a one-page proposal. Keep the pilot budget and make clear that no experiments have run.”

**Source facts to preserve:** endpoint-free versus specified-endpoint prompts and benign controls; a planned 50–100-scenario bank; preregistration; matched generation settings where supported; two reviewers; separate provider and model factors where possible; provisional THB 10,000 pilot budget.

### Adapted abstract

**Auditing Endpoint-Free Continuation Safety in Video Generation Models**

*Keywords: video generation, safety evaluation, temporal reasoning, provider effects*

Safety evaluation of video generation must consider how events unfold across a clip, including relationships that individual scene descriptions may not reveal. Motivated by preliminary practitioner observations, this study asks whether unsafe continuations emerge when prompts specify an initial situation without fixing its endpoint. It also asks whether endpoint specification changes this behavior and whether observed patterns vary across model–provider configurations.

We propose a preregistered, paired audit comparing endpoint-free prompts, matched prompts with specified initial and final states, and benign controls. A planned bank of 50–100 scenarios will support a staged evaluation, beginning with a balanced feasibility pilot. Prompts, scoring criteria, query limits, and sampling rules will be fixed before evaluation. Duration, resolution, and generation settings will be matched where supported, with deviations recorded. Where the same model is accessible through multiple providers, model and provider will be treated as separate factors; otherwise, comparisons will be limited to the observed configurations.

Two reviewers, blinded to model, provider, and condition where feasible, will assess complete returned clips using a predefined safety rubric, with disagreements adjudicated. The primary outcome will be the proportion of evaluable requests returning a policy-violating video. Refusals will count as non-successes, while technical failures will be reported separately. Paired scenario-level comparisons and uncertainty intervals will accompany refusal rates, benign-control acceptance, latency, and cost. These measures will help distinguish observed safety differences from differences in availability or willingness to generate content. Provider differences will not be attributed to hidden moderation mechanisms without supporting evidence.

We request a provisional THB 10,000 pilot budget to establish feasibility and inform the scale of a subsequent evaluation; this amount does not fund the complete multi-condition study. Testing will use authorized access and controlled handling of sensitive outputs. The expected contribution is evidence about the relationship between endpoint specification and observed video-generation safety under constrained resources. No success rates are assumed, and conclusions will remain limited to the tested scenarios, versions, providers, and generation settings.

### Why the revision works

The opening ends in an answerable question. The method maps endpoint specification to matched conditions. The evaluation defines the denominator and reports failures separately. The budget supports a pilot, without implying that every scenario-condition-model combination is funded. The ending promises evidence, not a predetermined safety failure.

**Notes to keep outside a submission:** Verify system access and current pricing before naming providers or costing the full design. Fix the supplied budget typo. For cost planning, distinguish scenario count from request count: scenarios × conditions × configurations × repeats, with any additional controls and retry allowance counted explicitly. Do not add a repetition count that the investigator has not selected.

## Example 2: Make a persona-bias proposal precise

**Example request:** “Rewrite my ‘He, She, It’ draft as a concise workshop proposal abstract. Preserve the design and avoid implying that gender causes human ability differences.”

**Source facts to preserve:** man/woman/gender-neutral cues; fixed roles, tools, decoding, and budget; blocked model-task-replicate comparisons; professional and reasoning tasks; occupational employment composition distinct from perceived stereotypes; blinded scoring; no completed findings.

### Adapted abstract

**He, She, It: Auditing Gendered Personas on Professional Tasks**

*Keywords: LLM agents, persona prompting, gender bias, professional tasks*

Large language model agents are increasingly assigned human-like personas when completing professional tasks. A key evaluation question is whether minimal gender cues change the quality of the work they produce, beyond differences in how models describe gender and occupations. This study asks whether persona gender affects task performance, whether any effect varies with occupational gender composition or perceived stereotypes, and whether patterns are consistent across model families.

We propose a preregistered, blocked experiment comparing man, woman, and gender-neutral persona cues while holding task, occupational role, available tools, decoding settings, and inference budget fixed. The design aims to isolate the effect of the specified persona wording within the tested conditions. Paired analyses within model-task-replicate blocks will estimate performance differences, using task-level uncertainty estimates and multiplicity-adjusted contrasts. Occupational employment shares will measure workforce composition, while independently collected ratings will measure perceived stereotypes. Treating these constructs separately will avoid interpreting employment composition as a direct measure of social beliefs.

The planned evaluation will cover three open-weight model families using GDPval-derived professional tasks and MMLU-Pro reasoning questions. Model versions and availability will be confirmed before evaluation. Outputs will be scored without revealing the persona condition, with deliverable quality and reasoning accuracy as performance outcomes. Latency and token use will provide secondary efficiency measures. Comparisons across tasks and models will assess whether observed effects are consistent or restricted to particular evaluation settings, rather than relying on a single overall performance difference.

The expected contribution is an audit of whether minimal persona cues affect completed work products under controlled task conditions. The study extends the evaluation question from gender associations to the quality of agent outputs without assuming that a performance difference will occur. Any alignment with occupational stereotypes will be interpreted as model sensitivity to social cues, not as evidence of innate gender differences. Conclusions will remain limited to the tested models, persona wording, tasks, scoring procedures, and inference conditions.

### Why the revision works

The draft names the manipulated variable and the conditions held fixed. Each question has an analysis: paired contrasts for persona effects, separate composition and stereotype measures for alignment, and model comparisons for consistency. It preserves the planned status and narrows interpretation to model behavior. Exact candidate model versions are not promoted from an unverified draft into established facts.

**Notes to keep outside a submission:** Verify dataset references and selected models. Clarify the scoring rubric and the primary outcome hierarchy before preregistration. Do not invent a sample size or power calculation to fill this gap.

## Sentence-level repairs

| Weak or risky wording | Better wording | Reason |
| --- | --- | --- |
| “AI is revolutionizing every industry, making this groundbreaking research essential.” | “It remains unclear whether persona gender changes the quality of completed professional work.” | Opens with the specific unknown. |
| “We demonstrate that endpoint-free prompts bypass safety.” | “We will test whether endpoint-free prompts increase policy-violating continuations relative to matched endpoint-specified prompts.” | Preserves prospective status and names the comparison. |
| “Our method will significantly outperform all baselines.” | “We will compare the method with the specified baselines on the primary outcome.” | Removes an unsupported result and statistical claim. |
| “Women perform better on care-related tasks.” | “The study will test whether woman-persona cues change model performance on the selected tasks.” | Identifies model prompting as the object of study. |
| “Provider A has weaker moderation.” | “Observed outcomes will be compared across model–provider configurations.” | Does not infer an unobserved mechanism. |
| “THB 10,000 funds the study.” | “A provisional THB 10,000 budget supports a feasibility pilot; full-study costs remain to be estimated.” | Distinguishes pilot resources from full design costs. |

## Additional invocation examples

- “Use $proposal-abstract-writing-onepage to compress this 700-word proposal to 300 words. Keep the comparison and primary outcome; omit keywords.” Follow the explicit limit instead of the default range.
- “Use $proposal-abstract-writing-onepage to revise my abstract using these pilot results.” Preserve the supplied results, label them preliminary, and distinguish the next planned stage.
- “Use $proposal-abstract-writing-onepage to make a one-page DOCX with references included.” Apply the supplied template and render the document to verify one-page fit; a word count alone is insufficient.
- “Use $proposal-abstract-writing-onepage to draft from these incomplete notes.” Draft with supported information; identify missing design choices outside the abstract instead of filling them with invented facts.
