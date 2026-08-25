# CSC3209 Software Architecture and Design Patterns — August 2024 Examination

> Transcribed from the supplied past-year examination PDF. Formatting has been normalized for repository readability; question wording and marks are preserved.

**School of Engineering and Technology**  
**Final Examination for the Bachelor of Software Engineering (Honours)**  
**Academic Session:** April 2024 Semester  
**Subject:** CSC3209 Software Architecture and Design Patterns  
**Examination:** August 2024  
**Time Allowed:** 2 Hours and 10 Minutes Reading Time

## Instructions to Candidates

- This exam contains FOUR questions.
- Answer ALL questions.
- All answers must be written in the answer booklets provided using blue or black ink.

### Materials Allowed

- Standard Items: Pen, Pencil, Eraser or Correction Fluid, Ruler
- Special Items: Non-Programmable Calculators, Computer, Notes (Compiled in one Folder)

Do not remove this question paper from the examination hall.

---

## Question 1 — 15 marks

Utilities management applications in Malaysia, such as myTNB provided by Tenaga Nasional Berhad, facilitate management of utilities (i.e. electricity bills). The app users can add accounts, track electricity consumption monthly and pay their bills.

Consider yourself as a software architect in this system. You are required to address several requirements:

- **First Requirement:** Users want to be notified whenever electricity consumption exceeds a specific threshold.
- **Second Requirement:** Users can pay the bills via the online banking services offered via the app (e.g. CIMBClicks and credit card payment services).
- **Third Requirement:** Allow the users to store and to track their electricity usage and bill payments online via the Internet.

### a)
Present three suitable architectural patterns to be employed to address those three requirements with a detailed justification. **[6 marks]**

### b)
For each of the selected architectural patterns:

1. Explain an advantage of the selected pattern in the scenario. **[3 marks]**
2. Explain a limitation of the selected pattern in this scenario. **[3 marks]**

### c)
Present a formal scenario and specification of performance quality attribute that is required in the developed system, specifically for one of the features mentioned above. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **[3 marks]**

---

## Question 2 — 15 marks

Assume you are an architect for the myTNB app stated in Question 1. You are required to do the following:

### a)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for users. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **[8 marks]**

### b)
Present a utility tree that captures the quality attribute scenarios presented in (a).

The tree should present all the addressed quality attributes, their scenarios and their impact on business value and architecture. The tree should have nodes for quality attributes, quality attribute refinements, and leaf nodes for the specific quality attribute scenarios. **[5 marks]**

### c)
There are several notations to document the architectural views: informal notations, semiformal notations and formal notations. Decide on a suitable notation to document the architectural views. Justify your answer in relation to all the types of notations and the system requirements that need to be captured in the documentation. **[2 marks]**

---

## Question 3 — 10 marks

In the Peer-to-Peer architectural pattern, distributed computational entities—each of which is considered equally important in terms of initiating an interaction and each of which provides its own resources—need to cooperate and collaborate to provide a service to a distributed community of users.

Assume in addition to the three architectural design patterns required to address the three requirements in Question 1, you have been asked to also consider using the Peer-to-Peer pattern so that software functionality could benefit from that pattern. In this context:

### a)
Describe how the same business software system in Question 1 may benefit from the Peer-to-Peer Architecture pattern using a concrete explanation. **[2 marks]**

### b)
Describe the elements of the Peer-to-Peer Architecture pattern in the scenario with examples. **[4 marks]**

### c)
Describe a quality attribute that this pattern enhances. Explain your answer with the scenario example presented in (a). **[2 marks]**

### d)
Describe another quality attribute that is different from (c) and may be threatened when employing this pattern. Explain your answer with the scenario example presented in (a). **[2 marks]**

---

## Question 4 — 10 marks

### a)
Explain the general concepts of Behavioural design patterns in the software design patterns. **[3 marks]**

### b)
Name TWO software design patterns under this category and for every pattern provide a real-world example and the motivation to use the pattern. **[5 marks]**

### c)
Decide what design pattern, which is more related to the implementation level in the software development life cycle, that could be suitable to address the first requirement in Question 1 with justification. **[2 marks]**

---

**END OF PAPER**
