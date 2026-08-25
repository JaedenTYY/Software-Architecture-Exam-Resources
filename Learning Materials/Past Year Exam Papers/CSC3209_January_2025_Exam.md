# CSC3209 Software Architecture and Design Patterns — January 2025 Examination

> Transcribed from the supplied past-year examination PDF. Formatting has been normalized for repository readability; question wording and marks are preserved.

**School of Engineering and Technology**  
**Final Examination for the Bachelor of Software Engineering (Honours)**  
**Academic Session:** September 2024 Semester  
**Subject:** CSC3209 Software Architecture and Design Patterns  
**Examination:** January 2025  
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

## Question 1 — 17 marks

Online trading platforms allow users to track stock prices in real-time and to buy stocks (e.g. currency). Consider yourself as a software architect in this system. You are required to address the following requirements:

- **First Requirement:** The system should be designed in a way that allows real-time stock price tracking and monitoring via various charts (e.g. line charts, bar charts) in user interfaces. Simultaneously, the system should be highly responsive to user interactions (e.g. input, zoom in).
- **Second Requirement:** Users want to be notified whenever a specific stock price of interest reaches a specific value so that they can buy or sell stocks aiming for profit or avoiding loss.
- **Third Requirement:** Users can buy a specific stock via online banking services offered via the platform (e.g. PayPal or credit card payment services).

### a)
Present three suitable architectural patterns to be employed to address those three requirements with a detailed justification. **(6 marks)**

### b)
For each of the selected architectural patterns:

1. Explain an advantage or a quality attribute enhanced by the selected pattern in the scenario. **(3 marks)**
2. Explain a limitation or a quality attribute degraded by the selected pattern in this scenario. **(3 marks)**

### c)
Consider the following quality attributes: **modifiability, performance, usability, and security**. Which of these attributes are observable at run time? Answer with justification. **(2 marks)**

### d)
Considering the quality attributes in (c), present a formal scenario and specification of a quality attribute observed in runtime that is required in the developed system, specifically for one of the features mentioned above. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **(3 marks)**

---

## Question 2 — 13 marks

Assume you are an architect for the same Online Trading Platform stated in Question 1. You are required to do the following:

### a)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for users. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **(8 marks)**

### b)
Present a utility tree that captures the quality attribute scenarios presented in (a). The tree should present all the addressed quality attributes, their scenarios and their impact on business value and architecture. The tree should have nodes for quality attributes, quality attribute refinements, and leaf nodes for the specific quality attribute scenarios. **(5 marks)**

---

## Question 3 — 10 marks

Many systems are required to transform streams of discrete data items, from input to output. Many types of transformations occur repeatedly in practice, and so it is desirable to create these transformations as independent, reusable parts. The Pipe and Filter architectural pattern is useful for these systems and is characterized by successive transformations of streams of data.

### a)
Describe ONE scenario on how a business software system may benefit from the Pipe and Filter architectural pattern using a concrete example. **(2 marks)**

### b)
Describe the elements of the Pipe and Filter architectural pattern in the scenario example presented in (a). **(4 marks)**

### c)
Describe how the pattern supports parallelization in relation to the pattern elements and their interaction mechanism. **(2 marks)**

### d)
Describe a weakness or quality attribute that may be threatened when employing this pattern. Explain your answer with the scenario example presented in (a). **(2 marks)**

---

## Question 4 — 10 marks

There are several flight booking systems/websites (e.g. AirAsia), which offer flight booking services. Consider yourself as a software architect in this system. Assuming you have to employ the following architectural patterns for the following requirements:

- **Client-Server Architectural Pattern:** Allows the users to track their current bookings and check boarding pass codes after signing in to their online profile via the Internet.
- **Layer Architectural Pattern:** The development and maintenance team requires that the software architecture should promote and support modifiability and maintainability so that, for example, all front-end software elements, which are to interact with end-users, are developed separately from back-end functionality to process orders and storing their booking details in the data repository. Accordingly, the front-end and back-end aspects of the software operate with little interaction.

### a)
Present the architectural views for both patterns using informal or semi-formal architectural view notations. **(6 marks)**

### b)
Present the suitable mapping between the two architectural views presented in (a). **(2 marks)**

### c)
Assuming we want to augment the system with a new feature that is to notify the users when there is a specific promotion in airlines. Decide what design pattern, which is more related to the implementation level in the software development life cycle, that could be suitable to address this requirement with justification. **(2 marks)**

---

**END OF PAPER**
