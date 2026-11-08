# Expanders, spectra, and random walks

## Select the right notion

Distinguish edge expansion, vertex expansion, lossless neighbor expansion, and conductance. State the subset-size range and graph degree assumptions. A spectral bound does not automatically give the lossless expansion required by a particular decoding or routing proof.

For an undirected d-regular graph, define adjacency A and normalized walk matrix P=A/d. For irregular graphs, use a normalized operator and degree-weighted stationary measure; do not substitute vertex counts for volumes.

## Spectral route

1. Identify the trivial eigenvector and nontrivial eigenspace.
2. Bound the relevant quadratic form or operator norm.
3. Translate it into the combinatorial quantity with the correct normalization.
4. Test complete graphs, disconnected graphs, and bipartite graphs as sanity cases.

With nontrivial adjacency eigenvalues bounded in absolute value by lambda, an expander-mixing form is |1_S^T A 1_T - d|S||T|/n| <= lambda sqrt(|S||T|). Define the left-hand edge count by this matrix expression, particularly when S and T overlap.

## Mixing route

Check irreducibility and aperiodicity. An undirected connected bipartite graph has a periodic ordinary walk; a lazy walk P_lazy=(I+P)/2 removes that obstruction. Keep conductance bounds and absolute spectral mixing bounds distinct.

For a finite reversible chain with positive stationary probabilities and nontrivial eigenvalues bounded in absolute value by rho < 1, a useful bound is ||P^t(x,.)-pi||_TV <= (1/2) sqrt(1/pi(x)-1) rho^t. State the chain and starting state before solving for a mixing time. Numerical eigenvalues are diagnostics unless certified with error bounds.

## Codes and routing

For a bipartite code graph, define variable/check nodes, local constraints, corruption budget, and decoder. Show how expansion produces enough informative checks to make correction progress. Distinguish minimum distance from efficient decoding radius.

For routing, specify edge-disjoint versus vertex-disjoint paths, terminals, congestion, and length bounds. Prove that the actual expansion hypothesis supports those constraints; connectivity alone is insufficient.

## Output

Return graph conventions, the required expansion or spectral claim, its proof/certificate, and the resulting routing, coding, or mixing guarantee with its parameter dependencies.
