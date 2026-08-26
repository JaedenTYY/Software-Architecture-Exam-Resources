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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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
Formal scenario: state all six labels and make Response Measure objectively testable. Tie the quality to the selected feature.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **UI/business/data concerns must be separated so changes can be localized**. Elements: Layer; relation/connector: allowed-to-use relation. Enhanced candidate: Modifiability because groups semantically coherent responsibilities behind public interfaces and restricts dependencies between layers. Threatened candidate: Performance because extra layers add indirection, up-front structure and possible performance penalties.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **clients should not know which distributed server provides the requested service**. Elements: Client, Server, Broker, Client-side proxy, Server-side proxy; relation/connector: broker-mediated request/reply / attachment. Enhanced candidate: Modifiability because uses an intermediary to locate providers, forward requests and return results, allowing bindings to change dynamically. Threatened candidate: Performance because the broker adds latency, may bottleneck, may be a single point of failure and increases testing/security complexity.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the same underlying data must appear in multiple responsive UI representations**. Elements: Model, View, Controller; relation/connector: notification/events/callbacks and method invocations. Enhanced candidate: Modifiability because isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized. Threatened candidate: Performance. Frequent Model changes can trigger many View refreshes or notifications, adding update overhead and latency.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **input data undergoes a sequence of transformations before becoming output**. Elements: Filter, Pipe; relation/connector: pipe carrying data streams between filter ports. Enhanced candidate: Modifiability because decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently. Threatened candidate: Performance (latency) because many stages add buffering/synchronization/data-copy overhead and a failed mandatory stage can stop the end-to-end pipeline.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **users on distributed devices retrieve centrally managed online services/data**. Elements: Client, Server; relation/connector: request/reply connector. Enhanced candidate: Modifiability because common services are factored into one location or a small number of locations, localizing changes shared by many clients. Threatened candidate: Performance because many client requests can make the server a bottleneck, increasing response time or reducing throughput.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **participants both request and provide resources and can join/leave dynamically**. Elements: Peer, optional specialized peer/supernode; relation/connector: peer request/reply and discovery/search. Enhanced candidate: Availability because distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears. Threatened candidate: Security because decentralization makes trust, consistency, backup, recovery and security management harder; small networks may not achieve expected qualities.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the system must integrate third-party/legacy/network services behind published interfaces**. Elements: Service provider, Service consumer, optional ESB, optional service registry, optional orchestration server; relation/connector: SOAP, REST request/reply, asynchronous messaging. Enhanced candidate: Interoperability because consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows. Threatened candidate: Performance because middleware adds overhead and failure points; independent providers can evolve outside your control and services may give no performance guarantees.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **notify a changing/unknown set of interested consumers when an event occurs**. Elements: Publisher component, Subscriber component, event distributor / publish-subscribe connector; relation/connector: publish-subscribe connector with announce/listen roles. Enhanced candidate: Modifiability because decouples producers from consumers so subscribers can be added/removed without changing publisher correctness. Threatened candidate: Performance (latency) because event distribution adds latency; ordering and delivery may be less controlled or guaranteed and broadcast can waste work.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **many independent components must read/write a common persistent repository**. Elements: Shared-data store, Data accessor; relation/connector: data reading/writing connector. Enhanced candidate: Modifiability because mediates producers and consumers through persistent shared storage so they need not directly know each other. Threatened candidate: Performance because the store can bottleneck or fail centrally, while accessors remain coupled to shared schema and consistency/security concerns.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **analyze enormous file-based datasets by splitting work into parallel map and reduce stages**. Elements: Map, Reduce, Infrastructure; relation/connector: infrastructure-managed key/value data movement. Enhanced candidate: Performance because many Map instances process partitions concurrently and Reduce instances combine grouped results, increasing batch throughput. Weakness candidate: Performance can degrade when framework overhead dominates a small workload or partition skew leaves one worker as the straggler.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **runtime components are grouped into tiers and deployed/scaled/securitized separately**. Elements: Tier (logical grouping of runtime components); relation/connector: communicates-with relation, allocated-to relation. Enhanced candidate: Security because groups computationally independent runtime components and constrains cross-tier communication, permitting specialized deployment, scaling and security policies. Weakness candidate: substantial cost and complexity because separate tiers add hardware, software, design, implementation and operational overhead that may not be justified for a simple system.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **UI/business/data concerns must be separated so changes can be localized**. Elements: Layer; relation/connector: allowed-to-use relation. Enhanced candidate: Modifiability because groups semantically coherent responsibilities behind public interfaces and restricts dependencies between layers. Threatened candidate: Performance because extra layers add indirection, up-front structure and possible performance penalties.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **clients should not know which distributed server provides the requested service**. Elements: Client, Server, Broker, Client-side proxy, Server-side proxy; relation/connector: broker-mediated request/reply / attachment. Enhanced candidate: Modifiability because uses an intermediary to locate providers, forward requests and return results, allowing bindings to change dynamically. Threatened candidate: Performance because the broker adds latency, may bottleneck, may be a single point of failure and increases testing/security complexity.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the same underlying data must appear in multiple responsive UI representations**. Elements: Model, View, Controller; relation/connector: notification/events/callbacks and method invocations. Enhanced candidate: Modifiability because isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized. Threatened candidate: Performance. Frequent Model changes can trigger many View refreshes or notifications, adding update overhead and latency.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **input data undergoes a sequence of transformations before becoming output**. Elements: Filter, Pipe; relation/connector: pipe carrying data streams between filter ports. Enhanced candidate: Modifiability because decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently. Threatened candidate: Performance (latency) because many stages add buffering/synchronization/data-copy overhead and a failed mandatory stage can stop the end-to-end pipeline.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **users on distributed devices retrieve centrally managed online services/data**. Elements: Client, Server; relation/connector: request/reply connector. Enhanced candidate: Modifiability because common services are factored into one location or a small number of locations, localizing changes shared by many clients. Threatened candidate: Performance because many client requests can make the server a bottleneck, increasing response time or reducing throughput.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **participants both request and provide resources and can join/leave dynamically**. Elements: Peer, optional specialized peer/supernode; relation/connector: peer request/reply and discovery/search. Enhanced candidate: Availability because distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears. Threatened candidate: Security because decentralization makes trust, consistency, backup, recovery and security management harder; small networks may not achieve expected qualities.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the system must integrate third-party/legacy/network services behind published interfaces**. Elements: Service provider, Service consumer, optional ESB, optional service registry, optional orchestration server; relation/connector: SOAP, REST request/reply, asynchronous messaging. Enhanced candidate: Interoperability because consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows. Threatened candidate: Performance because middleware adds overhead and failure points; independent providers can evolve outside your control and services may give no performance guarantees.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **notify a changing/unknown set of interested consumers when an event occurs**. Elements: Publisher component, Subscriber component, event distributor / publish-subscribe connector; relation/connector: publish-subscribe connector with announce/listen roles. Enhanced candidate: Modifiability because decouples producers from consumers so subscribers can be added/removed without changing publisher correctness. Threatened candidate: Performance (latency) because event distribution adds latency; ordering and delivery may be less controlled or guaranteed and broadcast can waste work.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **many independent components must read/write a common persistent repository**. Elements: Shared-data store, Data accessor; relation/connector: data reading/writing connector. Enhanced candidate: Modifiability because mediates producers and consumers through persistent shared storage so they need not directly know each other. Threatened candidate: Performance because the store can bottleneck or fail centrally, while accessors remain coupled to shared schema and consistency/security concerns.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **analyze enormous file-based datasets by splitting work into parallel map and reduce stages**. Elements: Map, Reduce, Infrastructure; relation/connector: infrastructure-managed key/value data movement. Enhanced candidate: Performance because many Map instances process partitions concurrently and Reduce instances combine grouped results, increasing batch throughput. Weakness candidate: Performance can degrade when framework overhead dominates a small workload or partition skew leaves one worker as the straggler.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **runtime components are grouped into tiers and deployed/scaled/securitized separately**. Elements: Tier (logical grouping of runtime components); relation/connector: communicates-with relation, allocated-to relation. Enhanced candidate: Security because groups computationally independent runtime components and constrains cross-tier communication, permitting specialized deployment, scaling and security policies. Weakness candidate: substantial cost and complexity because separate tiers add hardware, software, design, implementation and operational overhead that may not be justified for a simple system.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **UI/business/data concerns must be separated so changes can be localized**. Elements: Layer; relation/connector: allowed-to-use relation. Enhanced candidate: Modifiability because groups semantically coherent responsibilities behind public interfaces and restricts dependencies between layers. Threatened candidate: Performance because extra layers add indirection, up-front structure and possible performance penalties.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **clients should not know which distributed server provides the requested service**. Elements: Client, Server, Broker, Client-side proxy, Server-side proxy; relation/connector: broker-mediated request/reply / attachment. Enhanced candidate: Modifiability because uses an intermediary to locate providers, forward requests and return results, allowing bindings to change dynamically. Threatened candidate: Performance because the broker adds latency, may bottleneck, may be a single point of failure and increases testing/security complexity.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the same underlying data must appear in multiple responsive UI representations**. Elements: Model, View, Controller; relation/connector: notification/events/callbacks and method invocations. Enhanced candidate: Modifiability because isolates application state in the model, presentation in views and user-action mediation in controllers; notifications keep views synchronized. Threatened candidate: Performance. Frequent Model changes can trigger many View refreshes or notifications, adding update overhead and latency.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **input data undergoes a sequence of transformations before becoming output**. Elements: Filter, Pipe; relation/connector: pipe carrying data streams between filter ports. Enhanced candidate: Modifiability because decomposes processing into independent filters; buffered pipes permit pipeline parallelism where different filters process different data items concurrently. Threatened candidate: Performance (latency) because many stages add buffering/synchronization/data-copy overhead and a failed mandatory stage can stop the end-to-end pipeline.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **users on distributed devices retrieve centrally managed online services/data**. Elements: Client, Server; relation/connector: request/reply connector. Enhanced candidate: Modifiability because common services are factored into one location or a small number of locations, localizing changes shared by many clients. Threatened candidate: Performance because many client requests can make the server a bottleneck, increasing response time or reducing throughput.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **participants both request and provide resources and can join/leave dynamically**. Elements: Peer, optional specialized peer/supernode; relation/connector: peer request/reply and discovery/search. Enhanced candidate: Availability because distributes both demand and service/resource provision across peers; overlapping peer capabilities provide alternatives when one peer disappears. Threatened candidate: Security because decentralization makes trust, consistency, backup, recovery and security management harder; small networks may not achieve expected qualities.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **the system must integrate third-party/legacy/network services behind published interfaces**. Elements: Service provider, Service consumer, optional ESB, optional service registry, optional orchestration server; relation/connector: SOAP, REST request/reply, asynchronous messaging. Enhanced candidate: Interoperability because consumers use published service contracts; registries hide provider identity/location, ESBs route/transform messages, and orchestration coordinates workflows. Threatened candidate: Performance because middleware adds overhead and failure points; independent providers can evolve outside your control and services may give no performance guarantees.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **notify a changing/unknown set of interested consumers when an event occurs**. Elements: Publisher component, Subscriber component, event distributor / publish-subscribe connector; relation/connector: publish-subscribe connector with announce/listen roles. Enhanced candidate: Modifiability because decouples producers from consumers so subscribers can be added/removed without changing publisher correctness. Threatened candidate: Performance (latency) because event distribution adds latency; ordering and delivery may be less controlled or guaranteed and broadcast can waste work.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **many independent components must read/write a common persistent repository**. Elements: Shared-data store, Data accessor; relation/connector: data reading/writing connector. Enhanced candidate: Modifiability because mediates producers and consumers through persistent shared storage so they need not directly know each other. Threatened candidate: Performance because the store can bottleneck or fail centrally, while accessors remain coupled to shared schema and consistency/security concerns.



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

Behavioral patterns concern algorithms, responsibilities and communication/control among objects. Choose two valid catalog patterns and state intent + example + motivation. Part (c): **Observer** - one-to-many dependency; Subject notifies Observer dependents automatically when state changes, avoiding tight coupling to a fixed number of dependents.



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

Part (a): give four logically distinct, measurable six-part scenarios. Part (b): **Utility → QA → refinement → same scenario [B,A]**; reuse the exact scenarios rather than inventing unrelated leaves. Part (c): semiformal/UML is usually defensible for a normal commercial system; justify informal/formal alternatives and change the recommendation if the system is safety/mission critical.



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

Construct a scenario matching this pattern clue: **analyze enormous file-based datasets by splitting work into parallel map and reduce stages**. Elements: Map, Reduce, Infrastructure; relation/connector: infrastructure-managed key/value data movement. Enhanced candidate: Performance because many Map instances process partitions concurrently and Reduce instances combine grouped results, increasing batch throughput. Weakness candidate: Performance can degrade when framework overhead dominates a small workload or partition skew leaves one worker as the straggler.



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

Client-Server view: runtime clients, server(s), request/reply. Layer view: implementation layers and allowed-to-use relation. Mapping may be many-to-many (e.g., presentation modules implement client component; business/data modules implement server-side components). Part (c): Observer when the question explicitly asks for implementation-level object notification.



**Grounding:** Lecture4_ArchitecturalPatterns_7_CCPatterns_Client-Server.pdf; Lecture4_ArchitecturalPatterns_2_ModulePatterns_Layer Pattern.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>
