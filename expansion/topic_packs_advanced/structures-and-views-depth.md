# Structures and Views (Depth)

*Advanced Depth bank — 10 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0094 — Class (generalization) structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Class (generalization) structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Module structure**.

Units and relations: the module units are called classes; the relation is 'inherits from' or 'is an instance of'.

Used for: reasoning about collections of similar behaviour or capability — for example the classes that other classes inherit from, and parameterized differences.

Significance: it allows one to reason about **reuse and the incremental addition of functionality**; the lecture notes that if any documentation exists for a project following an object-oriented analysis and design process, it is typically this structure.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: class-generalization-structure, module, structures*

</details>

---

## ADV-0095 — Decomposition structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Decomposition structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Module structure**.

Units and relations: the units are modules related to each other by the 'is-a-submodule-of' relation.

Used for: showing how modules are decomposed into smaller modules recursively until they are small enough to be easily understood.

Significance: it determines, to a large degree, the system's **modifiability**, by assuring that likely changes are localized; its units tend to have organization-specific names such as 'segment' or 'subsystem'.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: decomposition-structure, module, structures*

</details>

---

## ADV-0096 — Uses structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Uses structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Module structure**.

Units and relations: the units are modules, perhaps classes, related by the 'uses' relation — a specialized form of dependency in which a unit uses another if the correctness of the first requires the presence of a correctly functioning version (as opposed to a stub) of the second.

Used for: engineering systems that can be extended to add functionality, or from which useful functional subsets can be extracted.

Significance: the ability to easily create a subset of a system allows for **incremental development**; this is also the relation the Layer pattern constrains.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: uses-structure, module, structures*

</details>

---

## ADV-0097 — Data model (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Data model**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Module structure**.

Units and relations: it describes the static information structure in terms of data entities and their relationships.

Used for: reasoning about the entities the system manipulates and how they relate.

Significance: the lecture's own example is a banking system whose entities typically include Account, Customer and Loan, where Account has attributes such as account number, type (savings or checking), status and current balance.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: data-model, module, structures*

</details>

---

## ADV-0098 — Deployment structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Deployment structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Allocation structure**.

Units and relations: the elements are software elements (usually a process from a C&C view), hardware entities (processors) and communication pathways; the relations are 'allocated-to' — showing on which physical units the software elements reside — and 'migrates-to' if the allocation is dynamic.

Used for: showing how software is assigned to hardware processing and communication elements.

Significance: it can be used to reason about **performance, data integrity, security and availability**, and is of particular interest in distributed and parallel systems.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: deployment-structure, allocation, structures*

</details>

---

## ADV-0099 — Implementation structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Implementation structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Allocation structure**.

Units and relations: it maps software elements, usually modules, to the file structure(s) in the system's development, integration or configuration control environments.

Used for: answering where each element is stored during development, testing and system building.

Significance: it is what connects the architecture to the build: without it, questions about integration and version control have no architectural answer.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: implementation-structure, allocation, structures*

</details>

---

## ADV-0100 — Work assignment structure (Very Hard, 6 marks)

**Type:** Recall a specific structure  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 lists several useful structures beyond the headline patterns. For the **Work assignment structure**, state its category, its units and relations, what it is used for, and its architectural significance.

<details>
<summary><strong>Show answer</strong></summary>

Category: **Allocation structure**.

Units and relations: it assigns responsibility for implementing and integrating the modules to the teams who will carry it out.

Used for: answering what the assignment of each software element to development teams is.

Significance: the lecture states that having it be part of the architecture 'makes it clear that the decision about who does the work has architectural as well as management implications'; the architect will know the expertise required on each team, and it determines major communication pathways among teams such as regular teleconferences, wikis and email lists.

> **Exam trap:** Answering only 'module, C&C, allocation'. The lecture names specific structures inside each category and they are examinable.

*Tags: work-assignment-structure, allocation, structures*

</details>

---

## ADV-0101 — Structures provide insight (Brutal, 8 marks)

**Type:** Link structure to quality  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf; Lecture10_Documenting Software Architectures.pdf

Lecture 1 states that 'each structure provides a perspective for reasoning about some of the relevant quality attributes' and gives three specific pairings. State all three pairings with the reasoning the lecture attaches to each.

<details>
<summary><strong>Show answer</strong></summary>

Pairing 1 — the **module structure**, which embodies what modules use what other modules, 'is strongly tied to the ease with which a system can be extended or contracted'. The reasoning is that extension and contraction are questions about implementation dependencies, which is exactly what the module structure records.

Pairing 2 — the **C&C structure**, which embodies parallelism within the system, 'is strongly tied to the ease with which a system can be made free of deadlock and performance bottlenecks'. Deadlock and bottlenecks are runtime interaction phenomena, invisible in a module view.

Pairing 3 — the **allocation structure** 'is strongly tied to the achievement of performance, availability, and security goals', because those depend on where software actually executes and what it is co-located with.

The general principle: you cannot answer a quality question from the wrong structure. The lecture makes this explicit elsewhere — 'it is difficult to use the module views to make inferences about runtime behavior', so a module view is 'not typically used for analysis of performance, reliability, and many other runtime qualities'.

> **Exam trap:** Trying to argue performance from a module diagram. The lecture says explicitly that this does not work.

*Tags: structures, quality-attributes, insight, wrong-view*

</details>

---

## ADV-0102 — Architecture includes behavior (Brutal, 8 marks)

**Type:** Argue an inclusion boundary  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 claims that 'box-and-line drawings that are passed off as architectures are not architectures at all', yet also says not every aspect of behaviour must be documented. State the criterion that separates the two cases and explain the reasoning behind the box-and-line criticism.

<details>
<summary><strong>Show answer</strong></summary>

The criterion: 'to the extent that an element's behavior influences another element or influences the acceptability of the system as a whole, this behavior must be considered, and should be documented, as part of the software architecture.' Behaviour that is fine-grained and below the architect's level of concern need not be documented; behaviour with ramifications outside its own element must be.

The box-and-line criticism: such drawings show names and connections but no behaviour, so 'when looking at the names, a reader may well imagine the functionality and behavior of the corresponding elements' — but that imagining 'relies on information that is not present, and could be wrong'. The drawing appears to communicate while actually leaving the reader to invent the semantics, which is worse than saying nothing.

This links directly to the architecture definition: architecture comprises elements, relations **and properties of both**. A diagram with elements and relations but no properties has supplied two thirds of the definition.

> **Exam trap:** Concluding that all behaviour must be documented. The lecture explicitly excludes fine-grained behaviour with no external ramification.

*Tags: behavior, box-and-line, abstraction, documentation*

</details>

---

## ADV-0103 — Architecture is an abstraction (Very Hard, 7 marks)

**Type:** State the omission rule  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 says architecture 'specifically omits certain information about elements'. State the precise rule it gives for what may be omitted, explain why the omission is necessary, and give the consequence for judging whether a decision is architectural.

<details>
<summary><strong>Show answer</strong></summary>

The rule: an architecture 'omits information that has no ramifications outside of a single element', and 'private details of elements — details having to do solely with internal implementation — are not architectural'. It selects certain details and suppresses others.

Why necessary: the abstraction 'is essential to taming the complexity of an architecture' — the lecture's phrasing is that 'we simply cannot, and do not want to, deal with all of the complexity all of the time'. The abstraction lets us look at the system in terms of its elements, how they are arranged, how they interact, how they are composed and what properties support our reasoning.

Consequence for judging architecturality: combine this with the structure test — 'a structure is architectural if it supports reasoning about the system and the system's properties', where the reasoning must be 'about an attribute of the system that is important to some stakeholder'. So the question to ask about any decision is not 'is it important?' but 'does it have ramifications outside one element, and does it bear on something a stakeholder cares about?'

> **Exam trap:** Using 'is it a big decision?' as the test. The lecture's test is about ramifications outside one element and stakeholder-relevant reasoning.

*Tags: abstraction, omission, architectural-or-not, stakeholder*

</details>

---
