# Foundations — CSC3209 Question Pack

Questions: **96**

## Q03577 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the University Student Portal, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03578 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the University Student Portal. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **University Student Portal** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the University Student Portal, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03579 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Analyze the University Student Portal through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **University Student Portal**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03580 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Online Trading Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03581 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Online Trading Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Online Trading Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Online Trading Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03582 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Analyze the Online Trading Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Online Trading Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03583 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Electricity Utility App, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03584 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Electricity Utility App. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Electricity Utility App** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Electricity Utility App, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03585 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Analyze the Electricity Utility App through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Electricity Utility App**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03586 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Digital Game Store, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03587 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Digital Game Store. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Digital Game Store** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Digital Game Store, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03588 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Analyze the Digital Game Store through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Game Store**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03589 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Flight Booking System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03590 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Flight Booking System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Flight Booking System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Flight Booking System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03591 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Analyze the Flight Booking System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Flight Booking System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03592 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the E-Commerce Marketplace, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03593 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the E-Commerce Marketplace. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **E-Commerce Marketplace** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the E-Commerce Marketplace, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03594 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Analyze the E-Commerce Marketplace through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **E-Commerce Marketplace**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03595 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Digital Banking App, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03596 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Digital Banking App. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Digital Banking App** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Digital Banking App, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03597 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Analyze the Digital Banking App through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Banking App**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03598 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Food Delivery Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03599 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Food Delivery Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Food Delivery Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Food Delivery Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03600 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Analyze the Food Delivery Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Food Delivery Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03601 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Hospital Information System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03602 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Hospital Information System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Hospital Information System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Hospital Information System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03603 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Analyze the Hospital Information System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Hospital Information System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03604 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Smart Traffic Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03605 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Smart Traffic Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Smart Traffic Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Smart Traffic Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03606 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Analyze the Smart Traffic Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Smart Traffic Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03607 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Ride-Hailing Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03608 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Ride-Hailing Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Ride-Hailing Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Ride-Hailing Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03609 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Analyze the Ride-Hailing Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Ride-Hailing Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03610 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Video Streaming Service, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03611 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Video Streaming Service. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Video Streaming Service** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Video Streaming Service, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03612 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Analyze the Video Streaming Service through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Video Streaming Service**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03613 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Music Streaming Service, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03614 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Music Streaming Service. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Music Streaming Service** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Music Streaming Service, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03615 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Analyze the Music Streaming Service through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Music Streaming Service**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03616 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Cloud File Storage, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03617 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Cloud File Storage. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Cloud File Storage** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Cloud File Storage, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03618 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Analyze the Cloud File Storage through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Cloud File Storage**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03619 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Social Network, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03620 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Social Network  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Social Network. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Social Network** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Social Network, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03621 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Social Network  

Analyze the Social Network through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Social Network**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03622 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Smart Home Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03623 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Smart Home Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Smart Home Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Smart Home Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03624 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Analyze the Smart Home Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Smart Home Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03625 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Logistics Tracking System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03626 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Logistics Tracking System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Logistics Tracking System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Logistics Tracking System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03627 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Analyze the Logistics Tracking System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Logistics Tracking System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03628 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Insurance Claims System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03629 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Insurance Claims System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Insurance Claims System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Insurance Claims System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03630 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Analyze the Insurance Claims System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Insurance Claims System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03631 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Hotel Booking Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03632 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Hotel Booking Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Hotel Booking Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Hotel Booking Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03633 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Analyze the Hotel Booking Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Hotel Booking Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03634 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Online Learning Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03635 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Online Learning Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Online Learning Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Online Learning Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03636 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Analyze the Online Learning Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Online Learning Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03637 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Cybersecurity Monitoring Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03638 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Cybersecurity Monitoring Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Cybersecurity Monitoring Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Cybersecurity Monitoring Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03639 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Analyze the Cybersecurity Monitoring Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Cybersecurity Monitoring Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03640 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Warehouse Management System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03641 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Warehouse Management System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Warehouse Management System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Warehouse Management System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03642 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Analyze the Warehouse Management System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Warehouse Management System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03643 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Payroll and HR System, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03644 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Payroll and HR System. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Payroll and HR System** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Payroll and HR System, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03645 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Analyze the Payroll and HR System through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Payroll and HR System**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03646 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Telecommunications Billing, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03647 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Telecommunications Billing. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Telecommunications Billing** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Telecommunications Billing, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03648 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Analyze the Telecommunications Billing through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Telecommunications Billing**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03649 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Digital Library  

For the Digital Library, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Digital Library, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03650 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Digital Library  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Digital Library. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Digital Library** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Digital Library, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03651 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Digital Library  

Analyze the Digital Library through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Library**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03652 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Medical Imaging Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03653 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Medical Imaging Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Medical Imaging Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Medical Imaging Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03654 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

Analyze the Medical Imaging Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Medical Imaging Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03655 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Manufacturing Monitoring, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03656 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Manufacturing Monitoring. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Manufacturing Monitoring** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Manufacturing Monitoring, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03657 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

Analyze the Manufacturing Monitoring through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Manufacturing Monitoring**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03658 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Government Citizen Portal, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03659 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Government Citizen Portal. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Government Citizen Portal** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Government Citizen Portal, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03660 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

Analyze the Government Citizen Portal through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Government Citizen Portal**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03661 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

For the Digital Wallet, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Digital Wallet, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03662 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Digital Wallet. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Digital Wallet** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Digital Wallet, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03663 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

Analyze the Digital Wallet through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Wallet**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03664 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Event Ticketing Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03665 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Event Ticketing Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Event Ticketing Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Event Ticketing Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03666 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

Analyze the Event Ticketing Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Event Ticketing Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03667 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Online Auction Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03668 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Online Auction Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Online Auction Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Online Auction Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03669 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

Analyze the Online Auction Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Online Auction Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>

## Q03670 — What is Software Architecture? (Hard, 5 marks)

**Type:** Definition and boundary  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, explain the course definition of software architecture and use it to decide whether each of these is architectural: (a) renaming a local variable, (b) separating a security-sensitive service, (c) choosing synchronous versus asynchronous communication, (d) changing a button label. Justify each using stakeholder-important reasoning.

<details><summary>Answer framework / marking outline</summary>

Software architecture is **the set of structures needed to reason about the Supply Chain Platform, comprising software elements, relations among them and properties of both**.

- **(a) Renaming a local variable: not architectural.** It is private to one implementation element and does not affect stakeholder-important reasoning.
- **(b) Separating a security-sensitive service: architectural.** It introduces a service/trust boundary and changes deployment, communication and Security analysis.
- **(c) Synchronous versus asynchronous communication: architectural.** It changes runtime connectors and affects Performance, Availability and failure behavior.
- **(d) Changing a button label: normally not architectural.** It is local presentation content unless a legal, safety or system-wide Usability requirement gives it external significance.



**Grounding:** Lecture1_What is Software ArchitectureV2.pdf

</details>

## Q03671 — Why architecture matters (Very Hard, 6 marks)

**Type:** Consequences and change  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

Choose **four** of the lecturer's thirteen reasons that software architecture is important and apply them concretely to the Supply Chain Platform. At least one reason must concern quality attributes, one change/evolution, and one stakeholder/project consequence.

<details><summary>Answer framework / marking outline</summary>

Four concrete reasons architecture matters to the **Supply Chain Platform** are:

1. **Quality attributes:** replicating stateless application services with health checks and failover makes an Availability scenario testable before all features are built.
2. **Change and evolution:** separating presentation, application rules and persistence behind interfaces limits the modules affected when the UI or database technology changes.
3. **Stakeholder communication:** a C&C view lets developers, operators and owners agree which client, service and database interactions cross trust or network boundaries.
4. **Project consequence:** explicit service boundaries and interfaces support team work allocation, integration planning, cost estimation and earlier risk testing.

These are causal applications to the Supply Chain Platform, not merely four headings from the lecture list.



**Grounding:** Lecture2_Why Is Software Architecture Important (1).pdf

</details>

## Q03672 — Many contexts (Brutal, 6 marks)

**Type:** Architecture Influence Cycle  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

Analyze the Supply Chain Platform through the **technical, project life-cycle, business, and professional** contexts of software architecture. Give one influence on the architecture from each context and one way the resulting architecture can influence its environment back.

<details><summary>Answer framework / marking outline</summary>

For the **Supply Chain Platform**:

- **Technical context:** the required peak response and failover targets push the design toward scalable services and redundancy.
- **Project life-cycle context:** separate teams and staged integration favor explicit service/module interfaces and automated conformance checks.
- **Business context:** protected, continuously available core transactions make Security and Availability architectural drivers.
- **Professional context:** the architect's experience with layered services and operational monitoring influences the selected patterns and tactics.

The influence also runs outward: the resulting service boundaries shape team ownership and release planning, the reusable interfaces enable new business channels, and the operational practices improve the organization's architectural capability.



**Grounding:** Lecture3_The Many Contexts of Software Architecture.pdf

</details>
