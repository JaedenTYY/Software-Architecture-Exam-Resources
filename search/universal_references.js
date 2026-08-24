window.UNIVERSAL_REFERENCES = [
  {
    "id": "REF-001",
    "title": "Universal architectural-pattern selection answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Use this sequence:\n\n**Requirement → architectural problem → pattern → elements/connector → mechanism → quality consequence → trade-off**\n\nTemplate:\n\n> **[Pattern]** is suitable because the requirement needs **[architectural problem]**. In this scenario, **[element A]** maps to **[concrete system element]**, while **[element B]** maps to **[concrete system element]**, interacting through **[connector/relation]**. This arrangement **[mechanism]**, which can enhance **[quality attribute]** because **[causal explanation]**. A limitation is that it may threaten **[different quality attribute]** because **[causal explanation]**.\n\nAvoid: “Use X because X is good / scalable / secure.” Always explain **how** the structure causes the quality effect."
  },
  {
    "id": "REF-002",
    "title": "Universal advantage / limitation answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Advantage**\n> The pattern can enhance **[QA]** because **[specific structural mechanism]**. In this scenario, **[concrete consequence]**.\n\n**Limitation**\n> The pattern may threaten **[QA]** because **[specific structural mechanism or constraint]**. In this scenario, **[concrete consequence]**.\n\nUse “can/may” rather than claiming a pattern guarantees a quality."
  },
  {
    "id": "REF-003",
    "title": "Universal six-part Quality Attribute Scenario",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Ask six questions:\n\n1. **Source — Who/what causes it?**\n2. **Stimulus — What event occurs?**\n3. **Environment — Under what condition?**\n4. **Artifact — Which part of the system is affected?**\n5. **Response — What does the system do?**\n6. **Response Measure — How well must it do it?**\n\nTemplate table:\n\n| Part | Fill-in |\n|---|---|\n| Source | [user/system/fault/attacker/developer/etc.] |\n| Stimulus | [an event, not merely a feature name] |\n| Environment | [normal operation/peak load/failure/attack/development time/etc.] |\n| Artifact | [specific service/component/system] |\n| Response | [observable system action] |\n| Response Measure | [quantified acceptance criterion] |\n\n### Good response-measure examples\n- Performance: “95% of requests complete within 2 seconds.”\n- Availability: “Service is restored within 5 seconds” or “99.99% uptime.”\n- Security: “100% of unauthorized requests are rejected and logged.”\n- Modifiability: “One developer completes the change in two working days, affecting no more than two modules.”\n- Testability: “A defect can be isolated to one component within 30 minutes using automated tests/logging.”\n- Usability: “90% of first-time users complete the task within 3 minutes without assistance.”\n- Interoperability: “A new standards-compliant provider can exchange the required message without modifying existing consumers.”"
  },
  {
    "id": "REF-004",
    "title": "Runtime vs design/development-time reasoning",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Do not memorize only a list. Ask whether the quality is observed through **running-system behaviour** or through **changing/building/testing the system**.\n\n- Performance — runtime\n- Availability — runtime\n- Security — largely runtime\n- Usability — runtime/user interaction\n- Interoperability — typically runtime integration behaviour\n- Modifiability — primarily design/development time\n- Testability — primarily development/testing time"
  },
  {
    "id": "REF-005",
    "title": "Universal Utility Tree answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Structure:\n\n```text\nUtility\n├── Quality Attribute\n│   ├── Refinement\n│   │   └── Concrete QA scenario [Business Value, Architectural Impact]\n```\n\nPrioritize every leaf with H/M/L for:\n- **Business Value**: importance to stakeholders/business goals.\n- **Architectural Impact**: how strongly satisfying it constrains or shapes architecture.\n\nA scenario with **[H,H]** is a strong Architecture Significant Requirement (ASR) candidate."
  },
  {
    "id": "REF-006",
    "title": "Universal ASR explanation",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "> An ASR is a requirement with a **profound effect on architecture** and **high business/mission importance**. It is architecturally significant because satisfying it forces or strongly constrains structural/design decisions rather than being a local implementation detail.\n\nWhen identifying ASRs, explain:\n1. business/mission value,\n2. architectural impact,\n3. concrete decisions the requirement is likely to force."
  },
  {
    "id": "REF-007",
    "title": "Universal QAW answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Quality Attribute Workshop flow:\n1. Presentation and introductions\n2. Business/mission presentation\n3. Architectural plan presentation\n4. Identify architectural drivers\n5. Brainstorm scenarios\n6. Consolidate similar scenarios\n7. Prioritize scenarios\n8. Refine high-priority scenarios into six-part QA scenarios\n\nPurpose: elicit, clarify and prioritize architecturally significant quality concerns with stakeholders **before or while architecture is being shaped**."
  },
  {
    "id": "REF-008",
    "title": "Universal PALM answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Use PALM when business goals are unclear or poorly connected to architectural concerns. The key reasoning is:\n\n**business goals → refined/traceable goals → quality concerns → ASRs → architecture**\n\nIn an exam, emphasize traceability: architectural decisions should be defensible in terms of the business/mission goals they support."
  },
  {
    "id": "REF-009",
    "title": "Tactic vs Pattern",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "> A **tactic** is a focused design decision intended to influence one quality-attribute response. A **pattern** is a larger recurring architectural organization addressing a recurring context/problem and normally embodies several design decisions/tactics.\n\nMnemonic: **pattern = molecule; tactic = atom**.\n\nA pattern can still need tactics to repair its weaknesses. Example: a Broker may need redundancy, load balancing, heartbeat/ping-echo or replicated brokers to improve availability/performance."
  },
  {
    "id": "REF-010",
    "title": "Universal ADD answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Attribute-Driven Design is iterative and quality-driven:\n\n1. Choose the element to design.\n2. Identify the ASRs relevant to that element.\n3. Generate a design solution using suitable patterns/tactics/decisions.\n4. Verify/refine requirements and produce input for the next iteration.\n5. Repeat until the ASRs are sufficiently satisfied.\n\nGood exam reasoning:\n> Do not choose a pattern first and search for a justification later. Start from ASRs, generate candidate structures, evaluate consequences, decompose, then iterate."
  },
  {
    "id": "REF-011",
    "title": "Universal architecture documentation answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "### Informal notation\n- Fast and easy for communication.\n- Weak semantics; ambiguity is possible.\n\n### Semiformal notation\n- Defined syntax/conventions (for example UML-style views).\n- Better precision and stakeholder communication without the cost of full formalism.\n\n### Formal notation\n- Mathematically precise and analyzable.\n- Highest rigor but greater expertise/cost and often excessive for ordinary stakeholder communication.\n\n**Default exam choice:** semiformal notation is often the strongest general-purpose choice when the system needs understandable but less ambiguous architectural documentation. Do not choose it blindly—justify against the scenario.\n\n### View documentation template\n1. Primary Presentation\n2. Element Catalog\n3. Context Diagram\n4. Variability Guide\n5. Rationale"
  },
  {
    "id": "REF-012",
    "title": "Universal structure / view answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "- **Module structure** — static organization of implementation responsibilities/code.\n- **Component-and-Connector structure** — runtime components and interactions.\n- **Allocation structure** — mapping software to environment (hardware, files, teams, deployment).\n\n**Structure = what exists. View = representation of a structure.**\n\n### Cross-view mapping\n> A mapping explains how elements in one view correspond to elements in another. It can be one-to-one, one-to-many, many-to-one or many-to-many. Typical relations include “implements,” “is implemented by,” and “is included in.”"
  },
  {
    "id": "REF-013",
    "title": "Layer vs Multi-Tier",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Layer**\n- Module pattern\n- Organizes implementation responsibilities\n- Relation: allowed-to-use\n- Main concerns: separation of concerns, modifiability/maintainability\n- Bridging/upward dependencies can weaken the intended separation\n\n**Multi-Tier**\n- Allocation pattern\n- Groups runtime components into tiers and maps them to computing platforms\n- Relation: communicates-with / allocated-to\n- Main concerns: deployment, scaling, security boundaries, runtime separation\n\nA system can use both: layers can be mapped onto runtime tiers."
  },
  {
    "id": "REF-014",
    "title": "Client-Server vs Peer-to-Peer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Client-Server**\n- Asymmetric roles in an interaction\n- Client requests; server provides\n- Centralized service/resource management\n- Potential bottleneck/SPOF\n\n**P2P**\n- Peers can both request and provide\n- Dynamic attachments/discovery\n- Distributed resources/demand\n- Can improve scalability/availability if alternatives/replication exist\n- Trust, security, consistency and recovery are harder\n\nA component called “server” can still act as a client to another server; these are interaction roles."
  },
  {
    "id": "REF-015",
    "title": "Broker vs SOA",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Broker**\n- Core issue: consumers should not know provider identity/location.\n- Broker/proxies mediate locating, forwarding and returning requests.\n- Strongly about **location/identity transparency and dynamic binding**.\n\n**SOA**\n- Core issue: integrate independent/heterogeneous/external services through published contracts over a network.\n- Provider, consumer; optional registry, ESB, orchestration.\n- Strongly about **service contracts and interoperability**.\n\nA SOA deployment may use a broker-like intermediary, so justify using the problem being solved rather than diagram shape."
  },
  {
    "id": "REF-016",
    "title": "Publish-Subscribe vs Observer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Publish-Subscribe**\n- Architectural/C&C pattern.\n- Publishers and subscribers communicate through a publish-subscribe connector/event distributor.\n- Publisher does not need identities of recipients.\n- Useful for system-level event dissemination.\n\n**Observer**\n- GoF behavioral design pattern at implementation/design level.\n- Subject maintains/notifies observers when state changes.\n- Useful for object-level notification dependencies.\n\nSame broad notification idea, different abstraction level."
  },
  {
    "id": "REF-017",
    "title": "Pipe-and-Filter vs Map-Reduce",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Pipe-and-Filter**\n- Successive transformations of a stream.\n- Filters transform; pipes transport.\n- Pipeline parallelism: different filters can process different items concurrently.\n- Good for reusable staged transformations.\n\n**Map-Reduce**\n- Allocation pattern for huge file-based datasets.\n- Many stateless Map tasks operate in parallel, infrastructure shuffles/sorts key/value output, Reduce tasks combine results.\n- Good for massively parallel batch data processing and infrastructure-managed resilience."
  },
  {
    "id": "REF-018",
    "title": "Pipe-and-Filter parallelization answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "> Buffered pipes decouple adjacent filters sufficiently for **pipeline parallelism**. While Filter C processes item 1, Filter B can process item 2 and Filter A can process item 3. This can increase throughput, but many stages can also add buffering, synchronization, copying and scheduling overhead."
  },
  {
    "id": "REF-019",
    "title": "Peer-to-Peer quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Availability/scalability can improve because demand and resource provision are distributed and another peer with overlapping resources may continue service when one peer disappears.\n\n**Potential threat**\n> Security/consistency may be threatened because decentralized peers are harder to authenticate/control and replicas/resources may diverge.\n\nNever claim P2P guarantees availability: if only one peer holds the needed resource, its loss can still cause service failure."
  },
  {
    "id": "REF-020",
    "title": "Client-Server quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Centralized control/consistency can improve because shared services/resources are managed by servers and requested by distributed clients.\n\n**Potential threat**\n> Performance and availability may be threatened because a central server can become a bottleneck or single point of failure.\n\nMitigations such as replication/load balancing can improve those qualities but add cost/complexity."
  },
  {
    "id": "REF-021",
    "title": "Layer quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Modifiability improves when semantically coherent responsibilities are isolated behind stable interfaces and dependencies follow allowed-to-use rules, so changes can often remain local.\n\n**Potential threat**\n> Performance/complexity may worsen because extra layer crossings and transformations add indirection. Bridging may regain performance but weaken separation/modifiability."
  },
  {
    "id": "REF-022",
    "title": "Publish-Subscribe quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Modifiability/extensibility improves because new subscribers can be added/removed without changing publisher correctness or requiring publishers to know subscriber identities.\n\n**Potential threat**\n> Latency, ordering, delivery reliability or predictability may worsen because event dissemination is indirect and may be asynchronous/broadcast."
  },
  {
    "id": "REF-023",
    "title": "Shared-Data quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Independent accessors can exchange persistent information indirectly through a shared store, reducing direct accessor-to-accessor coupling.\n\n**Potential threat**\n> The store may bottleneck or become a single point of failure; all accessors may also become coupled to a shared schema, and centralized sensitive data raises security/privacy concerns."
  },
  {
    "id": "REF-024",
    "title": "MVC quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Modifiability/testability/usability can improve by separating application state/functionality (Model), presentation (View), and input mediation (Controller), allowing multiple views over the same model.\n\n**Potential threat**\n> Complexity increases, especially for simple interfaces or toolkits that naturally combine input/output widgets."
  },
  {
    "id": "REF-025",
    "title": "Map-Reduce quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Throughput/scalability/resilience can improve because the infrastructure partitions huge datasets across many map/reduce tasks and can monitor/restart tasks.\n\n**Potential threat**\n> Framework overhead and partition skew can reduce performance; complex multi-stage workflows increase design complexity."
  },
  {
    "id": "REF-026",
    "title": "Multi-Tier quality answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Potential enhancement**\n> Security/performance/availability/modifiability may improve because runtime component groups can be deployed, scaled and protected independently and cross-tier communication can be constrained.\n\n**Potential threat**\n> More tiers add hardware, software, networking and operational complexity/cost."
  },
  {
    "id": "REF-027",
    "title": "ATAM universal answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "ATAM evaluates an architecture **against prioritized quality-attribute scenarios and business drivers**, not against vague claims like “this is a good architecture.”\n\nNine steps:\n1. Present ATAM\n2. Present business drivers\n3. Present architecture\n4. Identify architectural approaches\n5. Generate QA utility tree\n6. Analyze architectural approaches\n7. Brainstorm/prioritize scenarios\n8. Re-analyze approaches using highest-ranked new scenarios\n9. Present results\n\nImportant outputs:\n- prioritized QA scenarios,\n- risks and non-risks,\n- risk themes,\n- sensitivity points,\n- trade-off points,\n- mapping from architectural decisions to quality consequences.\n\n### Sensitivity point\nA decision/property where a small change has a significant effect on a quality attribute.\n\n### Trade-off point\nA decision/property that affects multiple quality attributes in competing ways."
  },
  {
    "id": "REF-028",
    "title": "Implementation-conformance answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Architecture is not useful if implementation silently violates it. Ways to preserve conformance include:\n- embed architectural constraints in code structure,\n- use frameworks/templates that enforce intended interactions,\n- automated/static tools to detect violations,\n- synchronize documentation and code.\n\nExample: if strict layering forbids UI → Data Access, tooling/tests can detect direct dependency violations."
  },
  {
    "id": "REF-029",
    "title": "Architecture-informed testing answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Architecture guides testing priorities:\n- **Unit** — individual units/components.\n- **Integration** — interfaces/interactions between units.\n- **System** — end-to-end system behaviour and quality concerns.\n- **Acceptance** — stakeholder/user acceptance criteria.\n- **Regression** — ensure changes did not break prior behaviour.\n\nTesting may be black-box, white-box or gray-box. Risk-based testing should focus effort on architecturally significant, failure-prone or high-business-impact paths."
  },
  {
    "id": "REF-030",
    "title": "Design-pattern category answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "**Creational** — how objects are created while hiding/controlling creation decisions.\nExamples: Abstract Factory, Builder, Factory Method, Prototype, Singleton.\n\n**Structural** — how classes/objects are composed into larger structures.\nExamples: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.\n\n**Behavioral** — how objects communicate and responsibilities/algorithms are distributed.\nExamples: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.\n\n### Patterns emphasized in the course material\n- Factory Method\n- Singleton\n- Composite\n- Facade\n- Observer\n- State"
  },
  {
    "id": "REF-031",
    "title": "Six GoF pattern quick cards",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "### Factory Method\nUse when object creation should be delegated/overridden rather than hard-coded to concrete classes. Benefit: creation is decoupled from client logic. Cost: more classes/indirection.\n\n### Singleton\nUse when exactly one controlled instance is required and globally accessible. Benefit: controlled unique instance. Cost: global state/coupling and testability concerns; do not use merely for convenience.\n\n### Composite\nUse when clients should treat individual objects and recursive compositions uniformly, typically tree structures. Benefit: uniform operations over leaf/composite. Cost: can make type-specific constraints harder.\n\n### Facade\nUse when clients need a simple unified interface to a complex subsystem. Benefit: reduces client coupling to subsystem details. Cost: facade can become bloated or a bottleneck if overloaded with responsibilities.\n\n### Observer\nUse when one subject's state change should notify a variable set of dependent observers automatically. Benefit: decouples notification sender from concrete dependents. Cost: update cascades/order/debugging can become difficult.\n\n### State\nUse when an object's behavior must change with its internal state and large conditional logic would otherwise spread through the code. Benefit: localizes state-specific behavior. Cost: creates additional state classes and transition complexity."
  },
  {
    "id": "REF-032",
    "title": "Universal “compare two patterns” answer",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "Do not compare by listing random pros/cons. Compare the **architectural problem**:\n\n> Pattern A primarily solves **[problem A]** using **[mechanism A]**, whereas Pattern B primarily solves **[problem B]** using **[mechanism B]**. For this requirement, **[A/B]** is a better fit because **[scenario-specific reason]**. The other pattern becomes preferable if the requirement changes to **[condition]**."
  },
  {
    "id": "REF-033",
    "title": "Universal “is this enough?” critical-answer pattern",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "When a claim says “we added X, therefore quality Y is guaranteed,” challenge it:\n\n> X is only a **mechanism/candidate decision**, not a guarantee. We must check whether remaining dependencies, bottlenecks, single points of failure, trust boundaries, workload, deployment constraints and measurable response criteria allow quality Y to be achieved.\n\nExamples:\n- “Three servers = high availability” — not if all depend on one failed database or no failover exists.\n- “Separate service = secure” — not if all components share credentials/network privileges.\n- “More layers = more modifiable” — not if dependencies violate boundaries or the added indirection overwhelms the benefit.\n- “P2P = available” — not if the required resource has no alternative provider."
  },
  {
    "id": "REF-034",
    "title": "Fast exam-writing formula",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "For a 2-mark justification, aim for:\n1. **Name the choice.**\n2. **Tie one mechanism to the scenario.**\n\nFor a 4–6 mark explanation:\n1. State pattern/quality.\n2. Define the relevant architectural problem.\n3. Map concrete elements/connectors.\n4. Explain mechanism.\n5. Explain quality consequence.\n6. State limitation/trade-off if asked.\n\nFor a 10-mark pattern deep dive:\n1. Concrete scenario.\n2. Elements.\n3. Connector/interaction.\n4. Constraints.\n5. One enhanced QA with mechanism.\n6. One threatened QA with mechanism.\n7. Pattern-specific fine point (parallelism, discovery, registry, variants, etc.).\n8. Avoid absolute claims."
  },
  {
    "id": "REF-035",
    "title": "Last-minute recognition table",
    "source": "universal_answers.md",
    "concepts": [],
    "body": "| Wording in question | First pattern to test |\n|---|---|\n| centrally managed service accessed by distributed clients | Client-Server |\n| notify unknown/changing interested consumers | Publish-Subscribe |\n| successive reusable data transformations | Pipe-and-Filter |\n| equal participants both request/provide | Peer-to-Peer |\n| integrate heterogeneous/external services via contracts | SOA |\n| clients should not know provider identity/location | Broker |\n| multiple synchronized UI representations of same data | MVC |\n| many components share persistent data | Shared-Data |\n| separate code responsibilities for independent evolution | Layer |\n| massive file-based parallel batch computation | Map-Reduce |\n| runtime groups deployed/scaled/protected separately | Multi-Tier |\n\nTreat this table as a **candidate generator**, not a substitute for justification."
  }
];
