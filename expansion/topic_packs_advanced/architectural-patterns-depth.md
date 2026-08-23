# Architectural Patterns (Depth)

*Advanced Depth bank — 38 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0056 — Layer — bridging (Brutal, 7 marks)

**Type:** Diagram-reading judgement  
**Source:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture10_Documenting Software Architectures.pdf

Lecture 4 says that when looking at a stack of boxes 'sometimes it is impossible to tell whether layer bridging is allowed or not'. Explain what layer bridging is, why the diagram alone cannot settle it, and what the lecture says an architect must therefore do.

<details>
<summary><strong>Show answer</strong></summary>

Bridging is when modules in one layer are permitted to use modules in a **non-adjacent lower** layer, skipping the layer(s) between. The diagram cannot settle it because the layered notation encodes the allowed-to-use relation through *geometric adjacency* rather than through arrows — adjacency tells you the ordering but not whether a layer may reach past its immediate neighbour. Two designs with identical box stacks can therefore have different usage rules.

The lecture's remedy: the architect 'has to include the answer in the key to the diagram's notation', which it recommends for all diagrams. This connects to Lecture 10's point that lack of a key is 'the most common mistake we see in documentation in practice'.

> **Exam trap:** Saying bridging is forbidden. The lecture does not forbid it — it says the diagram must state whether it is allowed.

*Tags: Layer, bridging, notation-key, adjacency*

</details>

---

## ADV-0057 — Layer — upward calls (Brutal, 8 marks)

**Type:** Resolve an apparent contradiction  
**Source:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

Lecture 4 states both that 'a layer isn't allowed to use any layer above it' and that 'a layer is allowed to make upward calls'. Resolve the apparent contradiction precisely, and give an example of a legitimate upward call.

<details>
<summary><strong>Show answer</strong></summary>

There is no contradiction because 'uses' has a technical definition. The lecture defines it: 'a module *uses* another module when it depends on the answer it gets back'. The prohibition is on *usage*, i.e. on a dependency where correctness requires the response. An upward **call** that expects no answer creates no such dependency, so it is permitted.

Legitimate example: a lower layer raising a callback, event or notification upward — the lower layer announces something and continues regardless of what the upper layer does with it. This is why Publish-Subscribe and MVC-style notification can coexist with strict layering. The test to apply in the exam: does the caller's correctness depend on the returned answer? If yes it is a usage and it is forbidden upward; if no it is merely a call and it is allowed.

> **Exam trap:** Treating 'call' and 'use' as synonyms. The whole resolution turns on the lecture's definition of 'uses'.

*Tags: Layer, upward-calls, uses-relation, callbacks*

</details>

---

## ADV-0058 — Layer — segmented layers (Brutal, 7 marks)

**Type:** Reason about segment rules  
**Source:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

Lecture 4 discusses layers divided into **segments**. Explain when segmentation arises, what additional information the architect must then supply, and why the lecture says arrows become necessary in segmented diagrams.

<details>
<summary><strong>Show answer</strong></summary>

Segmentation arises when a finer-grained decomposition of the modules is wanted — typically when a pre-existing set of units, such as imported modules, share the same allowed-to-use relation and are grouped inside one layer.

The architect must then specify **what usage rules are in effect among the segments**. The lecture states many usage rules are possible but they must be made explicit. Its worked figure has the top and bottom layers segmented, with segments of the top layer *not* allowed to use each other while segments of the bottom layer *are*.

Arrows become necessary because adjacency cannot express intra-layer rules: two segments side by side are equally adjacent whether or not they may use each other. The lecture says plainly that without the arrows 'it will be harder to differentiate the different usage rules within segmented layers'.

> **Exam trap:** Assuming all segments in a layer may freely use each other. The rule differs per layer and must be documented.

*Tags: Layer, segments, usage-rules, notation*

</details>

---

## ADV-0059 — Layer — what is not a layered architecture (Brutal, 8 marks)

**Type:** Reject a false example  
**Source:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 4 shows a diagram of stacked boxes with arrows in which everything is allowed to use everything, and states this 'is decidedly not a layered architecture'. Explain the reasoning it gives, and state the general principle for judging whether a stack of boxes is genuinely layered.

<details>
<summary><strong>Show answer</strong></summary>

The lecture's reasoning is a modifiability argument, not a notational one: if Layer A is replaced by a different version, Layer C (which uses A) might well have to change — and 'we don't want our virtual machine layer to change every time our application layer changes'. Unrestricted usage destroys exactly the property layering exists to provide.

The general principle: a stack of boxes is layered only if a **unidirectional allowed-to-use relation** actually constrains the dependencies. The lecture is explicit that 'any old set of boxes stacked on top of each other does not constitute a layered architecture'. Connecting to Lecture 6: without the restrict-dependencies tactic the pattern loses the low coupling that makes it effective, so the diagram may look layered while the architecture is not.

A related fine point from the same lecture: orientation carries meaning in this notation. If you turn the diagram upside down so that C is on top, that represents a completely different design — unlike arrow-based diagrams, which keep their semantics under rotation.

> **Exam trap:** Judging by appearance. The test is whether dependencies are actually restricted, not whether the boxes are drawn in a stack.

*Tags: Layer, false-example, unidirectional, orientation*

</details>

---

## ADV-0060 — MVC — constraints (Very Hard, 6 marks)

**Type:** Recall an exact constraint  
**Source:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

State the two constraints Lecture 4 places on the MVC pattern, and explain what would go wrong architecturally if the second were violated.

<details>
<summary><strong>Show answer</strong></summary>

The two constraints are: (1) there must be at least one instance each of model, view and controller; (2) **the model component should not interact directly with the controller**.

Violating the second collapses the separation the pattern exists to create. The intended flow is that a controller translates user actions into changes to the model or the view, and the model notifies views of state changes. If the model reaches directly into the controller, application state becomes coupled to input mediation: the model can no longer be reused with a different input mechanism, the ability to have many controllers for one model is lost, and the loose coupling that lets the three be developed and tested in parallel disappears.

> **Exam trap:** Giving only the 'at least one of each' constraint. The model-controller prohibition is the examinable one.

*Tags: MVC, constraints, model-controller, coupling*

</details>

---

## ADV-0061 — MVC — many-to-one relations (Very Hard, 6 marks)

**Type:** Explain multiplicity  
**Source:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

Lecture 4 states there may be many views and many controllers associated with one model. Give the lecture's own example of each, and explain what architectural property makes this multiplicity possible.

<details>
<summary><strong>Show answer</strong></summary>

Many views for one model: a set of business data represented simultaneously as columns of numbers in a spreadsheet, as a scatter plot, and as a pie chart — each a separate view, each dynamically updated as the model changes, for example showing live transactions in a transaction processing system.

Many controllers for one model: a map zoomed and panned via mouse movements, trackball movements, keyboard clicks or voice commands — each form of input managed by its own controller.

What makes it possible: the components are connected by *notification* (events or callbacks carrying state updates) rather than by direct reference, so the model announces a change without knowing how many views exist or what they are. Because the components are loosely coupled they can be developed and tested in parallel and changes to one have minimal impact on the others.

> **Exam trap:** Claiming one model needs one view. The pattern's value is largely in the one-to-many case.

*Tags: MVC, multiplicity, notification, many-views*

</details>

---

## ADV-0062 — MVC — weaknesses (Brutal, 7 marks)

**Type:** Explain a conceptual mismatch  
**Source:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

Lecture 4 gives two weaknesses of MVC, one of which concerns user-interface toolkits. Explain that weakness precisely and say when it should make an architect reject MVC.

<details>
<summary><strong>Show answer</strong></summary>

The weakness: the model, view and controller abstractions may not be a good fit for some user-interface toolkits. Specifically, MVC splits input and output apart into controller and view, but these functions are 'often combined into individual widgets' in real toolkits — a text box both displays and accepts. The result is a **conceptual mismatch between the architecture and the user interface toolkit**: the architecture prescribes a separation the implementation technology does not naturally provide, so developers end up fighting the toolkit or documenting a structure the code does not have.

The other weakness is that the complexity may not be worth it for simple user interfaces.

When to reject MVC: when the interface is simple enough that the separation buys nothing, or when the chosen toolkit fuses input and output so thoroughly that enforcing the split produces architecture erosion — a documented structure the code silently violates.

> **Exam trap:** Listing 'it is complex' without the toolkit mismatch, which is the more specific and more examinable half.

*Tags: MVC, weaknesses, conceptual-mismatch, toolkit*

</details>

---

## ADV-0063 — Publish-Subscribe — variants (Brutal, 7 marks)

**Type:** Distinguish pattern variants  
**Source:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

Lecture 4 states that Publish-Subscribe 'can take several forms'. For the **List-based** variant, describe its mechanism, state its efficiency/decoupling trade-off, and say what distinguishes it from the other two.

<details>
<summary><strong>Show answer</strong></summary>

Mechanism: every publisher maintains a subscription list — a list of subscribers that have registered an interest in receiving the event.

Trade-off: less decoupled than the others, so it does not provide as much modifiability, but it can be quite efficient in terms of runtime overhead.

Distinguishing point: the publisher holds direct knowledge of its subscribers, which is also why it is the closest architectural analogue of the object-level Observer pattern.

> **Exam trap:** Treating Publish-Subscribe as one undifferentiated pattern. The variant choice changes the modifiability/performance answer.

*Tags: Publish-Subscribe, variants, list-based, topic-vs-content*

</details>

---

## ADV-0064 — Publish-Subscribe — variants (Brutal, 7 marks)

**Type:** Distinguish pattern variants  
**Source:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

Lecture 4 states that Publish-Subscribe 'can take several forms'. For the **Broadcast-based** variant, describe its mechanism, state its efficiency/decoupling trade-off, and say what distinguishes it from the other two.

<details>
<summary><strong>Show answer</strong></summary>

Mechanism: publishers simply publish events which are then broadcast; subscribers — or services acting on their behalf in a distributed system — examine each event as it arrives and determine whether it is of interest.

Trade-off: publishers have less or no knowledge of subscribers, but it has the potential to be very inefficient if there are lots of messages and most messages are not of interest to a particular subscriber.

Distinguishing point: the filtering work moves from the publisher to the subscriber, which is what trades efficiency for decoupling.

> **Exam trap:** Treating Publish-Subscribe as one undifferentiated pattern. The variant choice changes the modifiability/performance answer.

*Tags: Publish-Subscribe, variants, broadcast-based, topic-vs-content*

</details>

---

## ADV-0065 — Publish-Subscribe — variants (Brutal, 7 marks)

**Type:** Distinguish pattern variants  
**Source:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

Lecture 4 states that Publish-Subscribe 'can take several forms'. For the **Content-based** variant, describe its mechanism, state its efficiency/decoupling trade-off, and say what distinguishes it from the other two.

<details>
<summary><strong>Show answer</strong></summary>

Mechanism: each event is associated with a set of attributes and is delivered to a subscriber only if those attributes match subscriber-defined patterns.

Trade-off: the most expressive of the three; the lecture distinguishes it from the previous two, which it categorises broadly as 'topic-based' where topics are predefined events and a component subscribes to all events within the topic.

Distinguishing point: content is 'much more general' than a topic, so subscription granularity is finer, at the cost of evaluating matches per event.

> **Exam trap:** Treating Publish-Subscribe as one undifferentiated pattern. The variant choice changes the modifiability/performance answer.

*Tags: Publish-Subscribe, variants, content-based, topic-vs-content*

</details>

---

## ADV-0066 — Publish-Subscribe — variants (Brutal, 8 marks)

**Type:** Select a variant under constraints  
**Source:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

A system publishes 10,000 events per second; each subscriber is interested in well under 1% of them; subscribers are added and removed constantly. Select the Publish-Subscribe variant, justify it against the other two, and state the residual risk.

<details>
<summary><strong>Show answer</strong></summary>

Select **content-based**. Justification against the alternatives: broadcast-based is explicitly warned against by the lecture in exactly this situation — it 'has the potential to be very inefficient if there are lots of messages and most messages are not of interest to a particular subscriber', which describes this workload precisely. List-based would be efficient at delivery but is 'less decoupled' and 'does not provide as much modifiability', which conflicts with constantly changing subscribers since the publisher must maintain the list. Content-based delivers only where attributes match subscriber-defined patterns, so it satisfies both constraints.

Residual risk: the matching itself is per-event work, so the event distributor becomes the bottleneck and a single point of failure. The pattern's general weaknesses still apply — increased latency, negative effect on scalability and predictability of message delivery time, less control over message ordering, and delivery not guaranteed.

> **Exam trap:** Choosing broadcast because it sounds most decoupled. The lecture names this exact workload as its failure case.

*Tags: Publish-Subscribe, variant-selection, content-based, trade-off*

</details>

---

## ADV-0067 — SOA — connectors (Very Hard, 6 marks)

**Type:** Recall connector types  
**Source:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

Lecture 4 names three connector types for the SOA pattern. Describe the **SOAP connector**: what it is, and what its choice implies for coupling between consumer and provider.

<details>
<summary><strong>Show answer</strong></summary>

The SOAP connector uses the SOAP protocol for synchronous communication between web services, typically over HTTP.

Implication: synchronous coupling: the consumer waits, so consumer availability becomes tied to provider responsiveness.

The lecture notes that in practice SOA environments 'may involve a mix of the three' — the connector is a per-interaction decision, not a system-wide one.

> **Exam trap:** Listing only ESB, registry and orchestration. Those are intermediary *components*; these three are the *connectors*.

*Tags: SOA, connectors, soap, coupling*

</details>

---

## ADV-0068 — SOA — connectors (Very Hard, 6 marks)

**Type:** Recall connector types  
**Source:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

Lecture 4 names three connector types for the SOA pattern. Describe the **REST connector**: what it is, and what its choice implies for coupling between consumer and provider.

<details>
<summary><strong>Show answer</strong></summary>

The REST connector relies on the basic request/reply operations of the HTTP protocol.

Implication: simplicity and ubiquity, at the cost of weaker contract formality than SOAP.

The lecture notes that in practice SOA environments 'may involve a mix of the three' — the connector is a per-interaction decision, not a system-wide one.

> **Exam trap:** Listing only ESB, registry and orchestration. Those are intermediary *components*; these three are the *connectors*.

*Tags: SOA, connectors, rest, coupling*

</details>

---

## ADV-0069 — SOA — connectors (Very Hard, 6 marks)

**Type:** Recall connector types  
**Source:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

Lecture 4 names three connector types for the SOA pattern. Describe the **Asynchronous messaging connector**: what it is, and what its choice implies for coupling between consumer and provider.

<details>
<summary><strong>Show answer</strong></summary>

The Asynchronous messaging connector uses a messaging system to offer point-to-point or publish-subscribe asynchronous message exchanges.

Implication: decouples availability in time — the provider need not be up when the consumer sends — at the cost of losing immediate confirmation.

The lecture notes that in practice SOA environments 'may involve a mix of the three' — the connector is a per-interaction decision, not a system-wide one.

> **Exam trap:** Listing only ESB, registry and orchestration. Those are intermediary *components*; these three are the *connectors*.

*Tags: SOA, connectors, asynchronous, coupling*

</details>

---

## ADV-0070 — SOA — components vs connectors (Brutal, 8 marks)

**Type:** Separate two element kinds  
**Source:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

For the SOA pattern, Lecture 4 lists both specialised intermediary components and connector types. Separate the two lists correctly, and explain why confusing them costs marks in an elements-and-relations question.

<details>
<summary><strong>Show answer</strong></summary>

**Components** (specialised intermediaries providing infrastructure services): the ESB, which routes and transforms messages between providers and consumers, converts between protocols or technologies, performs data transformations (format, content, splitting, merging) and performs security checks; the registry of services, used by providers to register and consumers to discover services at run time; and the orchestration server, which coordinates interactions based on business-process and workflow languages, executing scripts on the occurrence of a specific event such as a purchase order request arriving.

**Connectors**: SOAP, REST, and asynchronous messaging.

Why confusing them costs marks: an elements-and-relations answer must say what the runtime *things* are and what the *interaction mechanisms* between them are. Naming an ESB as a connector misdescribes it — an ESB is itself a component that is attached via connectors, which is why the lecture's Relations entry reads 'attachment of the different kinds of components available to the respective connectors'. The distinction also matters for the availability argument: a component can fail independently, and the lecture notes the ESB 'introduces an additional point of failure'.

> **Exam trap:** Calling the ESB a connector. It is an intermediary component attached via connectors.

*Tags: SOA, components, connectors, elements-and-relations*

</details>

---

## ADV-0071 — SOA — optionality (Brutal, 7 marks)

**Type:** Argue element optionality  
**Source:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

Explain why an SOA implementation may legitimately contain no ESB, no registry and no orchestration server, and state what the lecture says happens to communication when an ESB is absent.

<details>
<summary><strong>Show answer</strong></summary>

Because those three are **specialised components an SOA application *may* use**, not mandatory constituents. The pattern's required elements are service providers and service consumers communicating over published interfaces; the intermediaries are added when the specific problem calls for them. The lecture's constraint statement reflects this: 'service consumers are connected to service providers, but intermediary components may be used'.

When an ESB is absent, the lecture states that 'service providers and consumers communicate with each other in a point-to-point fashion'. That is a real architectural difference: point-to-point removes the ESB's latency and its additional point of failure, but also removes routing, protocol conversion, data transformation and the centralised security checks — so the interoperability burden shifts back onto each pair of endpoints.

> **Exam trap:** Asserting SOA requires an ESB. Each intermediary is chosen per problem and each brings its own overhead.

*Tags: SOA, optionality, ESB, point-to-point*

</details>

---

## ADV-0072 — Peer-to-Peer — supernodes and hops (Brutal, 8 marks)

**Type:** Explain discovery mechanics  
**Source:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

Explain the mechanics Lecture 4 gives for how a peer finds another peer in a P2P network, including the roles of hops and supernodes, and state the constraints the lecture says may be placed on a P2P network.

<details>
<summary><strong>Show answer</strong></summary>

Mechanics: peers first connect to the peer-to-peer network, on which they **discover other peers** they can interact with, and then initiate actions by requesting services. A peer's search for another peer is often **propagated from one peer to its connected peers for a limited number of hops**. Some architectures include **supernodes** — specialised peer nodes with indexing or routing capabilities that allow a regular peer's search to reach a larger number of peers.

The constraints the lecture lists as possible restrictions: the number of allowable attachments to any given peer; the number of hops used for searching for a peer; which peers know about which other peers; and the observation that some P2P networks are organised with star topologies in which peers connect only to supernodes.

The architectural significance of the hop limit: it bounds search cost but also bounds reachability, so a resource may exist in the network yet be undiscoverable — availability of the *network* does not guarantee availability of a *specific resource*.

> **Exam trap:** Saying P2P has 'no central element'. Supernodes and star topologies are explicitly in the lecture, and they reintroduce centrality.

*Tags: Peer-to-Peer, supernodes, hops, discovery, constraints*

</details>

---

## ADV-0073 — Peer-to-Peer — availability mechanism (Brutal, 7 marks)

**Type:** State the precondition for a quality  
**Source:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

Lecture 4 claims P2P improves availability. State the precise mechanism it gives, then state the precondition that must hold — and give a case where P2P is chosen and availability is nevertheless not improved.

<details>
<summary><strong>Show answer</strong></summary>

Mechanism: 'typically multiple peers have overlapping capabilities, such as providing access to the same data or providing equivalent services', so a peer acting as client can collaborate with multiple peers acting as servers; if one becomes unavailable, the others can still provide the services to complete the task.

Precondition: the **overlap must actually exist**. Availability comes from redundancy of capability, not from the topology. The lecture's own caution supports this — 'small peer-to-peer systems may not be able to consistently achieve quality goals such as performance and availability'.

Case where it fails: a rare file held by exactly one peer. When that peer leaves, no alternative provider exists and the resource is unavailable, even though the network is fully functional and every other peer is reachable. A second case: the resource exists but lies beyond the configured hop limit, so it cannot be discovered.

> **Exam trap:** Asserting 'P2P is highly available' unconditionally. The lecture's mechanism depends on overlapping capability.

*Tags: Peer-to-Peer, availability, precondition, overlap*

</details>

---

## ADV-0074 — Peer-to-Peer — weaknesses (Very Hard, 6 marks)

**Type:** Explain why decentralisation costs  
**Source:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

Lecture 4 lists what becomes more complex in P2P and attributes the complexity to one root cause. Name the items and the cause, and explain the causal link for two of them.

<details>
<summary><strong>Show answer</strong></summary>

The items: managing **security, data consistency, data/service availability, backup, and recovery** are all more complex. The root cause the lecture gives is that **peer-to-peer systems are decentralized**.

Causal link for security: there is no single mediating element at which to authenticate, authorise, or inspect traffic, so every peer must be independently trustworthy and independently hardened — the trust boundary is distributed across all participants rather than concentrated.

Causal link for data consistency: with no authoritative copy and peers joining and leaving dynamically, concurrent updates can occur at multiple peers with no common serialisation point, so reconciling divergent replicas becomes an application-level problem rather than something the structure solves.

The lecture adds that small P2P systems may not consistently achieve performance and availability goals — the benefits are statistical and depend on scale.

> **Exam trap:** Listing the weaknesses without connecting them to decentralisation, which is the single cause the lecture identifies.

*Tags: Peer-to-Peer, weaknesses, decentralisation, consistency*

</details>

---

## ADV-0075 — Map-Reduce — constraints (Brutal, 8 marks)

**Type:** Recall exact constraints  
**Source:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

State the three constraints Lecture 4 places on the Map-Reduce pattern and explain, for each, what design possibility it forecloses.

<details>
<summary><strong>Show answer</strong></summary>

Constraint 1 — **the data to be analysed must exist as a set of files**. This forecloses applying Map-Reduce directly to streaming or interactively-queried data; the input must be materialised first.

Constraint 2 — **map functions are stateless and do not communicate with each other**. This forecloses any algorithm where one map instance's result depends on another's, which is precisely what allows the infrastructure to run instances in parallel across processors and to restart a failed instance without coordination. Statelessness is the enabler of the resilience, not an incidental restriction.

Constraint 3 — **the only communication between map and reduce instances is the data emitted from the map instances as key/value pairs**. This forecloses side channels, shared memory or direct calls between stages, which is what lets the infrastructure own the shuffle and sort.

Taken together the three constraints are what make the infrastructure's job — deploying, monitoring, and recovering from failure — tractable.

> **Exam trap:** Listing the constraints without explaining that statelessness is what buys the parallelism and recovery.

*Tags: Map-Reduce, constraints, stateless, key-value*

</details>

---

## ADV-0076 — Map-Reduce — weaknesses (Very Hard, 7 marks)

**Type:** Reject the pattern  
**Source:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

Lecture 4 gives three conditions under which Map-Reduce is a poor choice. State all three, and for one of them explain the underlying reason in terms of the pattern's mechanism.

<details>
<summary><strong>Show answer</strong></summary>

The three: (1) if you do not have large data sets, the overhead of map-reduce is not justified; (2) if you cannot divide your data set into similar sized subsets, the advantages of parallelism are lost; (3) operations that require multiple reduces are complex to orchestrate.

Underlying reason for (2) — partition skew: the pattern's performance benefit comes from running many map instances concurrently, so total elapsed time is bounded by the *slowest* instance, not the average. If one partition is far larger than the rest, every other processor finishes and idles while that one instance runs, and the achieved parallelism collapses towards serial execution. The infrastructure can restart a failed task but cannot rebalance an unevenly-sized one, so the problem must be prevented at partitioning time.

> **Exam trap:** Explaining skew as a correctness problem. It is purely a performance problem — the answer is still right, just slow.

*Tags: Map-Reduce, weaknesses, skew, when-not-to-use*

</details>

---

## ADV-0077 — Map-Reduce — worked example (Very Hard, 7 marks)

**Type:** Apply the mechanism concretely  
**Source:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

Using Lecture 4's own word-count example, explain exactly what the map function emits, what the infrastructure does between the two stages, and what the reduce function receives and produces.

<details>
<summary><strong>Show answer</strong></summary>

The document is the data set. The **map** function finds every word in the document and outputs a `<word, 1>` pair for each occurrence — the lecture's illustration is a document beginning 'Having a whole book . . .' producing `<Having, 1>`, `<a, 1>`, `<whole, 1>`, `<book, 1>`. Note it emits one pair per *occurrence*, performing no counting itself.

Between the stages the **infrastructure** sorts the emitted pairs so that all pairs sharing a key are grouped together. This is the shuffle/sort, and it is the infrastructure's responsibility, not the programmer's — which is why the lecture describes the pattern as solving 'a distributed and parallel sort of a large data set'.

The **reduce** function then takes that list in sorted order, adds up the 1s for each word to get a count, and outputs the result. In the lecture's extract-transform-load framing, map performs the extract and transform, and reduce performs the load.

> **Exam trap:** Claiming the map function counts. It emits a 1 per occurrence; counting happens in reduce, after the infrastructure sorts.

*Tags: Map-Reduce, word-count, shuffle-sort, worked-example*

</details>

---

## ADV-0078 — Multi-Tier — constraints (Brutal, 7 marks)

**Type:** Recall exact constraints  
**Source:** Lecture4_ArchitecturalPatterns_13_AllocationPatterns_Multi-Tier.pdf

State the three constraints Lecture 4 places on the Multi-Tier pattern, and explain what the second one rules out.

<details>
<summary><strong>Show answer</strong></summary>

Constraint 1 — **a software component belongs to exactly one tier**.

Constraint 2 — **tiers induce topological constraints that restrict which components may communicate with other components; specifically, connectors may exist only between components in the same tier or residing in adjacent tiers**. This rules out a presentation-tier component calling a data-tier component directly when an application tier sits between them: the call must pass through the intervening tier. That restriction is precisely what allows each tier to be secured, scaled and deployed independently, because the set of things that can reach a tier is known and bounded.

Constraint 3 — **tiers may constrain the kinds of communication that can take place across adjacent tiers**; the lecture's example is that some tiered patterns require call-return communication in one direction but event-based notification in the other.

> **Exam trap:** Omitting the adjacency restriction, which is the constraint that actually does the security and scaling work.

*Tags: Multi-Tier, constraints, adjacency, topology*

</details>

---

## ADV-0079 — Multi-Tier vs Layer (Brutal, 8 marks)

**Type:** Separate two confusable patterns  
**Source:** Lecture4_ArchitecturalPatterns_13_AllocationPatterns_Multi-Tier.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

Lecture 4 warns 'Don't confuse tiers with layers!'. Give the precise distinction it states, explain what a tier actually *is*, and give one consequence of the distinction for how each is documented.

<details>
<summary><strong>Show answer</strong></summary>

The distinction as the lecture states it: **layering is a pattern of modules — a unit of implementation — while tiers applies only to runtime entities**. Layer is therefore a *module* pattern and Multi-Tier is an *allocation* pattern.

What a tier is: the lecture is emphatic that 'tiers are not components, but rather logical groupings of components'. A tier is a grouping construct, which is why its relations are 'is part of' (to group components into tiers), 'communicates with' (to show interaction), and 'allocated to' (when tiers map to computing platforms).

Consequence for documentation: a layered view answers implementation-time questions — what may use what, what changes when a layer is replaced — and belongs in a module view. A tiered view answers runtime and deployment questions — what executes where, what can be scaled or firewalled independently — and belongs in an allocation view. The same system routinely has both, and Lecture 10's cross-view mapping is what relates them.

> **Exam trap:** Saying tiers are 'physical' and layers 'logical'. Tiers are themselves logical groupings that may or may not map onto separate platforms.

*Tags: Multi-Tier, Layer, module-vs-allocation, distinction*

</details>

---

## ADV-0080 — Broker — proxies (Very Hard, 7 marks)

**Type:** Explain an element's purpose  
**Source:** Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf

Lecture 4 lists client-side proxy and server-side proxy among the Broker pattern's elements. State what they do, why the lecture marks them optional, and what an architect loses by omitting them.

<details>
<summary><strong>Show answer</strong></summary>

Both proxies 'manage the actual communication with the broker, including marshaling, sending, and unmarshaling of messages'. They are marked optional because the Relations entry says the attachment relation associates clients '(and, optionally, client-side proxies)' and servers '(and, optionally, server-side proxies)' with brokers — the pattern works without them if clients and servers handle marshalling themselves.

What is lost by omitting them: the marshalling concern moves into the client and server code, so every participant must know the wire format. That re-couples participants to a communication detail the broker was meant to hide, and it means a change of transport or serialisation becomes a change to every client and server rather than a change to the proxy layer. In Lecture 6's terms, the proxy *is* the use-an-intermediary tactic applied to the communication concern specifically.

> **Exam trap:** Treating the proxies as mandatory. The lecture explicitly parenthesises them as optional.

*Tags: Broker, proxies, marshalling, optional-elements*

</details>

---

## ADV-0081 — Broker — testability (Brutal, 7 marks)

**Type:** Explain an unaddressed weakness  
**Source:** Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf; Lecture6_Relationships Between Tactics and Patterns.pdf

Lecture 4 lists testability among Broker's weaknesses. State the reason it gives, and explain why this weakness is harder to fix with tactics than Broker's availability weakness.

<details>
<summary><strong>Show answer</strong></summary>

The reason: brokers are employed in complex multi-process and multiprocessor systems that are typically highly dynamic, with requests and responses typically asynchronous — 'all of this makes testing and debugging such systems extremely difficult'. Lecture 6 adds that a broker 'may be difficult to test' because it operates in highly dynamic environments where the conditions leading to a failure may be difficult to replicate.

Why it is harder to fix than availability: the availability weakness is a *structural* deficiency with a structural remedy — replicate the broker, share state, load balance, add heartbeat. Testability is a deficiency in **controllability and observability**, which Lecture 7 identifies as testability's defining requirements. Replicating brokers does not make the system easier to control or observe; it makes it harder, because there are now more asynchronous interleavings to reproduce. The tactics that repair availability actively worsen testability, which is itself a trade-off point in ATAM terms.

> **Exam trap:** Assuming every listed weakness has a tactic that fixes it. Some tactics make other weaknesses worse.

*Tags: Broker, testability, controllability, tactic-conflict*

</details>

---

## ADV-0082 — Shared-Data — multiple stores (Brutal, 8 marks)

**Type:** Reason about replication  
**Source:** Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf

Lecture 4 says that when a system has more than one data store, 'a key architecture concern is the mapping of data and computation to the data'. Explain why multiple stores arise, the two reasons the lecture gives, and the trade-off replication introduces.

<details>
<summary><strong>Show answer</strong></summary>

Why multiple stores arise — reason one: the data is 'naturally, or historically, partitioned into separable stores'. This is a fact about the domain or the system's history rather than a deliberate quality decision.

Reason two: 'data may be replicated over several stores to improve performance or availability through redundancy'. This is a deliberate decision.

The trade-off replication introduces: redundancy improves read performance and survives the loss of a store, but it creates a consistency obligation — the same logical datum now exists in more than one place and the copies can diverge. The lecture flags data consistency first in its list of the analyses associated with this pattern, alongside performance, security, privacy, availability, scalability and compatibility with existing repositories.

The 'mapping of data and computation to the data' is a key concern because placing computation far from the data it needs reintroduces the latency that replication was meant to remove.

> **Exam trap:** Presenting replication as a pure win. It converts an availability problem into a consistency problem.

*Tags: Shared-Data, replication, multiple-stores, consistency*

</details>

---

## ADV-0083 — Shared-Data — schema coupling (Very Hard, 7 marks)

**Type:** Explain an indirect coupling  
**Source:** Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf

Lecture 4 claims Shared-Data supports modifiability *and* lists producer-consumer coupling as a weakness. Reconcile these, naming the exact form of coupling that remains.

<details>
<summary><strong>Show answer</strong></summary>

They are consistent because they concern different kinds of coupling. The modifiability benefit is that 'producers do not have direct knowledge of the consumers' — there is no *referential* coupling, since accessors interact only with the store and never with each other, so a consumer can be added without touching any producer.

The residual weakness is that 'producers and consumers of data may be coupled through their knowledge of the structure of the shared data'. This is **schema coupling**: everyone must agree on how the data is shaped and what it means. It is indirect and invisible in a component diagram, which is what makes it dangerous — a change to the schema is a change to the implicit contract every accessor depends on, so it propagates to all of them at once even though no accessor references any other.

The practical consequence: adding an accessor is cheap; changing the schema is expensive. An architect should therefore expect Shared-Data to be modifiable with respect to *participants* and rigid with respect to *data structure*.

> **Exam trap:** Declaring the lecture inconsistent. The two statements are about referential coupling and schema coupling respectively.

*Tags: Shared-Data, schema-coupling, modifiability, reconcile*

</details>

---

## ADV-0084 — Pipe-and-Filter — pipeline parallelism (Brutal, 8 marks)

**Type:** Explain the concurrency mechanism  
**Source:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf

Lecture 4 says filters 'can execute asynchronously and concurrently' and attributes this to one specific property of pipes. Name the property, explain the mechanism, and state the associated cost the lecture gives.

<details>
<summary><strong>Show answer</strong></summary>

The property: **pipes buffer data during communication**. The lecture states it directly — 'pipes buffer data during communication. Because of this property, filters can execute asynchronously and concurrently.'

Mechanism: buffering decouples the producing filter's timing from the consuming filter's timing. A filter can write its output and continue with the next data item without waiting for the downstream filter to be ready, so at any instant different filters are working on *different data items* simultaneously. This is pipeline parallelism, and it is distinct from data parallelism — the stages are different, not replicated.

The cost: 'having large numbers of independent filters can add substantial amounts of computational overhead, because each filter runs as its own thread or process'. The lecture also warns that pipe-and-filter may be inappropriate for long-running computations without checkpoint/restore, since the failure of any filter or pipe can cause the entire pipeline to fail.

> **Exam trap:** Attributing the concurrency to the filters being independent. Independence is necessary but the *buffering in the pipes* is the stated cause.

*Tags: Pipe-and-Filter, pipeline-parallelism, buffering, overhead*

</details>

---

## ADV-0085 — Pipe-and-Filter — pipe semantics (Very Hard, 6 marks)

**Type:** State exact connector properties  
**Source:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf

State the four properties Lecture 4 attributes to a pipe, and explain what would break if the third were not guaranteed.

<details>
<summary><strong>Show answer</strong></summary>

The four: (1) a pipe conveys data from a filter's output port(s) to another filter's input port(s); (2) a pipe has a **single source** for its input and a **single target** for its output; (3) a pipe **preserves the sequence** of data items; (4) a pipe **does not alter** the data passing through.

If sequence preservation were not guaranteed, filters could no longer be reasoned about independently. The lecture's stated benefit is that independent processing at each step supports 'reuse, parallelization, and simplified reasoning about overall behavior' — that reasoning depends on each filter seeing the stream in the order the previous filter produced it. Without ordering, a filter's correctness would depend on the arrival interleaving, so filters could not be composed freely, and the reusability the pattern exists to provide would be lost.

Property (4) matters for the same reason: a pipe that transformed data would be a filter, and the separation of transport from transformation would collapse.

> **Exam trap:** Forgetting the single-source/single-target restriction, which is what distinguishes a pipe from a general event bus.

*Tags: Pipe-and-Filter, pipe, connector-properties, ordering*

</details>

---

## ADV-0086 — Client-Server — asymmetry (Very Hard, 7 marks)

**Type:** Explain a structural asymmetry  
**Source:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

Lecture 4 says the computational flow of pure client-server systems is 'asymmetric'. State precisely what is asymmetric, and use the asymmetry to explain both a benefit and a weakness the lecture lists.

<details>
<summary><strong>Show answer</strong></summary>

What is asymmetric: **clients initiate all interactions**, and therefore the client must know the identity of a service in order to invoke it, whereas servers 'do not know the identity of clients in advance of a service request and must respond to the initiated client requests'. Knowledge and initiative both flow one way.

Benefit that follows: 'because servers can be accessed by any number of clients, it is easy to add new clients to a system'. Since the server holds no knowledge of clients, adding one requires no server change — the asymmetry is exactly what makes client addition free.

Weakness that follows: the server is a **performance bottleneck** and a **single point of failure**, because all initiative converges on it. The same concentration that makes clients cheap to add makes the server critical. The lecture adds a third weakness — decisions about where to locate functionality, in the client or the server, are complex and costly to change after the system is built.

Contrast with P2P, where the interaction is 'typically a request/reply interaction without the asymmetry found in the client-server pattern' and each peer is both client and server.

> **Exam trap:** Saying the asymmetry is that 'servers are more powerful'. It is about who initiates and who knows whom.

*Tags: Client-Server, asymmetry, initiative, bottleneck*

</details>

---

## ADV-0087 — Client-Server — quality claims (Brutal, 7 marks)

**Type:** Correct a mis-stated quality  
**Source:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

A student writes: 'Client-Server is suitable here because it gives centralized control, which is the quality attribute it enhances.' Correct this using Lecture 4's own statement of the pattern's problem, and name the qualities it actually addresses.

<details>
<summary><strong>Show answer</strong></summary>

'Centralized control' is not a quality attribute — it is a *structural property*, i.e. a mechanism. A quality attribute is a property stakeholders can reason about and measure, such as modifiability or availability; centralisation is one of the means by which such qualities are affected.

What the lecture actually claims: the pattern's Problem statement says that 'by managing a set of shared resources and services, we can promote **modifiability and reuse**, by factoring out common services and having to modify these in a single location, or a small number of locations', and that 'we want to improve **scalability and availability** by centralizing the control of these resources and services, while distributing the resources themselves across multiple physical servers'.

So centralised control is the mechanism; modifiability, reuse, scalability and availability are the qualities. The corrected form is: Client-Server centralises control of shared services (mechanism), which can enhance modifiability because a change to a common service happens in one place (quality plus causal link) — while risking performance and availability because the server concentrates load and failure.

> **Exam trap:** Naming a structural property where a quality attribute is required. Examiners test the mechanism-to-quality link, not vocabulary.

*Tags: Client-Server, quality-vs-mechanism, correction, modifiability*

</details>

---

## ADV-0088 — Pattern definition (Very Hard, 7 marks)

**Type:** State the full solution definition  
**Source:** Lecture4_ArchitecturalPatterns_1_WhatIsPattern_PatternCatalogue.pdf

Lecture 4 defines an architectural pattern as establishing a relationship between a context, a problem and a solution, and then says the solution itself is 'determined and described by' four things. Name all four and explain why the fourth is the one most often omitted in exam answers.

<details>
<summary><strong>Show answer</strong></summary>

The solution is determined and described by: (1) a set of **element types** — for example data repositories, processes, and objects; (2) a set of **interaction mechanisms or connectors** — for example method calls, events, or a message bus; (3) a **topological layout** of the components; (4) a set of **semantic constraints** covering topology, element behaviour and interaction mechanisms.

The fourth is most often omitted because elements and connectors are visible in any diagram while constraints are not — they are rules about what the diagram is *not allowed* to show. Yet the constraints are frequently what distinguish one pattern from another: a stack of boxes is Layer only because of the unidirectional allowed-to-use constraint, and tiers are Multi-Tier only because connectors may exist only within or between adjacent tiers. An answer that lists elements and connectors but no constraints has described a topology, not a pattern.

> **Exam trap:** Stopping at elements and connectors. The semantic constraints are where the pattern's identity actually lives.

*Tags: pattern-definition, constraints, context-problem-solution*

</details>

---

## ADV-0089 — Other module patterns (Very Hard, 6 marks)

**Type:** Explain a pattern-generation principle  
**Source:** Lecture4_ArchitecturalPatterns_3_ModulePatterns_OtherModulePatterns.pdf

Lecture 4 has a short slide on 'Other Module Patterns' that states a general principle about how new patterns come into existence. State the principle and give its object-oriented counterpart as the lecture does.

<details>
<summary><strong>Show answer</strong></summary>

The principle: designers in a particular domain often publish 'standard' module decompositions for systems in that domain, and **these standard decompositions, if put in the 'context, problem, solution' form, constitute module decomposition patterns**. In other words a pattern is not a fixed catalogue entry handed down — any recurring, documented decomposition becomes a pattern once expressed in the context/problem/solution form.

The object-oriented counterpart the lecture gives: similarly, in the object-oriented realm, 'standard' or published class/object design solutions for a class of system constitute object-oriented patterns.

Exam relevance: this legitimises naming a domain-standard decomposition as a pattern in an answer, provided you state its context, problem and solution rather than merely its name.

> **Exam trap:** Assuming the lecture's catalogue is exhaustive. It explicitly describes how further patterns are formed.

*Tags: other-module-patterns, pattern-generation, context-problem-solution*

</details>

---

## ADV-0090 — Work assignment patterns (Brutal, 7 marks)

**Type:** Analyse a work-assignment consequence  
**Source:** Lecture4_ArchitecturalPatterns_14_AllocationPatterns_Other Allocation Patterns.pdf; Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 4 lists **Platform** among the published work-assignment patterns for globally distributed Agile projects. State the pattern precisely, then analyse one organisational consequence it creates — not merely when to choose it.

<details>
<summary><strong>Show answer</strong></summary>

The pattern: in software product line development, one site is tasked with developing reusable core assets of the product line, and other sites develop applications that use the core assets.

Organisational consequence: creates a producer/consumer dependency between sites: the core-asset site becomes a bottleneck for every application site, so its release cadence constrains all the others.

Why this is architectural rather than purely managerial: Lecture 2 states that architecture 'dictates the structure of an organization, or vice versa' and is 'typically used as the basis for the work-breakdown structure', which in turn dictates units of planning, scheduling and budget, inter-team communication channels, configuration control and file-system organization, and integration and test plans. Lecture 1 makes the same point from the other side — having a work assignment structure in the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'.

> **Exam trap:** Treating work assignment as a project-management topic. The lecture places it inside the architecture.

*Tags: work-assignment, platform, allocation, organisation*

</details>

---

## ADV-0091 — Work assignment patterns (Brutal, 7 marks)

**Type:** Analyse a work-assignment consequence  
**Source:** Lecture4_ArchitecturalPatterns_14_AllocationPatterns_Other Allocation Patterns.pdf; Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 4 lists **Competence center** among the published work-assignment patterns for globally distributed Agile projects. State the pattern precisely, then analyse one organisational consequence it creates — not merely when to choose it.

<details>
<summary><strong>Show answer</strong></summary>

The pattern: work is allocated to sites depending on the technical or domain expertise located at a site — the lecture's example is user interface design done at a site where usability engineering experts are located.

Organisational consequence: maximises quality per work item but fragments any feature that spans expertise areas, since one feature may now require coordinated work at several sites.

Why this is architectural rather than purely managerial: Lecture 2 states that architecture 'dictates the structure of an organization, or vice versa' and is 'typically used as the basis for the work-breakdown structure', which in turn dictates units of planning, scheduling and budget, inter-team communication channels, configuration control and file-system organization, and integration and test plans. Lecture 1 makes the same point from the other side — having a work assignment structure in the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'.

> **Exam trap:** Treating work assignment as a project-management topic. The lecture places it inside the architecture.

*Tags: work-assignment, competence-center, allocation, organisation*

</details>

---

## ADV-0092 — Work assignment patterns (Brutal, 7 marks)

**Type:** Analyse a work-assignment consequence  
**Source:** Lecture4_ArchitecturalPatterns_14_AllocationPatterns_Other Allocation Patterns.pdf; Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 4 lists **Open source** among the published work-assignment patterns for globally distributed Agile projects. State the pattern precisely, then analyse one organisational consequence it creates — not merely when to choose it.

<details>
<summary><strong>Show answer</strong></summary>

The pattern: many independent contributors develop the software product in accordance with a technical integration strategy, with minimal centralized control except when an independent contributor integrates code into the product line.

Organisational consequence: maximises contributor autonomy and scale but shifts the entire quality burden onto the integration gate, which becomes the only point where architectural conformance can be enforced.

Why this is architectural rather than purely managerial: Lecture 2 states that architecture 'dictates the structure of an organization, or vice versa' and is 'typically used as the basis for the work-breakdown structure', which in turn dictates units of planning, scheduling and budget, inter-team communication channels, configuration control and file-system organization, and integration and test plans. Lecture 1 makes the same point from the other side — having a work assignment structure in the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'.

> **Exam trap:** Treating work assignment as a project-management topic. The lecture places it inside the architecture.

*Tags: work-assignment, open-source, allocation, organisation*

</details>

---

## ADV-0093 — Other allocation patterns (Very Hard, 6 marks)

**Type:** Recall published deployment patterns  
**Source:** Lecture4_ArchitecturalPatterns_14_AllocationPatterns_Other Allocation Patterns.pdf

Lecture 4 names published deployment patterns from two named vendors. State what each vendor contributes, and give at least four of the specific topologies the lecture lists.

<details>
<summary><strong>Show answer</strong></summary>

**Microsoft** publishes a 'Tiered Distribution' pattern, which prescribes a particular allocation of components in a multi-tier architecture to the hardware they will run on.

**IBM**, in its WebSphere handbooks, describes a number of what they call 'topologies' along with the quality attribute criteria for choosing among them. The lecture says there are **11 topologies** described for WebSphere version 6, and names: the 'single machine topology (stand-alone server)', 'reverse proxy topology', 'vertical scaling topology', 'horizontal scaling topology', and 'horizontal scaling with IP sprayer topology'.

The examinable point is the framing: these are specialised deployment patterns chosen against quality-attribute criteria, which is why the lecture pairs the topology list with the phrase 'along with the quality attribute criteria for choosing among them'.

> **Exam trap:** Treating Multi-Tier and Map-Reduce as the only allocation patterns. The lecture names a further published family.

*Tags: other-allocation-patterns, WebSphere, tiered-distribution, topologies*

</details>

---
