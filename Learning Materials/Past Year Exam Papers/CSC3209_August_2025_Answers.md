# CSC3209 August 2025 — Model Answers

> **Status:** Course-grounded model answer key, not an official university marking scheme. Alternative answers may be valid when the selected pattern/quality attribute is correctly mapped to the scenario and justified through its architectural mechanism.
>
> Use with: [CSC3209 August 2025 Exam](./CSC3209_August_2025_Exam.md) and [Universal Answer Frameworks](../../universal_answers.md).

---

## Question 1 — Healthcare insurance management system

### 1(a) Three suitable architectural patterns

#### Requirement 1 — Show a panel clinic location using Google Maps inside the system

**Pattern: Service-Oriented Architecture (SOA)**

The insurance system acts as a **service consumer** and invokes an independently managed mapping/location provider through a published network API/interface.

**Why it fits:** the architectural problem is integration/interoperability with an external service provider without implementing the mapping service internally.

#### Requirement 2 — Store and track insurance balance and claim details via the Internet

**Pattern: Client-Server**

The user’s web/mobile application is the **client**. A centralized insurance account/claims service is the **server**, maintaining persistent balances and claims and responding to client requests.

**Why it fits:** distributed clients need request/reply access to centrally managed account state.

#### Requirement 3 — Notify users when a claim is approved or new promotions are available

**Pattern: Publish-Subscribe**

The claims/promotions subsystem publishes events when a claim changes to `approved` or when a promotion is created. Interested notification channels/users are subscribers.

**Why it fits:** the user should receive event-driven updates when information changes rather than actively polling for every change.

---

### 1(b) Advantage and limitation for each pattern

| Pattern | Advantage / enhanced quality | Limitation / threatened quality |
|---|---|---|
| **SOA** | **Interoperability/modifiability** can improve because the application consumes an external map capability through a published service contract rather than depending on provider internals. | **Performance/availability** may be threatened because remote API calls add network latency and depend on the external provider/network. |
| **Client-Server** | **Consistency/manageability** can improve because balance and claim data are centrally controlled and all clients retrieve the same authoritative state. | **Availability/performance** may be threatened because the central server/database can become a bottleneck or single point of failure. |
| **Publish-Subscribe** | **Modifiability/extensibility** can improve because new notification consumers/channels can be added without changing publisher correctness. | **Performance/predictability** may be threatened by event routing, queueing, asynchronous latency, delivery failures or ordering issues. |

---

### 1(c) Runtime observability and example measures

The four listed qualities are **Availability, Performance, Usability and Security**. All four can be observed/measured through behavior of the running system.

| Quality attribute | Runtime? | Example measure |
|---|---|---|
| **Availability** | Yes | 99.99% service uptime, or failover/recovery within 5 seconds after an instance fault |
| **Performance** | Yes | 95% of claim/balance requests complete within 2 seconds |
| **Usability** | Yes | 90% of first-time users locate a panel clinic within 2 minutes without assistance |
| **Security** | Yes | 100% of unauthorized claim/account access attempts are rejected and logged |

---

### 1(d) Informal runtime quality scenario

Example — Performance:

> During peak business hours, an authenticated customer requests the current claim status. The insurance system should retrieve and display the status quickly enough that 95% of requests complete within 2 seconds.

Because the question asks for an **informal** scenario, a concise stimulus-response statement with a measurable target is sufficient.

---

## Question 2 — Four QA scenarios and Utility Tree

### 2(a) Four QA scenarios

#### H1 — Availability

| Part | Answer |
|---|---|
| Source | Application-server fault |
| Stimulus | One claims-service instance crashes |
| Environment | Normal operation |
| Artifact | Claims/account service |
| Response | Requests are redirected to a healthy instance and service continues |
| Response Measure | Failover within 5 seconds and no more than one failed request |

#### H2 — Performance

| Part | Answer |
|---|---|
| Source | Authenticated customer |
| Stimulus | Requests insurance balance and claim details |
| Environment | Peak load |
| Artifact | Account/claims service |
| Response | System retrieves and displays current data |
| Response Measure | 95% of requests complete within 2 seconds |

#### H3 — Security

| Part | Answer |
|---|---|
| Source | Unauthorized external actor |
| Stimulus | Attempts to read or alter another user’s claim information |
| Environment | Normal Internet operation |
| Artifact | Claims/account service |
| Response | System rejects the request and logs the attempt |
| Response Measure | 100% of unauthorized requests are rejected and logged |

#### H4 — Usability

| Part | Answer |
|---|---|
| Source | First-time insurance customer |
| Stimulus | Attempts to locate a nearby panel clinic |
| Environment | Normal mobile use |
| Artifact | Insurance mobile/web UI |
| Response | UI displays clinic search and embedded map guidance |
| Response Measure | 90% of first-time users find a panel clinic within 2 minutes without assistance |

---

### 2(b) Utility Tree

```text
Utility
├── Availability
│   └── Claims-service continuity
│       └── H1: failover within 5 s [H,H]
├── Performance
│   └── Account responsiveness
│       └── H2: 95% requests < 2 s [H,H]
├── Security
│   └── Claim/account confidentiality & integrity
│       └── H3: reject/log unauthorized access [H,H]
└── Usability
    └── Panel-clinic findability
        └── H4: 90% locate clinic in < 2 min unaided [H,M]
```

`[Business Value, Architectural Impact]`. `[H,H]` leaves are strong ASR candidates.

---

## Question 3 — Model-View-Controller (MVC)

### 3(a) Concrete business scenario benefiting from MVC

Example: an insurance dashboard displays the same underlying claim/account model as:

- a claims-status table,
- a balance summary card,
- a claim-history chart.

The user can filter claims, select a claim or change date ranges through UI controls.

**Why MVC helps:** the same application state can have multiple Views, while Controllers translate user input into operations on the Model. New presentations can be added without rewriting the core claims logic.

---

### 3(b) MVC elements in the scenario

1. **Model** — insurance balance, claim records/status and business logic.
2. **View(s)** — balance card, claim table, claim-history chart, status screen.
3. **Controller(s)** — handles filtering, claim selection, form submissions and navigation/input.
4. **Interactions** — Views read/display Model state; Controllers interpret user input and update/query the Model; Model changes can trigger View refresh/notification.

Concrete mapping:

```text
User
  |
  v
Controller ----updates/queries----> Model
   |                                  |
   | selects/coordinates              | notifies / provides data
   v                                  v
  View <-----------------------------+
```

---

### 3(c) How MVC separates UI functionality from application functionality

The **Model** contains insurance-domain state and logic without embedding knowledge of how it is rendered. **Views** are responsible for presentation. **Controllers** translate user gestures/input into Model operations.

Therefore:

- a new chart/table View can be added while reusing the same Model,
- UI styling/layout can change without rewriting claim-calculation logic,
- application logic remains isolated from presentation concerns.

This separation supports **modifiability** and can improve testability.

---

### 3(d) Weakness / threatened quality

**Performance** can be threatened when frequent Model changes cause many View refreshes/notifications, increasing UI update overhead and latency.

Another valid answer is **complexity**: MVC introduces additional components, event flow and synchronization that may be unnecessary for a small/simple UI.

---

## Question 4 — Architectural documentation

### 4(a) Views used to document software architecture

#### Module View

Shows static organization of implementation responsibilities/code and relations such as `uses` or `allowed-to-use`.

**Need/example:** document presentation, claims/business and data-access modules so developers understand code responsibility and dependency rules.

#### Component-and-Connector (C&C) View

Shows runtime components and their interactions/connectors.

**Need/example:** document the web client, claims service, notification component and external map/payment services communicating at runtime.

#### Allocation View

Shows how software is mapped to its environment such as hardware/deployment nodes, files or teams.

**Need/example:** show web client on user device, application services on cloud servers and database on a protected DB node.

**Key distinction:** structure = architectural elements/relations that exist; view = representation of a selected structure.

---

### 4(b) Main elements of a view template

The four core elements emphasized in the course are:

1. **Primary Presentation** — the main diagram/representation of the view.
2. **Element Catalog** — definitions/properties of the elements and relations shown.
3. **Context Diagram** — the view/system boundary and relevant external actors/systems/resources.
4. **Variability Guide** — permitted alternatives, optional elements, configuration points and binding decisions.

Useful additional documentation may include rationale, known issues and correspondence to other views, but the four above are the main requested elements.

---

### 4(c) Primary presentation for the MVC scenario from Question 3

A suitable labelled C&C-style primary presentation:

```text
+------+      input       +------------+
| User | ---------------> | Controller |
+------+                   +------------+
                                |
                                | updates / queries
                                v
                          +-------------+
                          |    Model    |
                          | claims/data |
                          +-------------+
                           |           ^
                   notifies|           | reads
                           v           |
                         +---------------+
                         |     View      |
                         | table/chart UI|
                         +---------------+
                                |
                                v
                              User
```

The diagram should label the Model, View and Controller and show the key relations: user input → Controller; Controller → Model; Model notification/data → View.

---

## Question 5 — Behavioral design patterns and notification pattern

### 5(a) General concept of Behavioral design patterns

Behavioral design patterns describe **how objects communicate and how responsibilities/algorithms are distributed among collaborating objects**. They focus on interaction and changing behavior rather than object creation or class composition.

Examples include Observer, State, Strategy, Command and others.

---

### 5(b) Design pattern for claim-approval/promotion notifications

**Pattern: Observer**

**Participants:**

- **Subject/Observable:** claim-status or promotions object/service at implementation level.
- **Observers:** notification/UI objects registered to react to state changes.
- **Trigger:** claim state changes to `approved` or a promotion object is added/updated.
- **Notification:** the Subject invokes/updates registered Observers, which then refresh the UI or send a notification.

**When Observer should be used:** when one Subject’s state change must automatically notify a variable set of dependent objects while avoiding hard-coded dependencies on every concrete observer.

**Why it matches this question:** the question explicitly asks for an implementation-level design pattern. Observer is the GoF object-level notification solution; Publish-Subscribe is the system-level architectural counterpart.
