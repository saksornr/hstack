# Fault-tolerant computation

## Define the failure process

Specify the computational model (circuit, cellular automaton, or another explicit system), gate or site errors, timing, independence, persistence, and adversarial budget. Include errors in the repair mechanism itself. Record the required time horizon and allowable end-to-end error.

## Derive a repair argument

1. Choose an encoding and local correction rule. Identify what information the rule actually observes.
2. Derive a recurrence for error probability or an invariant for adversarial corruption. State precisely where independence enters.
3. Locate a regime in which repair contracts error, then account for new errors introduced during repair.
4. Prove that the recurrence remains valid after repeated rounds. Shared ancestors and overlapping neighborhoods can create correlations.
5. Account for size, depth, communication, and latency overhead. Bound failure over the requested horizon rather than only one correction step.

For three independent replicas with error probability p and an ideal majority voter, the output error is 3p^2-2p^3. It is smaller than p for 0 < p < 1/2. This does not establish fault tolerance for a whole circuit: the voter may fail, replicas may share faults, and repeated stages may create dependence. With a voter that independently flips the correct majority output with probability q, the recurrence becomes q+(1-2q)(3p^2-2p^3).

For cellular automata, specify dimension, neighborhood, update schedule, boundary conditions, and noise process before invoking a local-repair theorem. For expander-based redundancy, state the exact expansion condition required by the decoder.

## Transfer to agent systems carefully

Repeated calls to the same model are not automatically independent replicas. Shared prompts, training, tools, or misconceptions can correlate failures. Present redundancy as a design hypothesis unless the noise assumptions and aggregation reliability have evidence.

## Output

Return the noise model, repair rule, recurrence or invariant, contraction conditions, horizon guarantee, overhead, and failure modes. Retrieve the relevant Gacs/Toom source before stating a model-specific threshold.
