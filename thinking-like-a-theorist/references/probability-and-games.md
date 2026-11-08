# Probability, adversaries, and games

## Model before counting

Define the state, legal moves, observations, and terminal condition. Specify whether an adversary is adaptive, sees random coins, has a total corruption budget, or independently corrupts each answer. These models are not interchangeable.

For liar-style search, maintain hypotheses together with their remaining lie budgets. A transcript must retain every hypothesis compatible with the allowed number of lies. A potential function may weight these states by the number of future answer strings they can explain. Prove how each move changes the potential; do not assume ordinary binary search still works.

For a finite perfect-information game, attempt backward induction or a winning-state recurrence. A counting obstruction supplies a lower bound, not automatically a strategy attaining it. For nonadaptive binary questions with at most t answer flips, compare codeword Hamming balls: M sum_{j=0}^t binom(q,j) <= 2^q is a necessary condition for disjoint decoding balls. Do not transfer this code argument to an adaptive game without proving the transcript analogue.

## Random constructions

1. Define a distribution over candidate objects.
2. Introduce indicator variables for bad events and compute expectations using linearity; independence is not required for that step.
3. If a nonnegative integer bad-event count has expectation below one, conclude that a zero-bad-event outcome exists.
4. State whether sampling efficiently finds such an outcome. An expectation proof alone gives no deterministic construction or useful success probability.
5. Attempt conditional expectations only if the conditional objective can be computed or bounded efficiently after each choice.

## Concentration checklist

For independent Bernoulli variables with sum X and mean mu, standard multiplicative bounds include P[X >= (1+eta)mu] <= exp(-mu eta^2/3) for 0 < eta <= 1, and P[X <= (1-eta)mu] <= exp(-mu eta^2/2) for 0 < eta < 1. State independence and the allowed parameter range explicitly.

For independent variables in [0,1], a sample mean obeys P[|mean-E(mean)| >= epsilon] <= 2 exp(-2m epsilon^2). To control M fixed estimates simultaneously, union-bound the M events and allocate total failure probability delta. Adaptive query selection can invalidate the fixed-family argument; establish uniform control or use a suitable adaptive-analysis result.

When dependence is present, identify an applicable martingale, negative-dependence, or other theorem and verify its hypotheses. Never silently reuse an independent-trials bound.

## Output

Give the probability space, bad events, expectation/tail calculation, total failure budget, and the exact kind of conclusion: existence, randomized construction, or adversarial guarantee.
