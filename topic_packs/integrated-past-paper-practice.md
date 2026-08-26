# Integrated Past-Paper Practice — CSC3209 Question Pack

Questions: **224**

## Q01761 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

University Student Portal - Integrated Architecture Question
Requirement 1: The Student Portal must show timetable and academic records simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Student Portal must notify an unknown and changing set of interested users/components whenever a seat becomes available in a preferred class, without the event producer knowing every recipient.
Requirement 3: The Student Portal must integrate with online banking provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01762 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

University Student Portal - Integrated Architecture Question
Requirement 1: The Student Portal must notify an unknown and changing set of interested users/components whenever a seat becomes available in a preferred class, without the event producer knowing every recipient.
Requirement 2: The Student Portal must integrate with online banking provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A student must access centrally managed timetable and academic records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01763 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

University Student Portal - Integrated Architecture Question
Requirement 1: The Student Portal must notify an unknown and changing set of interested users/components whenever a seat becomes available in a preferred class, without the event producer knowing every recipient.
Requirement 2: Users of the Student Portal should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A student must access centrally managed timetable and academic records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01764 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** University Student Portal  

University Student Portal - Integrated Architecture Question
Requirement 1: The Student Portal must process uploaded academic document through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Student Portal need to persistently read and write the same timetable and academic records; the information does not belong exclusively to any one component.
Requirement 3: The Student Portal must integrate with online banking provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01765 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Online Trading Platform - Integrated Architecture Question
Requirement 1: The Trading Platform must show portfolio and real-time market data simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Trading Platform must notify an unknown and changing set of interested users/components whenever a watched stock reaches a target price, without the event producer knowing every recipient.
Requirement 3: The Trading Platform must integrate with payment/banking service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01766 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Online Trading Platform - Integrated Architecture Question
Requirement 1: The Trading Platform must notify an unknown and changing set of interested users/components whenever a watched stock reaches a target price, without the event producer knowing every recipient.
Requirement 2: The Trading Platform must integrate with payment/banking service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A trader must access centrally managed portfolio and real-time market data from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01767 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Online Trading Platform - Integrated Architecture Question
Requirement 1: The Trading Platform must notify an unknown and changing set of interested users/components whenever a watched stock reaches a target price, without the event producer knowing every recipient.
Requirement 2: Users of the Trading Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A trader must access centrally managed portfolio and real-time market data from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01768 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Trading Platform  

Online Trading Platform - Integrated Architecture Question
Requirement 1: The Trading Platform must process market tick stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Trading Platform need to persistently read and write the same portfolio and real-time market data; the information does not belong exclusively to any one component.
Requirement 3: The Trading Platform must integrate with payment/banking service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01769 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Electricity Utility App - Integrated Architecture Question
Requirement 1: The Utility Application must show electricity usage and bill history simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Utility Application must notify an unknown and changing set of interested users/components whenever consumption exceeds a threshold, without the event producer knowing every recipient.
Requirement 3: The Utility Application must integrate with CIMB/credit-card payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01770 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Electricity Utility App - Integrated Architecture Question
Requirement 1: The Utility Application must notify an unknown and changing set of interested users/components whenever consumption exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: The Utility Application must integrate with CIMB/credit-card payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A utility customer must access centrally managed electricity usage and bill history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01771 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Electricity Utility App - Integrated Architecture Question
Requirement 1: The Utility Application must notify an unknown and changing set of interested users/components whenever consumption exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: Users of the Utility Application should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A utility customer must access centrally managed electricity usage and bill history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01772 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Electricity Utility App  

Electricity Utility App - Integrated Architecture Question
Requirement 1: The Utility Application must process smart-meter readings through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Utility Application need to persistently read and write the same electricity usage and bill history; the information does not belong exclusively to any one component.
Requirement 3: The Utility Application must integrate with CIMB/credit-card payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01773 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Digital Game Store - Integrated Architecture Question
Requirement 1: The Game Distribution Platform must show game progress and achievements simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Game Distribution Platform must notify an unknown and changing set of interested users/components whenever a new game matches user preferences, without the event producer knowing every recipient.
Requirement 3: The Game Distribution Platform must integrate with publisher/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01774 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Digital Game Store - Integrated Architecture Question
Requirement 1: The Game Distribution Platform must notify an unknown and changing set of interested users/components whenever a new game matches user preferences, without the event producer knowing every recipient.
Requirement 2: The Game Distribution Platform must integrate with publisher/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A gamer must access centrally managed game progress and achievements from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01775 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Digital Game Store - Integrated Architecture Question
Requirement 1: The Game Distribution Platform must notify an unknown and changing set of interested users/components whenever a new game matches user preferences, without the event producer knowing every recipient.
Requirement 2: Users of the Game Distribution Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A gamer must access centrally managed game progress and achievements from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01776 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Game Store  

Digital Game Store - Integrated Architecture Question
Requirement 1: The Game Distribution Platform must process game telemetry events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Game Distribution Platform need to persistently read and write the same game progress and achievements; the information does not belong exclusively to any one component.
Requirement 3: The Game Distribution Platform must integrate with publisher/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01777 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Flight Booking System - Integrated Architecture Question
Requirement 1: The Flight Booking System must show booking and boarding-pass information simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Flight Booking System must notify an unknown and changing set of interested users/components whenever a fare promotion becomes available, without the event producer knowing every recipient.
Requirement 3: The Flight Booking System must integrate with airline/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01778 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Flight Booking System - Integrated Architecture Question
Requirement 1: The Flight Booking System must notify an unknown and changing set of interested users/components whenever a fare promotion becomes available, without the event producer knowing every recipient.
Requirement 2: The Flight Booking System must integrate with airline/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A passenger must access centrally managed booking and boarding-pass information from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01779 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Flight Booking System - Integrated Architecture Question
Requirement 1: The Flight Booking System must notify an unknown and changing set of interested users/components whenever a fare promotion becomes available, without the event producer knowing every recipient.
Requirement 2: Users of the Flight Booking System should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A passenger must access centrally managed booking and boarding-pass information from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01780 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Flight Booking System  

Flight Booking System - Integrated Architecture Question
Requirement 1: The Flight Booking System must process booking transaction stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Flight Booking System need to persistently read and write the same booking and boarding-pass information; the information does not belong exclusively to any one component.
Requirement 3: The Flight Booking System must integrate with airline/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01781 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Integrated Architecture Question
Requirement 1: The Marketplace must show orders, products and carts simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Marketplace must notify an unknown and changing set of interested users/components whenever a saved product goes on sale, without the event producer knowing every recipient.
Requirement 3: The Marketplace must integrate with payment and courier services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01782 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Integrated Architecture Question
Requirement 1: The Marketplace must notify an unknown and changing set of interested users/components whenever a saved product goes on sale, without the event producer knowing every recipient.
Requirement 2: The Marketplace must integrate with payment and courier services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A shopper must access centrally managed orders, products and carts from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01783 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Integrated Architecture Question
Requirement 1: The Marketplace must notify an unknown and changing set of interested users/components whenever a saved product goes on sale, without the event producer knowing every recipient.
Requirement 2: Users of the Marketplace should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A shopper must access centrally managed orders, products and carts from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01784 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Integrated Architecture Question
Requirement 1: The Marketplace must process product image uploads through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Marketplace need to persistently read and write the same orders, products and carts; the information does not belong exclusively to any one component.
Requirement 3: The Marketplace must integrate with payment and courier services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01785 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Digital Banking App - Integrated Architecture Question
Requirement 1: The Banking Application must show accounts and transaction history simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Banking Application must notify an unknown and changing set of interested users/components whenever a suspicious transaction is detected, without the event producer knowing every recipient.
Requirement 3: The Banking Application must integrate with interbank transfer network and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01786 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Digital Banking App - Integrated Architecture Question
Requirement 1: The Banking Application must notify an unknown and changing set of interested users/components whenever a suspicious transaction is detected, without the event producer knowing every recipient.
Requirement 2: The Banking Application must integrate with interbank transfer network and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A bank customer must access centrally managed accounts and transaction history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01787 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Digital Banking App - Integrated Architecture Question
Requirement 1: The Banking Application must notify an unknown and changing set of interested users/components whenever a suspicious transaction is detected, without the event producer knowing every recipient.
Requirement 2: Users of the Banking Application should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A bank customer must access centrally managed accounts and transaction history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01788 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Banking App  

Digital Banking App - Integrated Architecture Question
Requirement 1: The Banking Application must process transaction events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Banking Application need to persistently read and write the same accounts and transaction history; the information does not belong exclusively to any one component.
Requirement 3: The Banking Application must integrate with interbank transfer network and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01789 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Integrated Architecture Question
Requirement 1: The Food Delivery Platform must show orders and delivery status simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Food Delivery Platform must notify an unknown and changing set of interested users/components whenever the rider is approaching the delivery location, without the event producer knowing every recipient.
Requirement 3: The Food Delivery Platform must integrate with restaurant and payment services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01790 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Integrated Architecture Question
Requirement 1: The Food Delivery Platform must notify an unknown and changing set of interested users/components whenever the rider is approaching the delivery location, without the event producer knowing every recipient.
Requirement 2: The Food Delivery Platform must integrate with restaurant and payment services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A customer must access centrally managed orders and delivery status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01791 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Integrated Architecture Question
Requirement 1: The Food Delivery Platform must notify an unknown and changing set of interested users/components whenever the rider is approaching the delivery location, without the event producer knowing every recipient.
Requirement 2: Users of the Food Delivery Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A customer must access centrally managed orders and delivery status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01792 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Integrated Architecture Question
Requirement 1: The Food Delivery Platform must process order-status events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Food Delivery Platform need to persistently read and write the same orders and delivery status; the information does not belong exclusively to any one component.
Requirement 3: The Food Delivery Platform must integrate with restaurant and payment services and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01793 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Hospital Information System - Integrated Architecture Question
Requirement 1: The Hospital Information System must show patient records and observations simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Hospital Information System must notify an unknown and changing set of interested users/components whenever a critical lab value is recorded, without the event producer knowing every recipient.
Requirement 3: The Hospital Information System must integrate with external laboratory system and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01794 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Hospital Information System - Integrated Architecture Question
Requirement 1: The Hospital Information System must notify an unknown and changing set of interested users/components whenever a critical lab value is recorded, without the event producer knowing every recipient.
Requirement 2: The Hospital Information System must integrate with external laboratory system and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A clinician must access centrally managed patient records and observations from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01795 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Hospital Information System - Integrated Architecture Question
Requirement 1: The Hospital Information System must notify an unknown and changing set of interested users/components whenever a critical lab value is recorded, without the event producer knowing every recipient.
Requirement 2: Users of the Hospital Information System should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A clinician must access centrally managed patient records and observations from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01796 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hospital Information System  

Hospital Information System - Integrated Architecture Question
Requirement 1: The Hospital Information System must process diagnostic result stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Hospital Information System need to persistently read and write the same patient records and observations; the information does not belong exclusively to any one component.
Requirement 3: The Hospital Information System must integrate with external laboratory system and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01797 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Integrated Architecture Question
Requirement 1: The Traffic Management Platform must show road and signal status simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Traffic Management Platform must notify an unknown and changing set of interested users/components whenever congestion exceeds a threshold, without the event producer knowing every recipient.
Requirement 3: The Traffic Management Platform must integrate with mapping/weather service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01798 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Integrated Architecture Question
Requirement 1: The Traffic Management Platform must notify an unknown and changing set of interested users/components whenever congestion exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: The Traffic Management Platform must integrate with mapping/weather service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A traffic operator must access centrally managed road and signal status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01799 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Integrated Architecture Question
Requirement 1: The Traffic Management Platform must notify an unknown and changing set of interested users/components whenever congestion exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: Users of the Traffic Management Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A traffic operator must access centrally managed road and signal status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01800 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Integrated Architecture Question
Requirement 1: The Traffic Management Platform must process sensor and camera events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Traffic Management Platform need to persistently read and write the same road and signal status; the information does not belong exclusively to any one component.
Requirement 3: The Traffic Management Platform must integrate with mapping/weather service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01801 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Integrated Architecture Question
Requirement 1: The Ride-Hailing Platform must show trip and driver information simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Ride-Hailing Platform must notify an unknown and changing set of interested users/components whenever a driver accepts the trip, without the event producer knowing every recipient.
Requirement 3: The Ride-Hailing Platform must integrate with mapping/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01802 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Integrated Architecture Question
Requirement 1: The Ride-Hailing Platform must notify an unknown and changing set of interested users/components whenever a driver accepts the trip, without the event producer knowing every recipient.
Requirement 2: The Ride-Hailing Platform must integrate with mapping/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A rider must access centrally managed trip and driver information from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01803 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Integrated Architecture Question
Requirement 1: The Ride-Hailing Platform must notify an unknown and changing set of interested users/components whenever a driver accepts the trip, without the event producer knowing every recipient.
Requirement 2: Users of the Ride-Hailing Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A rider must access centrally managed trip and driver information from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01804 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Integrated Architecture Question
Requirement 1: The Ride-Hailing Platform must process driver GPS updates through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Ride-Hailing Platform need to persistently read and write the same trip and driver information; the information does not belong exclusively to any one component.
Requirement 3: The Ride-Hailing Platform must integrate with mapping/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01805 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Video Streaming Service - Integrated Architecture Question
Requirement 1: The Streaming Platform must show watch history and catalog simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed series releases an episode, without the event producer knowing every recipient.
Requirement 3: The Streaming Platform must integrate with content/CDN service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01806 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Video Streaming Service - Integrated Architecture Question
Requirement 1: The Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed series releases an episode, without the event producer knowing every recipient.
Requirement 2: The Streaming Platform must integrate with content/CDN service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A viewer must access centrally managed watch history and catalog from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01807 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Video Streaming Service - Integrated Architecture Question
Requirement 1: The Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed series releases an episode, without the event producer knowing every recipient.
Requirement 2: Users of the Streaming Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A viewer must access centrally managed watch history and catalog from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01808 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Video Streaming Service  

Video Streaming Service - Integrated Architecture Question
Requirement 1: The Streaming Platform must process uploaded video content through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Streaming Platform need to persistently read and write the same watch history and catalog; the information does not belong exclusively to any one component.
Requirement 3: The Streaming Platform must integrate with content/CDN service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01809 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Music Streaming Service - Integrated Architecture Question
Requirement 1: The Music Streaming Platform must show playlists and listening history simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Music Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed artist releases a track, without the event producer knowing every recipient.
Requirement 3: The Music Streaming Platform must integrate with music-rights/catalog service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01810 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Music Streaming Service - Integrated Architecture Question
Requirement 1: The Music Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed artist releases a track, without the event producer knowing every recipient.
Requirement 2: The Music Streaming Platform must integrate with music-rights/catalog service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A listener must access centrally managed playlists and listening history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01811 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Music Streaming Service - Integrated Architecture Question
Requirement 1: The Music Streaming Platform must notify an unknown and changing set of interested users/components whenever a followed artist releases a track, without the event producer knowing every recipient.
Requirement 2: Users of the Music Streaming Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A listener must access centrally managed playlists and listening history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01812 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Music Streaming Service  

Music Streaming Service - Integrated Architecture Question
Requirement 1: The Music Streaming Platform must process audio uploads through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Music Streaming Platform need to persistently read and write the same playlists and listening history; the information does not belong exclusively to any one component.
Requirement 3: The Music Streaming Platform must integrate with music-rights/catalog service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01813 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Cloud File Storage - Integrated Architecture Question
Requirement 1: The Cloud Storage Platform must show files and sharing metadata simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Cloud Storage Platform must notify an unknown and changing set of interested users/components whenever a shared file is modified, without the event producer knowing every recipient.
Requirement 3: The Cloud Storage Platform must integrate with identity provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01814 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Cloud File Storage - Integrated Architecture Question
Requirement 1: The Cloud Storage Platform must notify an unknown and changing set of interested users/components whenever a shared file is modified, without the event producer knowing every recipient.
Requirement 2: The Cloud Storage Platform must integrate with identity provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A user must access centrally managed files and sharing metadata from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01815 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Cloud File Storage - Integrated Architecture Question
Requirement 1: The Cloud Storage Platform must notify an unknown and changing set of interested users/components whenever a shared file is modified, without the event producer knowing every recipient.
Requirement 2: Users of the Cloud Storage Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A user must access centrally managed files and sharing metadata from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01816 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cloud File Storage  

Cloud File Storage - Integrated Architecture Question
Requirement 1: The Cloud Storage Platform must process uploaded file content through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Cloud Storage Platform need to persistently read and write the same files and sharing metadata; the information does not belong exclusively to any one component.
Requirement 3: The Cloud Storage Platform must integrate with identity provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01817 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Social Network - Integrated Architecture Question
Requirement 1: The Social Network must show profiles and posts simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Social Network must notify an unknown and changing set of interested users/components whenever a followed account publishes content, without the event producer knowing every recipient.
Requirement 3: The Social Network must integrate with identity/media service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01818 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Social Network - Integrated Architecture Question
Requirement 1: The Social Network must notify an unknown and changing set of interested users/components whenever a followed account publishes content, without the event producer knowing every recipient.
Requirement 2: The Social Network must integrate with identity/media service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A member must access centrally managed profiles and posts from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01819 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Social Network - Integrated Architecture Question
Requirement 1: The Social Network must notify an unknown and changing set of interested users/components whenever a followed account publishes content, without the event producer knowing every recipient.
Requirement 2: Users of the Social Network should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A member must access centrally managed profiles and posts from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01820 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Social Network  

Social Network - Integrated Architecture Question
Requirement 1: The Social Network must process media upload stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Social Network need to persistently read and write the same profiles and posts; the information does not belong exclusively to any one component.
Requirement 3: The Social Network must integrate with identity/media service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01821 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Smart Home Platform - Integrated Architecture Question
Requirement 1: The Smart Home Platform must show device state and automation rules simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Smart Home Platform must notify an unknown and changing set of interested users/components whenever a smoke sensor enters alarm state, without the event producer knowing every recipient.
Requirement 3: The Smart Home Platform must integrate with weather/voice-assistant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01822 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Smart Home Platform - Integrated Architecture Question
Requirement 1: The Smart Home Platform must notify an unknown and changing set of interested users/components whenever a smoke sensor enters alarm state, without the event producer knowing every recipient.
Requirement 2: The Smart Home Platform must integrate with weather/voice-assistant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A homeowner must access centrally managed device state and automation rules from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01823 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Smart Home Platform - Integrated Architecture Question
Requirement 1: The Smart Home Platform must notify an unknown and changing set of interested users/components whenever a smoke sensor enters alarm state, without the event producer knowing every recipient.
Requirement 2: Users of the Smart Home Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A homeowner must access centrally managed device state and automation rules from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01824 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Smart Home Platform  

Smart Home Platform - Integrated Architecture Question
Requirement 1: The Smart Home Platform must process IoT sensor readings through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Smart Home Platform need to persistently read and write the same device state and automation rules; the information does not belong exclusively to any one component.
Requirement 3: The Smart Home Platform must integrate with weather/voice-assistant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01825 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Integrated Architecture Question
Requirement 1: The Logistics Platform must show shipment status and routes simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Logistics Platform must notify an unknown and changing set of interested users/components whenever a shipment is delayed, without the event producer knowing every recipient.
Requirement 3: The Logistics Platform must integrate with carrier/map service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01826 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Integrated Architecture Question
Requirement 1: The Logistics Platform must notify an unknown and changing set of interested users/components whenever a shipment is delayed, without the event producer knowing every recipient.
Requirement 2: The Logistics Platform must integrate with carrier/map service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A operations user must access centrally managed shipment status and routes from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01827 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Integrated Architecture Question
Requirement 1: The Logistics Platform must notify an unknown and changing set of interested users/components whenever a shipment is delayed, without the event producer knowing every recipient.
Requirement 2: Users of the Logistics Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A operations user must access centrally managed shipment status and routes from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01828 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Integrated Architecture Question
Requirement 1: The Logistics Platform must process parcel scan events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Logistics Platform need to persistently read and write the same shipment status and routes; the information does not belong exclusively to any one component.
Requirement 3: The Logistics Platform must integrate with carrier/map service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01829 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Insurance Claims System - Integrated Architecture Question
Requirement 1: The Claims Platform must show policies and claims simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Claims Platform must notify an unknown and changing set of interested users/components whenever a high-risk claim is submitted, without the event producer knowing every recipient.
Requirement 3: The Claims Platform must integrate with bank/identity verification service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01830 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Insurance Claims System - Integrated Architecture Question
Requirement 1: The Claims Platform must notify an unknown and changing set of interested users/components whenever a high-risk claim is submitted, without the event producer knowing every recipient.
Requirement 2: The Claims Platform must integrate with bank/identity verification service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A claims officer must access centrally managed policies and claims from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01831 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Insurance Claims System - Integrated Architecture Question
Requirement 1: The Claims Platform must notify an unknown and changing set of interested users/components whenever a high-risk claim is submitted, without the event producer knowing every recipient.
Requirement 2: Users of the Claims Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A claims officer must access centrally managed policies and claims from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01832 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Insurance Claims System  

Insurance Claims System - Integrated Architecture Question
Requirement 1: The Claims Platform must process claim document uploads through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Claims Platform need to persistently read and write the same policies and claims; the information does not belong exclusively to any one component.
Requirement 3: The Claims Platform must integrate with bank/identity verification service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01833 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Integrated Architecture Question
Requirement 1: The Hotel Booking Platform must show reservations and room inventory simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Hotel Booking Platform must notify an unknown and changing set of interested users/components whenever a saved hotel drops below a target price, without the event producer knowing every recipient.
Requirement 3: The Hotel Booking Platform must integrate with hotel/payment provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01834 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Integrated Architecture Question
Requirement 1: The Hotel Booking Platform must notify an unknown and changing set of interested users/components whenever a saved hotel drops below a target price, without the event producer knowing every recipient.
Requirement 2: The Hotel Booking Platform must integrate with hotel/payment provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A guest must access centrally managed reservations and room inventory from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01835 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Integrated Architecture Question
Requirement 1: The Hotel Booking Platform must notify an unknown and changing set of interested users/components whenever a saved hotel drops below a target price, without the event producer knowing every recipient.
Requirement 2: Users of the Hotel Booking Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A guest must access centrally managed reservations and room inventory from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01836 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Integrated Architecture Question
Requirement 1: The Hotel Booking Platform must process reservation events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Hotel Booking Platform need to persistently read and write the same reservations and room inventory; the information does not belong exclusively to any one component.
Requirement 3: The Hotel Booking Platform must integrate with hotel/payment provider and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01837 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Online Learning Platform - Integrated Architecture Question
Requirement 1: The Learning Platform must show courses and progress simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Learning Platform must notify an unknown and changing set of interested users/components whenever a new lesson is released, without the event producer knowing every recipient.
Requirement 3: The Learning Platform must integrate with video/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01838 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Online Learning Platform - Integrated Architecture Question
Requirement 1: The Learning Platform must notify an unknown and changing set of interested users/components whenever a new lesson is released, without the event producer knowing every recipient.
Requirement 2: The Learning Platform must integrate with video/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A learner must access centrally managed courses and progress from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01839 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Online Learning Platform - Integrated Architecture Question
Requirement 1: The Learning Platform must notify an unknown and changing set of interested users/components whenever a new lesson is released, without the event producer knowing every recipient.
Requirement 2: Users of the Learning Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A learner must access centrally managed courses and progress from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01840 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Learning Platform  

Online Learning Platform - Integrated Architecture Question
Requirement 1: The Learning Platform must process assignment uploads through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Learning Platform need to persistently read and write the same courses and progress; the information does not belong exclusively to any one component.
Requirement 3: The Learning Platform must integrate with video/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01841 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Integrated Architecture Question
Requirement 1: The Security Monitoring Platform must show alerts and security events simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Security Monitoring Platform must notify an unknown and changing set of interested users/components whenever a high-severity intrusion signal appears, without the event producer knowing every recipient.
Requirement 3: The Security Monitoring Platform must integrate with threat-intelligence service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01842 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Integrated Architecture Question
Requirement 1: The Security Monitoring Platform must notify an unknown and changing set of interested users/components whenever a high-severity intrusion signal appears, without the event producer knowing every recipient.
Requirement 2: The Security Monitoring Platform must integrate with threat-intelligence service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A security analyst must access centrally managed alerts and security events from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01843 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Integrated Architecture Question
Requirement 1: The Security Monitoring Platform must notify an unknown and changing set of interested users/components whenever a high-severity intrusion signal appears, without the event producer knowing every recipient.
Requirement 2: Users of the Security Monitoring Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A security analyst must access centrally managed alerts and security events from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01844 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Integrated Architecture Question
Requirement 1: The Security Monitoring Platform must process security event stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Security Monitoring Platform need to persistently read and write the same alerts and security events; the information does not belong exclusively to any one component.
Requirement 3: The Security Monitoring Platform must integrate with threat-intelligence service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01845 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Warehouse Management System - Integrated Architecture Question
Requirement 1: The Warehouse Platform must show inventory and order status simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Warehouse Platform must notify an unknown and changing set of interested users/components whenever inventory drops below reorder level, without the event producer knowing every recipient.
Requirement 3: The Warehouse Platform must integrate with supplier/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01846 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Warehouse Management System - Integrated Architecture Question
Requirement 1: The Warehouse Platform must notify an unknown and changing set of interested users/components whenever inventory drops below reorder level, without the event producer knowing every recipient.
Requirement 2: The Warehouse Platform must integrate with supplier/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A warehouse operator must access centrally managed inventory and order status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01847 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Warehouse Management System - Integrated Architecture Question
Requirement 1: The Warehouse Platform must notify an unknown and changing set of interested users/components whenever inventory drops below reorder level, without the event producer knowing every recipient.
Requirement 2: Users of the Warehouse Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A warehouse operator must access centrally managed inventory and order status from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01848 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Warehouse Management System  

Warehouse Management System - Integrated Architecture Question
Requirement 1: The Warehouse Platform must process scanner events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Warehouse Platform need to persistently read and write the same inventory and order status; the information does not belong exclusively to any one component.
Requirement 3: The Warehouse Platform must integrate with supplier/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01849 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Payroll and HR System - Integrated Architecture Question
Requirement 1: The HR Platform must show employee and payroll records simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The HR Platform must notify an unknown and changing set of interested users/components whenever a leave request changes state, without the event producer knowing every recipient.
Requirement 3: The HR Platform must integrate with bank/tax service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01850 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Payroll and HR System - Integrated Architecture Question
Requirement 1: The HR Platform must notify an unknown and changing set of interested users/components whenever a leave request changes state, without the event producer knowing every recipient.
Requirement 2: The HR Platform must integrate with bank/tax service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A HR officer must access centrally managed employee and payroll records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01851 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Payroll and HR System - Integrated Architecture Question
Requirement 1: The HR Platform must notify an unknown and changing set of interested users/components whenever a leave request changes state, without the event producer knowing every recipient.
Requirement 2: Users of the HR Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A HR officer must access centrally managed employee and payroll records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01852 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Payroll and HR System  

Payroll and HR System - Integrated Architecture Question
Requirement 1: The HR Platform must process time-attendance events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the HR Platform need to persistently read and write the same employee and payroll records; the information does not belong exclusively to any one component.
Requirement 3: The HR Platform must integrate with bank/tax service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01853 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Integrated Architecture Question
Requirement 1: The Telecom Billing Platform must show usage and invoices simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Telecom Billing Platform must notify an unknown and changing set of interested users/components whenever mobile data usage exceeds a threshold, without the event producer knowing every recipient.
Requirement 3: The Telecom Billing Platform must integrate with payment/network service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01854 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Integrated Architecture Question
Requirement 1: The Telecom Billing Platform must notify an unknown and changing set of interested users/components whenever mobile data usage exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: The Telecom Billing Platform must integrate with payment/network service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A subscriber must access centrally managed usage and invoices from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01855 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Integrated Architecture Question
Requirement 1: The Telecom Billing Platform must notify an unknown and changing set of interested users/components whenever mobile data usage exceeds a threshold, without the event producer knowing every recipient.
Requirement 2: Users of the Telecom Billing Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A subscriber must access centrally managed usage and invoices from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01856 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Integrated Architecture Question
Requirement 1: The Telecom Billing Platform must process call/data usage records through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Telecom Billing Platform need to persistently read and write the same usage and invoices; the information does not belong exclusively to any one component.
Requirement 3: The Telecom Billing Platform must integrate with payment/network service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01857 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Digital Library - Integrated Architecture Question
Requirement 1: The Digital Library must show catalog and borrowing history simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Digital Library must notify an unknown and changing set of interested users/components whenever a reserved title becomes available, without the event producer knowing every recipient.
Requirement 3: The Digital Library must integrate with publisher/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01858 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Digital Library - Integrated Architecture Question
Requirement 1: The Digital Library must notify an unknown and changing set of interested users/components whenever a reserved title becomes available, without the event producer knowing every recipient.
Requirement 2: The Digital Library must integrate with publisher/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A reader must access centrally managed catalog and borrowing history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01859 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Digital Library - Integrated Architecture Question
Requirement 1: The Digital Library must notify an unknown and changing set of interested users/components whenever a reserved title becomes available, without the event producer knowing every recipient.
Requirement 2: Users of the Digital Library should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A reader must access centrally managed catalog and borrowing history from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01860 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Library  

Digital Library - Integrated Architecture Question
Requirement 1: The Digital Library must process digitized document stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Digital Library need to persistently read and write the same catalog and borrowing history; the information does not belong exclusively to any one component.
Requirement 3: The Digital Library must integrate with publisher/identity service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01861 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Integrated Architecture Question
Requirement 1: The Imaging Platform must show medical images and reports simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Imaging Platform must notify an unknown and changing set of interested users/components whenever a priority study arrives, without the event producer knowing every recipient.
Requirement 3: The Imaging Platform must integrate with hospital/PACS service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01862 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Integrated Architecture Question
Requirement 1: The Imaging Platform must notify an unknown and changing set of interested users/components whenever a priority study arrives, without the event producer knowing every recipient.
Requirement 2: The Imaging Platform must integrate with hospital/PACS service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A radiologist must access centrally managed medical images and reports from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01863 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Integrated Architecture Question
Requirement 1: The Imaging Platform must notify an unknown and changing set of interested users/components whenever a priority study arrives, without the event producer knowing every recipient.
Requirement 2: Users of the Imaging Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A radiologist must access centrally managed medical images and reports from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01864 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Integrated Architecture Question
Requirement 1: The Imaging Platform must process DICOM image stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Imaging Platform need to persistently read and write the same medical images and reports; the information does not belong exclusively to any one component.
Requirement 3: The Imaging Platform must integrate with hospital/PACS service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01865 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Integrated Architecture Question
Requirement 1: The Manufacturing Monitoring Platform must show machine status and production data simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Manufacturing Monitoring Platform must notify an unknown and changing set of interested users/components whenever machine vibration exceeds a safe limit, without the event producer knowing every recipient.
Requirement 3: The Manufacturing Monitoring Platform must integrate with maintenance/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01866 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Integrated Architecture Question
Requirement 1: The Manufacturing Monitoring Platform must notify an unknown and changing set of interested users/components whenever machine vibration exceeds a safe limit, without the event producer knowing every recipient.
Requirement 2: The Manufacturing Monitoring Platform must integrate with maintenance/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A plant engineer must access centrally managed machine status and production data from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01867 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Integrated Architecture Question
Requirement 1: The Manufacturing Monitoring Platform must notify an unknown and changing set of interested users/components whenever machine vibration exceeds a safe limit, without the event producer knowing every recipient.
Requirement 2: Users of the Manufacturing Monitoring Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A plant engineer must access centrally managed machine status and production data from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01868 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Integrated Architecture Question
Requirement 1: The Manufacturing Monitoring Platform must process machine sensor stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Manufacturing Monitoring Platform need to persistently read and write the same machine status and production data; the information does not belong exclusively to any one component.
Requirement 3: The Manufacturing Monitoring Platform must integrate with maintenance/ERP service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01869 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Integrated Architecture Question
Requirement 1: The Citizen Services Portal must show applications and government records simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Citizen Services Portal must notify an unknown and changing set of interested users/components whenever an application status changes, without the event producer knowing every recipient.
Requirement 3: The Citizen Services Portal must integrate with national identity/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01870 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Integrated Architecture Question
Requirement 1: The Citizen Services Portal must notify an unknown and changing set of interested users/components whenever an application status changes, without the event producer knowing every recipient.
Requirement 2: The Citizen Services Portal must integrate with national identity/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A citizen must access centrally managed applications and government records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01871 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Integrated Architecture Question
Requirement 1: The Citizen Services Portal must notify an unknown and changing set of interested users/components whenever an application status changes, without the event producer knowing every recipient.
Requirement 2: Users of the Citizen Services Portal should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A citizen must access centrally managed applications and government records from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01872 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Integrated Architecture Question
Requirement 1: The Citizen Services Portal must process submitted documents through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Citizen Services Portal need to persistently read and write the same applications and government records; the information does not belong exclusively to any one component.
Requirement 3: The Citizen Services Portal must integrate with national identity/payment service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01873 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Digital Wallet - Integrated Architecture Question
Requirement 1: The Digital Wallet must show balance and payments simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Digital Wallet must notify an unknown and changing set of interested users/components whenever a transaction exceeds a configured amount, without the event producer knowing every recipient.
Requirement 3: The Digital Wallet must integrate with bank/merchant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01874 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Digital Wallet - Integrated Architecture Question
Requirement 1: The Digital Wallet must notify an unknown and changing set of interested users/components whenever a transaction exceeds a configured amount, without the event producer knowing every recipient.
Requirement 2: The Digital Wallet must integrate with bank/merchant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A wallet user must access centrally managed balance and payments from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01875 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Digital Wallet - Integrated Architecture Question
Requirement 1: The Digital Wallet must notify an unknown and changing set of interested users/components whenever a transaction exceeds a configured amount, without the event producer knowing every recipient.
Requirement 2: Users of the Digital Wallet should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A wallet user must access centrally managed balance and payments from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01876 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Digital Wallet  

Digital Wallet - Integrated Architecture Question
Requirement 1: The Digital Wallet must process payment event stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Digital Wallet need to persistently read and write the same balance and payments; the information does not belong exclusively to any one component.
Requirement 3: The Digital Wallet must integrate with bank/merchant service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01877 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Integrated Architecture Question
Requirement 1: The Ticketing Platform must show tickets and seat inventory simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Ticketing Platform must notify an unknown and changing set of interested users/components whenever tickets for a followed event go on sale, without the event producer knowing every recipient.
Requirement 3: The Ticketing Platform must integrate with payment/venue service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01878 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Integrated Architecture Question
Requirement 1: The Ticketing Platform must notify an unknown and changing set of interested users/components whenever tickets for a followed event go on sale, without the event producer knowing every recipient.
Requirement 2: The Ticketing Platform must integrate with payment/venue service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A attendee must access centrally managed tickets and seat inventory from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01879 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Integrated Architecture Question
Requirement 1: The Ticketing Platform must notify an unknown and changing set of interested users/components whenever tickets for a followed event go on sale, without the event producer knowing every recipient.
Requirement 2: Users of the Ticketing Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A attendee must access centrally managed tickets and seat inventory from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01880 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Integrated Architecture Question
Requirement 1: The Ticketing Platform must process purchase events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Ticketing Platform need to persistently read and write the same tickets and seat inventory; the information does not belong exclusively to any one component.
Requirement 3: The Ticketing Platform must integrate with payment/venue service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01881 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Online Auction Platform - Integrated Architecture Question
Requirement 1: The Auction Platform must show auctions and bids simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Auction Platform must notify an unknown and changing set of interested users/components whenever another bidder exceeds the user's bid, without the event producer knowing every recipient.
Requirement 3: The Auction Platform must integrate with payment/shipping service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01882 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Online Auction Platform - Integrated Architecture Question
Requirement 1: The Auction Platform must notify an unknown and changing set of interested users/components whenever another bidder exceeds the user's bid, without the event producer knowing every recipient.
Requirement 2: The Auction Platform must integrate with payment/shipping service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A bidder must access centrally managed auctions and bids from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01883 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Online Auction Platform - Integrated Architecture Question
Requirement 1: The Auction Platform must notify an unknown and changing set of interested users/components whenever another bidder exceeds the user's bid, without the event producer knowing every recipient.
Requirement 2: Users of the Auction Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A bidder must access centrally managed auctions and bids from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01884 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Online Auction Platform  

Online Auction Platform - Integrated Architecture Question
Requirement 1: The Auction Platform must process bid event stream through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Auction Platform need to persistently read and write the same auctions and bids; the information does not belong exclusively to any one component.
Requirement 3: The Auction Platform must integrate with payment/shipping service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01885 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Integrated Architecture Question
Requirement 1: The Supply Chain Platform must show inventory, suppliers and orders simultaneously in multiple interactive representations, and all views must remain synchronized when the underlying state or user input changes.
Requirement 2: The Supply Chain Platform must notify an unknown and changing set of interested users/components whenever a supplier reports a disruption, without the event producer knowing every recipient.
Requirement 3: The Supply Chain Platform must integrate with supplier/logistics service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Model-View-Controller** - isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized; likely trade-off: Modifiability vs Performance.
R2: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q01886 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Integrated Architecture Question
Requirement 1: The Supply Chain Platform must notify an unknown and changing set of interested users/components whenever a supplier reports a disruption, without the event producer knowing every recipient.
Requirement 2: The Supply Chain Platform must integrate with supplier/logistics service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.
Requirement 3: A supply planner must access centrally managed inventory, suppliers and orders from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01887 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Integrated Architecture Question
Requirement 1: The Supply Chain Platform must notify an unknown and changing set of interested users/components whenever a supplier reports a disruption, without the event producer knowing every recipient.
Requirement 2: Users of the Supply Chain Platform should be able to contribute and directly share a resource with one another. Participants may join or leave dynamically, and no single participant should be essential to the service.
Requirement 3: A supply planner must access centrally managed inventory, suppliers and orders from multiple devices over a network and receive the same authoritative information regardless of device.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Publish-Subscribe** - decouples producers from consumers so subscribers can be added/removed without changing publisher correctness; likely trade-off: Modifiability vs Performance (latency).
R2: **Peer-to-Peer** - distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears; likely trade-off: Availability vs Security.
R3: **Client-Server** - centralizes service provision so many distributed clients can request the same managed resource or functionality; likely trade-off: Modifiability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf; Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q01888 — Q1 Pattern Selection (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q1  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Integrated Architecture Question
Requirement 1: The Supply Chain Platform must process shipment and inventory events through a sequence of independent transformations, each of which should be reusable and capable of working on different items concurrently.
Requirement 2: Multiple independent components of the Supply Chain Platform need to persistently read and write the same inventory, suppliers and orders; the information does not belong exclusively to any one component.
Requirement 3: The Supply Chain Platform must integrate with supplier/logistics service and other independently managed services using published network interfaces, even though the providers may use different technologies and evolve independently.

a) Present one suitable architectural pattern for each requirement with detailed justification. [6]
b) For each selected pattern, explain one scenario-specific advantage/quality enhanced and one limitation/quality degraded. [6]
c) Choose one runtime quality attribute for one feature and specify it formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [3]

<details><summary>Answer framework / marking outline</summary>

R1: **Pipe-and-Filter** - decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently; likely trade-off: Modifiability vs Performance (latency).
R2: **Shared-Data** - mediates producers and consumers through persistent shared storage so they need not directly know each other; likely trade-off: Modifiability vs Performance.
R3: **Service-Oriented Architecture** - consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows; likely trade-off: Interoperability vs Performance.
**Part (c) worked Performance scenario for Requirement 2:** Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf; Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf; Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q03793 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** University Student Portal  

University Student Portal - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The University Student Portal must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The University Student Portal must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active University Student Portal service instance crashes; Environment: normal operation with active user sessions; Artifact: the University Student Portal service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The University Student Portal must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected University Student Portal record; Environment: normal operation while legitimate users are active; Artifact: the University Student Portal API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the University Student Portal must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing University Student Portal transaction; Environment: development and test time before release; Artifact: the University Student Portal application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core University Student Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the University Student Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active University Student Portal service instance crashes; Environment: normal operation with active user sessions; Artifact: the University Student Portal service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected University Student Portal record; Environment: normal operation while legitimate users are active; Artifact: the University Student Portal API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing University Student Portal transaction; Environment: development and test time before release; Artifact: the University Student Portal application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main University Student Portal views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03794 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** University Student Portal  

University Student Portal - Layer Deep Dive
a) Describe one concrete feature of the University Student Portal that could benefit from **Layer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the University Student Portal, separate the University Student Portal presentation, application rules and persistence adapters so each can change locally. Layer is suitable because its problem is to separate implementation responsibilities and control allowed dependencies.

**Part (b) - elements and relations:** the University Student Portal UI is the presentation layer, use-case services form the application layer, domain rules form the domain layer and repository adapters form the data-access layer; allowed-to-use dependencies point downward through those interfaces.

**Part (c) - enhanced quality:** **Modifiability** may improve because cohesive responsibilities and restricted dependencies localize most changes.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because extra layer crossings add calls, translation and indirection. A concrete failure case is that a University Student Portal screen queries the database directly. A schema change then forces changes in both UI and persistence code, so the intended modifiability benefit is lost; the bypass may be faster, but it breaks the layer constraint



**Grounding:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

</details>

## Q03795 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** University Student Portal  

University Student Portal - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a seat becomes available in a preferred class. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the University Student Portal, Subject = UniversityStudentPortalStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the University Student Portal, Context = UniversityStudentPortalTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03796 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Online Trading Platform  

Online Trading Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Online Trading Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Online Trading Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Online Trading Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Trading Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Online Trading Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Online Trading Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Trading Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Online Trading Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Trading Platform transaction; Environment: development and test time before release; Artifact: the Online Trading Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Online Trading Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Trading Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Online Trading Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Trading Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Online Trading Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Trading Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Trading Platform transaction; Environment: development and test time before release; Artifact: the Online Trading Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Online Trading Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03797 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Online Trading Platform  

Online Trading Platform - Broker Deep Dive
a) Describe one concrete feature of the Online Trading Platform that could benefit from **Broker**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Online Trading Platform, let Online Trading Platform clients invoke a replaceable remote provider through one location-transparent intermediary. Broker is suitable because its problem is to invoke distributed providers without binding clients to provider identity or location.

**Part (b) - elements and relations:** the Online Trading Platform front end is the Client, remote capability instances are Servers, and the Broker plus optional proxies locate a Server, forward the request and return the reply.

**Part (c) - enhanced quality:** **Modifiability** may improve because providers can move or be replaced while clients remain bound to the broker contract.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because broker mediation adds network hops and processing latency. A concrete failure case is that all Online Trading Platform calls pass through one unreplicated Broker that becomes overloaded. Provider location is hidden, but requests still time out, so the pattern does not guarantee performance or availability



**Grounding:** Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf

</details>

## Q03798 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Online Trading Platform  

Online Trading Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a watched stock reaches a target price. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Online Trading Platform Web/Mobile Client --HTTPS request/reply--> Online Trading Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Online Trading Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03799 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Electricity Utility App  

Electricity Utility App - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Electricity Utility App must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Electricity Utility App must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Electricity Utility App service instance crashes; Environment: normal operation with active user sessions; Artifact: the Electricity Utility App service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Electricity Utility App must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Electricity Utility App record; Environment: normal operation while legitimate users are active; Artifact: the Electricity Utility App API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Electricity Utility App must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Electricity Utility App transaction; Environment: development and test time before release; Artifact: the Electricity Utility App application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Electricity Utility App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Electricity Utility App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Electricity Utility App service instance crashes; Environment: normal operation with active user sessions; Artifact: the Electricity Utility App service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Electricity Utility App record; Environment: normal operation while legitimate users are active; Artifact: the Electricity Utility App API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Electricity Utility App transaction; Environment: development and test time before release; Artifact: the Electricity Utility App application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Electricity Utility App has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03800 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Electricity Utility App  

Electricity Utility App - Model-View-Controller Deep Dive
a) Describe one concrete feature of the Electricity Utility App that could benefit from **Model-View-Controller**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Electricity Utility App, show the same Electricity Utility App state in multiple synchronized views while keeping input logic separate. Model-View-Controller is suitable because its problem is to separate application state and behavior from presentation and user-input handling.

**Part (b) - elements and relations:** the Electricity Utility App domain data and operations form the Model, dashboard/table/mobile representations are Views, and input handlers are Controllers; Controllers update the Model and Views refresh from Model notifications.

**Part (c) - enhanced quality:** **Modifiability** may improve because presentation and input behavior can change without rewriting core application state and rules.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because frequent Model changes can trigger excessive View notifications and rendering. A concrete failure case is that each Electricity Utility App View keeps its own copy of business state and writes it directly. The views become inconsistent and every rule change must be duplicated, so MVC no longer provides synchronized state or localized UI change



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

</details>

## Q03801 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Electricity Utility App  

Electricity Utility App - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when consumption exceeds a threshold. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Electricity Utility App, Subject = ElectricityUtilityAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Electricity Utility App, Context = ElectricityUtilityAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03802 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Game Store  

Digital Game Store - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Digital Game Store must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Digital Game Store must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Digital Game Store service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Game Store service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Digital Game Store must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Game Store record; Environment: normal operation while legitimate users are active; Artifact: the Digital Game Store API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Digital Game Store must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Game Store transaction; Environment: development and test time before release; Artifact: the Digital Game Store application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Game Store requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Game Store application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Digital Game Store service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Game Store service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Game Store record; Environment: normal operation while legitimate users are active; Artifact: the Digital Game Store API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Game Store transaction; Environment: development and test time before release; Artifact: the Digital Game Store application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Digital Game Store views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03803 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Digital Game Store  

Digital Game Store - Pipe-and-Filter Deep Dive
a) Describe one concrete feature of the Digital Game Store that could benefit from **Pipe-and-Filter**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Digital Game Store, process Digital Game Store input through validation, normalization, enrichment and output stages. Pipe-and-Filter is suitable because its problem is to perform successive independent transformations of data.

**Part (b) - elements and relations:** each Digital Game Store transformation is a Filter and each Pipe carries one Filter's output to the next Filter without performing transformation logic itself.

**Part (c) - enhanced quality:** **Modifiability** may improve because independent Filters can be replaced, reordered or reused behind stable data contracts.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because buffering, copying, conversion and synchronization across many stages add latency. A concrete failure case is that one Digital Game Store Filter depends on another Filter's private state and emits an incompatible format. Stages can no longer be replaced independently and conversion failures stop the pipeline, so the claimed modifiability and throughput are not achieved



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf

</details>

## Q03804 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Game Store  

Digital Game Store - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a new game matches user preferences. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Digital Game Store Web/Mobile Client --HTTPS request/reply--> Digital Game Store Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Digital Game Store status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03805 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Flight Booking System  

Flight Booking System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Flight Booking System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Flight Booking System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Flight Booking System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Flight Booking System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Flight Booking System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Flight Booking System record; Environment: normal operation while legitimate users are active; Artifact: the Flight Booking System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Flight Booking System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Flight Booking System transaction; Environment: development and test time before release; Artifact: the Flight Booking System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Flight Booking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Flight Booking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Flight Booking System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Flight Booking System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Flight Booking System record; Environment: normal operation while legitimate users are active; Artifact: the Flight Booking System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Flight Booking System transaction; Environment: development and test time before release; Artifact: the Flight Booking System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Flight Booking System views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03806 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Flight Booking System  

Flight Booking System - Client-Server Deep Dive
a) Describe one concrete feature of the Flight Booking System that could benefit from **Client-Server**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Flight Booking System, let distributed Flight Booking System clients request authoritative records and operations from a central service. Client-Server is suitable because its problem is to provide shared centrally managed services to distributed requesters.

**Part (b) - elements and relations:** web/mobile applications are Clients, the Flight Booking System application service is the Server, and network request/reply connectors carry operations and results.

**Part (c) - enhanced quality:** **Modifiability** may improve because a shared service or rule can be changed centrally instead of in every client.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because concentrated requests can make the Server or its shared dependencies a bottleneck. A concrete failure case is that the Flight Booking System uses one Server and one database with no failover. A server crash stops every Client, while a peak burst queues all requests, so centralization alone guarantees neither Availability nor Performance



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q03807 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Flight Booking System  

Flight Booking System - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a fare promotion becomes available. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Flight Booking System, Subject = FlightBookingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Flight Booking System, Context = FlightBookingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03808 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The E-Commerce Marketplace must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The E-Commerce Marketplace must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active E-Commerce Marketplace service instance crashes; Environment: normal operation with active user sessions; Artifact: the E-Commerce Marketplace service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The E-Commerce Marketplace must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected E-Commerce Marketplace record; Environment: normal operation while legitimate users are active; Artifact: the E-Commerce Marketplace API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the E-Commerce Marketplace must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing E-Commerce Marketplace transaction; Environment: development and test time before release; Artifact: the E-Commerce Marketplace application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core E-Commerce Marketplace requests during a five-minute peak; Environment: peak-load operation; Artifact: the E-Commerce Marketplace application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active E-Commerce Marketplace service instance crashes; Environment: normal operation with active user sessions; Artifact: the E-Commerce Marketplace service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected E-Commerce Marketplace record; Environment: normal operation while legitimate users are active; Artifact: the E-Commerce Marketplace API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing E-Commerce Marketplace transaction; Environment: development and test time before release; Artifact: the E-Commerce Marketplace application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main E-Commerce Marketplace views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03809 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Peer-to-Peer Deep Dive
a) Describe one concrete feature of the E-Commerce Marketplace that could benefit from **Peer-to-Peer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the E-Commerce Marketplace, let E-Commerce Marketplace participant devices contribute and retrieve shared resources as peers. Peer-to-Peer is suitable because its problem is to share resources among equal participants that can both request and provide.

**Part (b) - elements and relations:** each participating E-Commerce Marketplace node is a Peer, optional supernodes assist discovery, and peer request/reply plus discovery connectors locate and transfer resources.

**Part (c) - enhanced quality:** **Availability** may improve because overlapping providers can keep a resource available when one Peer leaves.

**Part (d) - trade-off/weakness:** **Security** may be threatened because decentralized trust, authorization and data validation are harder to control consistently. A concrete failure case is that a required E-Commerce Marketplace resource exists on only one Peer and discovery has no alternative route. When that Peer disconnects the resource is unavailable, proving that the P2P label alone does not guarantee Availability



**Grounding:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

</details>

## Q03810 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** E-Commerce Marketplace  

E-Commerce Marketplace - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a saved product goes on sale. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** E-Commerce Marketplace Web/Mobile Client --HTTPS request/reply--> E-Commerce Marketplace Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the E-Commerce Marketplace status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03811 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Banking App  

Digital Banking App - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Digital Banking App must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Digital Banking App must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Digital Banking App service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Banking App service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Digital Banking App must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Banking App record; Environment: normal operation while legitimate users are active; Artifact: the Digital Banking App API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Digital Banking App must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Banking App transaction; Environment: development and test time before release; Artifact: the Digital Banking App application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Banking App requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Banking App application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Digital Banking App service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Banking App service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Banking App record; Environment: normal operation while legitimate users are active; Artifact: the Digital Banking App API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Banking App transaction; Environment: development and test time before release; Artifact: the Digital Banking App application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Digital Banking App has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03812 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Digital Banking App  

Digital Banking App - Service-Oriented Architecture Deep Dive
a) Describe one concrete feature of the Digital Banking App that could benefit from **Service-Oriented Architecture**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Digital Banking App, integrate the Digital Banking App with independently managed payment, identity or external-data services. Service-Oriented Architecture is suitable because its problem is to integrate independently managed network services through published contracts.

**Part (b) - elements and relations:** the Digital Banking App is a Service Consumer, external capabilities are Service Providers, published REST/SOAP/message contracts are connectors, and a registry, ESB or orchestrator is added only where discovery, transformation or workflow is required.

**Part (c) - enhanced quality:** **Interoperability** may improve because consumers depend on published syntax and semantics rather than provider implementation technology.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because remote calls and middleware add latency and independently managed providers may offer weak performance guarantees. A concrete failure case is that an external Digital Banking App provider changes message semantics without versioning its contract. Calls still connect but data is interpreted incorrectly, so published syntax alone has not delivered meaningful Interoperability



**Grounding:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q03813 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Banking App  

Digital Banking App - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a suspicious transaction is detected. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Digital Banking App, Subject = DigitalBankingAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Digital Banking App, Context = DigitalBankingAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03814 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Food Delivery Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Food Delivery Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Food Delivery Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Food Delivery Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Food Delivery Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Food Delivery Platform record; Environment: normal operation while legitimate users are active; Artifact: the Food Delivery Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Food Delivery Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Food Delivery Platform transaction; Environment: development and test time before release; Artifact: the Food Delivery Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Food Delivery Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Food Delivery Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Food Delivery Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Food Delivery Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Food Delivery Platform record; Environment: normal operation while legitimate users are active; Artifact: the Food Delivery Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Food Delivery Platform transaction; Environment: development and test time before release; Artifact: the Food Delivery Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Food Delivery Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03815 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Publish-Subscribe Deep Dive
a) Describe one concrete feature of the Food Delivery Platform that could benefit from **Publish-Subscribe**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Food Delivery Platform, send Food Delivery Platform status events to all currently interested users and components without naming each recipient. Publish-Subscribe is suitable because its problem is to distribute events to a changing set of interested runtime consumers.

**Part (b) - elements and relations:** the Food Delivery Platform status component is the Publisher, interested notification/dashboard components are Subscribers, and an event distributor or publish-subscribe connector handles announce/listen delivery.

**Part (c) - enhanced quality:** **Modifiability** may improve because Subscribers can be added or removed without changing Publisher correctness.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because event distribution, fan-out and queueing add latency and processing work. A concrete failure case is that the Food Delivery Platform Publisher directly calls a fixed list of recipients and waits synchronously for each one. A slow recipient delays all delivery and adding a recipient changes the Publisher, so the intended decoupling and latency characteristics are lost



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

</details>

## Q03816 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Food Delivery Platform  

Food Delivery Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when the rider is approaching the delivery location. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Food Delivery Platform Web/Mobile Client --HTTPS request/reply--> Food Delivery Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Food Delivery Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03817 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Hospital Information System  

Hospital Information System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Hospital Information System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Hospital Information System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Hospital Information System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Hospital Information System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Hospital Information System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Hospital Information System record; Environment: normal operation while legitimate users are active; Artifact: the Hospital Information System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Hospital Information System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Hospital Information System transaction; Environment: development and test time before release; Artifact: the Hospital Information System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Hospital Information System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hospital Information System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Hospital Information System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Hospital Information System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Hospital Information System record; Environment: normal operation while legitimate users are active; Artifact: the Hospital Information System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Hospital Information System transaction; Environment: development and test time before release; Artifact: the Hospital Information System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Hospital Information System has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03818 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Hospital Information System  

Hospital Information System - Shared-Data Deep Dive
a) Describe one concrete feature of the Hospital Information System that could benefit from **Shared-Data**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Hospital Information System, let independent Hospital Information System services read and update the same authoritative records. Shared-Data is suitable because its problem is to let independent components communicate indirectly through a common persistent repository.

**Part (b) - elements and relations:** the Hospital Information System database is the Shared-Data Store, application/reporting/processing services are Data Accessors, and read/write transactions are the data-access connectors.

**Part (c) - enhanced quality:** **Modifiability** may improve because producers and consumers need not call or know one another directly.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because the central Store can bottleneck and all Accessors remain coupled to its schema and consistency rules. A concrete failure case is that every Hospital Information System Accessor depends on undocumented columns and one database instance. A schema change breaks all Accessors and a store outage stops them together, so indirect communication has created schema coupling and a single failure point



**Grounding:** Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf

</details>

## Q03819 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Hospital Information System  

Hospital Information System - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a critical lab value is recorded. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Hospital Information System, Subject = HospitalInformationSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Hospital Information System, Context = HospitalInformationSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03820 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Smart Traffic Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Smart Traffic Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Smart Traffic Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Smart Traffic Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Smart Traffic Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Smart Traffic Platform record; Environment: normal operation while legitimate users are active; Artifact: the Smart Traffic Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Smart Traffic Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Smart Traffic Platform transaction; Environment: development and test time before release; Artifact: the Smart Traffic Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Smart Traffic Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Traffic Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Smart Traffic Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Smart Traffic Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Smart Traffic Platform record; Environment: normal operation while legitimate users are active; Artifact: the Smart Traffic Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Smart Traffic Platform transaction; Environment: development and test time before release; Artifact: the Smart Traffic Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Smart Traffic Platform has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03821 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Map-Reduce Deep Dive
a) Describe one concrete feature of the Smart Traffic Platform that could benefit from **Map-Reduce**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a source-grounded weakness or condition under which the performance benefit may be lost, and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Smart Traffic Platform, analyze the Smart Traffic Platform historical event/log dataset in parallel. Map-Reduce is suitable because its problem is to process very large batch datasets using infrastructure-managed parallel work.

**Part (b) - elements and relations:** Map workers process Smart Traffic Platform input partitions into key/value records, infrastructure shuffles and sorts equal keys, Reduce workers aggregate each group, and the infrastructure deploys, monitors and reruns tasks.

**Part (c) - enhanced quality:** **Performance** may improve because parallel Map and Reduce tasks can increase batch throughput.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because startup, shuffle/sort and synchronization overhead or partition skew can erase the parallel benefit. A concrete failure case is that one Smart Traffic Platform partition contains most records for a hot key. One Reduce worker becomes the straggler while others idle, so total completion time is set by that worker and adding workers does not deliver the expected Performance gain



**Grounding:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

</details>

## Q03822 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Traffic Platform  

Smart Traffic Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when congestion exceeds a threshold. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Smart Traffic Platform Web/Mobile Client --HTTPS request/reply--> Smart Traffic Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Smart Traffic Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03823 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Ride-Hailing Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Ride-Hailing Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Ride-Hailing Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Ride-Hailing Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Ride-Hailing Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Ride-Hailing Platform record; Environment: normal operation while legitimate users are active; Artifact: the Ride-Hailing Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Ride-Hailing Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Ride-Hailing Platform transaction; Environment: development and test time before release; Artifact: the Ride-Hailing Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Ride-Hailing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Ride-Hailing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Ride-Hailing Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Ride-Hailing Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Ride-Hailing Platform record; Environment: normal operation while legitimate users are active; Artifact: the Ride-Hailing Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Ride-Hailing Platform transaction; Environment: development and test time before release; Artifact: the Ride-Hailing Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Ride-Hailing Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03824 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Multi-Tier Deep Dive
a) Describe one concrete feature of the Ride-Hailing Platform that could benefit from **Multi-Tier**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a source-grounded weakness of the pattern and explain its cause. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Ride-Hailing Platform, deploy the Ride-Hailing Platform presentation, application processing and data management on separate runtime tiers. Multi-Tier is suitable because its problem is to separate runtime component groups into independently deployed tiers.

**Part (b) - elements and relations:** browser/mobile components form the presentation tier, Ride-Hailing Platform services form the application tier, and database components form the data tier; network request/reply connectors cross only permitted tier boundaries.

**Part (c) - enhanced quality:** **Security** may improve because separate deployment boundaries allow different exposure, privileges and protection policies.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because cross-tier network calls, serialization and chatty interactions add latency. A concrete failure case is that all Ride-Hailing Platform tiers are placed on one host with the database publicly reachable. The diagram still has three named tiers, but there is no real failure or security isolation, so the expected Security and Availability consequences are not achieved



**Grounding:** Lecture4_ArchitecturalPatterns_13_AllocationPatterns_Multi-Tier.pdf

</details>

## Q03825 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Ride-Hailing Platform  

Ride-Hailing Platform - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a driver accepts the trip. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Ride-Hailing Platform, Subject = RideHailingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Ride-Hailing Platform, Context = RideHailingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03826 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Video Streaming Service  

Video Streaming Service - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Video Streaming Service must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Video Streaming Service must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Video Streaming Service service instance crashes; Environment: normal operation with active user sessions; Artifact: the Video Streaming Service service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Video Streaming Service must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Video Streaming Service record; Environment: normal operation while legitimate users are active; Artifact: the Video Streaming Service API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Video Streaming Service must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Video Streaming Service transaction; Environment: development and test time before release; Artifact: the Video Streaming Service application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Video Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Video Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Video Streaming Service service instance crashes; Environment: normal operation with active user sessions; Artifact: the Video Streaming Service service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Video Streaming Service record; Environment: normal operation while legitimate users are active; Artifact: the Video Streaming Service API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Video Streaming Service transaction; Environment: development and test time before release; Artifact: the Video Streaming Service application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Video Streaming Service views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03827 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Video Streaming Service  

Video Streaming Service - Layer Deep Dive
a) Describe one concrete feature of the Video Streaming Service that could benefit from **Layer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Video Streaming Service, separate the Video Streaming Service presentation, application rules and persistence adapters so each can change locally. Layer is suitable because its problem is to separate implementation responsibilities and control allowed dependencies.

**Part (b) - elements and relations:** the Video Streaming Service UI is the presentation layer, use-case services form the application layer, domain rules form the domain layer and repository adapters form the data-access layer; allowed-to-use dependencies point downward through those interfaces.

**Part (c) - enhanced quality:** **Modifiability** may improve because cohesive responsibilities and restricted dependencies localize most changes.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because extra layer crossings add calls, translation and indirection. A concrete failure case is that a Video Streaming Service screen queries the database directly. A schema change then forces changes in both UI and persistence code, so the intended modifiability benefit is lost; the bypass may be faster, but it breaks the layer constraint



**Grounding:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

</details>

## Q03828 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Video Streaming Service  

Video Streaming Service - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a followed series releases an episode. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Video Streaming Service Web/Mobile Client --HTTPS request/reply--> Video Streaming Service Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Video Streaming Service status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03829 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Music Streaming Service  

Music Streaming Service - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Music Streaming Service must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Music Streaming Service must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Music Streaming Service service instance crashes; Environment: normal operation with active user sessions; Artifact: the Music Streaming Service service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Music Streaming Service must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Music Streaming Service record; Environment: normal operation while legitimate users are active; Artifact: the Music Streaming Service API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Music Streaming Service must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Music Streaming Service transaction; Environment: development and test time before release; Artifact: the Music Streaming Service application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Music Streaming Service requests during a five-minute peak; Environment: peak-load operation; Artifact: the Music Streaming Service application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Music Streaming Service service instance crashes; Environment: normal operation with active user sessions; Artifact: the Music Streaming Service service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Music Streaming Service record; Environment: normal operation while legitimate users are active; Artifact: the Music Streaming Service API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Music Streaming Service transaction; Environment: development and test time before release; Artifact: the Music Streaming Service application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Music Streaming Service views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03830 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Music Streaming Service  

Music Streaming Service - Broker Deep Dive
a) Describe one concrete feature of the Music Streaming Service that could benefit from **Broker**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Music Streaming Service, let Music Streaming Service clients invoke a replaceable remote provider through one location-transparent intermediary. Broker is suitable because its problem is to invoke distributed providers without binding clients to provider identity or location.

**Part (b) - elements and relations:** the Music Streaming Service front end is the Client, remote capability instances are Servers, and the Broker plus optional proxies locate a Server, forward the request and return the reply.

**Part (c) - enhanced quality:** **Modifiability** may improve because providers can move or be replaced while clients remain bound to the broker contract.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because broker mediation adds network hops and processing latency. A concrete failure case is that all Music Streaming Service calls pass through one unreplicated Broker that becomes overloaded. Provider location is hidden, but requests still time out, so the pattern does not guarantee performance or availability



**Grounding:** Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf

</details>

## Q03831 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Music Streaming Service  

Music Streaming Service - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a followed artist releases a track. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Music Streaming Service, Subject = MusicStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Music Streaming Service, Context = MusicStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03832 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Cloud File Storage  

Cloud File Storage - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Cloud File Storage must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Cloud File Storage must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Cloud File Storage service instance crashes; Environment: normal operation with active user sessions; Artifact: the Cloud File Storage service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Cloud File Storage must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Cloud File Storage record; Environment: normal operation while legitimate users are active; Artifact: the Cloud File Storage API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Cloud File Storage must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Cloud File Storage transaction; Environment: development and test time before release; Artifact: the Cloud File Storage application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Cloud File Storage requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cloud File Storage application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Cloud File Storage service instance crashes; Environment: normal operation with active user sessions; Artifact: the Cloud File Storage service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Cloud File Storage record; Environment: normal operation while legitimate users are active; Artifact: the Cloud File Storage API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Cloud File Storage transaction; Environment: development and test time before release; Artifact: the Cloud File Storage application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Cloud File Storage views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03833 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Cloud File Storage  

Cloud File Storage - Model-View-Controller Deep Dive
a) Describe one concrete feature of the Cloud File Storage that could benefit from **Model-View-Controller**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Cloud File Storage, show the same Cloud File Storage state in multiple synchronized views while keeping input logic separate. Model-View-Controller is suitable because its problem is to separate application state and behavior from presentation and user-input handling.

**Part (b) - elements and relations:** the Cloud File Storage domain data and operations form the Model, dashboard/table/mobile representations are Views, and input handlers are Controllers; Controllers update the Model and Views refresh from Model notifications.

**Part (c) - enhanced quality:** **Modifiability** may improve because presentation and input behavior can change without rewriting core application state and rules.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because frequent Model changes can trigger excessive View notifications and rendering. A concrete failure case is that each Cloud File Storage View keeps its own copy of business state and writes it directly. The views become inconsistent and every rule change must be duplicated, so MVC no longer provides synchronized state or localized UI change



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

</details>

## Q03834 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Cloud File Storage  

Cloud File Storage - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a shared file is modified. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Cloud File Storage Web/Mobile Client --HTTPS request/reply--> Cloud File Storage Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Cloud File Storage status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03835 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Social Network  

Social Network - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Social Network must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Social Network must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Social Network service instance crashes; Environment: normal operation with active user sessions; Artifact: the Social Network service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Social Network must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Social Network record; Environment: normal operation while legitimate users are active; Artifact: the Social Network API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Social Network must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Social Network transaction; Environment: development and test time before release; Artifact: the Social Network application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Social Network requests during a five-minute peak; Environment: peak-load operation; Artifact: the Social Network application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Social Network service instance crashes; Environment: normal operation with active user sessions; Artifact: the Social Network service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Social Network record; Environment: normal operation while legitimate users are active; Artifact: the Social Network API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Social Network transaction; Environment: development and test time before release; Artifact: the Social Network application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Social Network views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03836 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Social Network  

Social Network - Pipe-and-Filter Deep Dive
a) Describe one concrete feature of the Social Network that could benefit from **Pipe-and-Filter**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Social Network, process Social Network input through validation, normalization, enrichment and output stages. Pipe-and-Filter is suitable because its problem is to perform successive independent transformations of data.

**Part (b) - elements and relations:** each Social Network transformation is a Filter and each Pipe carries one Filter's output to the next Filter without performing transformation logic itself.

**Part (c) - enhanced quality:** **Modifiability** may improve because independent Filters can be replaced, reordered or reused behind stable data contracts.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because buffering, copying, conversion and synchronization across many stages add latency. A concrete failure case is that one Social Network Filter depends on another Filter's private state and emits an incompatible format. Stages can no longer be replaced independently and conversion failures stop the pipeline, so the claimed modifiability and throughput are not achieved



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf

</details>

## Q03837 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Social Network  

Social Network - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a followed account publishes content. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Social Network, Subject = SocialNetworkStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Social Network, Context = SocialNetworkTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03838 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Smart Home Platform  

Smart Home Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Smart Home Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Smart Home Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Smart Home Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Smart Home Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Smart Home Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Smart Home Platform record; Environment: normal operation while legitimate users are active; Artifact: the Smart Home Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Smart Home Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Smart Home Platform transaction; Environment: development and test time before release; Artifact: the Smart Home Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Smart Home Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Smart Home Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Smart Home Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Smart Home Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Smart Home Platform record; Environment: normal operation while legitimate users are active; Artifact: the Smart Home Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Smart Home Platform transaction; Environment: development and test time before release; Artifact: the Smart Home Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Smart Home Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03839 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Smart Home Platform  

Smart Home Platform - Client-Server Deep Dive
a) Describe one concrete feature of the Smart Home Platform that could benefit from **Client-Server**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Smart Home Platform, let distributed Smart Home Platform clients request authoritative records and operations from a central service. Client-Server is suitable because its problem is to provide shared centrally managed services to distributed requesters.

**Part (b) - elements and relations:** web/mobile applications are Clients, the Smart Home Platform application service is the Server, and network request/reply connectors carry operations and results.

**Part (c) - enhanced quality:** **Modifiability** may improve because a shared service or rule can be changed centrally instead of in every client.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because concentrated requests can make the Server or its shared dependencies a bottleneck. A concrete failure case is that the Smart Home Platform uses one Server and one database with no failover. A server crash stops every Client, while a peak burst queues all requests, so centralization alone guarantees neither Availability nor Performance



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q03840 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Home Platform  

Smart Home Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a smoke sensor enters alarm state. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Smart Home Platform Web/Mobile Client --HTTPS request/reply--> Smart Home Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Smart Home Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03841 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Logistics Tracking System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Logistics Tracking System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Logistics Tracking System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Logistics Tracking System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Logistics Tracking System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Logistics Tracking System record; Environment: normal operation while legitimate users are active; Artifact: the Logistics Tracking System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Logistics Tracking System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Logistics Tracking System transaction; Environment: development and test time before release; Artifact: the Logistics Tracking System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Logistics Tracking System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Logistics Tracking System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Logistics Tracking System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Logistics Tracking System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Logistics Tracking System record; Environment: normal operation while legitimate users are active; Artifact: the Logistics Tracking System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Logistics Tracking System transaction; Environment: development and test time before release; Artifact: the Logistics Tracking System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Logistics Tracking System views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03842 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Peer-to-Peer Deep Dive
a) Describe one concrete feature of the Logistics Tracking System that could benefit from **Peer-to-Peer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Logistics Tracking System, let Logistics Tracking System participant devices contribute and retrieve shared resources as peers. Peer-to-Peer is suitable because its problem is to share resources among equal participants that can both request and provide.

**Part (b) - elements and relations:** each participating Logistics Tracking System node is a Peer, optional supernodes assist discovery, and peer request/reply plus discovery connectors locate and transfer resources.

**Part (c) - enhanced quality:** **Availability** may improve because overlapping providers can keep a resource available when one Peer leaves.

**Part (d) - trade-off/weakness:** **Security** may be threatened because decentralized trust, authorization and data validation are harder to control consistently. A concrete failure case is that a required Logistics Tracking System resource exists on only one Peer and discovery has no alternative route. When that Peer disconnects the resource is unavailable, proving that the P2P label alone does not guarantee Availability



**Grounding:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

</details>

## Q03843 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Logistics Tracking System  

Logistics Tracking System - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a shipment is delayed. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Logistics Tracking System, Subject = LogisticsTrackingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Logistics Tracking System, Context = LogisticsTrackingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03844 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Insurance Claims System  

Insurance Claims System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Insurance Claims System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Insurance Claims System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Insurance Claims System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Insurance Claims System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Insurance Claims System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Insurance Claims System record; Environment: normal operation while legitimate users are active; Artifact: the Insurance Claims System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Insurance Claims System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Insurance Claims System transaction; Environment: development and test time before release; Artifact: the Insurance Claims System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Insurance Claims System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Insurance Claims System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Insurance Claims System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Insurance Claims System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Insurance Claims System record; Environment: normal operation while legitimate users are active; Artifact: the Insurance Claims System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Insurance Claims System transaction; Environment: development and test time before release; Artifact: the Insurance Claims System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Insurance Claims System has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03845 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Insurance Claims System  

Insurance Claims System - Service-Oriented Architecture Deep Dive
a) Describe one concrete feature of the Insurance Claims System that could benefit from **Service-Oriented Architecture**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Insurance Claims System, integrate the Insurance Claims System with independently managed payment, identity or external-data services. Service-Oriented Architecture is suitable because its problem is to integrate independently managed network services through published contracts.

**Part (b) - elements and relations:** the Insurance Claims System is a Service Consumer, external capabilities are Service Providers, published REST/SOAP/message contracts are connectors, and a registry, ESB or orchestrator is added only where discovery, transformation or workflow is required.

**Part (c) - enhanced quality:** **Interoperability** may improve because consumers depend on published syntax and semantics rather than provider implementation technology.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because remote calls and middleware add latency and independently managed providers may offer weak performance guarantees. A concrete failure case is that an external Insurance Claims System provider changes message semantics without versioning its contract. Calls still connect but data is interpreted incorrectly, so published syntax alone has not delivered meaningful Interoperability



**Grounding:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q03846 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Insurance Claims System  

Insurance Claims System - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a high-risk claim is submitted. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Insurance Claims System Web/Mobile Client --HTTPS request/reply--> Insurance Claims System Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Insurance Claims System status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03847 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Hotel Booking Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Hotel Booking Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Hotel Booking Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Hotel Booking Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Hotel Booking Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Hotel Booking Platform record; Environment: normal operation while legitimate users are active; Artifact: the Hotel Booking Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Hotel Booking Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Hotel Booking Platform transaction; Environment: development and test time before release; Artifact: the Hotel Booking Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Hotel Booking Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Hotel Booking Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Hotel Booking Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Hotel Booking Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Hotel Booking Platform record; Environment: normal operation while legitimate users are active; Artifact: the Hotel Booking Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Hotel Booking Platform transaction; Environment: development and test time before release; Artifact: the Hotel Booking Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Hotel Booking Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03848 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Publish-Subscribe Deep Dive
a) Describe one concrete feature of the Hotel Booking Platform that could benefit from **Publish-Subscribe**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Hotel Booking Platform, send Hotel Booking Platform status events to all currently interested users and components without naming each recipient. Publish-Subscribe is suitable because its problem is to distribute events to a changing set of interested runtime consumers.

**Part (b) - elements and relations:** the Hotel Booking Platform status component is the Publisher, interested notification/dashboard components are Subscribers, and an event distributor or publish-subscribe connector handles announce/listen delivery.

**Part (c) - enhanced quality:** **Modifiability** may improve because Subscribers can be added or removed without changing Publisher correctness.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because event distribution, fan-out and queueing add latency and processing work. A concrete failure case is that the Hotel Booking Platform Publisher directly calls a fixed list of recipients and waits synchronously for each one. A slow recipient delays all delivery and adding a recipient changes the Publisher, so the intended decoupling and latency characteristics are lost



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

</details>

## Q03849 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Hotel Booking Platform  

Hotel Booking Platform - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a saved hotel drops below a target price. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Hotel Booking Platform, Subject = HotelBookingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Hotel Booking Platform, Context = HotelBookingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03850 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Online Learning Platform  

Online Learning Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Online Learning Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Online Learning Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Online Learning Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Learning Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Online Learning Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Online Learning Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Learning Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Online Learning Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Learning Platform transaction; Environment: development and test time before release; Artifact: the Online Learning Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Online Learning Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Learning Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Online Learning Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Learning Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Online Learning Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Learning Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Learning Platform transaction; Environment: development and test time before release; Artifact: the Online Learning Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Online Learning Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03851 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Online Learning Platform  

Online Learning Platform - Shared-Data Deep Dive
a) Describe one concrete feature of the Online Learning Platform that could benefit from **Shared-Data**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Online Learning Platform, let independent Online Learning Platform services read and update the same authoritative records. Shared-Data is suitable because its problem is to let independent components communicate indirectly through a common persistent repository.

**Part (b) - elements and relations:** the Online Learning Platform database is the Shared-Data Store, application/reporting/processing services are Data Accessors, and read/write transactions are the data-access connectors.

**Part (c) - enhanced quality:** **Modifiability** may improve because producers and consumers need not call or know one another directly.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because the central Store can bottleneck and all Accessors remain coupled to its schema and consistency rules. A concrete failure case is that every Online Learning Platform Accessor depends on undocumented columns and one database instance. A schema change breaks all Accessors and a store outage stops them together, so indirect communication has created schema coupling and a single failure point



**Grounding:** Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf

</details>

## Q03852 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Online Learning Platform  

Online Learning Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a new lesson is released. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Online Learning Platform Web/Mobile Client --HTTPS request/reply--> Online Learning Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Online Learning Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03853 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Cybersecurity Monitoring Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Cybersecurity Monitoring Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Cybersecurity Monitoring Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Cybersecurity Monitoring Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Cybersecurity Monitoring Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Cybersecurity Monitoring Platform record; Environment: normal operation while legitimate users are active; Artifact: the Cybersecurity Monitoring Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Cybersecurity Monitoring Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Cybersecurity Monitoring Platform transaction; Environment: development and test time before release; Artifact: the Cybersecurity Monitoring Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Cybersecurity Monitoring Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Cybersecurity Monitoring Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Cybersecurity Monitoring Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Cybersecurity Monitoring Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Cybersecurity Monitoring Platform record; Environment: normal operation while legitimate users are active; Artifact: the Cybersecurity Monitoring Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Cybersecurity Monitoring Platform transaction; Environment: development and test time before release; Artifact: the Cybersecurity Monitoring Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Cybersecurity Monitoring Platform has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03854 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Map-Reduce Deep Dive
a) Describe one concrete feature of the Cybersecurity Monitoring Platform that could benefit from **Map-Reduce**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a source-grounded weakness or condition under which the performance benefit may be lost, and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Cybersecurity Monitoring Platform, analyze the Cybersecurity Monitoring Platform historical event/log dataset in parallel. Map-Reduce is suitable because its problem is to process very large batch datasets using infrastructure-managed parallel work.

**Part (b) - elements and relations:** Map workers process Cybersecurity Monitoring Platform input partitions into key/value records, infrastructure shuffles and sorts equal keys, Reduce workers aggregate each group, and the infrastructure deploys, monitors and reruns tasks.

**Part (c) - enhanced quality:** **Performance** may improve because parallel Map and Reduce tasks can increase batch throughput.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because startup, shuffle/sort and synchronization overhead or partition skew can erase the parallel benefit. A concrete failure case is that one Cybersecurity Monitoring Platform partition contains most records for a hot key. One Reduce worker becomes the straggler while others idle, so total completion time is set by that worker and adding workers does not deliver the expected Performance gain



**Grounding:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

</details>

## Q03855 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Cybersecurity Monitoring Platform  

Cybersecurity Monitoring Platform - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a high-severity intrusion signal appears. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Cybersecurity Monitoring Platform, Subject = CybersecurityMonitoringPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Cybersecurity Monitoring Platform, Context = CybersecurityMonitoringPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03856 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Warehouse Management System  

Warehouse Management System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Warehouse Management System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Warehouse Management System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Warehouse Management System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Warehouse Management System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Warehouse Management System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Warehouse Management System record; Environment: normal operation while legitimate users are active; Artifact: the Warehouse Management System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Warehouse Management System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Warehouse Management System transaction; Environment: development and test time before release; Artifact: the Warehouse Management System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Warehouse Management System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Warehouse Management System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Warehouse Management System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Warehouse Management System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Warehouse Management System record; Environment: normal operation while legitimate users are active; Artifact: the Warehouse Management System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Warehouse Management System transaction; Environment: development and test time before release; Artifact: the Warehouse Management System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Warehouse Management System views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03857 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Warehouse Management System  

Warehouse Management System - Multi-Tier Deep Dive
a) Describe one concrete feature of the Warehouse Management System that could benefit from **Multi-Tier**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a source-grounded weakness of the pattern and explain its cause. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Warehouse Management System, deploy the Warehouse Management System presentation, application processing and data management on separate runtime tiers. Multi-Tier is suitable because its problem is to separate runtime component groups into independently deployed tiers.

**Part (b) - elements and relations:** browser/mobile components form the presentation tier, Warehouse Management System services form the application tier, and database components form the data tier; network request/reply connectors cross only permitted tier boundaries.

**Part (c) - enhanced quality:** **Security** may improve because separate deployment boundaries allow different exposure, privileges and protection policies.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because cross-tier network calls, serialization and chatty interactions add latency. A concrete failure case is that all Warehouse Management System tiers are placed on one host with the database publicly reachable. The diagram still has three named tiers, but there is no real failure or security isolation, so the expected Security and Availability consequences are not achieved



**Grounding:** Lecture4_ArchitecturalPatterns_13_AllocationPatterns_Multi-Tier.pdf

</details>

## Q03858 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Warehouse Management System  

Warehouse Management System - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when inventory drops below reorder level. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Warehouse Management System Web/Mobile Client --HTTPS request/reply--> Warehouse Management System Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Warehouse Management System status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03859 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Payroll and HR System  

Payroll and HR System - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Payroll and HR System must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Payroll and HR System must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Payroll and HR System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Payroll and HR System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Payroll and HR System must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Payroll and HR System record; Environment: normal operation while legitimate users are active; Artifact: the Payroll and HR System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Payroll and HR System must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Payroll and HR System transaction; Environment: development and test time before release; Artifact: the Payroll and HR System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Payroll and HR System requests during a five-minute peak; Environment: peak-load operation; Artifact: the Payroll and HR System application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Payroll and HR System service instance crashes; Environment: normal operation with active user sessions; Artifact: the Payroll and HR System service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Payroll and HR System record; Environment: normal operation while legitimate users are active; Artifact: the Payroll and HR System API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Payroll and HR System transaction; Environment: development and test time before release; Artifact: the Payroll and HR System application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Payroll and HR System views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03860 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Payroll and HR System  

Payroll and HR System - Layer Deep Dive
a) Describe one concrete feature of the Payroll and HR System that could benefit from **Layer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Payroll and HR System, separate the Payroll and HR System presentation, application rules and persistence adapters so each can change locally. Layer is suitable because its problem is to separate implementation responsibilities and control allowed dependencies.

**Part (b) - elements and relations:** the Payroll and HR System UI is the presentation layer, use-case services form the application layer, domain rules form the domain layer and repository adapters form the data-access layer; allowed-to-use dependencies point downward through those interfaces.

**Part (c) - enhanced quality:** **Modifiability** may improve because cohesive responsibilities and restricted dependencies localize most changes.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because extra layer crossings add calls, translation and indirection. A concrete failure case is that a Payroll and HR System screen queries the database directly. A schema change then forces changes in both UI and persistence code, so the intended modifiability benefit is lost; the bypass may be faster, but it breaks the layer constraint



**Grounding:** Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf

</details>

## Q03861 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Payroll and HR System  

Payroll and HR System - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a leave request changes state. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Payroll and HR System, Subject = PayrollAndHRSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Payroll and HR System, Context = PayrollAndHRSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03862 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Telecommunications Billing must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Telecommunications Billing must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Telecommunications Billing service instance crashes; Environment: normal operation with active user sessions; Artifact: the Telecommunications Billing service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Telecommunications Billing must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Telecommunications Billing record; Environment: normal operation while legitimate users are active; Artifact: the Telecommunications Billing API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Telecommunications Billing must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Telecommunications Billing transaction; Environment: development and test time before release; Artifact: the Telecommunications Billing application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Telecommunications Billing requests during a five-minute peak; Environment: peak-load operation; Artifact: the Telecommunications Billing application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Telecommunications Billing service instance crashes; Environment: normal operation with active user sessions; Artifact: the Telecommunications Billing service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Telecommunications Billing record; Environment: normal operation while legitimate users are active; Artifact: the Telecommunications Billing API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Telecommunications Billing transaction; Environment: development and test time before release; Artifact: the Telecommunications Billing application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Telecommunications Billing has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03863 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Broker Deep Dive
a) Describe one concrete feature of the Telecommunications Billing that could benefit from **Broker**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Telecommunications Billing, let Telecommunications Billing clients invoke a replaceable remote provider through one location-transparent intermediary. Broker is suitable because its problem is to invoke distributed providers without binding clients to provider identity or location.

**Part (b) - elements and relations:** the Telecommunications Billing front end is the Client, remote capability instances are Servers, and the Broker plus optional proxies locate a Server, forward the request and return the reply.

**Part (c) - enhanced quality:** **Modifiability** may improve because providers can move or be replaced while clients remain bound to the broker contract.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because broker mediation adds network hops and processing latency. A concrete failure case is that all Telecommunications Billing calls pass through one unreplicated Broker that becomes overloaded. Provider location is hidden, but requests still time out, so the pattern does not guarantee performance or availability



**Grounding:** Lecture4_ArchitecturalPatterns_4_CCPatterns_Broker.pdf

</details>

## Q03864 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Telecommunications Billing  

Telecommunications Billing - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when mobile data usage exceeds a threshold. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Telecommunications Billing Web/Mobile Client --HTTPS request/reply--> Telecommunications Billing Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Telecommunications Billing status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03865 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Library  

Digital Library - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Digital Library must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Digital Library must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Digital Library service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Library service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Digital Library must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Library record; Environment: normal operation while legitimate users are active; Artifact: the Digital Library API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Digital Library must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Library transaction; Environment: development and test time before release; Artifact: the Digital Library application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Library requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Library application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Digital Library service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Library service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Library record; Environment: normal operation while legitimate users are active; Artifact: the Digital Library API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Library transaction; Environment: development and test time before release; Artifact: the Digital Library application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Digital Library views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03866 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Digital Library  

Digital Library - Model-View-Controller Deep Dive
a) Describe one concrete feature of the Digital Library that could benefit from **Model-View-Controller**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Digital Library, show the same Digital Library state in multiple synchronized views while keeping input logic separate. Model-View-Controller is suitable because its problem is to separate application state and behavior from presentation and user-input handling.

**Part (b) - elements and relations:** the Digital Library domain data and operations form the Model, dashboard/table/mobile representations are Views, and input handlers are Controllers; Controllers update the Model and Views refresh from Model notifications.

**Part (c) - enhanced quality:** **Modifiability** may improve because presentation and input behavior can change without rewriting core application state and rules.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because frequent Model changes can trigger excessive View notifications and rendering. A concrete failure case is that each Digital Library View keeps its own copy of business state and writes it directly. The views become inconsistent and every rule change must be duplicated, so MVC no longer provides synchronized state or localized UI change



**Grounding:** Lecture4_ArchitecturalPatterns_5_CCPatterns_Model-view Controller.pdf

</details>

## Q03867 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Library  

Digital Library - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a reserved title becomes available. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Digital Library, Subject = DigitalLibraryStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Digital Library, Context = DigitalLibraryTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03868 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Medical Imaging Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Medical Imaging Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Medical Imaging Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Medical Imaging Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Medical Imaging Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Medical Imaging Platform record; Environment: normal operation while legitimate users are active; Artifact: the Medical Imaging Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Medical Imaging Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Medical Imaging Platform transaction; Environment: development and test time before release; Artifact: the Medical Imaging Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Medical Imaging Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Medical Imaging Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Medical Imaging Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Medical Imaging Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Medical Imaging Platform record; Environment: normal operation while legitimate users are active; Artifact: the Medical Imaging Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Medical Imaging Platform transaction; Environment: development and test time before release; Artifact: the Medical Imaging Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Medical Imaging Platform has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03869 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Pipe-and-Filter Deep Dive
a) Describe one concrete feature of the Medical Imaging Platform that could benefit from **Pipe-and-Filter**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Medical Imaging Platform, process Medical Imaging Platform input through validation, normalization, enrichment and output stages. Pipe-and-Filter is suitable because its problem is to perform successive independent transformations of data.

**Part (b) - elements and relations:** each Medical Imaging Platform transformation is a Filter and each Pipe carries one Filter's output to the next Filter without performing transformation logic itself.

**Part (c) - enhanced quality:** **Modifiability** may improve because independent Filters can be replaced, reordered or reused behind stable data contracts.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because buffering, copying, conversion and synchronization across many stages add latency. A concrete failure case is that one Medical Imaging Platform Filter depends on another Filter's private state and emits an incompatible format. Stages can no longer be replaced independently and conversion failures stop the pipeline, so the claimed modifiability and throughput are not achieved



**Grounding:** Lecture4_ArchitecturalPatterns_6_CCPatterns_Pipe and Filter.pdf

</details>

## Q03870 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Medical Imaging Platform  

Medical Imaging Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a priority study arrives. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Medical Imaging Platform Web/Mobile Client --HTTPS request/reply--> Medical Imaging Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Medical Imaging Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03871 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Manufacturing Monitoring must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Manufacturing Monitoring must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Manufacturing Monitoring service instance crashes; Environment: normal operation with active user sessions; Artifact: the Manufacturing Monitoring service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Manufacturing Monitoring must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Manufacturing Monitoring record; Environment: normal operation while legitimate users are active; Artifact: the Manufacturing Monitoring API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Manufacturing Monitoring must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Manufacturing Monitoring transaction; Environment: development and test time before release; Artifact: the Manufacturing Monitoring application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Manufacturing Monitoring requests during a five-minute peak; Environment: peak-load operation; Artifact: the Manufacturing Monitoring application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Manufacturing Monitoring service instance crashes; Environment: normal operation with active user sessions; Artifact: the Manufacturing Monitoring service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Manufacturing Monitoring record; Environment: normal operation while legitimate users are active; Artifact: the Manufacturing Monitoring API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Manufacturing Monitoring transaction; Environment: development and test time before release; Artifact: the Manufacturing Monitoring application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Manufacturing Monitoring has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03872 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Client-Server Deep Dive
a) Describe one concrete feature of the Manufacturing Monitoring that could benefit from **Client-Server**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Manufacturing Monitoring, let distributed Manufacturing Monitoring clients request authoritative records and operations from a central service. Client-Server is suitable because its problem is to provide shared centrally managed services to distributed requesters.

**Part (b) - elements and relations:** web/mobile applications are Clients, the Manufacturing Monitoring application service is the Server, and network request/reply connectors carry operations and results.

**Part (c) - enhanced quality:** **Modifiability** may improve because a shared service or rule can be changed centrally instead of in every client.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because concentrated requests can make the Server or its shared dependencies a bottleneck. A concrete failure case is that the Manufacturing Monitoring uses one Server and one database with no failover. A server crash stops every Client, while a peak burst queues all requests, so centralization alone guarantees neither Availability nor Performance



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf

</details>

## Q03873 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Manufacturing Monitoring  

Manufacturing Monitoring - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when machine vibration exceeds a safe limit. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Manufacturing Monitoring, Subject = ManufacturingMonitoringStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Manufacturing Monitoring, Context = ManufacturingMonitoringTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03874 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Government Citizen Portal must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Government Citizen Portal must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Government Citizen Portal service instance crashes; Environment: normal operation with active user sessions; Artifact: the Government Citizen Portal service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Government Citizen Portal must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Government Citizen Portal record; Environment: normal operation while legitimate users are active; Artifact: the Government Citizen Portal API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Government Citizen Portal must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Government Citizen Portal transaction; Environment: development and test time before release; Artifact: the Government Citizen Portal application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Government Citizen Portal requests during a five-minute peak; Environment: peak-load operation; Artifact: the Government Citizen Portal application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Government Citizen Portal service instance crashes; Environment: normal operation with active user sessions; Artifact: the Government Citizen Portal service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Government Citizen Portal record; Environment: normal operation while legitimate users are active; Artifact: the Government Citizen Portal API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Government Citizen Portal transaction; Environment: development and test time before release; Artifact: the Government Citizen Portal application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Government Citizen Portal views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03875 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Peer-to-Peer Deep Dive
a) Describe one concrete feature of the Government Citizen Portal that could benefit from **Peer-to-Peer**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Government Citizen Portal, let Government Citizen Portal participant devices contribute and retrieve shared resources as peers. Peer-to-Peer is suitable because its problem is to share resources among equal participants that can both request and provide.

**Part (b) - elements and relations:** each participating Government Citizen Portal node is a Peer, optional supernodes assist discovery, and peer request/reply plus discovery connectors locate and transfer resources.

**Part (c) - enhanced quality:** **Availability** may improve because overlapping providers can keep a resource available when one Peer leaves.

**Part (d) - trade-off/weakness:** **Security** may be threatened because decentralized trust, authorization and data validation are harder to control consistently. A concrete failure case is that a required Government Citizen Portal resource exists on only one Peer and discovery has no alternative route. When that Peer disconnects the resource is unavailable, proving that the P2P label alone does not guarantee Availability



**Grounding:** Lecture4_ArchitecturalPatterns_8_CCPatterns_Peer-to-Peer.pdf

</details>

## Q03876 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Government Citizen Portal  

Government Citizen Portal - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when an application status changes. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Government Citizen Portal Web/Mobile Client --HTTPS request/reply--> Government Citizen Portal Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Government Citizen Portal status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03877 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Digital Wallet  

Digital Wallet - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Digital Wallet must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Digital Wallet must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Digital Wallet service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Wallet service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Digital Wallet must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Wallet record; Environment: normal operation while legitimate users are active; Artifact: the Digital Wallet API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Digital Wallet must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Wallet transaction; Environment: development and test time before release; Artifact: the Digital Wallet application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Digital Wallet requests during a five-minute peak; Environment: peak-load operation; Artifact: the Digital Wallet application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Digital Wallet service instance crashes; Environment: normal operation with active user sessions; Artifact: the Digital Wallet service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Digital Wallet record; Environment: normal operation while legitimate users are active; Artifact: the Digital Wallet API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Digital Wallet transaction; Environment: development and test time before release; Artifact: the Digital Wallet application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Digital Wallet has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03878 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Digital Wallet  

Digital Wallet - Service-Oriented Architecture Deep Dive
a) Describe one concrete feature of the Digital Wallet that could benefit from **Service-Oriented Architecture**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Digital Wallet, integrate the Digital Wallet with independently managed payment, identity or external-data services. Service-Oriented Architecture is suitable because its problem is to integrate independently managed network services through published contracts.

**Part (b) - elements and relations:** the Digital Wallet is a Service Consumer, external capabilities are Service Providers, published REST/SOAP/message contracts are connectors, and a registry, ESB or orchestrator is added only where discovery, transformation or workflow is required.

**Part (c) - enhanced quality:** **Interoperability** may improve because consumers depend on published syntax and semantics rather than provider implementation technology.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because remote calls and middleware add latency and independently managed providers may offer weak performance guarantees. A concrete failure case is that an external Digital Wallet provider changes message semantics without versioning its contract. Calls still connect but data is interpreted incorrectly, so published syntax alone has not delivered meaningful Interoperability



**Grounding:** Lecture4_ArchitecturalPatterns_9_CCPatterns_Service-Oriented-Architecture.pdf

</details>

## Q03879 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Wallet  

Digital Wallet - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when a transaction exceeds a configured amount. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Digital Wallet, Subject = DigitalWalletStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Digital Wallet, Context = DigitalWalletTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03880 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Event Ticketing Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Event Ticketing Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Event Ticketing Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Event Ticketing Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Event Ticketing Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Event Ticketing Platform record; Environment: normal operation while legitimate users are active; Artifact: the Event Ticketing Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Event Ticketing Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Event Ticketing Platform transaction; Environment: development and test time before release; Artifact: the Event Ticketing Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Event Ticketing Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Event Ticketing Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Event Ticketing Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Event Ticketing Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Event Ticketing Platform record; Environment: normal operation while legitimate users are active; Artifact: the Event Ticketing Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Event Ticketing Platform transaction; Environment: development and test time before release; Artifact: the Event Ticketing Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Event Ticketing Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03881 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Publish-Subscribe Deep Dive
a) Describe one concrete feature of the Event Ticketing Platform that could benefit from **Publish-Subscribe**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Event Ticketing Platform, send Event Ticketing Platform status events to all currently interested users and components without naming each recipient. Publish-Subscribe is suitable because its problem is to distribute events to a changing set of interested runtime consumers.

**Part (b) - elements and relations:** the Event Ticketing Platform status component is the Publisher, interested notification/dashboard components are Subscribers, and an event distributor or publish-subscribe connector handles announce/listen delivery.

**Part (c) - enhanced quality:** **Modifiability** may improve because Subscribers can be added or removed without changing Publisher correctness.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because event distribution, fan-out and queueing add latency and processing work. A concrete failure case is that the Event Ticketing Platform Publisher directly calls a fixed list of recipients and waits synchronously for each one. A slow recipient delays all delivery and adding a recipient changes the Publisher, so the intended decoupling and latency characteristics are lost



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

</details>

## Q03882 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Event Ticketing Platform  

Event Ticketing Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when tickets for a followed event go on sale. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Event Ticketing Platform Web/Mobile Client --HTTPS request/reply--> Event Ticketing Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Event Ticketing Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03883 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Online Auction Platform  

Online Auction Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Online Auction Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Online Auction Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Online Auction Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Auction Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Online Auction Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Online Auction Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Auction Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Online Auction Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Auction Platform transaction; Environment: development and test time before release; Artifact: the Online Auction Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Online Auction Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Online Auction Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Online Auction Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Online Auction Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Online Auction Platform record; Environment: normal operation while legitimate users are active; Artifact: the Online Auction Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Online Auction Platform transaction; Environment: development and test time before release; Artifact: the Online Auction Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **semiformal UML** for the main Online Auction Platform views. It provides standardized element/relation semantics and useful tool support at moderate cost. Informal box-and-line notation is cheaper but too ambiguous for dependable cross-team documentation; formal notation is more precise and analyzable but its cost and specialist skill are not justified for this normal commercial context. A safety- or mission-critical version would justify formal notation for its critical views.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03884 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Online Auction Platform  

Online Auction Platform - Shared-Data Deep Dive
a) Describe one concrete feature of the Online Auction Platform that could benefit from **Shared-Data**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a different quality attribute that may be threatened and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Online Auction Platform, let independent Online Auction Platform services read and update the same authoritative records. Shared-Data is suitable because its problem is to let independent components communicate indirectly through a common persistent repository.

**Part (b) - elements and relations:** the Online Auction Platform database is the Shared-Data Store, application/reporting/processing services are Data Accessors, and read/write transactions are the data-access connectors.

**Part (c) - enhanced quality:** **Modifiability** may improve because producers and consumers need not call or know one another directly.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because the central Store can bottleneck and all Accessors remain coupled to its schema and consistency rules. A concrete failure case is that every Online Auction Platform Accessor depends on undocumented columns and one database instance. A schema change breaks all Accessors and a store outage stops them together, so indirect communication has created schema coupling and a single failure point



**Grounding:** Lecture4_ArchitecturalPatterns_11_CCPatterns_Shared-Data.pdf

</details>

## Q03885 — Q4 Design Patterns (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Online Auction Platform  

Online Auction Platform - Design Patterns
a) Explain the general concept of Behavioral design patterns. [3]
b) Name TWO Behavioral patterns and for each give a real-world/software example and motivation. [5]
c) The system must notify dependent objects when another bidder exceeds the user's bid. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a):** Behavioral patterns organize algorithms, responsibilities and communication/control among collaborating objects.

**Part (b), example 1 - Observer:** In the Online Auction Platform, Subject = OnlineAuctionPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. It is motivated by a changing set of dependents that must update without concrete coupling to the Subject.

**Part (b), example 2 - State:** In the Online Auction Platform, Context = OnlineAuctionPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. It is motivated by state-specific behavior that would otherwise be spread across conditionals.

**Part (c): Observer.** Model the condition named in the question as Subject state; the dependent UI/notification objects implement Observer and register with the Subject. When the condition occurs, notifyObservers() invokes update() on the current dependents. State is not the answer because the requirement is notification of other objects, not variation of one Context's own behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03886 — Q2 Quality Attributes (Brutal, 15 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q2  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Quality Attribute and Utility Tree Question
a) Present four quality-attribute requirements for users, one each for Performance, Availability, Security and Modifiability. Express each informally and formally using Source, Stimulus, Environment, Artifact, Response and Response Measure. [8]
b) Present a utility tree that captures the four scenarios, including quality-attribute refinements and [Business Value, Architectural Impact] priority ratings. [5]
c) Choose between informal, semiformal and formal notation for documenting the main architectural views of this system, and justify the choice by comparing all three. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - four worked requirements**

**S1 Performance**
Informal: The Supply Chain Platform must respond quickly during peak demand.
Formal: Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.

**S2 Availability**
Informal: The Supply Chain Platform must continue serving users after one application instance fails.
Formal: Source: an application-server fault; Stimulus: the active Supply Chain Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Supply Chain Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.

**S3 Security**
Informal: The Supply Chain Platform must prevent unauthorised access to protected records.
Formal: Source: an unauthenticated external actor; Stimulus: requests a protected Supply Chain Platform record; Environment: normal operation while legitimate users are active; Artifact: the Supply Chain Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.

**S4 Modifiability**
Informal: A business-rule change in the Supply Chain Platform must remain localized and inexpensive.
Formal: Source: the product owner; Stimulus: requests a new validation rule for an existing Supply Chain Platform transaction; Environment: development and test time before release; Artifact: the Supply Chain Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.

**Part (b) - Utility Tree using the exact same scenarios**

- Utility -> Performance -> Peak response -> **S1: Source: 500 concurrent authenticated users; Stimulus: submit core Supply Chain Platform requests during a five-minute peak; Environment: peak-load operation; Artifact: the Supply Chain Platform application service; Response: process and return each result without exhausting resources; Response Measure: at least 95% complete within 2 seconds while sustaining 500 requests/second.** [H,H]
- Utility -> Availability -> Fault recovery -> **S2: Source: an application-server fault; Stimulus: the active Supply Chain Platform service instance crashes; Environment: normal operation with active user sessions; Artifact: the Supply Chain Platform service and failover infrastructure; Response: detect the failure, remove the instance and route work to a healthy replica; Response Measure: service is restored within 5 seconds with no more than 1 failed request.** [H,H]
- Utility -> Security -> Access control -> **S3: Source: an unauthenticated external actor; Stimulus: requests a protected Supply Chain Platform record; Environment: normal operation while legitimate users are active; Artifact: the Supply Chain Platform API and protected store; Response: reject the request, disclose no protected fields and create an audit event; Response Measure: zero protected fields are disclosed; rejection occurs within 1 second and one audit record is written.** [H,H]
- Utility -> Modifiability -> Localized rule change -> **S4: Source: the product owner; Stimulus: requests a new validation rule for an existing Supply Chain Platform transaction; Environment: development and test time before release; Artifact: the Supply Chain Platform application and rule modules; Response: implement and regression-test the rule without changing unrelated behavior; Response Measure: one developer completes it within 2 working days and modifies no more than 2 modules.** [M,H]

The H,H leaves drive architecture first because they combine high stakeholder value with high structural impact.

**Part (c) - notation decision**
Choose **formal notation for the safety/security-critical views**, supplemented by UML for communication. The Supply Chain Platform has mission-critical consequences, so precise syntax/semantics and rigorous analysis justify the higher cost and specialist skill. Informal notation is cheapest but ambiguous; semiformal UML is clearer and cheaper than formal notation but cannot provide the same proof-level analysis.



**Grounding:** Lecture7_UnderstandingQualityAttributes_MoreDetailsScenarios.pdf; Lecture8_Architecture and Requirements (1).pdf; Lecture10_Documenting Software Architectures (1).pdf

</details>

## Q03887 — Q3 Pattern Deep Dive (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q3  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Map-Reduce Deep Dive
a) Describe one concrete feature of the Supply Chain Platform that could benefit from **Map-Reduce**. [2]
b) Describe the pattern elements and relations/connectors in your scenario. [4]
c) Describe one quality attribute the pattern may enhance and explain the mechanism. [2]
d) Describe a source-grounded weakness or condition under which the performance benefit may be lost, and explain the mechanism. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - concrete feature:** In the Supply Chain Platform, analyze the Supply Chain Platform historical event/log dataset in parallel. Map-Reduce is suitable because its problem is to process very large batch datasets using infrastructure-managed parallel work.

**Part (b) - elements and relations:** Map workers process Supply Chain Platform input partitions into key/value records, infrastructure shuffles and sorts equal keys, Reduce workers aggregate each group, and the infrastructure deploys, monitors and reruns tasks.

**Part (c) - enhanced quality:** **Performance** may improve because parallel Map and Reduce tasks can increase batch throughput.

**Part (d) - trade-off/weakness:** **Performance** may be threatened because startup, shuffle/sort and synchronization overhead or partition skew can erase the parallel benefit. A concrete failure case is that one Supply Chain Platform partition contains most records for a hot key. One Reduce worker becomes the straggler while others idle, so total completion time is set by that worker and adding workers does not deliver the expected Performance gain



**Grounding:** Lecture4_ArchitecturalPatterns_12_AllocationPatterns_Map-Reduce.pdf

</details>

## Q03888 — Q4 Views and Mapping (Brutal, 10 marks)

**Type:** Multi-part exam question  
**Exam family:** Past Paper Q4  
**Scenario:** Supply Chain Platform  

Supply Chain Platform - Architectural Views and Implementation Pattern
a) Present an informal or semiformal **Client-Server C&C view** and **Layer module view** for the system. Label element types and relations. [6]
b) Present a suitable mapping between the two views. [2]
c) The system must notify users/components when a supplier reports a disruption. Decide which implementation-level design pattern is suitable and justify. [2]

<details><summary>Answer framework / marking outline</summary>

**Part (a) - Client-Server C&C view:** Supply Chain Platform Web/Mobile Client --HTTPS request/reply--> Supply Chain Platform Application Service --SQL request/reply--> Records Database. The first two boxes are runtime components; HTTPS and SQL are connectors.

**Part (a) - Layer module view:** Presentation Module -> Application Module -> Domain Module -> Data-Access Module, where -> means allowed-to-use. The UI cannot bypass Application/Domain code to access persistence.

**Part (b) - mapping:** Presentation Module **implements** the Web/Mobile Client; Application and Domain Modules together **implement** the Application Service; Data-Access Module implements the SQL-side adapter used by the Application Service. This is many-to-many because several modules realize one runtime service.

**Part (c) - Observer:** the Supply Chain Platform status model is the Subject; UI and notification adapters are Observers. They register through the Observer interface and are updated automatically when the condition in the question occurs, avoiding direct coupling to a fixed recipient list.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>
