# CSC3209 Software Architecture and Design Patterns — August 2025 Examination

> Transcribed from the supplied past-year examination PDF. Formatting has been normalized for repository readability; question wording and marks are preserved.

**Faculty of Engineering and Technology**  
**Final Examination for the Bachelor of Software Engineering (Honours)**  
**Academic Session:** April 2025 Semester  
**Subject:** CSC3209 Software Architecture and Design Patterns  
**Examination:** August 2025  
**Time Allowed:** 2 Hours and 10 Minutes Reading Time

## Instructions to Candidates

- This exam contains FIVE questions.
- Answer ALL questions.
- All answers must be written in the answer booklets provided using blue or black ink.

### Materials Allowed

- Standard Items: Pen, Pencil, Eraser or Correction Fluid, Ruler
- Special Items: Non-Programmable Calculators, Computer, Tablet, Notes (Compiled in one Folder)

Do not remove this question paper from the examination hall.

---

## Question 1 — 17 marks

A healthcare insurance provider is developing a management system that must provide a wide range of functionalities including checking the insurance balance, personal details, and panel clinics. Consider yourself as a software architect in this system. You are required to address the following requirements:

- **First Requirement:** Users can check a specific panel clinic map location using, for example, Google Maps, in the system itself directly without the need for browsing the location on Google Maps application separately.
- **Second Requirement:** Allow the users to store and to track their insurance balance and claim details via the Internet.
- **Third Requirement:** Users want to be notified whenever a claim process has been approved, or new promotions are available.

### a)
Present three suitable architectural patterns to be employed to address those three requirements with a detailed justification. **(6 marks)**

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

## Question 2 — 13 marks

Assume you are an architect for the same management system stated in Question 1. You are required to do the following:

### a)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for users. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **(8 marks)**

### b)
Present a utility tree that captures the quality attribute scenarios presented in (a). The tree should present all the addressed quality attributes, their scenarios and their impact on business value and architecture. The tree should have nodes for quality attributes, quality attribute refinements, and leaf nodes for the specific quality attribute scenarios. **(5 marks)**

---

## Question 3 — 8 marks

The Model-View-Controller (MVC) pattern breaks system functionality into several components separating user interface functionality from application functionality to provide several benefits to designed systems in some scenarios.

### a)
Describe ONE scenario on how a business software system may benefit from the MVC architectural pattern using a concrete example. **(2 marks)**

### b)
Describe the elements of the MVC architectural pattern in the scenario example presented in (a). **(3 marks)**

### c)
Describe how the pattern supports separating user interface functionality from application functionality in relation to the pattern elements and their interaction mechanism. **(2 marks)**

### d)
Describe a weakness or quality attribute that may be threatened when employing this pattern. **(1 mark)**

---

## Question 4 — 8 marks

Architectural documentation is crucial for several reasons. There are several views to document the software architecture. With that regard, answer the following:

### a)
List the views that could be employed to document the architecture and explain the need for each type of view with examples. **(3 marks)**

### b)
Explain the main elements of the view template used for architectural documentation. **(2 marks)**

### c)
Present the primary presentation (an example diagram) of the scenario you chose in Question 3. **(3 marks)**

---

## Question 5 — 4 marks

Design patterns make it easier to reuse successful designs and architectures and optimize the code design and structure. With that regard, answer the following:

### a)
Explain the general concepts of Behavioral design patterns in the software design patterns. **(1 mark)**

### b)
Decide what design pattern, which is more related to the implementation level in the software development life cycle, could be suitable to address the third requirement in Question 1 (users want to be notified whenever a claim process has been approved, or new promotions are available). Describe this pattern and under what circumstances it should be used. **(3 marks)**

---

**END OF QUESTION PAPER**
