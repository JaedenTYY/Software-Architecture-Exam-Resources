# Architectural vs Design Patterns — CSC3209 Question Pack

Questions: **32**

## Q01125 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** University Student Portal  

The University Student Portal must react when a seat becomes available in a preferred class. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **University Student Portal**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01130 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Online Trading Platform  

The Online Trading Platform must react when a watched stock reaches a target price. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Online Trading Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01135 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Electricity Utility App  

The Electricity Utility App must react when consumption exceeds a threshold. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Electricity Utility App**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01140 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Game Store  

The Digital Game Store must react when a new game matches user preferences. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Game Store**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01145 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Flight Booking System  

The Flight Booking System must react when a fare promotion becomes available. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Flight Booking System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01150 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** E-Commerce Marketplace  

The E-Commerce Marketplace must react when a saved product goes on sale. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **E-Commerce Marketplace**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01155 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Banking App  

The Digital Banking App must react when a suspicious transaction is detected. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Banking App**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01160 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Food Delivery Platform  

The Food Delivery Platform must react when the rider is approaching the delivery location. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Food Delivery Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01165 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Hospital Information System  

The Hospital Information System must react when a critical lab value is recorded. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Hospital Information System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01170 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Traffic Platform  

The Smart Traffic Platform must react when congestion exceeds a threshold. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Smart Traffic Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01175 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Ride-Hailing Platform  

The Ride-Hailing Platform must react when a driver accepts the trip. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Ride-Hailing Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01180 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Video Streaming Service  

The Video Streaming Service must react when a followed series releases an episode. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Video Streaming Service**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01185 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Music Streaming Service  

The Music Streaming Service must react when a followed artist releases a track. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Music Streaming Service**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01190 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Cloud File Storage  

The Cloud File Storage must react when a shared file is modified. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Cloud File Storage**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01195 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Social Network  

The Social Network must react when a followed account publishes content. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Social Network**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01200 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Home Platform  

The Smart Home Platform must react when a smoke sensor enters alarm state. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Smart Home Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01205 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Logistics Tracking System  

The Logistics Tracking System must react when a shipment is delayed. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Logistics Tracking System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01210 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Insurance Claims System  

The Insurance Claims System must react when a high-risk claim is submitted. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Insurance Claims System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01215 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Hotel Booking Platform  

The Hotel Booking Platform must react when a saved hotel drops below a target price. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Hotel Booking Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01220 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Online Learning Platform  

The Online Learning Platform must react when a new lesson is released. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Online Learning Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01225 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Cybersecurity Monitoring Platform  

The Cybersecurity Monitoring Platform must react when a high-severity intrusion signal appears. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Cybersecurity Monitoring Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01230 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Warehouse Management System  

The Warehouse Management System must react when inventory drops below reorder level. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Warehouse Management System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01235 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Payroll and HR System  

The Payroll and HR System must react when a leave request changes state. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Payroll and HR System**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01240 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Telecommunications Billing  

The Telecommunications Billing must react when mobile data usage exceeds a threshold. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Telecommunications Billing**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01245 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Library  

The Digital Library must react when a reserved title becomes available. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Library**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01250 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Medical Imaging Platform  

The Medical Imaging Platform must react when a priority study arrives. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Medical Imaging Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01255 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Manufacturing Monitoring  

The Manufacturing Monitoring must react when machine vibration exceeds a safe limit. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Manufacturing Monitoring**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01260 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Government Citizen Portal  

The Government Citizen Portal must react when an application status changes. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Government Citizen Portal**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01265 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Wallet  

The Digital Wallet must react when a transaction exceeds a configured amount. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Digital Wallet**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01270 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Event Ticketing Platform  

The Event Ticketing Platform must react when tickets for a followed event go on sale. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Event Ticketing Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01275 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Online Auction Platform  

The Online Auction Platform must react when another bidder exceeds the user's bid. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Online Auction Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q01280 — Publish-Subscribe vs Observer (Brutal, 6 marks)

**Type:** Architecture vs implementation  
**Exam family:** Past Paper Q4  
**Scenario:** Supply Chain Platform  

The Supply Chain Platform must react when a supplier reports a disruption. Compare architectural **Publish-Subscribe** with the implementation-level **Observer** design pattern. Explain why they can solve related notification problems without being interchangeable answers to every exam question.

<details><summary>Answer framework / marking outline</summary>

For the **Supply Chain Platform**, use **Publish-Subscribe** when separate runtime components distribute the event through an event channel: the availability/status component publishes, and user-notification/dashboard components subscribe. Use **Observer** inside one implementation when a Subject object calls update() on registered Observer objects after its state changes. Both reduce direct producer-recipient coupling, but they are not interchangeable: Publish-Subscribe is a C&C architecture with an event-distribution connector; Observer is a Behavioral object pattern with Subject/Observer relationships.



**Grounding:** Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>
