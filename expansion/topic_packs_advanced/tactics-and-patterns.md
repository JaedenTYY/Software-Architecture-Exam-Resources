# Tactics and Patterns

*Advanced Depth bank — 14 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0017 — Layer tactics (Brutal, 6 marks)

**Type:** Identify tactic within a pattern  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **Increase semantic coherence**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted.

<details>
<summary><strong>Show answer</strong></summary>

What it does: ensuring a layer's responsibilities all work together without excessive reliance on other layers, by choosing responsibilities that have semantic coherence — which binds together responsibilities likely to be affected by the same change.

If omitted: functionality would be randomly sprinkled throughout the layers, destroying the separation of concerns and hence the ease of modification that is the prime motivation for employing layers in the first place.

The lecture's own illustration: responsibilities dealing with hardware belong in a hardware layer, not an application layer, because a hardware responsibility has no semantic coherence with application responsibilities.

> **Exam trap:** Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.

*Tags: Layer, tactics, increase-semantic-coherence, patterns-comprise-tactics*

</details>

---

## ADV-0018 — Layer tactics (Brutal, 6 marks)

**Type:** Identify tactic within a pattern  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **Restrict dependencies**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted.

<details>
<summary><strong>Show answer</strong></summary>

What it does: defining an ordering and allowing a layer to use only the services of its adjacent lower layer, which reduces the possible communication paths to the number of layers minus one.

If omitted: any function in any layer could call any other function in any other layer, destroying the low coupling that makes the layering pattern effective.

The lecture notes this limitation 'has a great influence on the dependencies between the layers and makes it much easier to limit the side effects of replacing a layer'.

> **Exam trap:** Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.

*Tags: Layer, tactics, restrict-dependencies, patterns-comprise-tactics*

</details>

---

## ADV-0019 — Layer tactics (Brutal, 6 marks)

**Type:** Identify tactic within a pattern  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **Abstract common services**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted.

<details>
<summary><strong>Show answer</strong></summary>

What it does: factoring functionality that several clients need into a shared service exposed through the layer's public interface, so callers depend on the abstraction rather than on repeated implementations.

If omitted: the same capability would be reimplemented above the layer boundary in several places, so a change would become a non-local change touching every duplicate.

This is what makes a lower layer worth having at all: it is the reason a layer is a 'grouping of modules that offers a cohesive set of services'.

> **Exam trap:** Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.

*Tags: Layer, tactics, abstract-common-services, patterns-comprise-tactics*

</details>

---

## ADV-0020 — Layer tactics (Brutal, 6 marks)

**Type:** Identify tactic within a pattern  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **Encapsulate**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted.

<details>
<summary><strong>Show answer</strong></summary>

What it does: hiding a layer's internals behind a public interface, so that changes inside the layer do not ripple outward.

If omitted: callers would bind to internal details, so replacing the layer's implementation would break them and the modifiability argument for layering would collapse.

The lecture states layers 'completely partition a set of software, and each partition is exposed through a public interface'.

> **Exam trap:** Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.

*Tags: Layer, tactics, encapsulate, patterns-comprise-tactics*

</details>

---

## ADV-0021 — Layer tactics (Brutal, 6 marks)

**Type:** Identify tactic within a pattern  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **Restrict communication paths**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted.

<details>
<summary><strong>Show answer</strong></summary>

What it does: limiting which elements may talk to which, so that the dependency graph stays sparse and analysable.

If omitted: the number of interaction paths would grow combinatorially, making the effect of any change impossible to bound.

Closely related to restrict dependencies; together they are what turn a stack of boxes into an actual layered architecture.

> **Exam trap:** Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.

*Tags: Layer, tactics, restrict-communication-paths, patterns-comprise-tactics*

</details>

---

## ADV-0022 — Pattern vs tactic (Very Hard, 6 marks)

**Type:** Explain the composition relation  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 says 'if a pattern is a molecule, a tactic is an atom' and that 'patterns are built from tactics'. Explain what this composition claim actually asserts, using the Layer pattern, and state the practical consequence for an architect who cannot find a pattern that fits.

<details>
<summary><strong>Show answer</strong></summary>

The claim is that a pattern is not a primitive: it is a bundle of several smaller design decisions, each of which independently targets a quality-attribute response. The lecture enumerates Layer's bundle as increase semantic coherence, abstract common services, encapsulate, restrict communication paths and use an intermediary/restrict dependencies. Because the bundle is decomposable, an architect who finds no fitting pattern is not stuck: the lecture's second stated reason for cataloguing tactics is that 'if no pattern exists to realize the architect's design goal, tactics allow the architect to construct a design fragment from first principles'. The third reason is that cataloguing makes the choice systematic, since several tactics usually exist for one quality and the choice depends on trade-offs and cost to implement.

> **Exam trap:** Reciting the mnemonic without the consequence. The exam value is in what tactics let you do when no pattern fits.

*Tags: tactics, patterns, molecule-atom, composition*

</details>

---

## ADV-0023 — Broker augmentation (Brutal, 8 marks)

**Type:** Match tactic to specific weakness  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 identifies four weaknesses of the Broker pattern and then augments it with tactics. Name all four weaknesses, and for each state whether the lecture's proposed tactics address it — being explicit about the ones that are left unaddressed.

<details>
<summary><strong>Show answer</strong></summary>

The four weaknesses are **availability** (the broker is a single point of failure), **performance** (levels of indirection add latency, and the broker is a potential bottleneck), **testability** (brokers sit in complex, highly dynamic multi-process systems with asynchronous requests and responses, making testing and debugging extremely difficult) and **security** (the pattern as presented offers no means to authenticate or authorise clients or servers, and no protection of the communication).

The lecture's tactics address the first two directly: increase available resources gives multiple brokers, maintain multiple copies keeps their state identical, load balancing (an application of scheduling resources) prevents one broker being overloaded while another idles, and heartbeat / exception detection / ping-echo detect faults so clients and peer brokers can be notified.

Testability and security are **not** repaired by that tactic set — they are named as legitimate concerns but the augmentation discussion targets availability and performance. A complete answer says so rather than pretending the four tactics fix everything.

> **Exam trap:** Claiming the four tactics fix all four weaknesses. Replicating brokers does nothing for the missing authentication.

*Tags: Broker, tactics, augmentation, weaknesses*

</details>

---

## ADV-0024 — Tactic side-effect chain (Brutal, 7 marks)

**Type:** Trace a tactic side-effect  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step 1** the architect applies **ping/echo**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step.

<details>
<summary><strong>Show answer</strong></summary>

Applied for: detecting faults in components.

Considerations the lecture associates with it: Security — how to prevent a ping flood attack? Performance — how to ensure the performance overhead of ping/echo is small? Modifiability — how to add ping/echo to the existing architecture?

The dominant side effect is performance, which the architect addresses at the next step by applying **increase available resources**.

The general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it.

> **Exam trap:** Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.

*Tags: tactics, side-effects, cascade, ping/echo*

</details>

---

## ADV-0025 — Tactic side-effect chain (Brutal, 7 marks)

**Type:** Trace a tactic side-effect  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step 2** the architect applies **increase available resources**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step.

<details>
<summary><strong>Show answer</strong></summary>

Applied for: absorbing the performance overhead that ping/echo introduced.

Considerations the lecture associates with it: Cost — increased resources cost more. Performance — how to utilise the increased resources efficiently?

The dominant side effect is resource utilisation, which the architect addresses at the next step by applying **a scheduling policy**.

The general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it.

> **Exam trap:** Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.

*Tags: tactics, side-effects, cascade, increase-available-resources*

</details>

---

## ADV-0026 — Tactic side-effect chain (Brutal, 7 marks)

**Type:** Trace a tactic side-effect  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step 3** the architect applies **a scheduling policy**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step.

<details>
<summary><strong>Show answer</strong></summary>

Applied for: using the added resources efficiently rather than merely adding cost and complexity.

Considerations the lecture associates with it: Modifiability — how to add the scheduling policy to the existing architecture? Modifiability — how to change the scheduling policy in the future?

The dominant side effect is modifiability, which the architect addresses at the next step by applying **use an intermediary**.

The general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it.

> **Exam trap:** Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.

*Tags: tactics, side-effects, cascade, a-scheduling-policy*

</details>

---

## ADV-0027 — Tactic side-effect chain (Brutal, 7 marks)

**Type:** Trace a tactic side-effect  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step 4** the architect applies **use an intermediary**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step.

<details>
<summary><strong>Show answer</strong></summary>

Applied for: insulating the choice of scheduling policy from the rest of the system.

Considerations the lecture associates with it: Modifiability — how to ensure that all communication passes through the intermediary?

The dominant side effect is enforcement of the intermediary, which the architect addresses at the next step by applying **restrict dependencies**.

The general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it.

> **Exam trap:** Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.

*Tags: tactics, side-effects, cascade, use-an-intermediary*

</details>

---

## ADV-0028 — Tactic side-effect chain (Brutal, 7 marks)

**Type:** Trace a tactic side-effect  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step 5** the architect applies **restrict dependencies**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step.

<details>
<summary><strong>Show answer</strong></summary>

Applied for: ensuring all communication actually passes through the intermediary.

Considerations the lecture associates with it: Performance — how to ensure the performance overhead of the intermediary is not excessive?

The dominant side effect is performance, which the architect addresses at the next step by applying **(the architect may stop here)**.

The general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it.

> **Exam trap:** Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.

*Tags: tactics, side-effects, cascade, restrict-dependencies*

</details>

---

## ADV-0029 — Tactic side-effect chain (Brutal, 8 marks)

**Type:** Explain recursion termination  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 asks: 'This design problem has now become recursive! Are we in an infinite progression?' Answer the question as the lecture does, and explain what an architect must judge in order to stop.

<details>
<summary><strong>Show answer</strong></summary>

No, it is not infinite. The lecture's answer is that 'eventually the side-effects of each tactic become small enough to ignore'. Termination is therefore a **judgement about magnitude, not a logical endpoint**: at any point in the tree of design decisions the architect may determine that, for example, the performance overhead of the intermediary is small enough that no further design decisions need to be made.

What the architect must judge: whether the remaining side effect is large enough to threaten a prioritised quality-attribute *scenario with a measurable response*. That is why response measures matter — without one, 'small enough' is unfalsifiable and the architect either stops arbitrarily early or keeps designing forever. The lecture also frames the stopping point as reached when 'requirements for a specific system are satisfied', which is the same idea stated from the requirements side.

> **Exam trap:** Answering 'yes, it is infinite' — or answering 'no' without saying what makes the remaining side effect ignorable.

*Tags: tactics, recursion, termination, judgement*

</details>

---

## ADV-0030 — Using tactics to augment patterns (Very Hard, 6 marks)

**Type:** Explain the two-perspective check  
**Source:** Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 6 says that to make a pattern work in a given architectural context, we must examine it 'from two perspectives'. Name both perspectives and explain why the second is the one architects forget.

<details>
<summary><strong>Show answer</strong></summary>

Perspective one: **the inherent quality-attribute trade-offs the pattern makes** — patterns exist to achieve certain qualities, so compare the ones they promote and the ones they diminish against your needs. Perspective two: **other quality attributes the pattern is not directly concerned with, but which it nevertheless affects and which matter in your application**.

The second is forgotten because pattern catalogues are written around the problem the pattern solves. Broker is documented as an interoperability/modifiability solution, so an architect checks those. Its effect on testability and security is real but incidental to the pattern's stated purpose, so it goes unexamined until integration. The lecture's framing is that 'patterns solve a specific problem but are neutral or have weaknesses with respect to other qualities' — the weaknesses are in the residual set, not the advertised set.

> **Exam trap:** Giving only the advertised trade-offs. The second perspective is where the marks are.

*Tags: tactics, patterns, two-perspectives, residual-qualities*

</details>

---
