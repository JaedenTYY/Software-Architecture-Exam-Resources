# Architecture Documentation — CSC3209 Question Pack

Questions: **96**

## Q02690 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** University Student Portal  

You must document an architectural view of the University Student Portal. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02691 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Design a documentation entry for one architectural view of the University Student Portal. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02692 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** University Student Portal  

For the University Student Portal, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02694 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Online Trading Platform  

You must document an architectural view of the Online Trading Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02695 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Design a documentation entry for one architectural view of the Online Trading Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02696 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02698 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Electricity Utility App  

You must document an architectural view of the Electricity Utility App. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02699 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Design a documentation entry for one architectural view of the Electricity Utility App. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02700 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02702 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Game Store  

You must document an architectural view of the Digital Game Store. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02703 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Design a documentation entry for one architectural view of the Digital Game Store. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02704 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Game Store  

For the Digital Game Store, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02706 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Flight Booking System  

You must document an architectural view of the Flight Booking System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02707 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Design a documentation entry for one architectural view of the Flight Booking System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02708 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Flight Booking System  

For the Flight Booking System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02710 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** E-Commerce Marketplace  

You must document an architectural view of the E-Commerce Marketplace. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02711 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Design a documentation entry for one architectural view of the E-Commerce Marketplace. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02712 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02714 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Banking App  

You must document an architectural view of the Digital Banking App. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02715 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Design a documentation entry for one architectural view of the Digital Banking App. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02716 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Banking App  

For the Digital Banking App, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02718 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Food Delivery Platform  

You must document an architectural view of the Food Delivery Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02719 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Design a documentation entry for one architectural view of the Food Delivery Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02720 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02722 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Hospital Information System  

You must document an architectural view of the Hospital Information System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02723 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Design a documentation entry for one architectural view of the Hospital Information System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02724 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Hospital Information System  

For the Hospital Information System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02726 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Traffic Platform  

You must document an architectural view of the Smart Traffic Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02727 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Design a documentation entry for one architectural view of the Smart Traffic Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02728 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02730 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Ride-Hailing Platform  

You must document an architectural view of the Ride-Hailing Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02731 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Design a documentation entry for one architectural view of the Ride-Hailing Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02732 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02734 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Video Streaming Service  

You must document an architectural view of the Video Streaming Service. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02735 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Design a documentation entry for one architectural view of the Video Streaming Service. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02736 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02738 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Music Streaming Service  

You must document an architectural view of the Music Streaming Service. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02739 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Design a documentation entry for one architectural view of the Music Streaming Service. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02740 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02742 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Cloud File Storage  

You must document an architectural view of the Cloud File Storage. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02743 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Design a documentation entry for one architectural view of the Cloud File Storage. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02744 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02746 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Social Network  

You must document an architectural view of the Social Network. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02747 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Social Network  

Design a documentation entry for one architectural view of the Social Network. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02748 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Social Network  

For the Social Network, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02750 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Home Platform  

You must document an architectural view of the Smart Home Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02751 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Design a documentation entry for one architectural view of the Smart Home Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02752 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02754 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Logistics Tracking System  

You must document an architectural view of the Logistics Tracking System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02755 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Design a documentation entry for one architectural view of the Logistics Tracking System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02756 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02758 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Insurance Claims System  

You must document an architectural view of the Insurance Claims System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02759 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Design a documentation entry for one architectural view of the Insurance Claims System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02760 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02762 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Hotel Booking Platform  

You must document an architectural view of the Hotel Booking Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02763 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Design a documentation entry for one architectural view of the Hotel Booking Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02764 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02766 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Online Learning Platform  

You must document an architectural view of the Online Learning Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02767 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Design a documentation entry for one architectural view of the Online Learning Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02768 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02770 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Cybersecurity Monitoring Platform  

You must document an architectural view of the Cybersecurity Monitoring Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02771 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Design a documentation entry for one architectural view of the Cybersecurity Monitoring Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02772 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02774 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Warehouse Management System  

You must document an architectural view of the Warehouse Management System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02775 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Design a documentation entry for one architectural view of the Warehouse Management System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02776 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02778 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Payroll and HR System  

You must document an architectural view of the Payroll and HR System. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02779 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Design a documentation entry for one architectural view of the Payroll and HR System. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02780 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02782 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Telecommunications Billing  

You must document an architectural view of the Telecommunications Billing. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02783 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Design a documentation entry for one architectural view of the Telecommunications Billing. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02784 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02786 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Library  

You must document an architectural view of the Digital Library. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02787 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Digital Library  

Design a documentation entry for one architectural view of the Digital Library. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02788 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Library  

For the Digital Library, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02790 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Medical Imaging Platform  

You must document an architectural view of the Medical Imaging Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02791 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

Design a documentation entry for one architectural view of the Medical Imaging Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02792 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02794 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Manufacturing Monitoring  

You must document an architectural view of the Manufacturing Monitoring. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02795 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

Design a documentation entry for one architectural view of the Manufacturing Monitoring. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02796 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02798 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Government Citizen Portal  

You must document an architectural view of the Government Citizen Portal. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02799 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

Design a documentation entry for one architectural view of the Government Citizen Portal. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02800 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02802 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Wallet  

You must document an architectural view of the Digital Wallet. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02803 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

Design a documentation entry for one architectural view of the Digital Wallet. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02804 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Wallet  

For the Digital Wallet, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02806 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Event Ticketing Platform  

You must document an architectural view of the Event Ticketing Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02807 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

Design a documentation entry for one architectural view of the Event Ticketing Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02808 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02810 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Online Auction Platform  

You must document an architectural view of the Online Auction Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02811 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

Design a documentation entry for one architectural view of the Online Auction Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02812 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02814 — Notation choice (Very Hard, 4 marks)

**Type:** Informal vs semiformal vs formal  
**Exam family:** Past Paper Q2  
**Scenario:** Supply Chain Platform  

You must document an architectural view of the Supply Chain Platform. Compare informal, semiformal and formal notations in precision, effort and analyzability. Recommend one for a normal commercial system, then explain what change in context could justify formal notation.

<details><summary>Answer framework / marking outline</summary>

Informal: low precision/low cost, flexible box-line/text, weak formal analysis. Semiformal: standardized notation such as UML, medium precision/cost, usually suitable for normal commercial systems. Formal: mathematically precise syntax/semantics and rigorous analysis, high effort/skill; justify it for safety/security/mission-critical contexts where proof-level precision is worth the cost.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02815 — View template (Very Hard, 6 marks)

**Type:** Document a view  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

Design a documentation entry for one architectural view of the Supply Chain Platform. Explain what belongs in the **Primary Presentation, Element Catalog, Context Diagram, Variability Guide and Rationale**, and state one common documentation mistake to avoid.

<details><summary>Answer framework / marking outline</summary>

Primary Presentation: main elements/relations in the view vocabulary plus a key. Element Catalog: element/relation properties, interfaces, non-obvious behavior. Context Diagram: scope/environment. Variability Guide: how variation points are exercised. Rationale: why design/pattern choices were made. Common lecture warning: a graphical primary presentation without a key.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q02816 — Mapping between views (Brutal, 5 marks)

**Type:** Cross-view mapping  
**Exam family:** Past Paper Q4  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, a module view shows UI, business, and data modules while a C&C view shows a client component, application service, and database interaction. Explain what **mapping between views** means, why it is often many-to-many, and give two plausible correspondence statements.

<details><summary>Answer framework / marking outline</summary>

Mappings associate elements across views so readers understand one unified architecture. They are often many-to-many because several modules can realize one runtime component and one module can contribute to multiple runtime components. Use relation wording such as module **implements** C&C component; C&C component **is implemented by** module(s); deployment views use **allocated to**.



**Grounding:** Lecture10_Documenting Software Architectures (1).pdf

</details>
