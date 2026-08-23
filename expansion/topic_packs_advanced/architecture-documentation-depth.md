# Architecture Documentation (Depth)

*Advanced Depth bank — 17 questions.*

Answers are collapsed. Attempt each question before expanding.

---

## ADV-0133 — View documentation template (Very Hard, 6 marks)

**Type:** Recall a template section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a standard organisation for documenting a view. State what the **Primary presentation** section contains, and state the specific documentation failure that occurs when it is omitted or done badly.

<details>
<summary><strong>Show answer</strong></summary>

**Primary presentation**: shows the elements and relations of the view, containing the information to be conveyed about the system first; it should contain the information you wish to present first, and it must be accompanied by a key that explains the notation.

Failure when omitted or done badly: presenting a diagram with no key — the lecture calls the lack of a key 'the most common mistake we see in documentation in practice'.

The full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale.

> **Exam trap:** Listing the five section names without saying what each contains. The content is what is examinable.

*Tags: view-template, primary-presentation, documentation*

</details>

---

## ADV-0134 — View documentation template (Very Hard, 6 marks)

**Type:** Recall a template section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a standard organisation for documenting a view. State what the **Element catalog** section contains, and state the specific documentation failure that occurs when it is omitted or done badly.

<details>
<summary><strong>Show answer</strong></summary>

**Element catalog**: details at least those elements and relations depicted in the primary presentation, and elaborates on other information about them that was not presented there.

Failure when omitted or done badly: assuming the diagram is self-explanatory, so element responsibilities are never written down and readers infer them from names.

The full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale.

> **Exam trap:** Listing the five section names without saying what each contains. The content is what is examinable.

*Tags: view-template, element-catalog, documentation*

</details>

---

## ADV-0135 — View documentation template (Very Hard, 6 marks)

**Type:** Recall a template section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a standard organisation for documenting a view. State what the **Context diagram** section contains, and state the specific documentation failure that occurs when it is omitted or done badly.

<details>
<summary><strong>Show answer</strong></summary>

**Context diagram**: shows how the system depicted in the view relates to its environment.

Failure when omitted or done badly: omitting the boundary, so it is unclear what is inside the system's scope and what is an external actor.

The full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale.

> **Exam trap:** Listing the five section names without saying what each contains. The content is what is examinable.

*Tags: view-template, context-diagram, documentation*

</details>

---

## ADV-0136 — View documentation template (Very Hard, 6 marks)

**Type:** Recall a template section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a standard organisation for documenting a view. State what the **Variability guide** section contains, and state the specific documentation failure that occurs when it is omitted or done badly.

<details>
<summary><strong>Show answer</strong></summary>

**Variability guide**: shows how to exercise any variation points that are a part of the architecture shown in this view.

Failure when omitted or done badly: documenting one fixed configuration when the architecture actually supports several, leaving the options undiscoverable.

The full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale.

> **Exam trap:** Listing the five section names without saying what each contains. The content is what is examinable.

*Tags: view-template, variability-guide, documentation*

</details>

---

## ADV-0137 — View documentation template (Very Hard, 6 marks)

**Type:** Recall a template section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a standard organisation for documenting a view. State what the **Rationale** section contains, and state the specific documentation failure that occurs when it is omitted or done badly.

<details>
<summary><strong>Show answer</strong></summary>

**Rationale**: explains why the design reflected in the view came to be, and provides a convincing argument that it is sound.

Failure when omitted or done badly: recording what was decided but not why, so a later team cannot tell which constraints are still binding and re-litigates settled decisions.

The full template is Primary presentation, Element catalog, Context diagram, Variability guide, and Rationale.

> **Exam trap:** Listing the five section names without saying what each contains. The content is what is examinable.

*Tags: view-template, rationale, documentation*

</details>

---

## ADV-0138 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **Documentation roadmap** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**Documentation roadmap**: describes how the documentation is organised so a reader can find what they need.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, documentation-roadmap, documentation*

</details>

---

## ADV-0139 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **How a view is documented** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**How a view is documented**: explains the standard organisation used for each view, so readers learn the template once rather than per view.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, how-a-view-is-documented, documentation*

</details>

---

## ADV-0140 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **System overview** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**System overview**: gives a short prose description of what the system's function is, who its users are, and any important background or constraints — orienting a reader before any view is read.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, system-overview, documentation*

</details>

---

## ADV-0141 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **Mapping between views** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**Mapping between views**: relates the elements of one view to those of another, since the same system element appears differently across views.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, mapping-between-views, documentation*

</details>

---

## ADV-0142 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **Rationale** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**Rationale**: explains why the architecture as a whole — not just one view — is as it is.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, rationale, documentation*

</details>

---

## ADV-0143 — Beyond views (Very Hard, 5 marks)

**Type:** Recall a beyond-views section  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 says architecture documentation contains information that applies to more than one view, organised into named sections. State what the **Directory** section provides and why a reader needs it.

<details>
<summary><strong>Show answer</strong></summary>

**Directory**: provides an index of terms, elements and relations, telling readers where each is defined and used.

The complete beyond-views set is: documentation roadmap, how a view is documented, system overview, mapping between views, rationale, and directory. These exist because the views alone are a collection of partial pictures — the beyond-views material is what makes the collection navigable and coherent.

> **Exam trap:** Documenting views only. The beyond-views material is an explicit and examinable part of the documentation package.

*Tags: beyond-views, directory, documentation*

</details>

---

## ADV-0144 — Notation choice (Brutal, 7 marks)

**Type:** Compare notation classes precisely  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 compares three classes of architectural notation on expressiveness, degree of formality, languages, tools and applicability. Give all five for **Informal notation**, and state the trade-off it represents.

<details>
<summary><strong>Show answer</strong></summary>

**Informal notation**

| Dimension | Value |
|---|---|
| Expressiveness | Low |
| Degree of formality | Low |
| Languages | Informal diagrams, English |
| Tools | PowerPoint, informal drawing tools |
| Applicable to | system aspects that do not require specification, formal analysis or verification |

Trade-off: quick, universally readable, needs no tool training — but ambiguous, unanalysable, and correctness cannot be checked.

> **Exam trap:** Assuming more formal is always better. The lecture ties formality to applicability — formal notation is for safety-critical work.

*Tags: notation, informal, formality, documentation*

</details>

---

## ADV-0145 — Notation choice (Brutal, 7 marks)

**Type:** Compare notation classes precisely  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 compares three classes of architectural notation on expressiveness, degree of formality, languages, tools and applicability. Give all five for **Semiformal notation**, and state the trade-off it represents.

<details>
<summary><strong>Show answer</strong></summary>

**Semiformal notation**

| Dimension | Value |
|---|---|
| Expressiveness | Medium |
| Degree of formality | Medium |
| Languages | UML, SysML |
| Tools | modelling tools with UML/SysML support |
| Applicable to | systems requiring partial specification and limited analysis |

Trade-off: adds defined syntax and partial semantics, so some automated checking and code generation is possible — but semantics remain incomplete, so full verification is not.

> **Exam trap:** Assuming more formal is always better. The lecture ties formality to applicability — formal notation is for safety-critical work.

*Tags: notation, semiformal, formality, documentation*

</details>

---

## ADV-0146 — Notation choice (Brutal, 7 marks)

**Type:** Compare notation classes precisely  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 compares three classes of architectural notation on expressiveness, degree of formality, languages, tools and applicability. Give all five for **Formal notation**, and state the trade-off it represents.

<details>
<summary><strong>Show answer</strong></summary>

**Formal notation**

| Dimension | Value |
|---|---|
| Expressiveness | High |
| Degree of formality | High |
| Languages | B-Method, Event-B, Z |
| Tools | Atelier-B and similar provers |
| Applicable to | safety-critical systems, where the lecture's real-world example is the Paris Metro Line 14 automated train control system |

Trade-off: formal analysis of both syntax and semantics is possible, so properties can be proved — but expertise cost and effort are high, and it is rarely justified outside safety-critical work.

> **Exam trap:** Assuming more formal is always better. The lecture ties formality to applicability — formal notation is for safety-critical work.

*Tags: notation, formal, formality, documentation*

</details>

---

## ADV-0147 — Notation choice (Brutal, 8 marks)

**Type:** Justify a notation for a context  
**Source:** Lecture10_Documenting Software Architectures.pdf

For each of the following, choose a notation class from Lecture 10 and justify it: (a) a whiteboard sketch in a design discussion; (b) the design of a food-delivery mobile application; (c) an automated metro train control system.

<details>
<summary><strong>Show answer</strong></summary>

(a) **Informal**. Its applicability is 'system aspects that do not require specification, formal analysis or verification' — a discussion sketch is exactly that. Expressiveness and formality are both low, which is appropriate because the artifact's purpose is to support conversation, not to be analysed. The one non-negotiable is a key if the sketch is kept.

(b) **Semiformal**, i.e. UML or SysML. The lecture uses a food-delivery application as its illustration of semiformal modelling. Such a system requires partial specification and limited analysis: structure and interactions must be unambiguous enough for a team to implement consistently, but proving properties would be disproportionate to the risk.

(c) **Formal** — B-Method, Event-B or Z with a prover such as Atelier-B. The lecture names the Paris Metro Line 14 automated train control system as the real-world case. The applicability entry is 'safety-critical systems', and here formal analysis of both syntax and semantics is warranted because a defect can kill people, so the high effort and expertise cost are justified.

The general principle: notation is chosen against consequence of failure and analysis need, not against a preference for rigour.

> **Exam trap:** Choosing formal notation for the mobile app because it is 'more professional'. The cost is not justified by the risk.

*Tags: notation, justify, safety-critical, Paris-Metro*

</details>

---

## ADV-0148 — Choosing views (Brutal, 8 marks)

**Type:** Apply the three-step method  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 gives a three-step method for choosing which views to document. State all three steps, and explain what the second step protects against.

<details>
<summary><strong>Show answer</strong></summary>

**Step 1** — build a stakeholder/view table: enumerate the stakeholders for the project's documentation down the rows, and enumerate the candidate views down the columns, then fill in each cell with how much information the stakeholder requires of that view: none, overview only, moderate detail, or high detail.

**Step 2** — combine views: look for views that require only overview detail, and consider combining them with other views. A combined view shows elements and relations from more than one view in a single presentation.

**Step 3** — prioritise and stage: decide what to do first, driven by which stakeholders need which information soonest, and recognise that documentation need not be complete before it is useful.

What step 2 protects against: producing a large number of thin views that each cost effort to write and maintain but that no stakeholder reads in depth. The lecture's guidance elsewhere is that views which map well onto each other — for instance a deployment view and a component-and-connector view — combine naturally, because the mapping between them is close to one-to-one. Combining unrelated views instead produces an unreadable diagram, so the criterion is whether the overlays genuinely correspond.

> **Exam trap:** Documenting every candidate view at high detail. The method exists to reduce the set, not to justify all of it.

*Tags: choosing-views, stakeholder-view-table, combined-views, documentation*

</details>

---

## ADV-0149 — Documentation principles (Very Hard, 7 marks)

**Type:** Explain a documentation rule  
**Source:** Lecture10_Documenting Software Architectures.pdf

Lecture 10 states that documentation should be written 'from the reader's point of view' and warns against 'unnecessary repetition'. Explain both rules and the tension between them, and state how the beyond-views material resolves it.

<details>
<summary><strong>Show answer</strong></summary>

**Reader's point of view**: documentation is written to be read, not to record the author's thought process. The practical consequences are avoiding unnecessary repetition, avoiding ambiguity (which is why every diagram needs a key), and using a standard organisation so readers know where to look.

**Unnecessary repetition**: the same information restated in several places will drift out of step as the system changes, so the copies eventually contradict each other and the reader cannot tell which is current.

The tension: a reader-centred document wants each stakeholder to find what they need without hunting through material aimed at someone else, which pushes towards repeating shared information in each view. Avoiding repetition pushes the opposite way.

Resolution: state shared information **once**, in the beyond-views sections, and have views reference it. The system overview, the rationale, the mapping between views and the directory exist precisely so that cross-cutting information has a single home. The documentation roadmap and the 'how a view is documented' section then serve the reader-centred goal by making that single home findable — the reader is directed to the information rather than handed a copy of it.

> **Exam trap:** Treating the two rules as independent. The exam value is in seeing they conflict and knowing where the shared material goes.

*Tags: documentation-principles, repetition, reader, beyond-views*

</details>

---
