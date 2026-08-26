# Tactics and Patterns — CSC3209 Question Pack

Questions: **20**

## Q02817 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **University Student Portal Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the University Student Portal scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02825 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Online Trading Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Online Trading Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02833 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Electricity Utility App Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Electricity Utility App scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02841 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Digital Game Store Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Digital Game Store scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02849 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Flight Booking System Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Flight Booking System scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02857 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **E-Commerce Marketplace Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the E-Commerce Marketplace scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02865 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Digital Banking App Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Digital Banking App scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02873 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Food Delivery Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Food Delivery Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02881 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Hospital Information System Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Hospital Information System scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02889 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Smart Traffic Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Smart Traffic Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02897 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Ride-Hailing Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Ride-Hailing Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02905 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Video Streaming Service Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Video Streaming Service scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02913 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Music Streaming Service Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Music Streaming Service scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02921 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Cloud File Storage Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Cloud File Storage scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02929 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Social Network Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Social Network scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02937 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Smart Home Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Smart Home Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02945 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Logistics Tracking System Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Logistics Tracking System scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02953 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Insurance Claims System Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Insurance Claims System scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02961 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Hotel Booking Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Hotel Booking Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>

## Q02969 — Pattern vs tactic (Very Hard, 5 marks)

**Type:** Explain relationship  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, the team chooses the Broker pattern but then discovers availability and performance weaknesses. Explain the relationship between **patterns and tactics**, propose tactics from the lecture example that could augment Broker, and identify at least one new side effect introduced by the tactics.

<details><summary>Answer framework / marking outline</summary>

A pattern is a reusable package of related architectural decisions; a tactic is a smaller decision aimed at one QA response. For the **Online Learning Platform Broker**, deploy two Broker instances, replicate registration state, load-balance requests and use heartbeat/ping detection to remove a failed Broker. These Availability tactics reduce the single failure point and the scheduling tactic reduces overload. They introduce extra cost, synchronization/consistency work, failover complexity and additional attack/configuration surfaces; replication traffic can also hurt Performance. Stop refining only when those measured side effects are acceptable against the Online Learning Platform scenarios.



**Grounding:** Lecture6_Relationships Between Tactics and Patterns.pdf

</details>
