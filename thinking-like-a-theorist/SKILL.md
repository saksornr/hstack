---
name: thinking-like-a-theorist
description: Formalize research and algorithmic problems, select theoretical tools, develop proof strategies, and audit mathematical claims. Use for requests to think like a theorist, prove or disprove a claim, analyze randomized or fault-tolerant algorithms, reason about expanders and mixing, derive sampling or dimension-reduction guarantees, formulate LP/SDP relaxations, or analyze Boolean functions. Inspired by Princeton COS 597D (Fall 2007); not a general writing or empirical ML benchmarking skill.
---

# Thinking Like a Theorist

Turn an informal question into a precise claim, choose the smallest useful mathematical model, and work toward a proof, counterexample, or clearly delimited unresolved step.

## Start with the claim

1. Extract the objects, input size, resources, objective, and success criterion. Identify whether the user wants an existence result, efficient construction, approximation, lower bound, or explanation.
2. Write the quantifiers. Distinguish “for every input, with high probability over the algorithm” from “for most inputs”; distinguish a fixed query from all queries chosen after seeing the randomness.
3. Record assumptions: independence, adversarial power, graph regularity, distribution, precision, access model, and asymptotic parameter regime. Ask only when a missing assumption changes the problem materially; otherwise state a provisional model and proceed.
4. Try tiny instances, degenerate cases, and one plausible counterexample before committing to a theorem. If the claim fails, provide the counterexample and a minimally repaired claim.

## Choose a tool

Load only the references relevant to the task. Combine them when the proof requires it.

| Problem structure | Read | First move |
| --- | --- | --- |
| Hidden object, noisy answers, adversary, random construction | [Probability and games](references/probability-and-games.md) | Specify information and randomness; count surviving possibilities |
| Unreliable gates, local repair, redundant computation | [Fault tolerance](references/fault-tolerance.md) | Write the noise model and error recurrence |
| Sparse connectivity, routing, codes, random walks | [Expanders and spectra](references/expanders-and-spectra.md) | Fix graph/operator conventions and the required expansion notion |
| Model fitting, projection, sampling, nets, sparse recovery | [Geometry and sampling](references/geometry-and-sampling.md) | State exactly what must be preserved or estimated |
| Discrete optimization, certificates, discrepancy, tensoring | [Convex relaxations](references/convex-relaxations.md) | Formulate a relaxation and derive its bound direction |
| Boolean sensitivity, noise, influence, hypercube structure | [Boolean Fourier analysis](references/boolean-fourier.md) | Fix the input measure and Fourier normalization |
| Circuit lower bounds or nonconstructive proof claims | [Proof barriers](references/proof-barriers.md) | Separate existence, efficient discovery, and conditional barriers |

For source provenance and lecture coverage, read [Course map](references/course-map.md). For worked checks, read [Examples](references/examples.md).

## Develop the argument

1. Establish a baseline: trivial bound, exhaustive algorithm, dimension count, or simple estimator.
2. Identify the bottleneck and propose at most two promising approaches. Explain why their assumptions fit; do not list unrelated theorems.
3. State each needed lemma before using it. For a named theorem, give its precise applicable version, hypotheses, conclusion, and source. Retrieve the primary source when the statement or constants are uncertain. If unavailable, label the unverified lemma instead of inventing a citation or proof.
4. Maintain explicit dependencies between lemmas. Track constants when they determine feasibility, thresholds, or failure probability; otherwise state the asymptotic regime and hidden dependencies.
5. Separate existence from construction, polynomial-time solvability from practical tractability, and numerical evidence from certification.
6. For an algorithm, supply its steps, correctness argument, time and space costs, and failure probability where relevant. For an impossibility claim, specify the model to which it applies.
7. Stop at the strongest justified result. If a proof remains incomplete, name the exact missing implication and a concrete next test or lemma.

## Audit before answering

- Check quantifier order, boundary cases, normalization, inequality direction, and dimensions.
- Verify that union bounds cover the actual event family and that independence is used only where justified.
- Try an adversarial input that breaks the key assumption.
- Label computations as sanity checks, not proofs over an infinite domain. Report whether code was actually run.
- Treat archival course notes as fallible. Check definitions and theorem statements rather than copying apparent transcription errors.
- Do not describe a problem marked open in 2007 as still open without a current literature check.
- Treat applications to LLM agents or modern ML as new modeling proposals. A mathematical guarantee applies only after its assumptions are established for that system.

## Deliver

Match detail to the request. Usually present:

1. **Claim and assumptions** — the formal target and any corrected version.
2. **Approach** — the selected tool and why it fits.
3. **Argument** — proof, counterexample, or algorithm with guarantees.
4. **Checks and limits** — sanity checks, source status, and remaining gaps.

For tutoring, reveal the key invariant or lemma before a full derivation if hints were requested. For research, distinguish established facts, derived results, and conjectures.
