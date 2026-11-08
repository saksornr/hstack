# Worked checks

These are original examples for this skill, not quoted course exercises.

## Simultaneous empirical accuracy

**Request:** Bound the number of independent samples needed to estimate each of M fixed Bernoulli means within epsilon, with total failure probability delta, when each mean gets m samples.

For each estimate, Hoeffding gives failure at most 2 exp(-2m epsilon^2). A union bound gives total failure at most 2M exp(-2m epsilon^2), so it suffices that m >= log(2M/delta)/(2 epsilon^2), rounded upward. Independence is needed within each sample mean for this argument, not between the M estimates for the union bound. A post-hoc family of queries needs additional treatment.

## A connected walk that does not mix

**Request:** Prove that the ordinary random walk on every connected graph converges to stationarity.

Disprove the claim with a two-vertex single-edge graph started at one vertex. Its location alternates deterministically, so its total-variation distance from the uniform stationary distribution stays 1/2. A connected finite undirected graph with a lazy walk avoids this periodicity; connectivity alone did not suffice.

## Relaxation is not an integer solution

**Request:** Solve max x subject to 2x<=1 and x in {0,1} by relaxing x to [0,1].

The integer optimum is 0; the relaxation optimum is 1/2. For maximization the relaxation supplies an upper bound. Rounding down happens to recover the optimum here, but this example does not establish a general rounding theorem.

## Low average influence is not few-variable dependence

**Request:** If flipping a random bit rarely changes a Boolean function, must it depend on only a few bits?

No exact-dependence conclusion follows. Majority on odd n has every coordinate relevant, while a uniformly chosen bit changes the result with probability of order n^-1/2. Bound total influence and specify approximation error before using a junta theorem.

## Repeated agent calls

**Request:** Three runs each fail with probability 0.1. Does majority voting fail with probability 0.028?

That value follows under independent Bernoulli failures and a correct binary majority aggregator. Perfectly correlated failures instead give failure probability 0.1. For open-ended outputs, define correctness and the aggregation rule as well. Do not certify model redundancy from marginal error rates alone.
