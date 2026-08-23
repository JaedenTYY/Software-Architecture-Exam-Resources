# Foundations (Depth)

*Advanced Depth bank — 22 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0150 — Architecture definition (Brutal, 8 marks)

**Type:** Parse the definition precisely  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 defines software architecture as 'the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both'. Analyse each of the four load-bearing terms and explain what the definition deliberately excludes.

<details>
<summary><strong>Show answer</strong></summary>

**Set of structures** (plural): architecture is not one diagram. A system has many structures — module, component-and-connector, allocation, and specific structures within each — and the architecture is the collection of those needed for reasoning.

**Needed to reason about**: this is the selection criterion. A structure is architectural if it supports reasoning about the system and its properties, where the reasoning must be about an attribute important to some stakeholder. Structures that support no such reasoning are not architectural.

**Elements and relations**: the things and how they are connected — the part usually drawn.

**Properties of both**: the part usually omitted. Properties are what let anyone reason at all — a box labelled 'database' with no stated properties supports no inference about performance, availability or anything else. This is why the lecture says box-and-line drawings passed off as architectures 'are not architectures at all'.

What is deliberately excluded: information with no ramifications outside a single element, and private implementation details. Architecture is an abstraction, and the lecture states we 'cannot, and do not want to, deal with all of the complexity all of the time'.

> **Exam trap:** Quoting the definition without unpacking 'properties of both', which is the clause that does the work.

*Tags: definition, structures, properties, abstraction*

</details>

---

## ADV-0151 — Every system has an architecture (Brutal, 7 marks)

**Type:** Resolve a paradox  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 asserts that every software system has a software architecture, yet also that not every architecture is known. Explain both claims, and state the practical consequence for a team inheriting an undocumented system.

<details>
<summary><strong>Show answer</strong></summary>

Every system has an architecture because a system built from elements that relate to each other *has* structures, whether or not anyone chose them deliberately or wrote them down. Architecture is a property of the system, not of the documentation.

Not every architecture is known because the designers may be long gone, the documentation may have vanished or never existed, the source code may have been lost, or only the executable remains. The lecture's point is that this does not make the architecture cease to exist — it makes it *unknown*.

Practical consequence for a team inheriting such a system: the architecture must be **recovered**, not invented. Because it exists, the team's decisions are already constrained by it whether they know it or not, and acting in ignorance produces the drift Lecture 11 calls architecture erosion. The corollary is that the recovered architecture may not be a good one — the lecture is explicit that 'not all architectures are good architectures', so recovery must be followed by evaluation rather than acceptance.

> **Exam trap:** Concluding 'if it isn't documented it has no architecture'. The lecture says the opposite.

*Tags: every-system, unknown-architecture, recovery, erosion*

</details>

---

## ADV-0152 — Good architecture (Brutal, 8 marks)

**Type:** Separate two rule categories  
**Source:** Lecture1_What is Software ArchitectureV2 (1).pdf

Lecture 1 offers rules of thumb for good architecture, divided into two categories. Name both categories, give three rules from each, and explain why process rules can be checked before any design exists.

<details>
<summary><strong>Show answer</strong></summary>

The two categories are **process recommendations** and **structural (product) recommendations**.

Process rules include: the architecture should be the product of a single architect or a small group with an identified technical leader; the architect should base the architecture on a prioritised list of well-specified quality attribute requirements; the architecture should be documented using views addressing the concerns of the most important stakeholders; and the architecture should be evaluated for its ability to deliver the system's important quality attributes.

Structural rules include: the architecture should feature well-defined modules whose functional responsibilities are allocated on the principles of information hiding and separation of concerns; each module should have a well-defined interface encapsulating changeable aspects; quality attributes should be achieved using well-known architectural tactics specific to each attribute; and the architecture should never depend on a particular version of a commercial product or tool.

Why process rules can be checked before design exists: they are about **how the architecture is being produced**, not about what it contains. You can ask whether there is an identified architect, whether prioritised quality attribute requirements exist, and whether an evaluation is scheduled, on day one — before a single element has been chosen. This makes them an early risk indicator: a project failing the process rules will very likely fail the structural ones later.

> **Exam trap:** Mixing the categories. An examiner asking for 'process' recommendations will not accept information hiding.

*Tags: good-architecture, process-rules, structural-rules, rules-of-thumb*

</details>

---

## ADV-0153 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It inhibits or enables a system's quality attributes'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Whether a system will be able to exhibit its desired quality attributes is substantially determined by its architecture — the structures chosen determine what is achievable, though architecture alone cannot guarantee functionality or quality since downstream implementation decisions matter too.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-1*

</details>

---

## ADV-0154 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'Reasoning about and managing change is enabled'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

The lecture's classification of changes is the examinable part: a **local** change modifies exactly one element; a **nonlocal** change requires several element modifications but leaves the underlying architectural approach intact; and an **architectural** change affects the fundamental ways elements interact and will likely require changes all over the system. Architecture makes it possible to tell which kind a proposed change is.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-2*

</details>

---

## ADV-0155 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'Early design decisions can be predicted and analysed'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Architecture holds the earliest design decisions, which are both the hardest to get right and the hardest to change later, so evaluating them early is where analysis pays most.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-3*

</details>

---

## ADV-0156 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'Communication among stakeholders is supported'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Architecture provides a common language in which competing concerns can be expressed and negotiated at a level that is intellectually manageable.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-4*

</details>

---

## ADV-0157 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'Early design decisions are defined'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

The architecture is the earliest point at which the decisions with system-wide consequence are made explicit and can be inspected.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-5*

</details>

---

## ADV-0158 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It constrains the vocabulary of design alternatives'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Once an architecture is chosen, the set of reasonable downstream design options narrows, which is a benefit because it reduces choice paralysis and enforces consistency.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-6*

</details>

---

## ADV-0159 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It defines constraints on implementation'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Implementations must conform to the resource allocation decisions and connection rules the architecture sets, which is what makes conformance checkable.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-7*

</details>

---

## ADV-0160 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It influences the organizational structure'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Architecture 'dictates the structure of an organization, or vice versa' and is typically used as the basis for the work-breakdown structure, dictating units of planning and budget, inter-team communication channels, configuration control, file-system organization, and integration and test plans.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-8*

</details>

---

## ADV-0161 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It enables evolutionary prototyping'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Once the architecture exists it can be analysed and prototyped as a skeletal system, letting the system run very early in the life cycle with elements filled in as they are completed.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-9*

</details>

---

## ADV-0162 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It enables more accurate cost and schedule estimates'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Cost and schedule estimates based on an understanding of the system's parts are inherently more accurate than those based on the whole, and the work-breakdown structure the architecture provides is what makes such estimates possible.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-10*

</details>

---

## ADV-0163 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It can be the basis for training'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

The architecture, including a description of how elements interact to carry out required behaviour, can serve as the introduction to the system for new team members.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-11*

</details>

---

## ADV-0164 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'It can be created as a transferable, reusable model'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

The earlier reuse is applied in the life cycle the greater the benefit, and architecture-level reuse is the earliest form available — a product line shares its architecture across products.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-12*

</details>

---

## ADV-0165 — Why architecture matters (Very Hard, 6 marks)

**Type:** Explain one reason in depth  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 gives thirteen reasons software architecture is important. Explain reason **'Independently developed elements can be integrated'** in depth — not merely restate it — and give a concrete consequence for a project that ignores it.

<details>
<summary><strong>Show answer</strong></summary>

Well-defined interfaces and interaction rules are what make it possible for elements built separately to be combined without redesign.

Consequence of ignoring it: a project that does not attend to this reason loses the specific leverage architecture provides here, and the loss typically shows up late — after implementation has committed to a structure that cannot deliver what is now needed. Lecture 2's framing is that architecture is the earliest artifact at which such consequences are still cheap to address.

> **Exam trap:** Restating the heading as the answer. Each reason has substantive content behind it and that is what is marked.

*Tags: why-architecture-matters, thirteen-reasons, reason-13*

</details>

---

## ADV-0166 — Managing change (Brutal, 8 marks)

**Type:** Classify changes and justify  
**Source:** Lecture2_Why Is Software Architecture Important (2).pdf

Lecture 2 classifies changes into three categories. Define all three precisely and classify these: (a) changing a validation message's wording; (b) adding a new field that must appear in the UI, the service layer and the database; (c) moving from a single shared database to per-service databases.

<details>
<summary><strong>Show answer</strong></summary>

**Local** — a change that modifies exactly one element. **Nonlocal** — a change that requires several element modifications but leaves the underlying architectural approach intact. **Architectural** — a change that affects the fundamental ways in which elements interact with each other, and will likely require changes all over the system.

(a) **Local**. One element, no interaction change.

(b) **Nonlocal**. Three elements must change, but nothing about how they interact is altered — the layering, the call patterns and the data flow are all as before. This is the category students most often mis-classify as architectural simply because it touches several files; the test is not *how many* elements change but whether the *interaction approach* changes.

(c) **Architectural**. Splitting a shared data store changes the fundamental interaction model: what was a Shared-Data arrangement with implicit consistency becomes distributed data requiring explicit coordination, so transaction boundaries, consistency guarantees and failure modes all change system-wide.

The practical value of the classification: it lets an architect price a change request before agreeing to it, and it is why Lecture 2 lists managing change as one of the thirteen reasons.

> **Exam trap:** Classifying by number of files touched. A change touching many elements is nonlocal unless the interaction model changes.

*Tags: change, local, nonlocal, architectural, classification*

</details>

---

## ADV-0167 — Many contexts (Very Hard, 6 marks)

**Type:** Explain one context in depth  
**Source:** Lecture3_The Many Contexts of Software Architecture.pdf

Lecture 3 says architecture must be considered in four contexts. Explain the **Technical context** — what it covers and why an architect who ignores it produces a worse architecture.

<details>
<summary><strong>Show answer</strong></summary>

The Technical context covers the technical environment in which the architecture must operate — the available technologies, the state of the practice, and the technical constraints already in place.

Why ignoring it damages the architecture: the architect must know what is technically possible and what is already fixed, since a design that assumes unavailable technology cannot be built.

The four contexts are technical, project life-cycle, business and professional. Lecture 3's point in naming four is that architecture is never evaluated on technical merit alone — the same design can be right in one context and wrong in another.

> **Exam trap:** Naming the four contexts without content. Each carries specific obligations for the architect.

*Tags: contexts, technical-context, four-contexts*

</details>

---

## ADV-0168 — Many contexts (Very Hard, 6 marks)

**Type:** Explain one context in depth  
**Source:** Lecture3_The Many Contexts of Software Architecture.pdf

Lecture 3 says architecture must be considered in four contexts. Explain the **Project life-cycle context** — what it covers and why an architect who ignores it produces a worse architecture.

<details>
<summary><strong>Show answer</strong></summary>

The Project life-cycle context covers where architecture sits in the development life cycle and how it relates to the surrounding activities of requirements, design, implementation, testing and maintenance.

Why ignoring it damages the architecture: architecture is not a phase that ends — it is created early but is continually revisited, and the life-cycle model chosen determines when architectural decisions can be revised.

The four contexts are technical, project life-cycle, business and professional. Lecture 3's point in naming four is that architecture is never evaluated on technical merit alone — the same design can be right in one context and wrong in another.

> **Exam trap:** Naming the four contexts without content. Each carries specific obligations for the architect.

*Tags: contexts, project-life-cycle-context, four-contexts*

</details>

---

## ADV-0169 — Many contexts (Very Hard, 6 marks)

**Type:** Explain one context in depth  
**Source:** Lecture3_The Many Contexts of Software Architecture.pdf

Lecture 3 says architecture must be considered in four contexts. Explain the **Business context** — what it covers and why an architect who ignores it produces a worse architecture.

<details>
<summary><strong>Show answer</strong></summary>

The Business context covers the business goals, market position, competitive pressures and organisational purposes the system exists to serve.

Why ignoring it damages the architecture: architecture serves business goals, and Lecture 8's PALM exists precisely to make that link traceable; an architecture with no business justification is unmoored.

The four contexts are technical, project life-cycle, business and professional. Lecture 3's point in naming four is that architecture is never evaluated on technical merit alone — the same design can be right in one context and wrong in another.

> **Exam trap:** Naming the four contexts without content. Each carries specific obligations for the architect.

*Tags: contexts, business-context, four-contexts*

</details>

---

## ADV-0170 — Many contexts (Very Hard, 6 marks)

**Type:** Explain one context in depth  
**Source:** Lecture3_The Many Contexts of Software Architecture.pdf

Lecture 3 says architecture must be considered in four contexts. Explain the **Professional context** — what it covers and why an architect who ignores it produces a worse architecture.

<details>
<summary><strong>Show answer</strong></summary>

The Professional context covers the architect's own role — the duties, skills and knowledge expected of the person occupying it.

Why ignoring it damages the architecture: the architecture is a product of a person or small group, so the competence and responsibilities of that role directly bound what the architecture can be; this is why Lecture 1's process rules of thumb begin with identifying a single architect or small group with a technical leader.

The four contexts are technical, project life-cycle, business and professional. Lecture 3's point in naming four is that architecture is never evaluated on technical merit alone — the same design can be right in one context and wrong in another.

> **Exam trap:** Naming the four contexts without content. Each carries specific obligations for the architect.

*Tags: contexts, professional-context, four-contexts*

</details>

---

## ADV-0171 — Architecture Influence Cycle (Brutal, 8 marks)

**Type:** Explain bidirectional influence  
**Source:** Lecture3_The Many Contexts of Software Architecture.pdf; Lecture2_Why Is Software Architecture Important (2).pdf; Lecture8_Architecture and Requirements.pdf

Explain the Architecture Influence Cycle, giving influences in **both** directions with a concrete example of each, and state what the cycle implies about treating requirements as fixed inputs.

<details>
<summary><strong>Show answer</strong></summary>

Inbound influences — things that shape the architecture: stakeholders, whose concerns and priorities determine which quality attributes matter; the developing organisation, whose structure, skills and existing assets constrain what can be built; the technical environment, which fixes the available and mandated technologies; and the architect's own experience, which shapes which patterns are reached for.

Outbound influences — things the architecture in turn shapes: the structure of the developing organisation, since Lecture 2 states architecture is typically the basis for the work-breakdown structure and thus dictates teams, budgets and communication channels; the goals of the developing organisation, since a successful architecture can become a reusable asset or a product-line platform that changes what the business sells; customer requirements for the next system, since customers who see what this architecture makes cheap will ask for more of it; and the architect's experience, which feeds forward into future designs.

What it implies about requirements: they cannot be treated as a fixed input handed to the architect. The cycle says the architecture influences the requirements of subsequent systems, so the relationship is iterative — which is exactly why Lecture 8 pairs elicitation methods like QAW and PALM with the architecture rather than placing them strictly before it. An architect who treats the requirements document as immutable has cut the feedback edge of the cycle.

> **Exam trap:** Giving only the inbound half. The cycle is named a cycle because of the return edges.

*Tags: influence-cycle, bidirectional, organisation, requirements*

</details>

---
