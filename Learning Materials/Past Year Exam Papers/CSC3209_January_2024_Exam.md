# CSC3209 Software Architecture and Design Patterns — January 2024 Examination

> Transcribed from the supplied past-year examination PDF. Formatting has been normalized for repository readability; question wording and marks are preserved.

**School of Engineering and Technology**  
**Final Examination for the BSc (Hons) of Software Engineering**  
**Academic Session:** September 2023 Semester  
**Subject:** CSC3209 Software Architecture and Design Patterns  
**Examination:** January 2024  
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

Video game digital distribution services facilitate video games’ distribution and download. There are several systems and services such as Steam and Epic Games Store which offer services such as looking for a game, downloading a game and publishing a newly developed game with all the required details. There are two kinds of end-users: publishers, who publish a new game with a description of the game; and gamers, who search the website for new games to buy, download, and play.

Consider yourself as software architect in this system. You are required to address several requirements:

- **First Requirement:** Gamers want to be notified whenever a new game is available that matches the gamers’ preference.
- **Second Requirement:** Gamers can communicate and chat among each other.
- **Third Requirement:** Allow the gamers to store and to check their gaming progress and achievements via their online profile even if they change the PC they use.

### a)
Present three suitable architectural patterns to be employed to address those three requirements with detailed justification. **[6 marks]**

### b)
For each of the selected architectural patterns:

1. Explain an advantage of the selected patterns in the scenario. **[3 marks]**
2. Explain a limitation of the selected pattern in this scenario. **[3 marks]**

### c)
Present a formal scenario and specification of performance quality attribute that is required in the developed system, specifically for one of the features mentioned above. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **[3 marks]**

---

## Question 2 — 15 marks

Assume you are an architect for the same video game digital distribution system stated in Question 1. You are required to do the following:

### a)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for gamers. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **[4 marks]**

### b)
Present four quality attribute scenarios and specifications (informally and formally) to address four quality attribute requirements for game publishers. Consider the six parts in quality attribute specification (**Source, Stimulus, Environment, Response, Response Measure, Artifact**). **[4 marks]**

### c)
Present a utility tree that captures the quality attribute scenarios presented in (a) and (b).

The tree should present all the addressed quality attributes, their scenarios and their impact on business value and architecture. The tree should have nodes for quality attributes, quality attribute refinements, and leaf nodes for the specific quality attribute scenarios. **[5 marks]**

### d)
There are several notations to document the architectural views: informal notations, semiformal notations and formal notations. Employ a suitable notation to document the architectural views. Justify your answer in relation to all the types of notations and the system requirements that need to be captured in the documentation. **[2 marks]**

---

## Question 3 — 10 marks

In the Service Oriented Architecture pattern, computation is achieved by a set of cooperating components that provide and/or consume services over a network.

Assume in addition to the three architectural design patterns required to address the three requirements in Question 1, you have been asked to also consider using the Service Oriented Architecture pattern so that software functionality could benefit from that pattern. In this context:

### a)
Describe how the same business software system in Question 1 may benefit from the Service Oriented Architecture pattern using a concrete explanation. **[1 mark]**

### b)
Describe the elements of the Service Oriented Architecture pattern in the scenario with examples. **[6 marks]**

### c)
Describe a quality attribute that this pattern enhances. Explain your answer with the scenario example presented in (a). **[1.5 marks]**

### d)
Describe another quality attribute that is different from (c) and may be threatened when employing this pattern. Explain your answer with the scenario example presented in (a). **[1.5 marks]**

---

## Question 4 — 10 marks

### a)
Explain the general concepts of Creational design patterns in the software design patterns. Name TWO software design patterns under this category. **[4 marks]**

### b)
Decide what design pattern, which is more related to the implementation level in the software development life cycle, could be suitable to address the first requirement in Question 1 (gamers want to be notified whenever a new game is available that matches the gamers’ preference). Describe this pattern and under what circumstances it should be used. **[6 marks]**

---

**END OF PAPER**
