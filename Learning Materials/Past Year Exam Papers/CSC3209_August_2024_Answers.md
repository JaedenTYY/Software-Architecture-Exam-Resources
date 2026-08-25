# CSC3209 August 2024 — Model Answers

> **Status:** Course-grounded model answer key, not an official university marking scheme. Alternative answers can be valid when the selected pattern/quality attribute is mapped correctly to the scenario and justified through its mechanism.
>
> Use with: [CSC3209 August 2024 Exam](./CSC3209_August_2024_Exam.md) and [Universal Answer Frameworks](../../universal_answers.md).

---

## Question 1 — myTNB-style utilities management application

### 1(a) Three suitable architectural patterns

#### Requirement 1 — Notify users when electricity usage exceeds a threshold

**Pattern: Publish-Subscribe**

The consumption-monitoring subsystem publishes an event when usage crosses the configured threshold. Interested user-notification components are subscribers and receive the event without the monitoring subsystem having to call every user directly.

**Why it fits:** the requirement is event-driven notification triggered by a change in monitored data.

#### Requirement 2 — Pay bills using online banking/payment services

**Pattern: Service-Oriented Architecture (SOA)**

The utility application acts as a service consumer and invokes independently managed payment/banking providers through published network interfaces/contracts.

**Why it fits:** the architectural problem is interoperability with external/heterogeneous services rather than local object creation or simple client/server retrieval.

#### Requirement 3 — Store and track electricity usage and bill payments online

**Pattern: Client-Server**

The mobile/web application is the client; a centralized utility/account service is the server. Clients request account, usage and payment data from the server, which maintains the authoritative persistent information.

**Why it fits:** distributed clients retrieve/update centrally managed account state over the Internet.

---

### 1(b) Advantage and limitation for each pattern

| Pattern | Advantage / enhanced quality | Limitation / threatened quality |
|---|---|---|
| **Publish-Subscribe** | **Modifiability/extensibility** can improve because new notification subscribers/channels can be added without changing the publisher for each recipient. | **Performance/predictability** may be threatened by queueing, asynchronous delivery, ordering and event-routing overhead. |
| **SOA** | **Interoperability** can improve because the app integrates banking/payment providers through published service contracts rather than depending on provider internals. | **Performance/availability** may be threatened because remote calls add network/serialization latency and depend on external providers. |
| **Client-Server** | **Consistency/manageability** improves because billing/usage records are maintained centrally and all clients see one authoritative state. | **Availability/performance** may be threatened because the server/database can become a bottleneck or single point of failure. |

---

### 1(c) Formal Performance scenario

Example: checking monthly electricity usage during peak load.

| QA part | Specification |
|---|---|
| **Source** | Authenticated utility customer |
| **Stimulus** | Requests the latest monthly electricity-usage/billing view |
| **Environment** | Peak evening load |
| **Artifact** | Account/usage service |
| **Response** | System retrieves the customer record and displays current usage/balance |
| **Response Measure** | At least 95% of requests complete within **2 seconds** |

---

## Question 2 — Quality Attribute Scenarios, Utility Tree and Notation

### 2(a) Four QA scenarios for users

#### Scenario U1 — Availability

| Part | Answer |
|---|---|
| Source | Application-server fault |
| Stimulus | One serving instance crashes |
| Environment | Normal operation |
| Artifact | Customer account service |
| Response | Requests are redirected to a healthy instance and service continues |
| Response Measure | Recovery/failover within 5 seconds and no more than one failed request |

#### Scenario U2 — Performance

| Part | Answer |
|---|---|
| Source | Utility customer |
| Stimulus | Requests current bill and usage history |
| Environment | Peak load |
| Artifact | Account/usage service |
| Response | System retrieves and displays the information |
| Response Measure | 95% of requests complete within 2 seconds |

#### Scenario U3 — Security

| Part | Answer |
|---|---|
| Source | Unauthorized external actor |
| Stimulus | Attempts to view or modify another customer’s billing data |
| Environment | Normal Internet operation |
| Artifact | Customer account/billing service |
| Response | System rejects access and logs the attempt |
| Response Measure | 100% of unauthorized requests are rejected and logged |

#### Scenario U4 — Usability

| Part | Answer |
|---|---|
| Source | First-time customer |
| Stimulus | Attempts to view and pay an electricity bill |
| Environment | Normal mobile use |
| Artifact | myTNB user interface |
| Response | UI guides the user from bill view to payment confirmation |
| Response Measure | 90% of first-time users complete payment within 3 minutes without assistance |

---

### 2(b) Utility Tree

```text
Utility
├── Availability
│   └── Service continuity
│       └── U1: failover within 5 s [H,H]
├── Performance
│   └── Account responsiveness
│       └── U2: 95% requests < 2 s [H,H]
├── Security
│   └── Customer privacy/integrity
│       └── U3: reject and log unauthorized access [H,H]
└── Usability
    └── Bill-payment ease
        └── U4: 90% finish within 3 min unaided [H,M]
```

`[Business Value, Architectural Impact]`. The `[H,H]` leaves are strong ASR candidates.

---

### 2(c) Suitable architectural notation

**Recommended: Semiformal notation**, e.g. UML component/deployment notation or a labelled architectural C&C view.

- **Informal:** easy and quick, but can be ambiguous.
- **Semiformal:** defined syntax/conventions, reasonably precise, still understandable to stakeholders.
- **Formal:** mathematically precise/analyzable but costly and often excessive for ordinary business-system documentation.

A utility/billing platform contains multiple components, external services and deployment relationships, so semiformal notation gives a useful balance of precision and readability.

---

## Question 3 — Peer-to-Peer Architecture

### 3(a) Concrete P2P scenario and benefit

A concrete extension could allow user devices or local smart-energy gateways to share **anonymized local outage/consumption status** with nearby peers. Each peer can both request neighborhood information and provide its own locally observed information.

**Benefit:** the service does not depend completely on one central participant for every exchange. If several peers have overlapping information, another peer may still provide useful data when one peer leaves.

> The scenario must preserve the defining P2P property: participants have symmetric request/provide roles. Simply having many clients connected to one server is not P2P.

---

### 3(b) P2P elements in the scenario

1. **Peers** — user devices/smart-energy gateways participating in the network.
2. **Resources/services provided by peers** — e.g. anonymized neighborhood outage status or local usage summaries.
3. **Peer-to-peer connections** — communication links through which peers request/provide resources.
4. **Discovery/routing mechanism** — allows a peer to find another peer that can provide the requested information.
5. **Dynamic membership** — peers may join/leave while the network continues operating.

**Interaction:** a peer can initiate a request for neighborhood information and can later act as a provider when another peer requests information it holds.

---

### 3(c) Quality attribute enhanced

**Scalability** or **Availability** can be defended.

Model answer — scalability:

> P2P can improve scalability because a new peer can contribute bandwidth/storage/processing resources as it joins, so capacity may grow with the participant population rather than all demand concentrating on one central server.

Model answer — availability:

> Availability can improve when several peers hold overlapping resources because a request can be redirected to another peer when one leaves or fails.

Do not claim P2P guarantees availability if only one peer holds the required information.

---

### 3(d) Different quality attribute threatened

**Security** is a strong answer.

> Security may be threatened because decentralized peers are more difficult to authenticate, trust and control. A malicious peer may supply incorrect data or attempt unauthorized access, so additional authentication, authorization and validation mechanisms are required.

**Consistency** can also be defended because replicated/distributed information can diverge among peers.

---

## Question 4 — Behavioral Design Patterns

### 4(a) General concept of Behavioral patterns

Behavioral design patterns describe **how objects communicate and how responsibilities/algorithms are distributed among collaborating objects**. They focus on interaction, responsibility assignment and changing behavior rather than object construction or static composition.

---

### 4(b) Two Behavioral patterns with examples and motivation

#### Observer

**Intent:** establish a one-to-many dependency so when a Subject changes state, registered Observers are notified automatically.

**Example:** a stock-price object notifies chart widgets and alert components whenever the price changes.

**Motivation:** supports a variable set of dependents without hard-coding the Subject to each concrete observer.

#### State

**Intent:** allow an object to change behavior when its internal state changes by moving state-specific behavior into separate State objects.

**Example:** an ATM behaves differently in `NoCard`, `CardInserted`, `Authenticated` and `DispensingCash` states.

**Motivation:** avoids large repeated `if/switch` conditionals and localizes state-specific behavior.

Other Behavioral patterns such as Strategy are valid if correctly explained.

---

### 4(c) Implementation-level design pattern for threshold notification

**Pattern: Observer**

- **Subject:** electricity-consumption monitor/account object.
- **Observers:** notification/UI components registered for threshold alerts.
- **Trigger:** monitored consumption changes and crosses the configured threshold.
- **Action:** the subject notifies interested observers, which update/send the alert.

**Why it fits:** the question asks for an implementation-level design pattern where dependent objects should be informed when one object’s state changes. Observer provides this one-to-many notification relationship.

**Do not confuse with Publish-Subscribe:** Publish-Subscribe is the architectural/system-level event-distribution answer; Observer is the GoF object-level implementation pattern requested here.
