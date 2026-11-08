# Fourier analysis on the Boolean cube

## Fix conventions

Use x uniform on {-1,1}^n unless a different measure is explicitly specified. Let chi_S(x)=product_{i in S} x_i, fhat(S)=E[f(x)chi_S(x)], and f(x)=sum_S fhat(S)chi_S(x). Parseval gives E[f^2]=sum_S fhat(S)^2; the sum equals one only when f is {-1,1}-valued.

## Translate behavior into spectrum

1. State the behavioral quantity: bit-flip sensitivity, noise stability, correlation, or boundary size.
2. Express it as an expectation under the specified input measure.
3. Expand in the orthonormal basis and simplify using orthogonality.
4. Bound the spectral mass needed for the intended structural conclusion.
5. Translate back and state approximation error and parameter dependencies.

For Boolean f, Inf_i(f)=P[f(x)!=f(x with bit i flipped)]=sum_{S containing i} fhat(S)^2. Total influence is I(f)=sum_S |S| fhat(S)^2. Expected sensitivity to a uniformly chosen coordinate is I(f)/n, not I(f).

Define rho-correlated y by independently flipping each coordinate of x with probability (1-rho)/2. Then E[f(x)f(y)]=sum_S rho^|S| fhat(S)^2. If using a flip-probability parameter instead, convert it explicitly.

## Sanity checks and limits

- A constant Boolean function has zero total influence and all mass at the empty set.
- A dictator or its negation has total influence one and mass on one singleton.
- Full parity has total influence n and all mass at degree n.
- Odd majority has total influence of order sqrt(n), so its average-coordinate change probability tends to zero even though it is not a fixed-size junta to arbitrary accuracy.

Do not infer “depends on few coordinates” from a small average-coordinate change probability. A junta approximation theorem requires a bound on total influence and a stated approximation tolerance; approximate dependence is not exact dependence. Retrieve the precise Friedgut or hypercontractivity theorem before asserting quantitative bounds. Check whether a source concerns juntas or sharp thresholds; these are distinct claims.

## Output

Return the domain and measure, definitions, spectral calculation, structural conclusion, and a counterexample to any tempting stronger statement.
