# CSC3209 Software Architecture and Design Patterns — January 2026 Examination

> Transcribed from the supplied past-year examination PDF. Formatting has been normalized for repository readability; question wording and marks are preserved.

**Faculty of Engineering and Technology**  
**Final Examination for the BSc (Hons) in Artificial Intelligence**  
**Academic Session:** September 2025 Semester  
**Subject:** CSC3209 Software Architecture and Design Patterns  
**Examination:** January 2026  
**Time Allowed:** 2 Hours and 10 Minutes Reading Time

## Instructions to Candidates

- This exam contains FOUR questions.
- Answer ALL questions.
- All answers must be written in the answer booklets provided using blue or black ink.

### Materials Allowed

- Standard Items: Pen, Pencil, Eraser or Correction Fluid, Ruler
- Special Items: Non-Programmable Calculators, Computer, Tablet, Notes (Compiled in one Folder)

Do not remove this question paper from the examination hall.

---

## Question 1 — 13 marks

A High-Performance Computing (HPC) online platform is a cloud-based or web-accessible system that provides users with access to powerful computational resources for processing large-scale and complex workloads. Unlike standard computing environments, an HPC platform leverages clusters of interconnected servers—known as nodes—that work together to perform massive calculations in parallel, significantly reducing processing time. Through an online interface, users can remotely submit computational jobs, manage data, and monitor performance without needing to maintain physical hardware. The platform typically supports applications in scientific research, data analytics, artificial intelligence, engineering simulations, and financial modeling.

Assume you are an architect for this online platform. You are required to:

### a)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for users. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **(8 marks)**

### b)
Present a utility tree that captures the quality attribute scenarios presented in (a). The tree should present all the addressed quality attributes, their scenarios and their impact on business value and architecture. The tree should have nodes for quality attributes, quality attribute refinements, and leaf nodes for the specific quality attribute scenarios. **(5 marks)**

---

## Question 2 — 17 marks

Consider yourself as a software architect for the same system stated in Question 1. You are required to address the following requirements:

- **First Requirement:** Users want to be notified whenever a submitted task or workflow process has been completed.
- **Second Requirement:** Allow the users to store and to track online submitted tasks and processed data via the Internet.
- **Third Requirement:** Allow the users to pay the required cost and for joining plans offered by the HPC platform to get, for example, more computational power instances.

### a)
Present three suitable architectural patterns to be employed to address those three requirements with detailed justification. **(6 marks)**

### b)
For each of the selected architectural patterns:

1. Explain an advantage or a quality attribute enhanced by the selected pattern in the scenario. **(3 marks)**
2. Explain a limitation or a quality attribute degraded by the selected pattern in this scenario. **(3 marks)**

### c)
Consider the following quality attributes: **availability, performance, usability, and security**. Answer with justification:

1. Which of these quality attributes are observable at run time? **(2 marks)**
2. Provide one example of how to measure each of the quality attributes. **(2 marks)**

### d)
Considering the quality attributes in (c), present an informal scenario of a quality attribute observed in runtime that is required in the developed system, specifically for one of the requirements mentioned above. **(1 mark)**

---

## Question 3 — 8 marks

The Map-Reduce architectural pattern is employed in scenarios where there is a pressing need to quickly analyse enormous volumes of data.

### a)
Describe ONE scenario on how a business software system may benefit from the Map-Reduce architectural pattern using a concrete example. **(2 marks)**

### b)
Describe the elements of the Map-Reduce architectural pattern in the scenario example presented in (a). **(3 marks)**

### c)
Describe how the pattern supports parallel processing for optimizing performance. **(2 marks)**

### d)
Describe a weakness or quality attribute that may be threatened when employing this pattern. **(1 mark)**

---

## Question 4 — 12 marks

Architectural documentation is crucial for several reasons. There are several notations and views to document the software architecture. With that regard, answer the following:

### a)
List THREE notations that could be employed to document the architecture and explain the need for each type of notation with examples. **(3 marks)**

### b)
List THREE views that could be employed to document the architecture and explain the need for each type of view with examples. **(3 marks)**

### c)
Explain FOUR main elements of the view template used for architectural documentation. **(2 marks)**

### d)
Present the primary presentation (an example diagram) of the scenario you chose in Question 3. **(4 marks)**

---

**END OF PAPER**
