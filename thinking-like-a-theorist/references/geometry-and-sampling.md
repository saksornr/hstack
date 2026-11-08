# Geometry, fitting, sampling, and recovery

## Decide what must be preserved

Separate likelihood, reconstruction error, pairwise distances, range mass, nearest-neighbor distance, and sparse recovery. Each objective requires different assumptions.

### Model fitting

Specify observations, model family, noise distribution, identifiability, and objective. Derive the likelihood before equating it with least squares. For a best affine subspace under squared Euclidean reconstruction loss, center the data and use the leading singular vectors; an uncentered fit solves a different problem. Mixture fitting is generally nonconvex; an iterative optimizer finding a stationary point is not a global-optimality certificate.

### Dimension reduction

For a fixed finite set of n Euclidean points, a Johnson-Lindenstrauss argument seeks to preserve all pairwise distances within a stated distortion. Define whether the factor applies to norms or squared norms. Derive a fixed-vector concentration bound for the chosen random map, then union-bound the point pairs; the usual target is k=O(epsilon^-2 log(n/delta)). Verify the chosen distribution and constants before turning this into a numeric dimension recommendation.

Do not extend a finite-set guarantee to every point in the ambient space, an unseen adaptive query set, or every vector in a subspace without a separate theorem. Check downstream requirements: distance preservation alone does not certify arbitrary clustering or semantic retrieval quality.

### VC dimension and two different nets

A range space is (X,R) with R a collection of subsets of X. A finite set Y is shattered when {A intersect Y : A in R} contains every subset of Y. Prove lower and upper bounds separately when calculating VC dimension.

A range-space epsilon-net intersects every range A with probability mass at least epsilon (or |A| >= epsilon|X| under the uniform finite measure). A metric r-net covers every point within distance r; some conventions also require separation. State the convention. Neither definition implies the other.

For a finite-VC range space, epsilon-net sample size typically scales as O((d log(1/epsilon)+log(1/delta))/epsilon); uniform additive probability estimation uses an epsilon^-2 scale instead. Retrieve the precise theorem before using constants or claiming tightness. Low VC dimension does not remove the need for a sampling/distribution model.

For approximate nearest neighbors, specify the metric, approximation factor, data/query model, and any doubling-dimension assumption. A net hierarchy is useful only with bounds on its size and search cost.

### Compressed sensing

Write measurements y=Ax+e, sparsity s, noise bound, and recovery objective. Distinguish recovering one fixed sparse signal from all s-sparse signals. Verify a suitable nullspace or restricted-isometry condition rather than assuming an underdetermined system is recoverable because an l1 solver returns an answer. For exact noiseless uniform l1 recovery, a standard nullspace criterion is ||h_S||_1 < ||h_{S^c}||_1 for every nonzero h in ker(A) and every |S| <= s. Noisy stability needs a stronger quantitative version.

## Source caution

The Oct 25 scribe notes contain apparent errors in early definitions and examples. Use intersections with the shattered set Y and require hitting ranges A, not arbitrary subsets. Axis-aligned rectangles in the plane have VC dimension 4, not the value 3 printed there: four points at north/south/east/west positions can be shattered, while among any five points one is not a unique coordinate extreme and cannot be excluded while including the other four. Verify claims independently when archival notes disagree.

## Output

Give the objective, assumptions, theorem and quantifiers, parameter dependence, and one explicit situation outside the guarantee.
