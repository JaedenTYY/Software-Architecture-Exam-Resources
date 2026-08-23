# -*- coding: utf-8 -*-
"""
gen_adv1.py — Advanced Depth bank, part 1.
Modules: seven design-decision categories, tactics & side-effect chains,
quality-attribute general-scenario precision.

Every question here uses a question TYPE that does not appear in the original
3,888-question bank, and is grounded in lecture content the original bank does
not reach.
"""
import json

Q = []
L5 = "Lecture5_UnderstandingQualityAttributes.pdf"
L6 = "Lecture6_Relationships Between Tactics and Patterns.pdf"
L7 = "Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios (1).pdf"


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


# =====================================================================
# MODULE 1 — THE SEVEN DESIGN-DECISION CATEGORIES (real lecture content)
# =====================================================================
DD = [
    ("Allocation of responsibilities",
     "identifying the important responsibilities (basic system functions, architectural infrastructure, satisfaction of quality attributes) and determining how they are allocated to non-runtime and runtime elements — modules, components and connectors",
     "functional decomposition; modelling real-world objects; grouping based on the major modes of system operation; grouping based on similar quality requirements such as processing frame rate, security level, or expected changes",
     "Placing authentication in a dedicated element rather than duplicating checks across every module",
     "Security improves because trust decisions are made in one auditable place; modifiability improves because a change to the authentication rule touches one element. Performance may degrade slightly because every request now crosses an extra element boundary."),

    ("Coordination model",
     "identifying which elements must coordinate and which are prohibited from coordinating, determining the required properties of that coordination, and choosing communication mechanisms that realise those properties",
     "the properties to decide are timeliness, currency, completeness, correctness and consistency; the mechanism properties are stateful vs stateless, synchronous vs asynchronous, guaranteed vs non-guaranteed delivery, and performance properties such as throughput and latency",
     "Choosing asynchronous, non-guaranteed messaging for a telemetry feed instead of synchronous call-return",
     "Performance and availability improve because the producer does not block on a slow or absent consumer. Correctness and completeness degrade because messages may be lost, so the design must tolerate gaps — this is exactly the timeliness-versus-completeness trade the lecture asks you to make explicit."),

    ("Data model",
     "choosing the major data abstractions, their operations and their properties — including how data items are created, initialised, accessed, persisted, manipulated, translated and destroyed — plus the metadata needed for consistent interpretation, and the organisation of the data",
     "the organisation decision includes whether data is kept in a relational database, a collection of objects, or both; metadata matters because without it the same bytes can be interpreted inconsistently by different elements",
     "Denormalising a heavily-read table so that a common query needs no join",
     "Performance improves because the read path shortens. Modifiability and integrity degrade because the duplicated field must now be updated in more than one place, and any element that writes it must know the duplication exists."),

    ("Management of resources",
     "arbitrating the use of shared resources: identifying the resources that must be managed and their limits, determining which element manages each, determining how resources are shared and the arbitration strategy under contention, and determining the impact of saturation",
     "hard resources are CPU, memory, battery, hardware buffers, system clock and I/O ports; soft resources are system locks, software buffers, thread pools and non-thread-safe code. The lecture notes that as a CPU becomes more heavily loaded, performance usually degrades fairly steadily — saturation behaviour differs per resource",
     "Introducing a bounded thread pool with a rejection policy instead of creating a thread per request",
     "Performance and availability improve under load because saturation becomes predictable and bounded rather than collapsing. Usability may degrade because some requests are rejected outright; the design must decide what a rejected user sees."),

    ("Mapping among architectural elements",
     "providing two kinds of mapping: between elements in different structure types, and between software elements and environment elements",
     "the first kind maps units of development (modules) to units of execution (threads or processes); the second maps processes to the specific CPUs where they execute. Useful mappings named in the lecture are modules to runtime elements, runtime elements to processors, and items in the data model to data stores",
     "Mapping two previously co-located modules onto separate processes on separate hosts",
     "Availability and security improve because a fault or breach in one is contained. Performance degrades because an in-process call becomes a network call, and the coordination model must now handle partial failure — a decision in one category has forced a decision in another."),

    ("Binding time decisions",
     "deciding, for every decision made in the other six categories, when the alternatives are bound — the lecture stresses that each of the other categories has an associated binding-time decision",
     "the lecture's own examples are designing run-time negotiation of protocols for the coordination model, and designing a system to accept new peripheral devices plugged in at run time for resource management",
     "Moving a routing rule from a compile-time constant to a runtime-loaded configuration file",
     "Modifiability improves because the rule changes without recompilation or redeployment. Performance degrades slightly because the value must be read and validated at runtime, and security/testability degrade because the set of reachable configurations is now larger and must be validated at runtime rather than proven at build time."),

    ("Choice of technology",
     "deciding which technologies are available to realise the decisions made in the other categories, and evaluating them beyond raw capability",
     "the lecture's criteria are whether the supporting tools (IDEs, simulators, testing tools) are adequate; the extent of internal familiarity and external support such as courses, tutorials, examples and availability of contractors; the side effects of the choice such as a required coordination model or constrained resource-management opportunities; and compatibility with the existing technology stack",
     "Adopting a framework that mandates asynchronous event handling throughout",
     "Performance and scalability may improve. But the lecture's 'side effects' criterion bites: the coordination model is no longer free, so a decision in the technology category has removed options in the coordination category. Testability may also degrade because asynchronous flows are harder to control and observe."),
]

for name, decisions, strategies, example, effect in DD:
    add("Quality-Driven Design Decisions", name, "Enumerate decision content", "Very Hard", 6,
        "State precisely what the design-decision category **%s** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name." % name,
        "The category covers %s. %s." % (decisions, strategies[0].upper() + strategies[1:]),
        [name.lower().replace(" ", "-"), "design-decisions", "seven-categories"], L5,
        "Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.")

    add("Quality-Driven Design Decisions", name, "Trace decision to quality consequence", "Brutal", 7,
        "For the design-decision category **%s**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism." % name,
        "Decision: %s.\n\nMechanism and consequences: %s\n\nWhy this belongs to the category: the category is concerned with %s — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them." % (example, effect, decisions),
        [name.lower().replace(" ", "-"), "trade-off", "mechanism", "design-decisions"], L5,
        "Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.")

add("Quality-Driven Design Decisions", "Seven categories", "Explain the category system", "Brutal", 8,
    "Lecture 5 says the seven design-decision categories 'might overlap, but it's all right if a particular decision exists in two different categories'. Explain why overlap is tolerated, and give one concrete decision that genuinely sits in two categories.",
    "Overlap is tolerated because the categories are a **checklist for completeness**, not a taxonomy for classification. The lecture states the concern of the architect is 'to ensure that every important decision is considered' — a decision filed twice costs nothing, whereas a decision filed nowhere is a gap in the design. Concrete example: choosing a message broker technology is simultaneously a *Choice of technology* decision (tool support, familiarity, stack compatibility) and a *Coordination model* decision (it fixes asynchronous, possibly non-guaranteed delivery). A second example: deciding that device drivers load at run time is both *Binding time* and *Management of resources*. The categories are described in the lecture as 'a rational division of concerns', not a partition.",
    ["seven-categories", "overlap", "checklist", "design-decisions"], L5,
    "Treating the overlap as a flaw in the model to be resolved. It is deliberate.")

add("Quality-Driven Design Decisions", "Seven categories", "Diagnose the missing category", "Brutal", 8,
    "A design review records decisions about responsibility allocation, the data model, resource management and technology choice, but nothing about coordination, mapping or binding time. For **each** of the three missing categories, state one specific risk the omission creates.",
    "Coordination model omitted: the elements have responsibilities but no agreed communication properties, so timeliness, currency, completeness, correctness and consistency are unspecified — integration will discover, rather than decide, whether calls are synchronous and whether delivery is guaranteed.\n\nMapping omitted: modules exist but their assignment to runtime elements and to processors is undecided, so nobody can reason about performance, availability or security, all of which depend on where things actually execute. The lecture ties the allocation structure directly to these qualities.\n\nBinding time omitted: every other decision has an implicit binding time, and leaving it implicit means it defaults to the earliest and least flexible option. Any later requirement for run-time configurability then becomes an architectural change rather than a local one.",
    ["seven-categories", "gap-analysis", "review", "design-decisions"], L5,
    "Answering with the definitions of the three categories rather than the risk each omission creates.")

# =====================================================================
# MODULE 2 — TACTICS, LAYER'S FIVE TACTICS, THE PING/ECHO CASCADE
# =====================================================================
LAYER_TACTICS = [
    ("Increase semantic coherence",
     "ensuring a layer's responsibilities all work together without excessive reliance on other layers, by choosing responsibilities that have semantic coherence — which binds together responsibilities likely to be affected by the same change",
     "functionality would be randomly sprinkled throughout the layers, destroying the separation of concerns and hence the ease of modification that is the prime motivation for employing layers in the first place",
     "The lecture's own illustration: responsibilities dealing with hardware belong in a hardware layer, not an application layer, because a hardware responsibility has no semantic coherence with application responsibilities."),
    ("Restrict dependencies",
     "defining an ordering and allowing a layer to use only the services of its adjacent lower layer, which reduces the possible communication paths to the number of layers minus one",
     "any function in any layer could call any other function in any other layer, destroying the low coupling that makes the layering pattern effective",
     "The lecture notes this limitation 'has a great influence on the dependencies between the layers and makes it much easier to limit the side effects of replacing a layer'."),
    ("Abstract common services",
     "factoring functionality that several clients need into a shared service exposed through the layer's public interface, so callers depend on the abstraction rather than on repeated implementations",
     "the same capability would be reimplemented above the layer boundary in several places, so a change would become a non-local change touching every duplicate",
     "This is what makes a lower layer worth having at all: it is the reason a layer is a 'grouping of modules that offers a cohesive set of services'."),
    ("Encapsulate",
     "hiding a layer's internals behind a public interface, so that changes inside the layer do not ripple outward",
     "callers would bind to internal details, so replacing the layer's implementation would break them and the modifiability argument for layering would collapse",
     "The lecture states layers 'completely partition a set of software, and each partition is exposed through a public interface'."),
    ("Restrict communication paths",
     "limiting which elements may talk to which, so that the dependency graph stays sparse and analysable",
     "the number of interaction paths would grow combinatorially, making the effect of any change impossible to bound",
     "Closely related to restrict dependencies; together they are what turn a stack of boxes into an actual layered architecture."),
]

for tname, does, without, note in LAYER_TACTICS:
    add("Tactics and Patterns", "Layer tactics", "Identify tactic within a pattern", "Brutal", 6,
        "Lecture 6 states that the Layer pattern is built from several tactics, and that 'without any one of its tactics, the pattern might be ineffective'. For the tactic **%s**: state what it does inside the Layer pattern, and state precisely what would go wrong if it were omitted." % tname,
        "What it does: %s.\n\nIf omitted: %s.\n\n%s" % (does, without, note),
        ["Layer", "tactics", tname.lower().replace(" ", "-"), "patterns-comprise-tactics"], L6,
        "Defining the tactic in the abstract without saying what breaks in Layer specifically. The 'if omitted' half carries the marks.")

add("Tactics and Patterns", "Pattern vs tactic", "Explain the composition relation", "Very Hard", 6,
    "Lecture 6 says 'if a pattern is a molecule, a tactic is an atom' and that 'patterns are built from tactics'. Explain what this composition claim actually asserts, using the Layer pattern, and state the practical consequence for an architect who cannot find a pattern that fits.",
    "The claim is that a pattern is not a primitive: it is a bundle of several smaller design decisions, each of which independently targets a quality-attribute response. The lecture enumerates Layer's bundle as increase semantic coherence, abstract common services, encapsulate, restrict communication paths and use an intermediary/restrict dependencies. Because the bundle is decomposable, an architect who finds no fitting pattern is not stuck: the lecture's second stated reason for cataloguing tactics is that 'if no pattern exists to realize the architect's design goal, tactics allow the architect to construct a design fragment from first principles'. The third reason is that cataloguing makes the choice systematic, since several tactics usually exist for one quality and the choice depends on trade-offs and cost to implement.",
    ["tactics", "patterns", "molecule-atom", "composition"], L6,
    "Reciting the mnemonic without the consequence. The exam value is in what tactics let you do when no pattern fits.")

add("Tactics and Patterns", "Broker augmentation", "Match tactic to specific weakness", "Brutal", 8,
    "Lecture 6 identifies four weaknesses of the Broker pattern and then augments it with tactics. Name all four weaknesses, and for each state whether the lecture's proposed tactics address it — being explicit about the ones that are left unaddressed.",
    "The four weaknesses are **availability** (the broker is a single point of failure), **performance** (levels of indirection add latency, and the broker is a potential bottleneck), **testability** (brokers sit in complex, highly dynamic multi-process systems with asynchronous requests and responses, making testing and debugging extremely difficult) and **security** (the pattern as presented offers no means to authenticate or authorise clients or servers, and no protection of the communication).\n\nThe lecture's tactics address the first two directly: increase available resources gives multiple brokers, maintain multiple copies keeps their state identical, load balancing (an application of scheduling resources) prevents one broker being overloaded while another idles, and heartbeat / exception detection / ping-echo detect faults so clients and peer brokers can be notified.\n\nTestability and security are **not** repaired by that tactic set — they are named as legitimate concerns but the augmentation discussion targets availability and performance. A complete answer says so rather than pretending the four tactics fix everything.",
    ["Broker", "tactics", "augmentation", "weaknesses"], L6,
    "Claiming the four tactics fix all four weaknesses. Replicating brokers does nothing for the missing authentication.")

CASCADE = [
    (1, "ping/echo", "detecting faults in components",
     "Security — how to prevent a ping flood attack? Performance — how to ensure the performance overhead of ping/echo is small? Modifiability — how to add ping/echo to the existing architecture?",
     "performance", "increase available resources"),
    (2, "increase available resources", "absorbing the performance overhead that ping/echo introduced",
     "Cost — increased resources cost more. Performance — how to utilise the increased resources efficiently?",
     "resource utilisation", "a scheduling policy"),
    (3, "a scheduling policy", "using the added resources efficiently rather than merely adding cost and complexity",
     "Modifiability — how to add the scheduling policy to the existing architecture? Modifiability — how to change the scheduling policy in the future?",
     "modifiability", "use an intermediary"),
    (4, "use an intermediary", "insulating the choice of scheduling policy from the rest of the system",
     "Modifiability — how to ensure that all communication passes through the intermediary?",
     "enforcement of the intermediary", "restrict dependencies"),
    (5, "restrict dependencies", "ensuring all communication actually passes through the intermediary",
     "Performance — how to ensure the performance overhead of the intermediary is not excessive?",
     "performance", "(the architect may stop here)"),
]

for step, tactic, purpose, considerations, side, nexttac in CASCADE:
    add("Tactics and Patterns", "Tactic side-effect chain", "Trace a tactic side-effect", "Brutal", 7,
        "In Lecture 6's worked example the architect applies a sequence of tactics, each one introducing new concerns. At **step %d** the architect applies **%s**. State why it is applied, list the considerations the lecture associates with it, and name the side effect that drives the next step." % (step, tactic),
        "Applied for: %s.\n\nConsiderations the lecture associates with it: %s\n\nThe dominant side effect is %s, which the architect addresses at the next step by applying **%s**.\n\nThe general lesson: every tactic has a main effect and side effects, so applying one does not end the design problem — it moves it." % (purpose, considerations, side, nexttac),
        ["tactics", "side-effects", "cascade", tactic.replace(" ", "-")], L6,
        "Treating the tactic as a fix with no cost. The lecture's whole point is that each one creates the next problem.")

add("Tactics and Patterns", "Tactic side-effect chain", "Explain recursion termination", "Brutal", 8,
    "Lecture 6 asks: 'This design problem has now become recursive! Are we in an infinite progression?' Answer the question as the lecture does, and explain what an architect must judge in order to stop.",
    "No, it is not infinite. The lecture's answer is that 'eventually the side-effects of each tactic become small enough to ignore'. Termination is therefore a **judgement about magnitude, not a logical endpoint**: at any point in the tree of design decisions the architect may determine that, for example, the performance overhead of the intermediary is small enough that no further design decisions need to be made.\n\nWhat the architect must judge: whether the remaining side effect is large enough to threaten a prioritised quality-attribute *scenario with a measurable response*. That is why response measures matter — without one, 'small enough' is unfalsifiable and the architect either stops arbitrarily early or keeps designing forever. The lecture also frames the stopping point as reached when 'requirements for a specific system are satisfied', which is the same idea stated from the requirements side.",
    ["tactics", "recursion", "termination", "judgement"], L6,
    "Answering 'yes, it is infinite' — or answering 'no' without saying what makes the remaining side effect ignorable.")

add("Tactics and Patterns", "Using tactics to augment patterns", "Explain the two-perspective check", "Very Hard", 6,
    "Lecture 6 says that to make a pattern work in a given architectural context, we must examine it 'from two perspectives'. Name both perspectives and explain why the second is the one architects forget.",
    "Perspective one: **the inherent quality-attribute trade-offs the pattern makes** — patterns exist to achieve certain qualities, so compare the ones they promote and the ones they diminish against your needs. Perspective two: **other quality attributes the pattern is not directly concerned with, but which it nevertheless affects and which matter in your application**.\n\nThe second is forgotten because pattern catalogues are written around the problem the pattern solves. Broker is documented as an interoperability/modifiability solution, so an architect checks those. Its effect on testability and security is real but incidental to the pattern's stated purpose, so it goes unexamined until integration. The lecture's framing is that 'patterns solve a specific problem but are neutral or have weaknesses with respect to other qualities' — the weaknesses are in the residual set, not the advertised set.",
    ["tactics", "patterns", "two-perspectives", "residual-qualities"], L6,
    "Giving only the advertised trade-offs. The second perspective is where the marks are.")

# =====================================================================
# MODULE 3 — QA GENERAL SCENARIO PRECISION (Lecture 7 tables)
# =====================================================================
QA_TABLES = [
    ("Availability",
     "readiness to provide service and to be there when needed; it encompasses reliability and adds the notion of recovery (repair). Fundamentally about minimising service outage time by mitigating faults",
     "internal/external: people, hardware, software, physical infrastructure, physical environment",
     "fault: omission, crash, incorrect timing, incorrect response",
     "system's processors, communication channels, persistent storage, processes",
     "normal operation, startup, shutdown, repair mode, degraded operation, overloaded operation",
     "prevent the fault from becoming a failure; detect the fault (log it, notify appropriate entities); recover from the fault (disable the source of events causing the fault, be temporarily unavailable while repair is effected, fix or mask the fault/failure or contain the damage, operate in degraded mode while repair is effected)",
     "time or time interval when the system must be available; availability percentage such as 99.999%; time to detect the fault; time to repair the fault; time or time interval in which the system can be in degraded mode; proportion or rate of a class of faults the system prevents or handles without failing",
     "The heartbeat monitor determines that the server is nonresponsive during normal operations. The system informs the operator and continues to operate with no downtime."),

    ("Interoperability",
     "the degree to which two or more systems can usefully exchange meaningful information; like all quality attributes it is not a yes-or-no proposition but has shades of meaning",
     "a system",
     "a request to exchange information among system(s)",
     "the systems that wish to interoperate",
     "system(s) wishing to interoperate are discovered at run time, or known prior to run time",
     "the request is appropriately rejected and appropriate entities are notified; or the request is appropriately accepted and information is exchanged successfully; or the request is logged by one or more of the involved systems",
     "percentage of information exchanges correctly processed; percentage of information exchanges correctly rejected",
     "Our vehicle information system sends our current location to the traffic monitoring system. The traffic monitoring system combines our location with other information, overlays this information on a Google Map, and broadcasts it. Our location information is correctly included with a probability of 99.9%."),

    ("Modifiability",
     "change, and specifically the cost and risk of making changes. To plan for it an architect must consider three questions: what can change, what is the likelihood of the change, and when is the change made and who makes it",
     "end user, developer, system administrator",
     "a directive to add/delete/modify functionality, or change a quality attribute, capacity, or technology",
     "code, data, interfaces, components, resources, configurations",
     "runtime, compile time, build time, initiation time, design time",
     "make the modification; test the modification; deploy the modification",
     "cost in terms of number, size and complexity of affected artifacts; effort; calendar time; money (direct outlay or opportunity cost); extent to which this modification affects other functions or quality attributes; new defects introduced",
     "The developer wishes to change the user interface by modifying the code at design time. The modifications are made with no side effects within three hours."),

    ("Performance",
     "time, and the software system's ability to meet timing requirements. Characterising the events that can occur, when they can occur, and the element's time-based response to them is the essence of discussing performance",
     "internal or external to the system",
     "arrival of a periodic, sporadic, or stochastic event",
     "system or one or more components in the system",
     "operational mode: normal, emergency, peak load, overload",
     "process events; change level of service",
     "latency, deadline, throughput, jitter, miss rate",
     "Users initiate transactions under normal operations. The system processes the transactions with an average latency of two seconds."),

    ("Security",
     "a measure of the system's ability to protect data and information from unauthorized access while still providing access to people and systems that are authorized. Characterised by CIA — confidentiality, integrity, availability — supported by authentication, nonrepudiation and authorization",
     "human or another system which may have been previously identified (either correctly or incorrectly) or may be currently unknown; a human attacker may be from outside the organization or from inside it",
     "unauthorized attempt is made to display data, change or delete data, access system services, change the system's behavior, or reduce availability",
     "system services; data within the system; a component or resources of the system; data produced or consumed by the system",
     "the system is either online or offline, connected to or disconnected from a network, behind a firewall or open to a network, fully operational, partially operational, or not operational",
     "transactions are carried out such that data/services are protected from unauthorized access, are not manipulated without authorization, parties are identified with assurance, parties cannot repudiate their involvement, and data/resources/services remain available for legitimate use; the system tracks activities by recording access or modification, recording attempts, and notifying appropriate entities when an apparent attack is occurring",
     "how much of a system is compromised when a particular component or data value is compromised; how much time passed before an attack was detected; how many attacks were resisted; how long it takes to recover from a successful attack; how much data is vulnerable to a particular attack",
     "A disgruntled employee from a remote location attempts to modify the pay rate table during normal operations. The system maintains an audit trail and the correct data is restored within a day."),

    ("Testability",
     "the ease with which software can be made to demonstrate its faults through (typically execution-based) testing. Specifically, the probability that — assuming the software has at least one fault — it will fail on its next test execution. For a system to be properly testable it must be possible to control each component's inputs (and possibly manipulate its internal state) and then observe its outputs (and possibly its internal state)",
     "unit testers, integration testers, system testers, acceptance testers, end users, either running tests manually or using automated testing tools",
     "a set of tests are executed due to the completion of a coding increment such as a class, layer or service; the completed integration of a subsystem; the complete implementation of the system; or the delivery of the system to the customer",
     "the portion of the system being tested",
     "design time, development time, compile time, integration time, deployment time, run time",
     "execute test suite and capture results; capture activity that resulted in the fault; control and monitor the state of the system",
     "effort to find a fault or class of faults; effort to achieve a given percentage of state space coverage; probability of a fault being revealed by the next test; time to perform tests; effort to detect faults; length of longest dependency chain in test; length of time to prepare test environment; reduction in risk exposure computed as size(loss) x prob(loss)",
     "The unit tester completes a code unit during development and performs a test sequence whose results are captured and that gives 85% path coverage within 3 hours of testing."),

    ("Usability",
     "how easy it is for the user to accomplish a desired task and the kind of user support the system provides. It comprises learning system features, using a system efficiently, minimizing the impact of errors, adapting the system to user needs, and increasing confidence and satisfaction",
     "end user, possibly in a specialized role",
     "end user tries to use a system efficiently, learn to use the system, minimize the impact of errors, adapt the system, or configure the system",
     "system or the specific portion of the system with which the user is interacting",
     "runtime or configuration time",
     "the system should either provide the user with the features needed or anticipate the user's needs",
     "task time; number of errors; number of tasks accomplished; user satisfaction; gain of user knowledge; ratio of successful operations to total operations; amount of time or data lost when an error occurs",
     "The user downloads a new application and is using it productively after two minutes of experimentation."),
]

for qa, definition, src, stim, art, env, resp, meas, concrete in QA_TABLES:
    add("Quality Attributes", qa, "Recall general-scenario values", "Very Hard", 8,
        "Reproduce the **%s general scenario** table from Lecture 7: give the possible values the lecture lists for Source, Stimulus, Artifact, Environment, Response and Response Measure. Generic placeholders will not earn marks." % qa,
        "%s is %s.\n\n| Portion | Possible values |\n|---|---|\n| Source | %s |\n| Stimulus | %s |\n| Artifact | %s |\n| Environment | %s |\n| Response | %s |\n| Response Measure | %s |" % (qa, definition, src, stim, art, env, resp, meas),
        [qa.lower(), "general-scenario", "possible-values", "recall"], L7,
        "Writing 'normal or peak conditions' for Environment regardless of attribute. Each attribute has its own list — Testability's environments are lifecycle phases, not load levels.")

    add("Quality Attributes", qa, "Critique a response measure", "Brutal", 6,
        "A team writes this response measure for a **%s** scenario: *'the system will handle it well'*. Explain why this fails the lecture's requirement, and give three measures drawn from the lecture's own %s list that would be acceptable instead." % (qa, qa),
        "It fails because Lecture 5 requires a quality-attribute requirement to be **unambiguous and testable**, and states the definitions problem directly: it is meaningless to say a system will be 'modifiable' or handle something 'well', since every system is modifiable with respect to one set of changes and not another. Without a measure there is no way to determine whether the requirement is satisfied.\n\nAcceptable measures from the lecture's %s list: %s" % (qa, meas),
        [qa.lower(), "response-measure", "testability-of-requirements", "critique"], L5 + "; " + L7,
        "Substituting a number from a different attribute — '99.9% uptime' is not a Usability measure.")

    add("Quality Attributes", qa, "Match concrete scenario to general scenario", "Very Hard", 7,
        "Lecture 7's sample concrete **%s** scenario is:\n\n> *%s*\n\nDecompose it into all six parts and identify, for each part, which entry from the general-scenario table it instantiates." % (qa, concrete),
        "Decompose the sentence and map each fragment to its general-scenario slot, checking it against the lecture's list of possible values for %s:\n\n- Source — from the list: %s\n- Stimulus — from the list: %s\n- Artifact — from the list: %s\n- Environment — from the list: %s\n- Response — from the list: %s\n- Response Measure — from the list: %s\n\nThe purpose of the exercise is to show that a concrete scenario is a *selection* from the general scenario, which is why the general table is the thing worth memorising." % (qa, src, stim, art, env, resp, meas),
        [qa.lower(), "concrete-scenario", "decompose", "general-to-concrete"], L7,
        "Inventing parts the sentence does not contain. If the concrete scenario leaves the environment implicit, say so rather than fabricating one.")

add("Quality Attributes", "Runtime vs development-time", "Classify by observation method", "Very Hard", 6,
    "Lecture 5 divides quality attributes into two categories. State the division precisely, classify all seven attributes from Lecture 7, and explain the test you applied — not merely the answer.",
    "The division is between attributes that **describe some property of the system at run time** (the lecture's examples: availability, performance, usability) and those that **describe some property of the development of the system** (its examples: modifiability, testability).\n\nThe test to apply: ask whether the response in the scenario is performed by *the system* or by *the developers*. Lecture 5 makes this explicit — 'the response consists of the responsibilities that the system (for runtime qualities) or the developers (for development-time qualities) should perform'.\n\nApplying it: Availability, Performance, Security and Usability are runtime — the system detects, processes, resists or guides. Interoperability is runtime — two systems exchange information while running. Modifiability is development-time — a developer makes, tests and deploys a change. Testability is development/testing-time — a tester executes a suite. Confirmation comes from the Environment rows: Modifiability's environments are 'runtime, compile time, build time, initiation time, design time' and Testability's are lifecycle phases, whereas Performance's are load conditions.",
    ["runtime", "development-time", "classification", "who-responds"], L5 + "; " + L7,
    "Memorising the list without the test. The examiner can ask about an attribute not on your list.")

add("Quality Attributes", "Quality attribute considerations", "Explain the three problems", "Brutal", 8,
    "Lecture 5 states there are three problems with conventional discussions of quality attributes, and that scenarios solve two of them. Name all three problems and state precisely which are solved by scenarios and which by something else.",
    "Problem 1 — **the definitions are not testable**. It is meaningless to say a system will be 'modifiable': every system is modifiable with respect to one set of changes and not another, and similarly a system may be robust to some faults and brittle to others.\n\nProblem 2 — **endless time is wasted arguing which quality a concern belongs to**. Is a failure due to a denial-of-service attack an aspect of availability, performance, security or usability? All four communities would claim it and all are to some extent correct, but this does not help architects create solutions.\n\nProblem 3 — **each attribute community has developed its own vocabulary**. Performance has 'events' arriving, security has 'attacks' arriving, availability has 'failures', usability has 'user input' — all possibly referring to the same occurrence.\n\nScenarios solve problems 1 and 2: a six-part scenario is testable and it sidesteps the ownership argument by describing the occurrence rather than labelling it. Problem 3 is solved differently — by 'a discussion of each attribute, concentrating on its underlying concerns, to illustrate the concepts fundamental to that attribute community'. Saying scenarios solve all three is wrong.",
    ["quality-attributes", "three-problems", "scenarios", "vocabulary"], L5,
    "Claiming scenarios fix all three. The lecture explicitly solves the vocabulary problem by a different means.")

add("Quality Attributes", "Functionality", "Explain orthogonality", "Brutal", 7,
    "Lecture 5 claims 'functionality does not determine architecture' and that 'functionality and quality attributes are orthogonal'. Defend both claims, then explain why we decompose systems at all if functionality alone does not require it.",
    "First claim: given a set of required functionality there is no end to the architectures that could satisfy it — the functionality could be divided in any number of ways and the sub-pieces assigned to different elements. The lecture pushes this to its limit: 'if functionality were the only thing that mattered, you wouldn't have to divide the system into pieces at all'. A single monolithic blob can be functionally correct.\n\nSecond claim: orthogonality means you can vary one while holding the other fixed. The same function can be fast or slow, secure or open, easy or hard to change — so knowing the function tells you nothing about the qualities, and vice versa. Lecture 5's illustration is one functional requirement ('when the user presses the green button the Options dialog appears') carrying separate performance, availability and usability annotations.\n\nWhy we decompose anyway: 'we design our systems as structured sets of cooperating architectural elements — modules, layers, classes, services, databases, apps, threads, peers, tiers — to make them understandable and to support a variety of other purposes', and 'those other purposes are the other quality attributes'. Structure exists to serve qualities, not functionality.",
    ["functionality", "orthogonality", "decomposition", "why-structure"], L5,
    "Arguing functionality does constrain architecture because 'you need a module for each feature'. That is a convention, not a necessity.")

add("Quality Attributes", "Requirement categories", "Classify a requirement", "Very Hard", 6,
    "Lecture 5 divides system requirements into three categories. Name them, define each precisely, and classify these four: (a) the system shall run on Ubuntu 24.04; (b) 95% of searches return within 2 seconds; (c) the system shall let a lecturer publish grades; (d) the team shall reuse the existing authentication module.",
    "The three categories are **functional requirements** (what the system must do, how it must behave or react to run-time stimuli), **quality attribute requirements** (annotations that qualify functional requirements — how fast, how resilient to erroneous input, how easy to learn), and **constraints** (a design decision with zero degrees of freedom, i.e. a decision already made for you; the lecture's examples are a requirement to use a certain programming language or to reuse a certain existing module).\n\n(a) Constraint — the platform decision is already made, zero degrees of freedom.\n(b) Quality attribute — it qualifies the search function with a testable performance measure.\n(c) Functional — it states what the system must do.\n(d) Constraint — this is verbatim the lecture's own example of a constraint.",
    ["requirements", "constraints", "classification", "zero-degrees-of-freedom"], L5,
    "Calling (d) a functional requirement. 'Reuse an existing module' is the lecture's textbook example of a constraint.")

# ---------------------------------------------------------------- emit
with open("../questions_advanced.json", "w") as f:
    json.dump(Q, f, indent=1, ensure_ascii=False)
print("ADV part 1 generated:", len(Q))
