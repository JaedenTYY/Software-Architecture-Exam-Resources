# CSC3209 Universal Answer Frameworks

These are **reusable answer structures**, not answers to paste unchanged. In this course, marks come from mapping the scenario to the pattern/quality attribute and explaining the mechanism and trade-off.

## 1. Universal architectural-pattern selection answer

Use this sequence:

**Requirement → architectural problem → pattern → elements/connector → mechanism → quality consequence → trade-off**

Template:

> **[Pattern]** is suitable because the requirement needs **[architectural problem]**. In this scenario, **[element A]** maps to **[concrete system element]**, while **[element B]** maps to **[concrete system element]**, interacting through **[connector/relation]**. This arrangement **[mechanism]**, which can enhance **[quality attribute]** because **[causal explanation]**. A limitation is that it may threaten **[different quality attribute]** because **[causal explanation]**.

Avoid: “Use X because X is good / scalable / secure.” Always explain **how** the structure causes the quality effect.

## 2. Universal advantage / limitation answer

**Advantage**
> The pattern can enhance **[QA]** because **[specific structural mechanism]**. In this scenario, **[concrete consequence]**.

**Limitation**
> The pattern may threaten **[QA]** because **[specific structural mechanism or constraint]**. In this scenario, **[concrete consequence]**.

Use “can/may” rather than claiming a pattern guarantees a quality.

## 3. Universal six-part Quality Attribute Scenario

Ask six questions:

1. **Source — Who/what causes it?**
2. **Stimulus — What event occurs?**
3. **Environment — Under what condition?**
4. **Artifact — Which part of the system is affected?**
5. **Response — What does the system do?**
6. **Response Measure — How well must it do it?**

Template table:

| Part | Fill-in |
|---|---|
| Source | [user/system/fault/attacker/developer/etc.] |
| Stimulus | [an event, not merely a feature name] |
| Environment | [normal operation/peak load/failure/attack/development time/etc.] |
| Artifact | [specific service/component/system] |
| Response | [observable system action] |
| Response Measure | [quantified acceptance criterion] |

### Good response-measure examples
- Performance: “95% of requests complete within 2 seconds.”
- Availability: “Service is restored within 5 seconds” or “99.99% uptime.”
- Security: “100% of unauthorized requests are rejected and logged.”
- Modifiability: “One developer completes the change in two working days, affecting no more than two modules.”
- Testability: “A defect can be isolated to one component within 30 minutes using automated tests/logging.”
- Usability: “90% of first-time users complete the task within 3 minutes without assistance.”
- Interoperability: “A new standards-compliant provider can exchange the required message without modifying existing consumers.”

## 4. Runtime vs design/development-time reasoning

Do not memorize only a list. Ask whether the quality is observed through **running-system behaviour** or through **changing/building/testing the system**.

- Performance — runtime
- Availability — runtime
- Security — largely runtime
- Usability — runtime/user interaction
- Interoperability — typically runtime integration behaviour
- Modifiability — primarily design/development time
- Testability — primarily development/testing time

## 5. Universal Utility Tree answer

Structure:

```text
Utility
├── Quality Attribute
│   ├── Refinement
│   │   └── Concrete QA scenario [Business Value, Architectural Impact]
```

Prioritize every leaf with H/M/L for:
- **Business Value**: importance to stakeholders/business goals.
- **Architectural Impact**: how strongly satisfying it constrains or shapes architecture.

A scenario with **[H,H]** is a strong Architecture Significant Requirement (ASR) candidate.

## 6. Universal ASR explanation

> An ASR is a requirement with a **profound effect on architecture** and **high business/mission importance**. It is architecturally significant because satisfying it forces or strongly constrains structural/design decisions rather than being a local implementation detail.

When identifying ASRs, explain:
1. business/mission value,
2. architectural impact,
3. concrete decisions the requirement is likely to force.

## 7. Universal QAW answer

Quality Attribute Workshop flow:
1. Presentation and introductions
2. Business/mission presentation
3. Architectural plan presentation
4. Identify architectural drivers
5. Brainstorm scenarios
6. Consolidate similar scenarios
7. Prioritize scenarios
8. Refine high-priority scenarios into six-part QA scenarios

Purpose: elicit, clarify and prioritize architecturally significant quality concerns with stakeholders **before or while architecture is being shaped**.

## 8. Universal PALM answer

Use PALM when business goals are unclear or poorly connected to architectural concerns. The key reasoning is:

**business goals → refined/traceable goals → quality concerns → ASRs → architecture**

In an exam, emphasize traceability: architectural decisions should be defensible in terms of the business/mission goals they support.

## 9. Tactic vs Pattern

> A **tactic** is a focused design decision intended to influence one quality-attribute response. A **pattern** is a larger recurring architectural organization addressing a recurring context/problem and normally embodies several design decisions/tactics.

Mnemonic: **pattern = molecule; tactic = atom**.

A pattern can still need tactics to repair its weaknesses. Example: a Broker may need redundancy, load balancing, heartbeat/ping-echo or replicated brokers to improve availability/performance.

## 10. Universal ADD answer

Attribute-Driven Design is iterative and quality-driven:

1. Choose the element to design.
2. Identify the ASRs relevant to that element.
3. Generate a design solution using suitable patterns/tactics/decisions.
4. Verify/refine requirements and produce input for the next iteration.
5. Repeat until the ASRs are sufficiently satisfied.

Good exam reasoning:
> Do not choose a pattern first and search for a justification later. Start from ASRs, generate candidate structures, evaluate consequences, decompose, then iterate.

## 11. Universal architecture documentation answer

### Informal notation
- Fast and easy for communication.
- Weak semantics; ambiguity is possible.

### Semiformal notation
- Defined syntax/conventions (for example UML-style views).
- Better precision and stakeholder communication without the cost of full formalism.

### Formal notation
- Mathematically precise and analyzable.
- Highest rigor but greater expertise/cost and often excessive for ordinary stakeholder communication.

**Default exam choice:** semiformal notation is often the strongest general-purpose choice when the system needs understandable but less ambiguous architectural documentation. Do not choose it blindly—justify against the scenario.

### View documentation template
1. Primary Presentation
2. Element Catalog
3. Context Diagram
4. Variability Guide
5. Rationale

## 12. Universal structure / view answer

- **Module structure** — static organization of implementation responsibilities/code.
- **Component-and-Connector structure** — runtime components and interactions.
- **Allocation structure** — mapping software to environment (hardware, files, teams, deployment).

**Structure = what exists. View = representation of a structure.**

### Cross-view mapping
> A mapping explains how elements in one view correspond to elements in another. It can be one-to-one, one-to-many, many-to-one or many-to-many. Typical relations include “implements,” “is implemented by,” and “is included in.”

## 13. Layer vs Multi-Tier

**Layer**
- Module pattern
- Organizes implementation responsibilities
- Relation: allowed-to-use
- Main concerns: separation of concerns, modifiability/maintainability
- Bridging/upward dependencies can weaken the intended separation

**Multi-Tier**
- Allocation pattern
- Groups runtime components into tiers and maps them to computing platforms
- Relation: communicates-with / allocated-to
- Main concerns: deployment, scaling, security boundaries, runtime separation

A system can use both: layers can be mapped onto runtime tiers.

## 14. Client-Server vs Peer-to-Peer

**Client-Server**
- Asymmetric roles in an interaction
- Client requests; server provides
- Centralized service/resource management
- Potential bottleneck/SPOF

**P2P**
- Peers can both request and provide
- Dynamic attachments/discovery
- Distributed resources/demand
- Can improve scalability/availability if alternatives/replication exist
- Trust, security, consistency and recovery are harder

A component called “server” can still act as a client to another server; these are interaction roles.

## 15. Broker vs SOA

**Broker**
- Core issue: consumers should not know provider identity/location.
- Broker/proxies mediate locating, forwarding and returning requests.
- Strongly about **location/identity transparency and dynamic binding**.

**SOA**
- Core issue: integrate independent/heterogeneous/external services through published contracts over a network.
- Provider, consumer; optional registry, ESB, orchestration.
- Strongly about **service contracts and interoperability**.

A SOA deployment may use a broker-like intermediary, so justify using the problem being solved rather than diagram shape.

## 16. Publish-Subscribe vs Observer

**Publish-Subscribe**
- Architectural/C&C pattern.
- Publishers and subscribers communicate through a publish-subscribe connector/event distributor.
- Publisher does not need identities of recipients.
- Useful for system-level event dissemination.

**Observer**
- GoF behavioral design pattern at implementation/design level.
- Subject maintains/notifies observers when state changes.
- Useful for object-level notification dependencies.

Same broad notification idea, different abstraction level.

## 17. Pipe-and-Filter vs Map-Reduce

**Pipe-and-Filter**
- Successive transformations of a stream.
- Filters transform; pipes transport.
- Pipeline parallelism: different filters can process different items concurrently.
- Good for reusable staged transformations.

**Map-Reduce**
- Allocation pattern for huge file-based datasets.
- Many stateless Map tasks operate in parallel, infrastructure shuffles/sorts key/value output, Reduce tasks combine results.
- Good for massively parallel batch data processing and infrastructure-managed resilience.

## 18. Pipe-and-Filter parallelization answer

> Buffered pipes decouple adjacent filters sufficiently for **pipeline parallelism**. While Filter C processes item 1, Filter B can process item 2 and Filter A can process item 3. This can increase throughput, but many stages can also add buffering, synchronization, copying and scheduling overhead.

## 19. Peer-to-Peer quality answer

**Potential enhancement**
> Availability/scalability can improve because demand and resource provision are distributed and another peer with overlapping resources may continue service when one peer disappears.

**Potential threat**
> Security/consistency may be threatened because decentralized peers are harder to authenticate/control and replicas/resources may diverge.

Never claim P2P guarantees availability: if only one peer holds the needed resource, its loss can still cause service failure.

## 20. Client-Server quality answer

**Potential enhancement**
> Centralized control/consistency can improve because shared services/resources are managed by servers and requested by distributed clients.

**Potential threat**
> Performance and availability may be threatened because a central server can become a bottleneck or single point of failure.

Mitigations such as replication/load balancing can improve those qualities but add cost/complexity.

## 21. Layer quality answer

**Potential enhancement**
> Modifiability improves when semantically coherent responsibilities are isolated behind stable interfaces and dependencies follow allowed-to-use rules, so changes can often remain local.

**Potential threat**
> Performance/complexity may worsen because extra layer crossings and transformations add indirection. Bridging may regain performance but weaken separation/modifiability.

## 22. Publish-Subscribe quality answer

**Potential enhancement**
> Modifiability/extensibility improves because new subscribers can be added/removed without changing publisher correctness or requiring publishers to know subscriber identities.

**Potential threat**
> Latency, ordering, delivery reliability or predictability may worsen because event dissemination is indirect and may be asynchronous/broadcast.

## 23. Shared-Data quality answer

**Potential enhancement**
> Independent accessors can exchange persistent information indirectly through a shared store, reducing direct accessor-to-accessor coupling.

**Potential threat**
> The store may bottleneck or become a single point of failure; all accessors may also become coupled to a shared schema, and centralized sensitive data raises security/privacy concerns.

## 24. MVC quality answer

**Potential enhancement**
> Modifiability/testability/usability can improve by separating application state/functionality (Model), presentation (View), and input mediation (Controller), allowing multiple views over the same model.

**Potential threat**
> Complexity increases, especially for simple interfaces or toolkits that naturally combine input/output widgets.

## 25. Map-Reduce quality answer

**Potential enhancement**
> Throughput/scalability/resilience can improve because the infrastructure partitions huge datasets across many map/reduce tasks and can monitor/restart tasks.

**Potential threat**
> Framework overhead and partition skew can reduce performance; complex multi-stage workflows increase design complexity.

## 26. Multi-Tier quality answer

**Potential enhancement**
> Security/performance/availability/modifiability may improve because runtime component groups can be deployed, scaled and protected independently and cross-tier communication can be constrained.

**Potential threat**
> More tiers add hardware, software, networking and operational complexity/cost.

## 27. ATAM universal answer

ATAM evaluates an architecture **against prioritized quality-attribute scenarios and business drivers**, not against vague claims like “this is a good architecture.”

Nine steps:
1. Present ATAM
2. Present business drivers
3. Present architecture
4. Identify architectural approaches
5. Generate QA utility tree
6. Analyze architectural approaches
7. Brainstorm/prioritize scenarios
8. Re-analyze approaches using highest-ranked new scenarios
9. Present results

Important outputs:
- prioritized QA scenarios,
- risks and non-risks,
- risk themes,
- sensitivity points,
- trade-off points,
- mapping from architectural decisions to quality consequences.

### Sensitivity point
A decision/property where a small change has a significant effect on a quality attribute.

### Trade-off point
A decision/property that affects multiple quality attributes in competing ways.

## 28. Implementation-conformance answer

Architecture is not useful if implementation silently violates it. Ways to preserve conformance include:
- embed architectural constraints in code structure,
- use frameworks/templates that enforce intended interactions,
- automated/static tools to detect violations,
- synchronize documentation and code.

Example: if strict layering forbids UI → Data Access, tooling/tests can detect direct dependency violations.

## 29. Architecture-informed testing answer

Architecture guides testing priorities:
- **Unit** — individual units/components.
- **Integration** — interfaces/interactions between units.
- **System** — end-to-end system behaviour and quality concerns.
- **Acceptance** — stakeholder/user acceptance criteria.
- **Regression** — ensure changes did not break prior behaviour.

Testing may be black-box, white-box or gray-box. Risk-based testing should focus effort on architecturally significant, failure-prone or high-business-impact paths.

## 30. Design-pattern category answer

**Creational** — how objects are created while hiding/controlling creation decisions.
Examples: Abstract Factory, Builder, Factory Method, Prototype, Singleton.

**Structural** — how classes/objects are composed into larger structures.
Examples: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.

**Behavioral** — how objects communicate and responsibilities/algorithms are distributed.
Examples: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.

### Patterns emphasized in the course material
- Factory Method
- Singleton
- Composite
- Facade
- Observer
- State

## 31. Six GoF pattern quick cards

### Factory Method
Use when object creation should be delegated/overridden rather than hard-coded to concrete classes. Benefit: creation is decoupled from client logic. Cost: more classes/indirection.

### Singleton
Use when exactly one controlled instance is required and globally accessible. Benefit: controlled unique instance. Cost: global state/coupling and testability concerns; do not use merely for convenience.

### Composite
Use when clients should treat individual objects and recursive compositions uniformly, typically tree structures. Benefit: uniform operations over leaf/composite. Cost: can make type-specific constraints harder.

### Facade
Use when clients need a simple unified interface to a complex subsystem. Benefit: reduces client coupling to subsystem details. Cost: facade can become bloated or a bottleneck if overloaded with responsibilities.

### Observer
Use when one subject's state change should notify a variable set of dependent observers automatically. Benefit: decouples notification sender from concrete dependents. Cost: update cascades/order/debugging can become difficult.

### State
Use when an object's behavior must change with its internal state and large conditional logic would otherwise spread through the code. Benefit: localizes state-specific behavior. Cost: creates additional state classes and transition complexity.

## 32. Universal “compare two patterns” answer

Do not compare by listing random pros/cons. Compare the **architectural problem**:

> Pattern A primarily solves **[problem A]** using **[mechanism A]**, whereas Pattern B primarily solves **[problem B]** using **[mechanism B]**. For this requirement, **[A/B]** is a better fit because **[scenario-specific reason]**. The other pattern becomes preferable if the requirement changes to **[condition]**.

## 33. Universal “is this enough?” critical-answer pattern

When a claim says “we added X, therefore quality Y is guaranteed,” challenge it:

> X is only a **mechanism/candidate decision**, not a guarantee. We must check whether remaining dependencies, bottlenecks, single points of failure, trust boundaries, workload, deployment constraints and measurable response criteria allow quality Y to be achieved.

Examples:
- “Three servers = high availability” — not if all depend on one failed database or no failover exists.
- “Separate service = secure” — not if all components share credentials/network privileges.
- “More layers = more modifiable” — not if dependencies violate boundaries or the added indirection overwhelms the benefit.
- “P2P = available” — not if the required resource has no alternative provider.

## 34. Fast exam-writing formula

For a 2-mark justification, aim for:
1. **Name the choice.**
2. **Tie one mechanism to the scenario.**

For a 4–6 mark explanation:
1. State pattern/quality.
2. Define the relevant architectural problem.
3. Map concrete elements/connectors.
4. Explain mechanism.
5. Explain quality consequence.
6. State limitation/trade-off if asked.

For a 10-mark pattern deep dive:
1. Concrete scenario.
2. Elements.
3. Connector/interaction.
4. Constraints.
5. One enhanced QA with mechanism.
6. One threatened QA with mechanism.
7. Pattern-specific fine point (parallelism, discovery, registry, variants, etc.).
8. Avoid absolute claims.

## 35. Last-minute recognition table

| Wording in question | First pattern to test |
|---|---|
| centrally managed service accessed by distributed clients | Client-Server |
| notify unknown/changing interested consumers | Publish-Subscribe |
| successive reusable data transformations | Pipe-and-Filter |
| equal participants both request/provide | Peer-to-Peer |
| integrate heterogeneous/external services via contracts | SOA |
| clients should not know provider identity/location | Broker |
| multiple synchronized UI representations of same data | MVC |
| many components share persistent data | Shared-Data |
| separate code responsibilities for independent evolution | Layer |
| massive file-based parallel batch computation | Map-Reduce |
| runtime groups deployed/scaled/protected separately | Multi-Tier |

Treat this table as a **candidate generator**, not a substitute for justification.
