# LP, SDP, duality, discrepancy, and tensoring

## Formulate and orient the bounds

1. Write the original feasible set and objective.
2. Construct a relaxation and prove every original feasible solution maps to a feasible relaxed solution with the required objective relation.
3. Determine bound direction: enlarging a feasible set lowers a minimization optimum and raises a maximization optimum.
4. Derive a dual using a consistent sign convention. Show weak duality directly before appealing to strong duality.
5. State feasibility, boundedness, and any regularity assumptions needed for strong duality or attainment. SDP duality can have gaps without appropriate conditions.

For the pair min c^T x subject to Ax=b, x>=0 and max b^T y subject to A^T y<=c, weak duality follows from b^T y=x^T A^T y<=c^T x. A primal-dual feasible pair with matching objectives certifies optimality. For numerical solutions, report residuals and the gap; approximate feasibility is not an exact certificate.

## SDP route

Lift vector inner products into a Gram matrix X and impose X positive semidefinite. Identify which original constraints were discarded, especially rank constraints. Use a rounding argument to recover a discrete solution and prove its guarantee. Do not equate the relaxation optimum with the original optimum without an exactness argument.

For Lovasz theta, specify whether the formulation uses a graph or its complement. For the usual convention, alpha(G) <= theta(G) <= chi(complement(G)). Check C5, where theta(C5)=sqrt(5), before using product identities. State the exact graph product; different products have different multiplicativity properties.

For discrepancy, state the coloring domain, matrix norm or objective, and any vector relaxation. For a named result such as Roth's discrepancy theorem or an Alon-Naor bound, retrieve the exact statement and normalization before using it. A topic title in a syllabus is insufficient evidence for a numerical guarantee.

## Tensoring route

Specify what is tensored (vectors, matrices, functions, graphs), its dimension growth, and the quantities that multiply. Prove the product relation used. Track the cost of amplification and check that a useful bound survives taking roots or limits. Distinguish an algebraic tensor identity from an algorithm that explicitly constructs an exponentially larger object.

## Output

Return primal/dual formulations, bound directions, feasibility or certificate checks, rounding loss if any, and the remaining integrality or duality gap.
