# -*- coding: utf-8 -*-
"""
gen_adv2.py — Advanced Depth bank, part 2.
Modules: architectural-pattern fine points the original bank never reaches,
and the module/allocation structures beyond Layer and Multi-Tier.
"""
import json

with open("../questions_advanced.json") as f:
    Q = json.load(f)

L1 = "Lecture1_What is Software ArchitectureV2 (1).pdf"
P_LAYER = "Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf"
P_OTHERMOD = "Lecture4_ArchitecturalPatterns_3_ModulePatterns_OtherModulePatterns.pdf"
P_BROKER = "Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf"
P_MVC = "Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf"
P_PF = "Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf"
P_CS = "Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf"
P_P2P = "Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf"
P_SOA = "Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf"
P_PS = "Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf"
P_SD = "Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf"
P_MR = "Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf"
P_MT = "Lecture4_ArchitecturalPatterns_13_AllocationPatterns_Multi-Tier.pdf"
P_OTHERALLOC = "Lecture4_ArchitecturalPatterns_14_AllocationPatterns_Other Allocation Patterns.pdf"
P_CAT = "Lecture4_ArchitecturalPatterns_1_WhatIsPattern_PatternCatalogue.pdf"


def add(topic, sub, typ, diff, marks, prompt, ans, tags, source, trap=""):
    Q.append({
        "id": "ADV-%04d" % (len(Q) + 1),
        "bank": "Advanced Depth",
        "topic": topic,
        "subtopic": sub,
        "type": typ,
        "difficulty": diff,
        "marks": marks,
        "family": "Advanced Depth",
        "scenario": "",
        "prompt": prompt,
        "answer_outline": ans,
        "tags": tags,
        "source": source,
        "exam_trap": trap,
    })


T = "Architectural Patterns (Depth)"

# ---------------------------------------------------------------- LAYER
add(T, "Layer — bridging", "Diagram-reading judgement", "Brutal", 7,
    "Lecture 4 says that when looking at a stack of boxes 'sometimes it is impossible to tell whether layer bridging is allowed or not'. Explain what layer bridging is, why the diagram alone cannot settle it, and what the lecture says an architect must therefore do.",
    "Bridging is when modules in one layer are permitted to use modules in a **non-adjacent lower** layer, skipping the layer(s) between. The diagram cannot settle it because the layered notation encodes the allowed-to-use relation through *geometric adjacency* rather than through arrows — adjacency tells you the ordering but not whether a layer may reach past its immediate neighbour. Two designs with identical box stacks can therefore have different usage rules.\n\nThe lecture's remedy: the architect 'has to include the answer in the key to the diagram's notation', which it recommends for all diagrams. This connects to Lecture 10's point that lack of a key is 'the most common mistake we see in documentation in practice'.",
    ["Layer", "bridging", "notation-key", "adjacency"], P_LAYER + "; Lecture10_Documenting Software Architectures.pdf",
    "Saying bridging is forbidden. The lecture does not forbid it — it says the diagram must state whether it is allowed.")

add(T, "Layer — upward calls", "Resolve an apparent contradiction", "Brutal", 8,
    "Lecture 4 states both that 'a layer isn't allowed to use any layer above it' and that 'a layer is allowed to make upward calls'. Resolve the apparent contradiction precisely, and give an example of a legitimate upward call.",
    "There is no contradiction because 'uses' has a technical definition. The lecture defines it: 'a module *uses* another module when it depends on the answer it gets back'. The prohibition is on *usage*, i.e. on a dependency where correctness requires the response. An upward **call** that expects no answer creates no such dependency, so it is permitted.\n\nLegitimate example: a lower layer raising a callback, event or notification upward — the lower layer announces something and continues regardless of what the upper layer does with it. This is why Publish-Subscribe and MVC-style notification can coexist with strict layering. The test to apply in the exam: does the caller's correctness depend on the returned answer? If yes it is a usage and it is forbidden upward; if no it is merely a call and it is allowed.",
    ["Layer", "upward-calls", "uses-relation", "callbacks"], P_LAYER,
    "Treating 'call' and 'use' as synonyms. The whole resolution turns on the lecture's definition of 'uses'.")

add(T, "Layer — segmented layers", "Reason about segment rules", "Brutal", 7,
    "Lecture 4 discusses layers divided into **segments**. Explain when segmentation arises, what additional information the architect must then supply, and why the lecture says arrows become necessary in segmented diagrams.",
    "Segmentation arises when a finer-grained decomposition of the modules is wanted — typically when a pre-existing set of units, such as imported modules, share the same allowed-to-use relation and are grouped inside one layer.\n\nThe architect must then specify **what usage rules are in effect among the segments**. The lecture states many usage rules are possible but they must be made explicit. Its worked figure has the top and bottom layers segmented, with segments of the top layer *not* allowed to use each other while segments of the bottom layer *are*.\n\nArrows become necessary because adjacency cannot express intra-layer rules: two segments side by side are equally adjacent whether or not they may use each other. The lecture says plainly that without the arrows 'it will be harder to differentiate the different usage rules within segmented layers'.",
    ["Layer", "segments", "usage-rules", "notation"], P_LAYER,
    "Assuming all segments in a layer may freely use each other. The rule differs per layer and must be documented.")

add(T, "Layer — what is not a layered architecture", "Reject a false example", "Brutal", 8,
    "Lecture 4 shows a diagram of stacked boxes with arrows in which everything is allowed to use everything, and states this 'is decidedly not a layered architecture'. Explain the reasoning it gives, and state the general principle for judging whether a stack of boxes is genuinely layered.",
    "The lecture's reasoning is a modifiability argument, not a notational one: if Layer A is replaced by a different version, Layer C (which uses A) might well have to change — and 'we don't want our virtual machine layer to change every time our application layer changes'. Unrestricted usage destroys exactly the property layering exists to provide.\n\nThe general principle: a stack of boxes is layered only if a **unidirectional allowed-to-use relation** actually constrains the dependencies. The lecture is explicit that 'any old set of boxes stacked on top of each other does not constitute a layered architecture'. Connecting to Lecture 6: without the restrict-dependencies tactic the pattern loses the low coupling that makes it effective, so the diagram may look layered while the architecture is not.\n\nA related fine point from the same lecture: orientation carries meaning in this notation. If you turn the diagram upside down so that C is on top, that represents a completely different design — unlike arrow-based diagrams, which keep their semantics under rotation.",
    ["Layer", "false-example", "unidirectional", "orientation"], P_LAYER + "; Lecture6_Relationships Between Tactics and Patterns.pdf",
    "Judging by appearance. The test is whether dependencies are actually restricted, not whether the boxes are drawn in a stack.")

# ---------------------------------------------------------------- MVC
add(T, "MVC — constraints", "Recall an exact constraint", "Very Hard", 6,
    "State the two constraints Lecture 4 places on the MVC pattern, and explain what would go wrong architecturally if the second were violated.",
    "The two constraints are: (1) there must be at least one instance each of model, view and controller; (2) **the model component should not interact directly with the controller**.\n\nViolating the second collapses the separation the pattern exists to create. The intended flow is that a controller translates user actions into changes to the model or the view, and the model notifies views of state changes. If the model reaches directly into the controller, application state becomes coupled to input mediation: the model can no longer be reused with a different input mechanism, the ability to have many controllers for one model is lost, and the loose coupling that lets the three be developed and tested in parallel disappears.",
    ["MVC", "constraints", "model-controller", "coupling"], P_MVC,
    "Giving only the 'at least one of each' constraint. The model-controller prohibition is the examinable one.")

add(T, "MVC — many-to-one relations", "Explain multiplicity", "Very Hard", 6,
    "Lecture 4 states there may be many views and many controllers associated with one model. Give the lecture's own example of each, and explain what architectural property makes this multiplicity possible.",
    "Many views for one model: a set of business data represented simultaneously as columns of numbers in a spreadsheet, as a scatter plot, and as a pie chart — each a separate view, each dynamically updated as the model changes, for example showing live transactions in a transaction processing system.\n\nMany controllers for one model: a map zoomed and panned via mouse movements, trackball movements, keyboard clicks or voice commands — each form of input managed by its own controller.\n\nWhat makes it possible: the components are connected by *notification* (events or callbacks carrying state updates) rather than by direct reference, so the model announces a change without knowing how many views exist or what they are. Because the components are loosely coupled they can be developed and tested in parallel and changes to one have minimal impact on the others.",
    ["MVC", "multiplicity", "notification", "many-views"], P_MVC,
    "Claiming one model needs one view. The pattern's value is largely in the one-to-many case.")

add(T, "MVC — weaknesses", "Explain a conceptual mismatch", "Brutal", 7,
    "Lecture 4 gives two weaknesses of MVC, one of which concerns user-interface toolkits. Explain that weakness precisely and say when it should make an architect reject MVC.",
    "The weakness: the model, view and controller abstractions may not be a good fit for some user-interface toolkits. Specifically, MVC splits input and output apart into controller and view, but these functions are 'often combined into individual widgets' in real toolkits — a text box both displays and accepts. The result is a **conceptual mismatch between the architecture and the user interface toolkit**: the architecture prescribes a separation the implementation technology does not naturally provide, so developers end up fighting the toolkit or documenting a structure the code does not have.\n\nThe other weakness is that the complexity may not be worth it for simple user interfaces.\n\nWhen to reject MVC: when the interface is simple enough that the separation buys nothing, or when the chosen toolkit fuses input and output so thoroughly that enforcing the split produces architecture erosion — a documented structure the code silently violates.",
    ["MVC", "weaknesses", "conceptual-mismatch", "toolkit"], P_MVC,
    "Listing 'it is complex' without the toolkit mismatch, which is the more specific and more examinable half.")

# ---------------------------------------------------------------- PUB-SUB
PS_VARIANTS = [
    ("List-based",
     "every publisher maintains a subscription list — a list of subscribers that have registered an interest in receiving the event",
     "less decoupled than the others, so it does not provide as much modifiability, but it can be quite efficient in terms of runtime overhead",
     "the publisher holds direct knowledge of its subscribers, which is also why it is the closest architectural analogue of the object-level Observer pattern"),
    ("Broadcast-based",
     "publishers simply publish events which are then broadcast; subscribers — or services acting on their behalf in a distributed system — examine each event as it arrives and determine whether it is of interest",
     "publishers have less or no knowledge of subscribers, but it has the potential to be very inefficient if there are lots of messages and most messages are not of interest to a particular subscriber",
     "the filtering work moves from the publisher to the subscriber, which is what trades efficiency for decoupling"),
    ("Content-based",
     "each event is associated with a set of attributes and is delivered to a subscriber only if those attributes match subscriber-defined patterns",
     "the most expressive of the three; the lecture distinguishes it from the previous two, which it categorises broadly as 'topic-based' where topics are predefined events and a component subscribes to all events within the topic",
     "content is 'much more general' than a topic, so subscription granularity is finer, at the cost of evaluating matches per event"),
]

for vname, mech, tradeoff, note in PS_VARIANTS:
    add(T, "Publish-Subscribe — variants", "Distinguish pattern variants", "Brutal", 7,
        "Lecture 4 states that Publish-Subscribe 'can take several forms'. For the **%s** variant, describe its mechanism, state its efficiency/decoupling trade-off, and say what distinguishes it from the other two." % vname,
        "Mechanism: %s.\n\nTrade-off: %s.\n\nDistinguishing point: %s." % (mech, tradeoff, note),
        ["Publish-Subscribe", "variants", vname.lower(), "topic-vs-content"], P_PS,
        "Treating Publish-Subscribe as one undifferentiated pattern. The variant choice changes the modifiability/performance answer.")

add(T, "Publish-Subscribe — variants", "Select a variant under constraints", "Brutal", 8,
    "A system publishes 10,000 events per second; each subscriber is interested in well under 1% of them; subscribers are added and removed constantly. Select the Publish-Subscribe variant, justify it against the other two, and state the residual risk.",
    "Select **content-based**. Justification against the alternatives: broadcast-based is explicitly warned against by the lecture in exactly this situation — it 'has the potential to be very inefficient if there are lots of messages and most messages are not of interest to a particular subscriber', which describes this workload precisely. List-based would be efficient at delivery but is 'less decoupled' and 'does not provide as much modifiability', which conflicts with constantly changing subscribers since the publisher must maintain the list. Content-based delivers only where attributes match subscriber-defined patterns, so it satisfies both constraints.\n\nResidual risk: the matching itself is per-event work, so the event distributor becomes the bottleneck and a single point of failure. The pattern's general weaknesses still apply — increased latency, negative effect on scalability and predictability of message delivery time, less control over message ordering, and delivery not guaranteed.",
    ["Publish-Subscribe", "variant-selection", "content-based", "trade-off"], P_PS,
    "Choosing broadcast because it sounds most decoupled. The lecture names this exact workload as its failure case.")

# ---------------------------------------------------------------- SOA
SOA_CONNECTORS = [
    ("SOAP connector", "uses the SOAP protocol for synchronous communication between web services, typically over HTTP", "synchronous coupling: the consumer waits, so consumer availability becomes tied to provider responsiveness"),
    ("REST connector", "relies on the basic request/reply operations of the HTTP protocol", "simplicity and ubiquity, at the cost of weaker contract formality than SOAP"),
    ("Asynchronous messaging connector", "uses a messaging system to offer point-to-point or publish-subscribe asynchronous message exchanges", "decouples availability in time — the provider need not be up when the consumer sends — at the cost of losing immediate confirmation"),
]

for cname, mech, effect in SOA_CONNECTORS:
    add(T, "SOA — connectors", "Recall connector types", "Very Hard", 6,
        "Lecture 4 names three connector types for the SOA pattern. Describe the **%s**: what it is, and what its choice implies for coupling between consumer and provider." % cname,
        "The %s %s.\n\nImplication: %s.\n\nThe lecture notes that in practice SOA environments 'may involve a mix of the three' — the connector is a per-interaction decision, not a system-wide one." % (cname, mech, effect),
        ["SOA", "connectors", cname.split()[0].lower(), "coupling"], P_SOA,
        "Listing only ESB, registry and orchestration. Those are intermediary *components*; these three are the *connectors*.")

add(T, "SOA — components vs connectors", "Separate two element kinds", "Brutal", 8,
    "For the SOA pattern, Lecture 4 lists both specialised intermediary components and connector types. Separate the two lists correctly, and explain why confusing them costs marks in an elements-and-relations question.",
    "**Components** (specialised intermediaries providing infrastructure services): the ESB, which routes and transforms messages between providers and consumers, converts between protocols or technologies, performs data transformations (format, content, splitting, merging) and performs security checks; the registry of services, used by providers to register and consumers to discover services at run time; and the orchestration server, which coordinates interactions based on business-process and workflow languages, executing scripts on the occurrence of a specific event such as a purchase order request arriving.\n\n**Connectors**: SOAP, REST, and asynchronous messaging.\n\nWhy confusing them costs marks: an elements-and-relations answer must say what the runtime *things* are and what the *interaction mechanisms* between them are. Naming an ESB as a connector misdescribes it — an ESB is itself a component that is attached via connectors, which is why the lecture's Relations entry reads 'attachment of the different kinds of components available to the respective connectors'. The distinction also matters for the availability argument: a component can fail independently, and the lecture notes the ESB 'introduces an additional point of failure'.",
    ["SOA", "components", "connectors", "elements-and-relations"], P_SOA,
    "Calling the ESB a connector. It is an intermediary component attached via connectors.")

add(T, "SOA — optionality", "Argue element optionality", "Brutal", 7,
    "Explain why an SOA implementation may legitimately contain no ESB, no registry and no orchestration server, and state what the lecture says happens to communication when an ESB is absent.",
    "Because those three are **specialised components an SOA application *may* use**, not mandatory constituents. The pattern's required elements are service providers and service consumers communicating over published interfaces; the intermediaries are added when the specific problem calls for them. The lecture's constraint statement reflects this: 'service consumers are connected to service providers, but intermediary components may be used'.\n\nWhen an ESB is absent, the lecture states that 'service providers and consumers communicate with each other in a point-to-point fashion'. That is a real architectural difference: point-to-point removes the ESB's latency and its additional point of failure, but also removes routing, protocol conversion, data transformation and the centralised security checks — so the interoperability burden shifts back onto each pair of endpoints.",
    ["SOA", "optionality", "ESB", "point-to-point"], P_SOA,
    "Asserting SOA requires an ESB. Each intermediary is chosen per problem and each brings its own overhead.")

# ---------------------------------------------------------------- P2P
add(T, "Peer-to-Peer — supernodes and hops", "Explain discovery mechanics", "Brutal", 8,
    "Explain the mechanics Lecture 4 gives for how a peer finds another peer in a P2P network, including the roles of hops and supernodes, and state the constraints the lecture says may be placed on a P2P network.",
    "Mechanics: peers first connect to the peer-to-peer network, on which they **discover other peers** they can interact with, and then initiate actions by requesting services. A peer's search for another peer is often **propagated from one peer to its connected peers for a limited number of hops**. Some architectures include **supernodes** — specialised peer nodes with indexing or routing capabilities that allow a regular peer's search to reach a larger number of peers.\n\nThe constraints the lecture lists as possible restrictions: the number of allowable attachments to any given peer; the number of hops used for searching for a peer; which peers know about which other peers; and the observation that some P2P networks are organised with star topologies in which peers connect only to supernodes.\n\nThe architectural significance of the hop limit: it bounds search cost but also bounds reachability, so a resource may exist in the network yet be undiscoverable — availability of the *network* does not guarantee availability of a *specific resource*.",
    ["Peer-to-Peer", "supernodes", "hops", "discovery", "constraints"], P_P2P,
    "Saying P2P has 'no central element'. Supernodes and star topologies are explicitly in the lecture, and they reintroduce centrality.")

add(T, "Peer-to-Peer — availability mechanism", "State the precondition for a quality", "Brutal", 7,
    "Lecture 4 claims P2P improves availability. State the precise mechanism it gives, then state the precondition that must hold — and give a case where P2P is chosen and availability is nevertheless not improved.",
    "Mechanism: 'typically multiple peers have overlapping capabilities, such as providing access to the same data or providing equivalent services', so a peer acting as client can collaborate with multiple peers acting as servers; if one becomes unavailable, the others can still provide the services to complete the task.\n\nPrecondition: the **overlap must actually exist**. Availability comes from redundancy of capability, not from the topology. The lecture's own caution supports this — 'small peer-to-peer systems may not be able to consistently achieve quality goals such as performance and availability'.\n\nCase where it fails: a rare file held by exactly one peer. When that peer leaves, no alternative provider exists and the resource is unavailable, even though the network is fully functional and every other peer is reachable. A second case: the resource exists but lies beyond the configured hop limit, so it cannot be discovered.",
    ["Peer-to-Peer", "availability", "precondition", "overlap"], P_P2P,
    "Asserting 'P2P is highly available' unconditionally. The lecture's mechanism depends on overlapping capability.")

add(T, "Peer-to-Peer — weaknesses", "Explain why decentralisation costs", "Very Hard", 6,
    "Lecture 4 lists what becomes more complex in P2P and attributes the complexity to one root cause. Name the items and the cause, and explain the causal link for two of them.",
    "The items: managing **security, data consistency, data/service availability, backup, and recovery** are all more complex. The root cause the lecture gives is that **peer-to-peer systems are decentralized**.\n\nCausal link for security: there is no single mediating element at which to authenticate, authorise, or inspect traffic, so every peer must be independently trustworthy and independently hardened — the trust boundary is distributed across all participants rather than concentrated.\n\nCausal link for data consistency: with no authoritative copy and peers joining and leaving dynamically, concurrent updates can occur at multiple peers with no common serialisation point, so reconciling divergent replicas becomes an application-level problem rather than something the structure solves.\n\nThe lecture adds that small P2P systems may not consistently achieve performance and availability goals — the benefits are statistical and depend on scale.",
    ["Peer-to-Peer", "weaknesses", "decentralisation", "consistency"], P_P2P,
    "Listing the weaknesses without connecting them to decentralisation, which is the single cause the lecture identifies.")

# ---------------------------------------------------------------- MAP-REDUCE
add(T, "Map-Reduce — constraints", "Recall exact constraints", "Brutal", 8,
    "State the three constraints Lecture 4 places on the Map-Reduce pattern and explain, for each, what design possibility it forecloses.",
    "Constraint 1 — **the data to be analysed must exist as a set of files**. This forecloses applying Map-Reduce directly to streaming or interactively-queried data; the input must be materialised first.\n\nConstraint 2 — **map functions are stateless and do not communicate with each other**. This forecloses any algorithm where one map instance's result depends on another's, which is precisely what allows the infrastructure to run instances in parallel across processors and to restart a failed instance without coordination. Statelessness is the enabler of the resilience, not an incidental restriction.\n\nConstraint 3 — **the only communication between map and reduce instances is the data emitted from the map instances as key/value pairs**. This forecloses side channels, shared memory or direct calls between stages, which is what lets the infrastructure own the shuffle and sort.\n\nTaken together the three constraints are what make the infrastructure's job — deploying, monitoring, and recovering from failure — tractable.",
    ["Map-Reduce", "constraints", "stateless", "key-value"], P_MR,
    "Listing the constraints without explaining that statelessness is what buys the parallelism and recovery.")

add(T, "Map-Reduce — weaknesses", "Reject the pattern", "Very Hard", 7,
    "Lecture 4 gives three conditions under which Map-Reduce is a poor choice. State all three, and for one of them explain the underlying reason in terms of the pattern's mechanism.",
    "The three: (1) if you do not have large data sets, the overhead of map-reduce is not justified; (2) if you cannot divide your data set into similar sized subsets, the advantages of parallelism are lost; (3) operations that require multiple reduces are complex to orchestrate.\n\nUnderlying reason for (2) — partition skew: the pattern's performance benefit comes from running many map instances concurrently, so total elapsed time is bounded by the *slowest* instance, not the average. If one partition is far larger than the rest, every other processor finishes and idles while that one instance runs, and the achieved parallelism collapses towards serial execution. The infrastructure can restart a failed task but cannot rebalance an unevenly-sized one, so the problem must be prevented at partitioning time.",
    ["Map-Reduce", "weaknesses", "skew", "when-not-to-use"], P_MR,
    "Explaining skew as a correctness problem. It is purely a performance problem — the answer is still right, just slow.")

add(T, "Map-Reduce — worked example", "Apply the mechanism concretely", "Very Hard", 7,
    "Using Lecture 4's own word-count example, explain exactly what the map function emits, what the infrastructure does between the two stages, and what the reduce function receives and produces.",
    "The document is the data set. The **map** function finds every word in the document and outputs a `<word, 1>` pair for each occurrence — the lecture's illustration is a document beginning 'Having a whole book . . .' producing `<Having, 1>`, `<a, 1>`, `<whole, 1>`, `<book, 1>`. Note it emits one pair per *occurrence*, performing no counting itself.\n\nBetween the stages the **infrastructure** sorts the emitted pairs so that all pairs sharing a key are grouped together. This is the shuffle/sort, and it is the infrastructure's responsibility, not the programmer's — which is why the lecture describes the pattern as solving 'a distributed and parallel sort of a large data set'.\n\nThe **reduce** function then takes that list in sorted order, adds up the 1s for each word to get a count, and outputs the result. In the lecture's extract-transform-load framing, map performs the extract and transform, and reduce performs the load.",
    ["Map-Reduce", "word-count", "shuffle-sort", "worked-example"], P_MR,
    "Claiming the map function counts. It emits a 1 per occurrence; counting happens in reduce, after the infrastructure sorts.")

# ---------------------------------------------------------------- MULTI-TIER
add(T, "Multi-Tier — constraints", "Recall exact constraints", "Brutal", 7,
    "State the three constraints Lecture 4 places on the Multi-Tier pattern, and explain what the second one rules out.",
    "Constraint 1 — **a software component belongs to exactly one tier**.\n\nConstraint 2 — **tiers induce topological constraints that restrict which components may communicate with other components; specifically, connectors may exist only between components in the same tier or residing in adjacent tiers**. This rules out a presentation-tier component calling a data-tier component directly when an application tier sits between them: the call must pass through the intervening tier. That restriction is precisely what allows each tier to be secured, scaled and deployed independently, because the set of things that can reach a tier is known and bounded.\n\nConstraint 3 — **tiers may constrain the kinds of communication that can take place across adjacent tiers**; the lecture's example is that some tiered patterns require call-return communication in one direction but event-based notification in the other.",
    ["Multi-Tier", "constraints", "adjacency", "topology"], P_MT,
    "Omitting the adjacency restriction, which is the constraint that actually does the security and scaling work.")

add(T, "Multi-Tier vs Layer", "Separate two confusable patterns", "Brutal", 8,
    "Lecture 4 warns 'Don't confuse tiers with layers!'. Give the precise distinction it states, explain what a tier actually *is*, and give one consequence of the distinction for how each is documented.",
    "The distinction as the lecture states it: **layering is a pattern of modules — a unit of implementation — while tiers applies only to runtime entities**. Layer is therefore a *module* pattern and Multi-Tier is an *allocation* pattern.\n\nWhat a tier is: the lecture is emphatic that 'tiers are not components, but rather logical groupings of components'. A tier is a grouping construct, which is why its relations are 'is part of' (to group components into tiers), 'communicates with' (to show interaction), and 'allocated to' (when tiers map to computing platforms).\n\nConsequence for documentation: a layered view answers implementation-time questions — what may use what, what changes when a layer is replaced — and belongs in a module view. A tiered view answers runtime and deployment questions — what executes where, what can be scaled or firewalled independently — and belongs in an allocation view. The same system routinely has both, and Lecture 10's cross-view mapping is what relates them.",
    ["Multi-Tier", "Layer", "module-vs-allocation", "distinction"], P_MT + "; " + P_LAYER,
    "Saying tiers are 'physical' and layers 'logical'. Tiers are themselves logical groupings that may or may not map onto separate platforms.")

# ---------------------------------------------------------------- BROKER / SHARED-DATA / PIPE-FILTER / CLIENT-SERVER
add(T, "Broker — proxies", "Explain an element's purpose", "Very Hard", 7,
    "Lecture 4 lists client-side proxy and server-side proxy among the Broker pattern's elements. State what they do, why the lecture marks them optional, and what an architect loses by omitting them.",
    "Both proxies 'manage the actual communication with the broker, including marshaling, sending, and unmarshaling of messages'. They are marked optional because the Relations entry says the attachment relation associates clients '(and, optionally, client-side proxies)' and servers '(and, optionally, server-side proxies)' with brokers — the pattern works without them if clients and servers handle marshalling themselves.\n\nWhat is lost by omitting them: the marshalling concern moves into the client and server code, so every participant must know the wire format. That re-couples participants to a communication detail the broker was meant to hide, and it means a change of transport or serialisation becomes a change to every client and server rather than a change to the proxy layer. In Lecture 6's terms, the proxy *is* the use-an-intermediary tactic applied to the communication concern specifically.",
    ["Broker", "proxies", "marshalling", "optional-elements"], P_BROKER,
    "Treating the proxies as mandatory. The lecture explicitly parenthesises them as optional.")

add(T, "Broker — testability", "Explain an unaddressed weakness", "Brutal", 7,
    "Lecture 4 lists testability among Broker's weaknesses. State the reason it gives, and explain why this weakness is harder to fix with tactics than Broker's availability weakness.",
    "The reason: brokers are employed in complex multi-process and multiprocessor systems that are typically highly dynamic, with requests and responses typically asynchronous — 'all of this makes testing and debugging such systems extremely difficult'. Lecture 6 adds that a broker 'may be difficult to test' because it operates in highly dynamic environments where the conditions leading to a failure may be difficult to replicate.\n\nWhy it is harder to fix than availability: the availability weakness is a *structural* deficiency with a structural remedy — replicate the broker, share state, load balance, add heartbeat. Testability is a deficiency in **controllability and observability**, which Lecture 7 identifies as testability's defining requirements. Replicating brokers does not make the system easier to control or observe; it makes it harder, because there are now more asynchronous interleavings to reproduce. The tactics that repair availability actively worsen testability, which is itself a trade-off point in ATAM terms.",
    ["Broker", "testability", "controllability", "tactic-conflict"], P_BROKER + "; Lecture6_Relationships Between Tactics and Patterns.pdf",
    "Assuming every listed weakness has a tactic that fixes it. Some tactics make other weaknesses worse.")

add(T, "Shared-Data — multiple stores", "Reason about replication", "Brutal", 8,
    "Lecture 4 says that when a system has more than one data store, 'a key architecture concern is the mapping of data and computation to the data'. Explain why multiple stores arise, the two reasons the lecture gives, and the trade-off replication introduces.",
    "Why multiple stores arise — reason one: the data is 'naturally, or historically, partitioned into separable stores'. This is a fact about the domain or the system's history rather than a deliberate quality decision.\n\nReason two: 'data may be replicated over several stores to improve performance or availability through redundancy'. This is a deliberate decision.\n\nThe trade-off replication introduces: redundancy improves read performance and survives the loss of a store, but it creates a consistency obligation — the same logical datum now exists in more than one place and the copies can diverge. The lecture flags data consistency first in its list of the analyses associated with this pattern, alongside performance, security, privacy, availability, scalability and compatibility with existing repositories.\n\nThe 'mapping of data and computation to the data' is a key concern because placing computation far from the data it needs reintroduces the latency that replication was meant to remove.",
    ["Shared-Data", "replication", "multiple-stores", "consistency"], P_SD,
    "Presenting replication as a pure win. It converts an availability problem into a consistency problem.")

add(T, "Shared-Data — schema coupling", "Explain an indirect coupling", "Very Hard", 7,
    "Lecture 4 claims Shared-Data supports modifiability *and* lists producer-consumer coupling as a weakness. Reconcile these, naming the exact form of coupling that remains.",
    "They are consistent because they concern different kinds of coupling. The modifiability benefit is that 'producers do not have direct knowledge of the consumers' — there is no *referential* coupling, since accessors interact only with the store and never with each other, so a consumer can be added without touching any producer.\n\nThe residual weakness is that 'producers and consumers of data may be coupled through their knowledge of the structure of the shared data'. This is **schema coupling**: everyone must agree on how the data is shaped and what it means. It is indirect and invisible in a component diagram, which is what makes it dangerous — a change to the schema is a change to the implicit contract every accessor depends on, so it propagates to all of them at once even though no accessor references any other.\n\nThe practical consequence: adding an accessor is cheap; changing the schema is expensive. An architect should therefore expect Shared-Data to be modifiable with respect to *participants* and rigid with respect to *data structure*.",
    ["Shared-Data", "schema-coupling", "modifiability", "reconcile"], P_SD,
    "Declaring the lecture inconsistent. The two statements are about referential coupling and schema coupling respectively.")

add(T, "Pipe-and-Filter — pipeline parallelism", "Explain the concurrency mechanism", "Brutal", 8,
    "Lecture 4 says filters 'can execute asynchronously and concurrently' and attributes this to one specific property of pipes. Name the property, explain the mechanism, and state the associated cost the lecture gives.",
    "The property: **pipes buffer data during communication**. The lecture states it directly — 'pipes buffer data during communication. Because of this property, filters can execute asynchronously and concurrently.'\n\nMechanism: buffering decouples the producing filter's timing from the consuming filter's timing. A filter can write its output and continue with the next data item without waiting for the downstream filter to be ready, so at any instant different filters are working on *different data items* simultaneously. This is pipeline parallelism, and it is distinct from data parallelism — the stages are different, not replicated.\n\nThe cost: 'having large numbers of independent filters can add substantial amounts of computational overhead, because each filter runs as its own thread or process'. The lecture also warns that pipe-and-filter may be inappropriate for long-running computations without checkpoint/restore, since the failure of any filter or pipe can cause the entire pipeline to fail.",
    ["Pipe-and-Filter", "pipeline-parallelism", "buffering", "overhead"], P_PF,
    "Attributing the concurrency to the filters being independent. Independence is necessary but the *buffering in the pipes* is the stated cause.")

add(T, "Pipe-and-Filter — pipe semantics", "State exact connector properties", "Very Hard", 6,
    "State the four properties Lecture 4 attributes to a pipe, and explain what would break if the third were not guaranteed.",
    "The four: (1) a pipe conveys data from a filter's output port(s) to another filter's input port(s); (2) a pipe has a **single source** for its input and a **single target** for its output; (3) a pipe **preserves the sequence** of data items; (4) a pipe **does not alter** the data passing through.\n\nIf sequence preservation were not guaranteed, filters could no longer be reasoned about independently. The lecture's stated benefit is that independent processing at each step supports 'reuse, parallelization, and simplified reasoning about overall behavior' — that reasoning depends on each filter seeing the stream in the order the previous filter produced it. Without ordering, a filter's correctness would depend on the arrival interleaving, so filters could not be composed freely, and the reusability the pattern exists to provide would be lost.\n\nProperty (4) matters for the same reason: a pipe that transformed data would be a filter, and the separation of transport from transformation would collapse.",
    ["Pipe-and-Filter", "pipe", "connector-properties", "ordering"], P_PF,
    "Forgetting the single-source/single-target restriction, which is what distinguishes a pipe from a general event bus.")

add(T, "Client-Server — asymmetry", "Explain a structural asymmetry", "Very Hard", 7,
    "Lecture 4 says the computational flow of pure client-server systems is 'asymmetric'. State precisely what is asymmetric, and use the asymmetry to explain both a benefit and a weakness the lecture lists.",
    "What is asymmetric: **clients initiate all interactions**, and therefore the client must know the identity of a service in order to invoke it, whereas servers 'do not know the identity of clients in advance of a service request and must respond to the initiated client requests'. Knowledge and initiative both flow one way.\n\nBenefit that follows: 'because servers can be accessed by any number of clients, it is easy to add new clients to a system'. Since the server holds no knowledge of clients, adding one requires no server change — the asymmetry is exactly what makes client addition free.\n\nWeakness that follows: the server is a **performance bottleneck** and a **single point of failure**, because all initiative converges on it. The same concentration that makes clients cheap to add makes the server critical. The lecture adds a third weakness — decisions about where to locate functionality, in the client or the server, are complex and costly to change after the system is built.\n\nContrast with P2P, where the interaction is 'typically a request/reply interaction without the asymmetry found in the client-server pattern' and each peer is both client and server.",
    ["Client-Server", "asymmetry", "initiative", "bottleneck"], P_CS + "; " + P_P2P,
    "Saying the asymmetry is that 'servers are more powerful'. It is about who initiates and who knows whom.")

add(T, "Client-Server — quality claims", "Correct a mis-stated quality", "Brutal", 7,
    "A student writes: 'Client-Server is suitable here because it gives centralized control, which is the quality attribute it enhances.' Correct this using Lecture 4's own statement of the pattern's problem, and name the qualities it actually addresses.",
    "'Centralized control' is not a quality attribute — it is a *structural property*, i.e. a mechanism. A quality attribute is a property stakeholders can reason about and measure, such as modifiability or availability; centralisation is one of the means by which such qualities are affected.\n\nWhat the lecture actually claims: the pattern's Problem statement says that 'by managing a set of shared resources and services, we can promote **modifiability and reuse**, by factoring out common services and having to modify these in a single location, or a small number of locations', and that 'we want to improve **scalability and availability** by centralizing the control of these resources and services, while distributing the resources themselves across multiple physical servers'.\n\nSo centralised control is the mechanism; modifiability, reuse, scalability and availability are the qualities. The corrected form is: Client-Server centralises control of shared services (mechanism), which can enhance modifiability because a change to a common service happens in one place (quality plus causal link) — while risking performance and availability because the server concentrates load and failure.",
    ["Client-Server", "quality-vs-mechanism", "correction", "modifiability"], P_CS,
    "Naming a structural property where a quality attribute is required. Examiners test the mechanism-to-quality link, not vocabulary.")

# ---------------------------------------------------------------- PATTERN CATALOGUE / OTHER PATTERNS
add(T, "Pattern definition", "State the full solution definition", "Very Hard", 7,
    "Lecture 4 defines an architectural pattern as establishing a relationship between a context, a problem and a solution, and then says the solution itself is 'determined and described by' four things. Name all four and explain why the fourth is the one most often omitted in exam answers.",
    "The solution is determined and described by: (1) a set of **element types** — for example data repositories, processes, and objects; (2) a set of **interaction mechanisms or connectors** — for example method calls, events, or a message bus; (3) a **topological layout** of the components; (4) a set of **semantic constraints** covering topology, element behaviour and interaction mechanisms.\n\nThe fourth is most often omitted because elements and connectors are visible in any diagram while constraints are not — they are rules about what the diagram is *not allowed* to show. Yet the constraints are frequently what distinguish one pattern from another: a stack of boxes is Layer only because of the unidirectional allowed-to-use constraint, and tiers are Multi-Tier only because connectors may exist only within or between adjacent tiers. An answer that lists elements and connectors but no constraints has described a topology, not a pattern.",
    ["pattern-definition", "constraints", "context-problem-solution"], P_CAT,
    "Stopping at elements and connectors. The semantic constraints are where the pattern's identity actually lives.")

add(T, "Other module patterns", "Explain a pattern-generation principle", "Very Hard", 6,
    "Lecture 4 has a short slide on 'Other Module Patterns' that states a general principle about how new patterns come into existence. State the principle and give its object-oriented counterpart as the lecture does.",
    "The principle: designers in a particular domain often publish 'standard' module decompositions for systems in that domain, and **these standard decompositions, if put in the 'context, problem, solution' form, constitute module decomposition patterns**. In other words a pattern is not a fixed catalogue entry handed down — any recurring, documented decomposition becomes a pattern once expressed in the context/problem/solution form.\n\nThe object-oriented counterpart the lecture gives: similarly, in the object-oriented realm, 'standard' or published class/object design solutions for a class of system constitute object-oriented patterns.\n\nExam relevance: this legitimises naming a domain-standard decomposition as a pattern in an answer, provided you state its context, problem and solution rather than merely its name.",
    ["other-module-patterns", "pattern-generation", "context-problem-solution"], P_OTHERMOD,
    "Assuming the lecture's catalogue is exhaustive. It explicitly describes how further patterns are formed.")

ALLOC_WORK = [
    ("Platform", "in software product line development, one site is tasked with developing reusable core assets of the product line, and other sites develop applications that use the core assets",
     "creates a producer/consumer dependency between sites: the core-asset site becomes a bottleneck for every application site, so its release cadence constrains all the others"),
    ("Competence center", "work is allocated to sites depending on the technical or domain expertise located at a site — the lecture's example is user interface design done at a site where usability engineering experts are located",
     "maximises quality per work item but fragments any feature that spans expertise areas, since one feature may now require coordinated work at several sites"),
    ("Open source", "many independent contributors develop the software product in accordance with a technical integration strategy, with minimal centralized control except when an independent contributor integrates code into the product line",
     "maximises contributor autonomy and scale but shifts the entire quality burden onto the integration gate, which becomes the only point where architectural conformance can be enforced"),
]

for wname, mech, consequence in ALLOC_WORK:
    add(T, "Work assignment patterns", "Analyse a work-assignment consequence", "Brutal", 7,
        "Lecture 4 lists **%s** among the published work-assignment patterns for globally distributed Agile projects. State the pattern precisely, then analyse one organisational consequence it creates — not merely when to choose it." % wname,
        "The pattern: %s.\n\nOrganisational consequence: %s.\n\nWhy this is architectural rather than purely managerial: Lecture 2 states that architecture 'dictates the structure of an organization, or vice versa' and is 'typically used as the basis for the work-breakdown structure', which in turn dictates units of planning, scheduling and budget, inter-team communication channels, configuration control and file-system organization, and integration and test plans. Lecture 1 makes the same point from the other side — having a work assignment structure in the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'." % (mech, consequence),
        ["work-assignment", wname.lower().replace(" ", "-"), "allocation", "organisation"], P_OTHERALLOC + "; " + L1,
        "Treating work assignment as a project-management topic. The lecture places it inside the architecture.")

add(T, "Other allocation patterns", "Recall published deployment patterns", "Very Hard", 6,
    "Lecture 4 names published deployment patterns from two named vendors. State what each vendor contributes, and give at least four of the specific topologies the lecture lists.",
    "**Microsoft** publishes a 'Tiered Distribution' pattern, which prescribes a particular allocation of components in a multi-tier architecture to the hardware they will run on.\n\n**IBM**, in its WebSphere handbooks, describes a number of what they call 'topologies' along with the quality attribute criteria for choosing among them. The lecture says there are **11 topologies** described for WebSphere version 6, and names: the 'single machine topology (stand-alone server)', 'reverse proxy topology', 'vertical scaling topology', 'horizontal scaling topology', and 'horizontal scaling with IP sprayer topology'.\n\nThe examinable point is the framing: these are specialised deployment patterns chosen against quality-attribute criteria, which is why the lecture pairs the topology list with the phrase 'along with the quality attribute criteria for choosing among them'.",
    ["other-allocation-patterns", "WebSphere", "tiered-distribution", "topologies"], P_OTHERALLOC,
    "Treating Multi-Tier and Map-Reduce as the only allocation patterns. The lecture names a further published family.")

# ---------------------------------------------------------------- STRUCTURES (Lecture 1)
STRUCTURES = [
    ("Class (generalization) structure", "Module",
     "the module units are called classes; the relation is 'inherits from' or 'is an instance of'",
     "reasoning about collections of similar behaviour or capability — for example the classes that other classes inherit from, and parameterized differences",
     "it allows one to reason about **reuse and the incremental addition of functionality**; the lecture notes that if any documentation exists for a project following an object-oriented analysis and design process, it is typically this structure"),
    ("Decomposition structure", "Module",
     "the units are modules related to each other by the 'is-a-submodule-of' relation",
     "showing how modules are decomposed into smaller modules recursively until they are small enough to be easily understood",
     "it determines, to a large degree, the system's **modifiability**, by assuring that likely changes are localized; its units tend to have organization-specific names such as 'segment' or 'subsystem'"),
    ("Uses structure", "Module",
     "the units are modules, perhaps classes, related by the 'uses' relation — a specialized form of dependency in which a unit uses another if the correctness of the first requires the presence of a correctly functioning version (as opposed to a stub) of the second",
     "engineering systems that can be extended to add functionality, or from which useful functional subsets can be extracted",
     "the ability to easily create a subset of a system allows for **incremental development**; this is also the relation the Layer pattern constrains"),
    ("Data model", "Module",
     "it describes the static information structure in terms of data entities and their relationships",
     "reasoning about the entities the system manipulates and how they relate",
     "the lecture's own example is a banking system whose entities typically include Account, Customer and Loan, where Account has attributes such as account number, type (savings or checking), status and current balance"),
    ("Deployment structure", "Allocation",
     "the elements are software elements (usually a process from a C&C view), hardware entities (processors) and communication pathways; the relations are 'allocated-to' — showing on which physical units the software elements reside — and 'migrates-to' if the allocation is dynamic",
     "showing how software is assigned to hardware processing and communication elements",
     "it can be used to reason about **performance, data integrity, security and availability**, and is of particular interest in distributed and parallel systems"),
    ("Implementation structure", "Allocation",
     "it maps software elements, usually modules, to the file structure(s) in the system's development, integration or configuration control environments",
     "answering where each element is stored during development, testing and system building",
     "it is what connects the architecture to the build: without it, questions about integration and version control have no architectural answer"),
    ("Work assignment structure", "Allocation",
     "it assigns responsibility for implementing and integrating the modules to the teams who will carry it out",
     "answering what the assignment of each software element to development teams is",
     "the lecture states that having it be part of the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'; the architect will know the expertise required on each team, and it determines major communication pathways among teams such as regular teleconferences, wikis and email lists"),
]

for sname, category, units, use, significance in STRUCTURES:
    add("Structures and Views (Depth)", sname, "Recall a specific structure", "Very Hard", 6,
        "Lecture 1 lists several useful structures beyond the headline patterns. For the **%s**, state its category, its units and relations, what it is used for, and its architectural significance." % sname,
        "Category: **%s structure**.\n\nUnits and relations: %s.\n\nUsed for: %s.\n\nSignificance: %s." % (category, units, use, significance),
        [sname.lower().replace(" ", "-").replace("(", "").replace(")", ""), category.lower(), "structures"], L1,
        "Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.")

add("Structures and Views (Depth)", "Structures provide insight", "Link structure to quality", "Brutal", 8,
    "Lecture 1 states that 'each structure provides a perspective for reasoning about some of the relevant quality attributes' and gives three specific pairings. State all three pairings with the reasoning the lecture attaches to each.",
    "Pairing 1 — the **module structure**, which embodies what modules use what other modules, 'is strongly tied to the ease with which a system can be extended or contracted'. The reasoning is that extension and contraction are questions about implementation dependencies, which is exactly what the module structure records.\n\nPairing 2 — the **C&C structure**, which embodies parallelism within the system, 'is strongly tied to the ease with which a system can be made free of deadlock and performance bottlenecks'. Deadlock and bottlenecks are runtime interaction phenomena, invisible in a module view.\n\nPairing 3 — the **allocation structure** 'is strongly tied to the achievement of performance, availability, and security goals', because those depend on where software actually executes and what it is co-located with.\n\nThe general principle: you cannot answer a quality question from the wrong structure. The lecture makes this explicit elsewhere — 'it is difficult to use the module views to make inferences about runtime behavior', so a module view is 'not typically used for analysis of performance, reliability, and many other runtime qualities'.",
    ["structures", "quality-attributes", "insight", "wrong-view"], L1 + "; Lecture10_Documenting Software Architectures.pdf",
    "Trying to argue performance from a module diagram. The lecture says explicitly that this does not work.")

add("Structures and Views (Depth)", "Architecture includes behavior", "Argue an inclusion boundary", "Brutal", 8,
    "Lecture 1 claims that 'box-and-line drawings that are passed off as architectures are not architectures at all', yet also says not every aspect of behaviour must be documented. State the criterion that separates the two cases and explain the reasoning behind the box-and-line criticism.",
    "The criterion: 'to the extent that an element's behavior influences another element or influences the acceptability of the system as a whole, this behavior must be considered, and should be documented, as part of the software architecture.' Behaviour that is fine-grained and below the architect's level of concern need not be documented; behaviour with ramifications outside its own element must be.\n\nThe box-and-line criticism: such drawings show names and connections but no behaviour, so 'when looking at the names, a reader may well imagine the functionality and behavior of the corresponding elements' — but that imagining 'relies on information that is not present, and could be wrong'. The drawing appears to communicate while actually leaving the reader to invent the semantics, which is worse than saying nothing.\n\nThis links directly to the architecture definition: architecture comprises elements, relations **and properties of both**. A diagram with elements and relations but no properties has supplied two thirds of the definition.",
    ["behavior", "box-and-line", "abstraction", "documentation"], L1,
    "Concluding that all behaviour must be documented. The lecture explicitly excludes fine-grained behaviour with no external ramification.")

add("Structures and Views (Depth)", "Architecture is an abstraction", "State the omission rule", "Very Hard", 7,
    "Lecture 1 says architecture 'specifically omits certain information about elements'. State the precise rule it gives for what may be omitted, explain why the omission is necessary, and give the consequence for judging whether a decision is architectural.",
    "The rule: an architecture 'omits information that has no ramifications outside of a single element', and 'private details of elements — details having to do solely with internal implementation — are not architectural'. It selects certain details and suppresses others.\n\nWhy necessary: the abstraction 'is essential to taming the complexity of an architecture' — the lecture's phrasing is that 'we simply cannot, and do not want to, deal with all of the complexity all of the time'. The abstraction lets us look at the system in terms of its elements, how they are arranged, how they interact, how they are composed and what properties support our reasoning.\n\nConsequence for judging architecturality: combine this with the structure test — 'a structure is architectural if it supports reasoning about the system and the system's properties', where the reasoning must be 'about an attribute of the system that is important to some stakeholder'. So the question to ask about any decision is not 'is it important?' but 'does it have ramifications outside one element, and does it bear on something a stakeholder cares about?'",
    ["abstraction", "omission", "architectural-or-not", "stakeholder"], L1,
    "Using 'is it a big decision?' as the test. The lecture's test is about ramifications outside one element and stakeholder-relevant reasoning.")

# ---------------------------------------------------------------- emit
with open("../questions_advanced.json", "w") as f:
    json.dump(Q, f, indent=1, ensure_ascii=False)
print("ADV after part 2:", len(Q))
