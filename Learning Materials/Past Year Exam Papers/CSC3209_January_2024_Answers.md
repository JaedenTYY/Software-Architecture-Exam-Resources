# CSC3209 January 2024 — Model Answers

> **Status:** Course-grounded model answer key, not an official university marking scheme. Alternative answers can be valid when the selected pattern/quality attribute is correctly mapped to the scenario and justified through its architectural mechanism.
>
> Use with: [CSC3209 January 2024 Exam](./CSC3209_January_2024_Exam.md) and [Universal Answer Frameworks](../../universal_answers.md).

---

## Question 1 — Video game digital distribution system

### 1(a) Three suitable architectural patterns

#### Requirement 1 — Notify gamers when a matching new game is available

**Pattern: Publish-Subscribe**

Gamers are **subscribers** to game-interest topics/preferences and the game catalogue/publishing subsystem acts as a **publisher**. When a new game is published, an event is sent through the publish-subscribe connector/event channel to interested subscribers. The publisher does not need to directly know every gamer who should receive the notification.

**Why it fits:** the requirement is event-driven: users should be informed **when new information becomes available**, rather than repeatedly polling for it.

#### Requirement 2 — Gamers communicate/chat with one another

**Pattern: Peer-to-Peer (P2P)**

Each gamer/client can act as a **peer** that both initiates and receives communication. Peers have symmetric roles for the chat interaction and can communicate/share messages/resources with other peers rather than every interaction being conceptually owned by one fixed client and one fixed server.

**Why it fits:** the defining clue is that participants can both request/provide communication resources and act as equals in the interaction.

> A centralized chat service could also be implemented using Client-Server. P2P is the stronger exam answer when the scenario is explicitly interpreted as direct/equal peer communication.

#### Requirement 3 — Store and check gaming progress/achievements online from another PC

**Pattern: Client-Server**

The gamer application is the **client** and the online profile/progress service is the **server**. The client sends requests to retrieve or update the gamer’s progress, while the centralized server keeps the persistent account state independent of the particular PC currently being used.

**Why it fits:** the data must remain centrally accessible through the Internet even when the user changes devices.

---

### 1(b) Advantage and limitation for each selected pattern

| Pattern | Advantage / enhanced quality | Limitation / threatened quality |
|---|---|---|
| **Publish-Subscribe** | **Modifiability/extensibility** can improve because new notification subscribers can be added or removed without changing the publisher for each concrete gamer. | **Performance/predictability** may be threatened because event routing, queues and asynchronous delivery add latency and make ordering/delivery timing less direct. |
| **Peer-to-Peer** | **Scalability/availability** can improve because peers can contribute resources and another peer may continue providing an overlapping resource when one peer leaves. | **Security/consistency** may be threatened because decentralized peers are harder to authenticate/control and distributed state/messages can become inconsistent. |
| **Client-Server** | **Consistency/manageability** can improve because gaming progress is maintained centrally and all clients access the same authoritative profile state. | **Availability/performance** may be threatened because the central server or shared database can become a bottleneck or single point of failure. |

Exam wording example:

> Client-Server can improve consistency because the server maintains one authoritative copy of the gamer’s progress. However, availability may be threatened because failure of the central profile service or its database can prevent all clients from retrieving their progress.

---

### 1(c) Formal Performance quality-attribute scenario

Example based on checking a gamer’s online progress:

**Informal scenario:** During peak usage, a gamer signs in from a new PC and requests the online profile. The platform should display the gamer’s progress quickly.

| QA part | Specification |
|---|---|
| **Source** | Authenticated gamer |
| **Stimulus** | Requests gaming progress and achievements |
| **Environment** | Peak-load normal operation |
| **Artifact** | Online profile/progress service |
| **Response** | System retrieves and displays the current progress |
| **Response Measure** | At least 95% of profile requests complete within **2 seconds** |

---

## Question 2 — Quality Attribute Scenarios and Utility Tree

### 2(a) Four QA scenarios for gamers

#### Gamer Scenario G1 — Performance

**Informal:** A gamer searches for a game during peak usage and expects results quickly.

| Part | Answer |
|---|---|
| Source | Gamer |
| Stimulus | Submits a game-search request |
| Environment | Peak-load operation |
| Artifact | Game catalogue/search service |
| Response | System returns matching games |
| Response Measure | 95% of searches complete within 2 seconds |

#### Gamer Scenario G2 — Availability

**Informal:** If one application instance fails while a gamer is viewing the store, service should continue.

| Part | Answer |
|---|---|
| Source | Internal application-server fault |
| Stimulus | One serving instance crashes |
| Environment | Normal operation |
| Artifact | Game-store service |
| Response | Traffic is redirected to a healthy instance and the session continues |
| Response Measure | Service restored/redirected within 5 seconds; no more than one failed request |

#### Gamer Scenario G3 — Security

**Informal:** An attacker attempts to access another gamer’s private profile.

| Part | Answer |
|---|---|
| Source | Unauthorized external user |
| Stimulus | Attempts to read another gamer’s profile/progress |
| Environment | Normal Internet operation |
| Artifact | Account/profile service |
| Response | Request is rejected and security event is logged |
| Response Measure | 100% of unauthorized requests are rejected and logged |

#### Gamer Scenario G4 — Usability

**Informal:** A first-time gamer should be able to buy/download a game without assistance.

| Part | Answer |
|---|---|
| Source | First-time gamer |
| Stimulus | Attempts to locate and purchase a game |
| Environment | Normal operation |
| Artifact | Store user interface |
| Response | UI guides the user through search, purchase and download |
| Response Measure | 90% of first-time users complete the task within 3 minutes without assistance |

---

### 2(b) Four QA scenarios for game publishers

#### Publisher Scenario P1 — Performance

| Part | Answer |
|---|---|
| Source | Game publisher |
| Stimulus | Uploads/submits a new game listing and metadata |
| Environment | Normal operation |
| Artifact | Publishing/catalogue service |
| Response | System validates and stores the listing |
| Response Measure | 95% of metadata submissions receive confirmation within 3 seconds, excluding large binary upload time |

#### Publisher Scenario P2 — Availability

| Part | Answer |
|---|---|
| Source | Infrastructure fault |
| Stimulus | One publishing-service instance fails |
| Environment | Business hours |
| Artifact | Publisher portal |
| Response | A healthy instance continues accepting publisher operations |
| Response Measure | Publishing functionality is restored within 10 seconds |

#### Publisher Scenario P3 — Security

| Part | Answer |
|---|---|
| Source | Unauthorized user |
| Stimulus | Attempts to modify a publisher’s game listing |
| Environment | Normal Internet operation |
| Artifact | Publisher management service |
| Response | System authenticates/authorizes the request, rejects unauthorized modification and logs it |
| Response Measure | 100% of unauthorized modification attempts are rejected and logged |

#### Publisher Scenario P4 — Modifiability

| Part | Answer |
|---|---|
| Source | Developer/product team |
| Stimulus | Requests a new metadata field for published games |
| Environment | Development time |
| Artifact | Publishing/catalogue modules |
| Response | Developers add the field without modifying unrelated gamer-download logic |
| Response Measure | One developer completes the change within 2 working days and changes no more than two major modules |

---

### 2(c) Utility Tree

One defensible utility tree using the scenarios above:

```text
Utility
├── Performance
│   ├── Search responsiveness
│   │   └── G1: 95% searches < 2 s [H,H]
│   └── Publishing responsiveness
│       └── P1: 95% metadata submissions < 3 s [M,M]
├── Availability
│   ├── Gamer storefront continuity
│   │   └── G2: failover within 5 s [H,H]
│   └── Publisher portal continuity
│       └── P2: restore within 10 s [M,H]
├── Security
│   ├── Gamer privacy
│   │   └── G3: reject/log unauthorized profile access [H,H]
│   └── Publisher integrity
│       └── P3: reject/log unauthorized listing modification [H,H]
├── Usability
│   └── First-time purchase flow
│       └── G4: 90% complete in 3 min unaided [H,M]
└── Modifiability
    └── Catalogue evolution
        └── P4: add metadata field in 2 days / ≤2 modules [M,M]
```

**Interpretation:** `[Business Value, Architectural Impact]`. The `[H,H]` leaves are strong Architecture Significant Requirement candidates because they are both important to stakeholders and strongly constrain architectural decisions.

---

### 2(d) Suitable notation for architectural views

**Recommended: Semiformal notation**, for example UML component/deployment diagrams or a well-defined C&C diagram.

**Justification:**

- **Informal notation** is fast and easy to understand, but its weak semantics can make responsibilities and connectors ambiguous.
- **Semiformal notation** uses defined syntax/conventions, making components, interfaces, dependencies and deployment relationships clearer while remaining understandable to developers and non-specialist stakeholders.
- **Formal notation** provides the strongest mathematical precision and analyzability but has higher cost, requires specialist expertise and is excessive for ordinary documentation of this store system unless safety/verification demands it.

Therefore a semiformal notation gives the best balance between precision and communication for documenting the game platform’s architectural views.

---

## Question 3 — Service-Oriented Architecture (SOA)

### 3(a) Concrete benefit scenario

The game platform can integrate independently managed services such as **payment**, **identity/authentication**, **recommendation**, publisher services or cloud storage through published network interfaces. For example, the store can consume an external payment-provider service without implementing the payment infrastructure itself.

SOA is useful because the consumer depends on the **published service contract**, not the provider’s internal implementation.

---

### 3(b) SOA elements in the scenario

A complete answer can describe the following:

1. **Service Provider** — exposes a capability through a published interface. Example: external payment provider or recommendation service.
2. **Service Consumer** — invokes/uses the service. Example: the game-store checkout component consumes the payment service.
3. **Service Contract / Published Interface** — defines operations, messages and interaction expectations. Example: `authorizePayment`, request/response formats and error semantics.
4. **Network/Service Connector** — carries requests and responses between consumer and provider using agreed protocols.
5. **Service Registry/Discovery (optional)** — stores service descriptions/endpoints so consumers can discover/bind to providers dynamically.
6. **ESB/broker/orchestration infrastructure (optional)** — can route, transform or coordinate calls among multiple services.

**Interaction:** consumer discovers/selects the required provider (directly or via registry), invokes the published interface, and receives a response without depending on provider internals.

---

### 3(c) Quality attribute enhanced

**Interoperability** is a strong answer.

> SOA can enhance interoperability because independently managed/heterogeneous providers expose capabilities through published service contracts. The game platform can consume a payment or identity service without depending on the provider’s internal technology stack.

**Modifiability** can also be defended if the answer explains that providers may be replaced while preserving the contract.

---

### 3(d) Different quality attribute threatened

**Performance** is a strong answer.

> SOA may threaten performance because remote service calls introduce network latency, serialization/deserialization, security checks and possibly registry/ESB/orchestration overhead. A checkout workflow that calls several remote services can therefore take longer than a local in-process operation.

Availability is another valid trade-off if the answer explains dependence on remote providers/network paths.

---

## Question 4 — Creational patterns and notification design pattern

### 4(a) Creational design patterns + two examples

**General concept:** Creational design patterns deal with **how objects are created**, hiding or controlling concrete construction decisions so client code is less tightly coupled to concrete classes.

Two valid examples:

#### Factory Method

- **Intent:** delegate object creation through a factory method so subclasses/implementations can decide which concrete product to instantiate.
- **Use when:** client logic should depend on a Product abstraction rather than hard-coding concrete constructors.
- **Benefit:** creation decisions are localized and concrete products can vary with less client-code change.

#### Singleton

- **Intent:** ensure exactly one controlled instance of a class and provide a global access point to that instance.
- **Use when:** the requirement genuinely needs one shared instance, such as a single application configuration/registry object.
- **Trade-off:** introduces global-state coupling and can reduce testability; do not use merely for convenience.

Other correct creational names include Abstract Factory, Builder and Prototype if explained correctly.

---

### 4(b) Implementation-level pattern for new-game notifications

**Design Pattern: Observer**

**Participants in this scenario:**

- **Subject/Observable:** game catalogue / preference-matching service.
- **Observers:** gamer notification objects/components interested in particular game categories/preferences.
- **Registration:** observers subscribe/register with the subject.
- **Notification:** when the subject’s relevant state changes (a matching new game is added), it notifies registered observers, which then update/send the gamer notification.

**When to use Observer:** when one object’s state change should automatically notify a variable set of dependent objects, while avoiding hard-coded dependencies on each concrete observer.

**Why Observer rather than Publish-Subscribe here:** the question explicitly asks for a pattern at the **implementation/design level**. Observer is a GoF behavioral design pattern among objects/classes; Publish-Subscribe is the system-level architectural event-distribution pattern.
