# Quality-Driven Design Decisions

*Advanced Depth bank — 16 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0001 — Allocation of responsibilities (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Allocation of responsibilities** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers identifying the important responsibilities (basic system functions, architectural infrastructure, satisfaction of quality attributes) and determining how they are allocated to non-runtime and runtime elements — modules, components and connectors. Functional decomposition; modelling real-world objects; grouping based on the major modes of system operation; grouping based on similar quality requirements such as processing frame rate, security level, or expected changes.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: allocation-of-responsibilities, design-decisions, seven-categories*

</details>

---

## ADV-0002 — Allocation of responsibilities (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Allocation of responsibilities**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Placing authentication in a dedicated element rather than duplicating checks across every module.

Mechanism and consequences: Security improves because trust decisions are made in one auditable place; modifiability improves because a change to the authentication rule touches one element. Performance may degrade slightly because every request now crosses an extra element boundary.

Why this belongs to the category: the category is concerned with identifying the important responsibilities (basic system functions, architectural infrastructure, satisfaction of quality attributes) and determining how they are allocated to non-runtime and runtime elements — modules, components and connectors — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: allocation-of-responsibilities, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0003 — Coordination model (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Coordination model** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers identifying which elements must coordinate and which are prohibited from coordinating, determining the required properties of that coordination, and choosing communication mechanisms that realise those properties. The properties to decide are timeliness, currency, completeness, correctness and consistency; the mechanism properties are stateful vs stateless, synchronous vs asynchronous, guaranteed vs non-guaranteed delivery, and performance properties such as throughput and latency.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: coordination-model, design-decisions, seven-categories*

</details>

---

## ADV-0004 — Coordination model (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Coordination model**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Choosing asynchronous, non-guaranteed messaging for a telemetry feed instead of synchronous call-return.

Mechanism and consequences: Performance and availability improve because the producer does not block on a slow or absent consumer. Correctness and completeness degrade because messages may be lost, so the design must tolerate gaps — this is exactly the timeliness-versus-completeness trade the lecture asks you to make explicit.

Why this belongs to the category: the category is concerned with identifying which elements must coordinate and which are prohibited from coordinating, determining the required properties of that coordination, and choosing communication mechanisms that realise those properties — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: coordination-model, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0005 — Data model (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Data model** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers choosing the major data abstractions, their operations and their properties — including how data items are created, initialised, accessed, persisted, manipulated, translated and destroyed — plus the metadata needed for consistent interpretation, and the organisation of the data. The organisation decision includes whether data is kept in a relational database, a collection of objects, or both; metadata matters because without it the same bytes can be interpreted inconsistently by different elements.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: data-model, design-decisions, seven-categories*

</details>

---

## ADV-0006 — Data model (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Data model**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Denormalising a heavily-read table so that a common query needs no join.

Mechanism and consequences: Performance improves because the read path shortens. Modifiability and integrity degrade because the duplicated field must now be updated in more than one place, and any element that writes it must know the duplication exists.

Why this belongs to the category: the category is concerned with choosing the major data abstractions, their operations and their properties — including how data items are created, initialised, accessed, persisted, manipulated, translated and destroyed — plus the metadata needed for consistent interpretation, and the organisation of the data — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: data-model, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0007 — Management of resources (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Management of resources** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers arbitrating the use of shared resources: identifying the resources that must be managed and their limits, determining which element manages each, determining how resources are shared and the arbitration strategy under contention, and determining the impact of saturation. Hard resources are CPU, memory, battery, hardware buffers, system clock and I/O ports; soft resources are system locks, software buffers, thread pools and non-thread-safe code. The lecture notes that as a CPU becomes more heavily loaded, performance usually degrades fairly steadily — saturation behaviour differs per resource.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: management-of-resources, design-decisions, seven-categories*

</details>

---

## ADV-0008 — Management of resources (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Management of resources**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Introducing a bounded thread pool with a rejection policy instead of creating a thread per request.

Mechanism and consequences: Performance and availability improve under load because saturation becomes predictable and bounded rather than collapsing. Usability may degrade because some requests are rejected outright; the design must decide what a rejected user sees.

Why this belongs to the category: the category is concerned with arbitrating the use of shared resources: identifying the resources that must be managed and their limits, determining which element manages each, determining how resources are shared and the arbitration strategy under contention, and determining the impact of saturation — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: management-of-resources, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0009 — Mapping among architectural elements (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Mapping among architectural elements** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers providing two kinds of mapping: between elements in different structure types, and between software elements and environment elements. The first kind maps units of development (modules) to units of execution (threads or processes); the second maps processes to the specific CPUs where they execute. Useful mappings named in the lecture are modules to runtime elements, runtime elements to processors, and items in the data model to data stores.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: mapping-among-architectural-elements, design-decisions, seven-categories*

</details>

---

## ADV-0010 — Mapping among architectural elements (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Mapping among architectural elements**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Mapping two previously co-located modules onto separate processes on separate hosts.

Mechanism and consequences: Availability and security improve because a fault or breach in one is contained. Performance degrades because an in-process call becomes a network call, and the coordination model must now handle partial failure — a decision in one category has forced a decision in another.

Why this belongs to the category: the category is concerned with providing two kinds of mapping: between elements in different structure types, and between software elements and environment elements — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: mapping-among-architectural-elements, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0011 — Binding time decisions (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Binding time decisions** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers deciding, for every decision made in the other six categories, when the alternatives are bound — the lecture stresses that each of the other categories has an associated binding-time decision. The lecture's own examples are designing run-time negotiation of protocols for the coordination model, and designing a system to accept new peripheral devices plugged in at run time for resource management.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: binding-time-decisions, design-decisions, seven-categories*

</details>

---

## ADV-0012 — Binding time decisions (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Binding time decisions**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Moving a routing rule from a compile-time constant to a runtime-loaded configuration file.

Mechanism and consequences: Modifiability improves because the rule changes without recompilation or redeployment. Performance degrades slightly because the value must be read and validated at runtime, and security/testability degrade because the set of reachable configurations is now larger and must be validated at runtime rather than proven at build time.

Why this belongs to the category: the category is concerned with deciding, for every decision made in the other six categories, when the alternatives are bound — the lecture stresses that each of the other categories has an associated binding-time decision — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: binding-time-decisions, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0013 — Choice of technology (Very Hard, 6 marks)

**Type:** Enumerate decision content  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

State precisely what the design-decision category **Choice of technology** requires an architect to decide, according to Lecture 5. Your answer must list the specific decisions in the category — not a general description of the category's name.

<details>
<summary><strong>Show answer</strong></summary>

The category covers deciding which technologies are available to realise the decisions made in the other categories, and evaluating them beyond raw capability. The lecture's criteria are whether the supporting tools (IDEs, simulators, testing tools) are adequate; the extent of internal familiarity and external support such as courses, tutorials, examples and availability of contractors; the side effects of the choice such as a required coordination model or constrained resource-management opportunities; and compatibility with the existing technology stack.

> **Exam trap:** Restating the category name in a sentence. The marks are for the specific decisions the lecture lists inside it.

*Tags: choice-of-technology, design-decisions, seven-categories*

</details>

---

## ADV-0014 — Choice of technology (Brutal, 7 marks)

**Type:** Trace decision to quality consequence  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

For the design-decision category **Choice of technology**, give one concrete architectural decision, name the mechanism by which it acts, and trace it to **two** quality attributes that move in *opposite* directions. Do not assert quality effects without a mechanism.

<details>
<summary><strong>Show answer</strong></summary>

Decision: Adopting a framework that mandates asynchronous event handling throughout.

Mechanism and consequences: Performance and scalability may improve. But the lecture's 'side effects' criterion bites: the coordination model is no longer free, so a decision in the technology category has removed options in the coordination category. Testability may also degrade because asynchronous flows are harder to control and observe.

Why this belongs to the category: the category is concerned with deciding which technologies are available to realise the decisions made in the other categories, and evaluating them beyond raw capability — and because those choices constrain what the other six categories can still decide, the trade-off above cannot be settled in isolation from them.

> **Exam trap:** Naming two qualities that both improve. The question requires opposing directions, which is what makes it a trade-off.

*Tags: choice-of-technology, trade-off, mechanism, design-decisions*

</details>

---

## ADV-0015 — Seven categories (Brutal, 8 marks)

**Type:** Explain the category system  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

Lecture 5 says the seven design-decision categories 'might overlap, but it's all right if a particular decision exists in two different categories'. Explain why overlap is tolerated, and give one concrete decision that genuinely sits in two categories.

<details>
<summary><strong>Show answer</strong></summary>

Overlap is tolerated because the categories are a **checklist for completeness**, not a taxonomy for classification. The lecture states the concern of the architect is 'to ensure that every important decision is considered' — a decision filed twice costs nothing, whereas a decision filed nowhere is a gap in the design. Concrete example: choosing a message broker technology is simultaneously a *Choice of technology* decision (tool support, familiarity, stack compatibility) and a *Coordination model* decision (it fixes asynchronous, possibly non-guaranteed delivery). A second example: deciding that device drivers load at run time is both *Binding time* and *Management of resources*. The categories are described in the lecture as 'a rational division of concerns', not a partition.

> **Exam trap:** Treating the overlap as a flaw in the model to be resolved. It is deliberate.

*Tags: seven-categories, overlap, checklist, design-decisions*

</details>

---

## ADV-0016 — Seven categories (Brutal, 8 marks)

**Type:** Diagnose the missing category  
**Source:** Lecture5_UnderstandingQualityAttributes.pdf

A design review records decisions about responsibility allocation, the data model, resource management and technology choice, but nothing about coordination, mapping or binding time. For **each** of the three missing categories, state one specific risk the omission creates.

<details>
<summary><strong>Show answer</strong></summary>

Coordination model omitted: the elements have responsibilities but no agreed communication properties, so timeliness, currency, completeness, correctness and consistency are unspecified — integration will discover, rather than decide, whether calls are synchronous and whether delivery is guaranteed.

Mapping omitted: modules exist but their assignment to runtime elements and to processors is undecided, so nobody can reason about performance, availability or security, all of which depend on where things actually execute. The lecture ties the allocation structure directly to these qualities.

Binding time omitted: every other decision has an implicit binding time, and leaving it implicit means it defaults to the earliest and least flexible option. Any later requirement for run-time configurability then becomes an architectural change rather than a local one.

> **Exam trap:** Answering with the definitions of the three categories rather than the risk each omission creates.

*Tags: seven-categories, gap-analysis, review, design-decisions*

</details>

---
