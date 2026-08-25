((root) => {
  const refs = [
  {
    "id": "PY-2024-08-Q1",
    "referenceType": "past-paper",
    "examCycle": "August 2024",
    "questionNumber": 1,
    "title": "Past Paper + Model Answer — August 2024 Q1: myTNB-style utilities management application",
    "body": "1(a) Three suitable architectural patterns Requirement 1 — Notify users when electricity usage exceeds a threshold Pattern: Publish-Subscribe The consumption-monitoring subsystem publishes an event when usage crosses the configured threshold. Interested user-notification components are subscribers and receive the event without the monitoring subsystem having to call every user directly. Why it fits: the requirement is event-driven notification triggered by a change in monitored data. Requirement 2 — Pay bills using online banking/payment services Pattern: Service-Oriented Architecture (SOA) The utility application acts as a service consumer and invokes independently managed payment/banking providers through published network interfaces/contracts. Why it fits: the architectural problem is interoperability with external/heterogeneous services rather than local object creation or simple client/server retrieval. Requirement 3 — Store and track electricity usage and bill payments online Pattern: Client-Server The mobile/web application is the client; a centralized utility/account service is the server. Clients request account, usage and payment data from the server, which maintains the authoritative persistent information. Why it fits: distributed clients retrieve/update centrally managed account state over the Internet. 1(b) Advantage and limitation for each pattern | Pattern | Advantage / enhanced quality | Limitation / threatened quality | | Publish-Subscribe | Modifiability/extensibility can improve because new notification subscribers/channels can be added without changing the publisher for each recipient. | Performance/predictability may be threatened by queueing, asynchronous delivery, ordering and event-routing overhead. | | SOA | Interoperability can improve because the app integrates banking/payment providers through published service contracts rather than depending on provider internals. | Performance/availability may be threatened because remote calls add network/serialization latency and depend on external providers. | | Client-Server | Consistency/manageability improves because billing/usage records are maintained centrally and all clients see one authoritative state. | Availability/performance may be threatened because the server/database can become a bottleneck or single point of failure. | 1(c) Formal Performance scenario Example: checking monthly electricity usage during peak load. | QA part | Specification | | Source | Authenticated utility customer | | Stimulus | Requests the latest monthly electricity-usage/billing view | | Environment | Peak evening load | | Artifact | Account/usage service | | Response | System retrieves the customer record and displays current usage/balance | | Response Measure | At least 95% of requests complete within 2 seconds |",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
    "concepts": [
      "single-point-of-failure",
      "response-measure",
      "soa",
      "add",
      "availability",
      "client-server",
      "failure",
      "interoperability",
      "latency",
      "modifiability",
      "performance",
      "publish-subscribe"
    ]
  },
  {
    "id": "PY-2024-08-Q2",
    "referenceType": "past-paper",
    "examCycle": "August 2024",
    "questionNumber": 2,
    "title": "Past Paper + Model Answer — August 2024 Q2: Quality Attribute Scenarios, Utility Tree and Notation",
    "body": "2(a) Four QA scenarios for users Scenario U1 — Availability | Part | Answer | | Source | Application-server fault | | Stimulus | One serving instance crashes | | Environment | Normal operation | | Artifact | Customer account service | | Response | Requests are redirected to a healthy instance and service continues | | Response Measure | Recovery/failover within 5 seconds and no more than one failed request | Scenario U2 — Performance | Part | Answer | | Source | Utility customer | | Stimulus | Requests current bill and usage history | | Environment | Peak load | | Artifact | Account/usage service | | Response | System retrieves and displays the information | | Response Measure | 95% of requests complete within 2 seconds | Scenario U3 — Security | Part | Answer | | Source | Unauthorized external actor | | Stimulus | Attempts to view or modify another customer’s billing data | | Environment | Normal Internet operation | | Artifact | Customer account/billing service | | Response | System rejects access and logs the attempt | | Response Measure | 100% of unauthorized requests are rejected and logged | Scenario U4 — Usability | Part | Answer | | Source | First-time customer | | Stimulus | Attempts to view and pay an electricity bill | | Environment | Normal mobile use | | Artifact | myTNB user interface | | Response | UI guides the user from bill view to payment confirmation | | Response Measure | 90% of first-time users complete payment within 3 minutes without assistance | 2(b) Utility Tree [Business Value, Architectural Impact]. The [H,H] leaves are strong ASR candidates. 2(c) Suitable architectural notation Recommended: Semiformal notation, e.g. UML component/deployment notation or a labelled architectural C&C view. - Informal: easy and quick, but can be ambiguous. - Semiformal: defined syntax/conventions, reasonably precise, still understandable to stakeholders. - Formal: mathematically precise/analyzable but costly and often excessive for ordinary business-system documentation. A utility/billing platform contains multiple components, external services and deployment relationships, so semiformal notation gives a useful balance of precision and readability.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
    "concepts": [
      "utility-tree",
      "response-measure",
      "component-and-connector",
      "asr",
      "availability",
      "failover",
      "fault",
      "performance",
      "recovery",
      "security",
      "usability",
      "architecture-notation"
    ]
  },
  {
    "id": "PY-2024-08-Q3",
    "referenceType": "past-paper",
    "examCycle": "August 2024",
    "questionNumber": 3,
    "title": "Past Paper + Model Answer — August 2024 Q3: Peer-to-Peer Architecture",
    "body": "3(a) Concrete P2P scenario and benefit A concrete extension could allow user devices or local smart-energy gateways to share anonymized local outage/consumption status with nearby peers. Each peer can both request neighborhood information and provide its own locally observed information. Benefit: the service does not depend completely on one central participant for every exchange. If several peers have overlapping information, another peer may still provide useful data when one peer leaves. 3(b) P2P elements in the scenario 1. Peers — user devices/smart-energy gateways participating in the network. 2. Resources/services provided by peers — e.g. anonymized neighborhood outage status or local usage summaries. 3. Peer-to-peer connections — communication links through which peers request/provide resources. 4. Discovery/routing mechanism — allows a peer to find another peer that can provide the requested information. 5. Dynamic membership — peers may join/leave while the network continues operating. Interaction: a peer can initiate a request for neighborhood information and can later act as a provider when another peer requests information it holds. 3(c) Quality attribute enhanced Scalability or Availability can be defended. Model answer — scalability: Model answer — availability: Do not claim P2P guarantees availability if only one peer holds the required information. 3(d) Different quality attribute threatened Security is a strong answer. Consistency can also be defended because replicated/distributed information can diverge among peers.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
    "concepts": [
      "availability",
      "peer-to-peer",
      "security"
    ]
  },
  {
    "id": "PY-2024-08-Q4",
    "referenceType": "past-paper",
    "examCycle": "August 2024",
    "questionNumber": 4,
    "title": "Past Paper + Model Answer — August 2024 Q4: Behavioral Design Patterns",
    "body": "4(a) General concept of Behavioral patterns Behavioral design patterns describe how objects communicate and how responsibilities/algorithms are distributed among collaborating objects. They focus on interaction, responsibility assignment and changing behavior rather than object construction or static composition. 4(b) Two Behavioral patterns with examples and motivation Observer Intent: establish a one-to-many dependency so when a Subject changes state, registered Observers are notified automatically. Example: a stock-price object notifies chart widgets and alert components whenever the price changes. Motivation: supports a variable set of dependents without hard-coding the Subject to each concrete observer. State Intent: allow an object to change behavior when its internal state changes by moving state-specific behavior into separate State objects. Example: an ATM behaves differently in NoCard, CardInserted, Authenticated and DispensingCash states. Motivation: avoids large repeated if/switch conditionals and localizes state-specific behavior. Other Behavioral patterns such as Strategy are valid if correctly explained. 4(c) Implementation-level design pattern for threshold notification Pattern: Observer - Subject: electricity-consumption monitor/account object. - Observers: notification/UI components registered for threshold alerts. - Trigger: monitored consumption changes and crosses the configured threshold. - Action: the subject notifies interested observers, which update/send the alert. Why it fits: the question asks for an implementation-level design pattern where dependent objects should be informed when one object’s state changes. Observer provides this one-to-many notification relationship. Do not confuse with Publish-Subscribe: Publish-Subscribe is the architectural/system-level event-distribution answer; Observer is the GoF object-level implementation pattern requested here.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2024_Answers.md",
    "concepts": [
      "behavioral",
      "dependency",
      "observer",
      "publish-subscribe",
      "state"
    ]
  },
  {
    "id": "PY-2025-08-Q1",
    "referenceType": "past-paper",
    "examCycle": "August 2025",
    "questionNumber": 1,
    "title": "Past Paper + Model Answer — August 2025 Q1: Healthcare insurance management system",
    "body": "1(a) Three suitable architectural patterns Requirement 1 — Show a panel clinic location using Google Maps inside the system Pattern: Service-Oriented Architecture (SOA) The insurance system acts as a service consumer and invokes an independently managed mapping/location provider through a published network API/interface. Why it fits: the architectural problem is integration/interoperability with an external service provider without implementing the mapping service internally. Requirement 2 — Store and track insurance balance and claim details via the Internet Pattern: Client-Server The user’s web/mobile application is the client. A centralized insurance account/claims service is the server, maintaining persistent balances and claims and responding to client requests. Why it fits: distributed clients need request/reply access to centrally managed account state. Requirement 3 — Notify users when a claim is approved or new promotions are available Pattern: Publish-Subscribe The claims/promotions subsystem publishes events when a claim changes to approved or when a promotion is created. Interested notification channels/users are subscribers. Why it fits: the user should receive event-driven updates when information changes rather than actively polling for every change. 1(b) Advantage and limitation for each pattern | Pattern | Advantage / enhanced quality | Limitation / threatened quality | | SOA | Interoperability/modifiability can improve because the application consumes an external map capability through a published service contract rather than depending on provider internals. | Performance/availability may be threatened because remote API calls add network latency and depend on the external provider/network. | | Client-Server | Consistency/manageability can improve because balance and claim data are centrally controlled and all clients retrieve the same authoritative state. | Availability/performance may be threatened because the central server/database can become a bottleneck or single point of failure. | | Publish-Subscribe | Modifiability/extensibility can improve because new notification consumers/channels can be added without changing publisher correctness. | Performance/predictability may be threatened by event routing, queueing, asynchronous latency, delivery failures or ordering issues. | 1(c) Runtime observability and example measures The four listed qualities are Availability, Performance, Usability and Security. All four can be observed/measured through behavior of the running system. | Quality attribute | Runtime? | Example measure | | Availability | Yes | 99.99% service uptime, or failover/recovery within 5 seconds after an instance fault | | Performance | Yes | 95% of claim/balance requests complete within 2 seconds | | Usability | Yes | 90% of first-time users locate a panel clinic within 2 minutes without assistance | | Security | Yes | 100% of unauthorized claim/account access attempts are rejected and logged | 1(d) Informal runtime quality scenario Example — Performance: Because the question asks for an informal scenario, a concise stimulus-response statement with a measurable target is sufficient.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
    "concepts": [
      "single-point-of-failure",
      "soa",
      "response-measure",
      "add",
      "availability",
      "client-server",
      "failover",
      "failure",
      "fault",
      "interoperability",
      "latency",
      "modifiability"
    ]
  },
  {
    "id": "PY-2025-08-Q2",
    "referenceType": "past-paper",
    "examCycle": "August 2025",
    "questionNumber": 2,
    "title": "Past Paper + Model Answer — August 2025 Q2: Four QA scenarios and Utility Tree",
    "body": "2(a) Four QA scenarios H1 — Availability | Part | Answer | | Source | Application-server fault | | Stimulus | One claims-service instance crashes | | Environment | Normal operation | | Artifact | Claims/account service | | Response | Requests are redirected to a healthy instance and service continues | | Response Measure | Failover within 5 seconds and no more than one failed request | H2 — Performance | Part | Answer | | Source | Authenticated customer | | Stimulus | Requests insurance balance and claim details | | Environment | Peak load | | Artifact | Account/claims service | | Response | System retrieves and displays current data | | Response Measure | 95% of requests complete within 2 seconds | H3 — Security | Part | Answer | | Source | Unauthorized external actor | | Stimulus | Attempts to read or alter another user’s claim information | | Environment | Normal Internet operation | | Artifact | Claims/account service | | Response | System rejects the request and logs the attempt | | Response Measure | 100% of unauthorized requests are rejected and logged | H4 — Usability | Part | Answer | | Source | First-time insurance customer | | Stimulus | Attempts to locate a nearby panel clinic | | Environment | Normal mobile use | | Artifact | Insurance mobile/web UI | | Response | UI displays clinic search and embedded map guidance | | Response Measure | 90% of first-time users find a panel clinic within 2 minutes without assistance | 2(b) Utility Tree [Business Value, Architectural Impact]. [H,H] leaves are strong ASR candidates.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
    "concepts": [
      "utility-tree",
      "response-measure",
      "asr",
      "availability",
      "failover",
      "fault",
      "performance",
      "security",
      "usability",
      "business-goal"
    ]
  },
  {
    "id": "PY-2025-08-Q3",
    "referenceType": "past-paper",
    "examCycle": "August 2025",
    "questionNumber": 3,
    "title": "Past Paper + Model Answer — August 2025 Q3: Model-View-Controller (MVC)",
    "body": "3(a) Concrete business scenario benefiting from MVC Example: an insurance dashboard displays the same underlying claim/account model as: - a claims-status table, - a balance summary card, - a claim-history chart. The user can filter claims, select a claim or change date ranges through UI controls. Why MVC helps: the same application state can have multiple Views, while Controllers translate user input into operations on the Model. New presentations can be added without rewriting the core claims logic. 3(b) MVC elements in the scenario 1. Model — insurance balance, claim records/status and business logic. 2. View(s) — balance card, claim table, claim-history chart, status screen. 3. Controller(s) — handles filtering, claim selection, form submissions and navigation/input. 4. Interactions — Views read/display Model state; Controllers interpret user input and update/query the Model; Model changes can trigger View refresh/notification. Concrete mapping: 3(c) How MVC separates UI functionality from application functionality The Model contains insurance-domain state and logic without embedding knowledge of how it is rendered. Views are responsible for presentation. Controllers translate user gestures/input into Model operations. Therefore: - a new chart/table View can be added while reusing the same Model, - UI styling/layout can change without rewriting claim-calculation logic, - application logic remains isolated from presentation concerns. This separation supports modifiability and can improve testability. 3(d) Weakness / threatened quality Performance can be threatened when frequent Model changes cause many View refreshes/notifications, increasing UI update overhead and latency. Another valid answer is complexity: MVC introduces additional components, event flow and synchronization that may be unnecessary for a small/simple UI.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
    "concepts": [
      "latency",
      "modifiability",
      "mvc",
      "performance",
      "state",
      "testability",
      "publish-subscribe"
    ]
  },
  {
    "id": "PY-2025-08-Q4",
    "referenceType": "past-paper",
    "examCycle": "August 2025",
    "questionNumber": 4,
    "title": "Past Paper + Model Answer — August 2025 Q4: Architectural documentation",
    "body": "4(a) Views used to document software architecture Module View Shows static organization of implementation responsibilities/code and relations such as uses or allowed-to-use. Need/example: document presentation, claims/business and data-access modules so developers understand code responsibility and dependency rules. Component-and-Connector (C&C) View Shows runtime components and their interactions/connectors. Need/example: document the web client, claims service, notification component and external map/payment services communicating at runtime. Allocation View Shows how software is mapped to its environment such as hardware/deployment nodes, files or teams. Need/example: show web client on user device, application services on cloud servers and database on a protected DB node. Key distinction: structure = architectural elements/relations that exist; view = representation of a selected structure. 4(b) Main elements of a view template The four core elements emphasized in the course are: 1. Primary Presentation — the main diagram/representation of the view. 2. Element Catalog — definitions/properties of the elements and relations shown. 3. Context Diagram — the view/system boundary and relevant external actors/systems/resources. 4. Variability Guide — permitted alternatives, optional elements, configuration points and binding decisions. Useful additional documentation may include rationale, known issues and correspondence to other views, but the four above are the main requested elements. 4(c) Primary presentation for the MVC scenario from Question 3 A suitable labelled C&C-style primary presentation: The diagram should label the Model, View and Controller and show the key relations: user input → Controller; Controller → Model; Model notification/data → View.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
    "concepts": [
      "mvc",
      "component-and-connector",
      "dependency",
      "module-structure",
      "view-documentation",
      "layer",
      "publish-subscribe"
    ]
  },
  {
    "id": "PY-2025-08-Q5",
    "referenceType": "past-paper",
    "examCycle": "August 2025",
    "questionNumber": 5,
    "title": "Past Paper + Model Answer — August 2025 Q5: Behavioral design patterns and notification pattern",
    "body": "5(a) General concept of Behavioral design patterns Behavioral design patterns describe how objects communicate and how responsibilities/algorithms are distributed among collaborating objects. They focus on interaction and changing behavior rather than object creation or class composition. Examples include Observer, State, Strategy, Command and others. 5(b) Design pattern for claim-approval/promotion notifications Pattern: Observer Participants: - Subject/Observable: claim-status or promotions object/service at implementation level. - Observers: notification/UI objects registered to react to state changes. - Trigger: claim state changes to approved or a promotion object is added/updated. - Notification: the Subject invokes/updates registered Observers, which then refresh the UI or send a notification. When Observer should be used: when one Subject’s state change must automatically notify a variable set of dependent objects while avoiding hard-coded dependencies on every concrete observer. Why it matches this question: the question explicitly asks for an implementation-level design pattern. Observer is the GoF object-level notification solution; Publish-Subscribe is the system-level architectural counterpart.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_August_2025_Answers.md",
    "concepts": [
      "behavioral",
      "observer",
      "publish-subscribe",
      "state",
      "factory-method",
      "dependency"
    ]
  },
  {
    "id": "PY-2024-01-Q1",
    "referenceType": "past-paper",
    "examCycle": "January 2024",
    "questionNumber": 1,
    "title": "Past Paper + Model Answer — January 2024 Q1: Video game digital distribution system",
    "body": "1(a) Three suitable architectural patterns Requirement 1 — Notify gamers when a matching new game is available Pattern: Publish-Subscribe Gamers are subscribers to game-interest topics/preferences and the game catalogue/publishing subsystem acts as a publisher. When a new game is published, an event is sent through the publish-subscribe connector/event channel to interested subscribers. The publisher does not need to directly know every gamer who should receive the notification. Why it fits: the requirement is event-driven: users should be informed when new information becomes available, rather than repeatedly polling for it. Requirement 2 — Gamers communicate/chat with one another Pattern: Peer-to-Peer (P2P) Each gamer/client can act as a peer that both initiates and receives communication. Peers have symmetric roles for the chat interaction and can communicate/share messages/resources with other peers rather than every interaction being conceptually owned by one fixed client and one fixed server. Why it fits: the defining clue is that participants can both request/provide communication resources and act as equals in the interaction. Requirement 3 — Store and check gaming progress/achievements online from another PC Pattern: Client-Server The gamer application is the client and the online profile/progress service is the server. The client sends requests to retrieve or update the gamer’s progress, while the centralized server keeps the persistent account state independent of the particular PC currently being used. Why it fits: the data must remain centrally accessible through the Internet even when the user changes devices. 1(b) Advantage and limitation for each selected pattern | Pattern | Advantage / enhanced quality | Limitation / threatened quality | | Publish-Subscribe | Modifiability/extensibility can improve because new notification subscribers can be added or removed without changing the publisher for each concrete gamer. | Performance/predictability may be threatened because event routing, queues and asynchronous delivery add latency and make ordering/delivery timing less direct. | | Peer-to-Peer | Scalability/availability can improve because peers can contribute resources and another peer may continue providing an overlapping resource when one peer leaves. | Security/consistency may be threatened because decentralized peers are harder to authenticate/control and distributed state/messages can become inconsistent. | | Client-Server | Consistency/manageability can improve because gaming progress is maintained centrally and all clients access the same authoritative profile state. | Availability/performance may be threatened because the central server or shared database can become a bottleneck or single point of failure. | Exam wording example: 1(c) Formal Performance quality-attribute scenario Example based on checking a gamer’s online progress: Informal scenario: During peak usage, a gamer signs in from a new PC and requests the online profile. The platform should display the gamer’s progress quickly. | QA part | Specification | | Source | Authenticated gamer | | Stimulus | Requests gaming progress and achievements | | Environment | Peak-load normal operation | | Artifact | Online profile/progress service | | Response | System retrieves and displays the current progress | | Response Measure | At least 95% of profile requests complete within 2 seconds |",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
    "concepts": [
      "single-point-of-failure",
      "response-measure",
      "add",
      "availability",
      "client-server",
      "failure",
      "latency",
      "modifiability",
      "peer-to-peer",
      "performance",
      "publish-subscribe",
      "security"
    ]
  },
  {
    "id": "PY-2024-01-Q2",
    "referenceType": "past-paper",
    "examCycle": "January 2024",
    "questionNumber": 2,
    "title": "Past Paper + Model Answer — January 2024 Q2: Quality Attribute Scenarios and Utility Tree",
    "body": "2(a) Four QA scenarios for gamers Gamer Scenario G1 — Performance Informal: A gamer searches for a game during peak usage and expects results quickly. | Part | Answer | | Source | Gamer | | Stimulus | Submits a game-search request | | Environment | Peak-load operation | | Artifact | Game catalogue/search service | | Response | System returns matching games | | Response Measure | 95% of searches complete within 2 seconds | Gamer Scenario G2 — Availability Informal: If one application instance fails while a gamer is viewing the store, service should continue. | Part | Answer | | Source | Internal application-server fault | | Stimulus | One serving instance crashes | | Environment | Normal operation | | Artifact | Game-store service | | Response | Traffic is redirected to a healthy instance and the session continues | | Response Measure | Service restored/redirected within 5 seconds; no more than one failed request | Gamer Scenario G3 — Security Informal: An attacker attempts to access another gamer’s private profile. | Part | Answer | | Source | Unauthorized external user | | Stimulus | Attempts to read another gamer’s profile/progress | | Environment | Normal Internet operation | | Artifact | Account/profile service | | Response | Request is rejected and security event is logged | | Response Measure | 100% of unauthorized requests are rejected and logged | Gamer Scenario G4 — Usability Informal: A first-time gamer should be able to buy/download a game without assistance. | Part | Answer | | Source | First-time gamer | | Stimulus | Attempts to locate and purchase a game | | Environment | Normal operation | | Artifact | Store user interface | | Response | UI guides the user through search, purchase and download | | Response Measure | 90% of first-time users complete the task within 3 minutes without assistance | 2(b) Four QA scenarios for game publishers Publisher Scenario P1 — Performance | Part | Answer | | Source | Game publisher | | Stimulus | Uploads/submits a new game listing and metadata | | Environment | Normal operation | | Artifact | Publishing/catalogue service | | Response | System validates and stores the listing | | Response Measure | 95% of metadata submissions receive confirmation within 3 seconds, excluding large binary upload time | Publisher Scenario P2 — Availability | Part | Answer | | Source | Infrastructure fault | | Stimulus | One publishing-service instance fails | | Environment | Business hours | | Artifact | Publisher portal | | Response | A healthy instance continues accepting publisher operations | | Response Measure | Publishing functionality is restored within 10 seconds | Publisher Scenario P3 — Security | Part | Answer | | Source | Unauthorized user | | Stimulus | Attempts to modify a publisher’s game listing | | Environment | Normal Internet operation | | Artifact | Publisher management service | | Response | System authenticates/authorizes the request, rejects unauthorized modification and logs it | | Response Measure | 100% of unauthorized modification attempts are rejected and logged | Publisher Scenario P4 — Modifiability | Part | Answer | | Source | Developer/product team | | Stimulus | Requests a new metadata field for published games | | Environment | Development time | | Artifact | Publishing/catalogue modules | | Response | Developers add the field without modifying unrelated gamer-download logic | | Response Measure | One developer completes the change within 2 working days and changes no more than two major modules | 2(c) Utility Tree One defensible utility tree using the scenarios above: Interpretation: [Business Value, Architectural Impact]. The [H,H] leaves are strong Architecture Significant Requirement candidates because they are both important to stakeholders and strongly constrain architectural decisions. 2(d) Suitable notation for architectural views Recommended: Semiformal notation, for example UML component/deployment diagrams or a well-defined C&C diagram. Justification: - Informal notation is fast and easy to understand, but its weak semantics can make responsibilities and connectors ambiguous. - Semiformal notation uses defined syntax/conventions, making components, interfaces, dependencies and deployment relationships clearer while remaining understandable to developers and non-specialist stakeholders. - Formal notation provides the strongest mathematical precision and analyzability but has higher cost, requires specialist expertise and is excessive for ordinary documentation of this store system unless safety/verification demands it. Therefore a semiformal notation gives the best balance between precision and communication for documenting the game platform’s architectural views.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
    "concepts": [
      "utility-tree",
      "response-measure",
      "asr",
      "component-and-connector",
      "add",
      "availability",
      "fault",
      "modifiability",
      "performance",
      "security",
      "usability",
      "architecture-notation"
    ]
  },
  {
    "id": "PY-2024-01-Q3",
    "referenceType": "past-paper",
    "examCycle": "January 2024",
    "questionNumber": 3,
    "title": "Past Paper + Model Answer — January 2024 Q3: Service-Oriented Architecture (SOA)",
    "body": "3(a) Concrete benefit scenario The game platform can integrate independently managed services such as payment, identity/authentication, recommendation, publisher services or cloud storage through published network interfaces. For example, the store can consume an external payment-provider service without implementing the payment infrastructure itself. SOA is useful because the consumer depends on the published service contract, not the provider’s internal implementation. 3(b) SOA elements in the scenario A complete answer can describe the following: 1. Service Provider — exposes a capability through a published interface. Example: external payment provider or recommendation service. 2. Service Consumer — invokes/uses the service. Example: the game-store checkout component consumes the payment service. 3. Service Contract / Published Interface — defines operations, messages and interaction expectations. Example: authorizePayment, request/response formats and error semantics. 4. Network/Service Connector — carries requests and responses between consumer and provider using agreed protocols. 5. Service Registry/Discovery (optional) — stores service descriptions/endpoints so consumers can discover/bind to providers dynamically. 6. ESB/broker/orchestration infrastructure (optional) — can route, transform or coordinate calls among multiple services. Interaction: consumer discovers/selects the required provider (directly or via registry), invokes the published interface, and receives a response without depending on provider internals. 3(c) Quality attribute enhanced Interoperability is a strong answer. Modifiability can also be defended if the answer explains that providers may be replaced while preserving the contract. 3(d) Different quality attribute threatened Performance is a strong answer. Availability is another valid trade-off if the answer explains dependence on remote providers/network paths.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
    "concepts": [
      "soa",
      "authentication",
      "availability",
      "broker",
      "interoperability",
      "modifiability",
      "performance",
      "dependency",
      "component-and-connector",
      "publish-subscribe"
    ]
  },
  {
    "id": "PY-2024-01-Q4",
    "referenceType": "past-paper",
    "examCycle": "January 2024",
    "questionNumber": 4,
    "title": "Past Paper + Model Answer — January 2024 Q4: Creational patterns and notification design pattern",
    "body": "4(a) Creational design patterns + two examples General concept: Creational design patterns deal with how objects are created, hiding or controlling concrete construction decisions so client code is less tightly coupled to concrete classes. Two valid examples: Factory Method - Intent: delegate object creation through a factory method so subclasses/implementations can decide which concrete product to instantiate. - Use when: client logic should depend on a Product abstraction rather than hard-coding concrete constructors. - Benefit: creation decisions are localized and concrete products can vary with less client-code change. Singleton - Intent: ensure exactly one controlled instance of a class and provide a global access point to that instance. - Use when: the requirement genuinely needs one shared instance, such as a single application configuration/registry object. - Trade-off: introduces global-state coupling and can reduce testability; do not use merely for convenience. Other correct creational names include Abstract Factory, Builder and Prototype if explained correctly. 4(b) Implementation-level pattern for new-game notifications Design Pattern: Observer Participants in this scenario: - Subject/Observable: game catalogue / preference-matching service. - Observers: gamer notification objects/components interested in particular game categories/preferences. - Registration: observers subscribe/register with the subject. - Notification: when the subject’s relevant state changes (a matching new game is added), it notifies registered observers, which then update/send the gamer notification. When to use Observer: when one object’s state change should automatically notify a variable set of dependent objects, while avoiding hard-coded dependencies on each concrete observer. Why Observer rather than Publish-Subscribe here: the question explicitly asks for a pattern at the implementation/design level. Observer is a GoF behavioral design pattern among objects/classes; Publish-Subscribe is the system-level architectural event-distribution pattern.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2024_Answers.md",
    "concepts": [
      "factory-method",
      "singleton",
      "behavioral",
      "creational",
      "observer",
      "publish-subscribe",
      "state",
      "testability",
      "dependency"
    ]
  },
  {
    "id": "PY-2025-01-Q1",
    "referenceType": "past-paper",
    "examCycle": "January 2025",
    "questionNumber": 1,
    "title": "Past Paper + Model Answer — January 2025 Q1: Online trading platform",
    "body": "1(a) Three suitable architectural patterns Requirement 1 — Real-time stock prices shown through multiple charts, responsive UI Pattern: Model-View-Controller (MVC) - Model: current stock prices, portfolio/trading state and application logic. - Views: line chart, bar chart, table/candlestick representations. - Controllers: user interactions such as zooming, filtering, selecting a stock or placing an order. Why it fits: the same Model data must be represented in several Views while UI behavior changes independently from core application logic. Controllers mediate user input and the views refresh when the model changes. Requirement 2 — Notify users when a stock reaches a target value Pattern: Publish-Subscribe The market-price/alert subsystem publishes an event when a watched price reaches the configured threshold. Interested user-alert components are subscribers. Why it fits: users should receive an event-driven notification when data changes, rather than repeatedly polling every user from the publisher. Requirement 3 — Buy stocks using external banking/payment services Pattern: Service-Oriented Architecture (SOA) The trading platform consumes independent external payment/banking services through published network interfaces/contracts. Why it fits: the requirement is integration/interoperability with independently managed external service providers. 1(b) Advantage and limitation for each selected pattern | Pattern | Advantage / enhanced quality | Limitation / threatened quality | | MVC | Modifiability can improve because presentation is separated from Model logic; a new chart can be added mainly as a new View without rewriting trading logic. | Performance/complexity may be threatened because frequent model updates can trigger multiple view refreshes and extra coordination. | | Publish-Subscribe | Modifiability/extensibility can improve because new alert subscribers/channels can be added without changing publisher correctness. | Performance/predictability may be threatened by event routing, queueing, delivery-order and asynchronous-latency overhead. | | SOA | Interoperability can improve because the platform depends on published service contracts rather than a provider’s internal technology. | Performance/availability may be threatened because remote provider calls add network/serialization latency and introduce external dependencies. | 1(c) Which listed quality attributes are observable at runtime? The four listed attributes are Modifiability, Performance, Usability and Security. - Performance — runtime observable. Measure response time, latency, throughput or resource use while the system runs. - Usability — runtime/user-interaction observable. Measure task completion time, error rate, learnability or user success while users interact with the running UI. - Security — largely runtime observable. Observe authentication/authorization decisions, rejected attacks, audit events and confidentiality/integrity violations during execution. - Modifiability — primarily design/development-time, not runtime. It is evaluated by the effort, scope and ripple effect required to make a change to the software. Therefore the runtime-observable qualities among the four are Performance, Usability and Security; Modifiability is primarily a development-time quality. 1(d) Formal runtime quality scenario Example — Performance of stock-price display: | QA part | Specification | | Source | Market-data feed | | Stimulus | A watched stock price changes | | Environment | Peak trading period | | Artifact | Market-data service + trading dashboard | | Response | System processes the new price and refreshes the user’s current View | | Response Measure | 95% of displayed price updates appear within 1 second of receipt |",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
    "concepts": [
      "response-measure",
      "soa",
      "add",
      "authentication",
      "authorization",
      "availability",
      "confidentiality",
      "integrity",
      "interoperability",
      "latency",
      "modifiability",
      "mvc"
    ]
  },
  {
    "id": "PY-2025-01-Q2",
    "referenceType": "past-paper",
    "examCycle": "January 2025",
    "questionNumber": 2,
    "title": "Past Paper + Model Answer — January 2025 Q2: Four QA scenarios and Utility Tree",
    "body": "2(a) Four QA scenarios for trading-platform users T1 — Performance | Part | Answer | | Source | Trader | | Stimulus | Requests current quote/order information | | Environment | Peak market load | | Artifact | Trading/market-data service | | Response | System retrieves and displays the information | | Response Measure | 95% of requests complete within 2 seconds | T2 — Availability | Part | Answer | | Source | Application-server fault | | Stimulus | One trading-service instance crashes | | Environment | Market open | | Artifact | Trading service | | Response | Traffic is redirected to a healthy instance and service continues | | Response Measure | Failover within 5 seconds; no more than one failed request | T3 — Security | Part | Answer | | Source | Unauthorized attacker | | Stimulus | Attempts to place an order or access another user’s portfolio | | Environment | Normal Internet operation | | Artifact | Account/order service | | Response | System rejects the operation and records an audit event | | Response Measure | 100% of unauthorized operations are rejected and logged | T4 — Usability | Part | Answer | | Source | First-time trader | | Stimulus | Attempts to locate a stock and submit a simple order | | Environment | Normal operation | | Artifact | Trading UI | | Response | UI guides the user through search, order entry and confirmation | | Response Measure | 90% of first-time users complete the task within 3 minutes without assistance | 2(b) Utility Tree [Business Value, Architectural Impact]. The [H,H] scenarios are strong ASR candidates.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
    "concepts": [
      "utility-tree",
      "response-measure",
      "asr",
      "availability",
      "failover",
      "fault",
      "performance",
      "security",
      "usability",
      "business-goal"
    ]
  },
  {
    "id": "PY-2025-01-Q3",
    "referenceType": "past-paper",
    "examCycle": "January 2025",
    "questionNumber": 3,
    "title": "Past Paper + Model Answer — January 2025 Q3: Pipe-and-Filter",
    "body": "3(a) Concrete business scenario Example: a financial-data processing pipeline receives raw market/transaction data and performs successive stages: Each stage is an independent Filter and the intermediate data is carried through Pipes. Benefit: each transformation can be developed/replaced/reused independently and different stages may operate concurrently on different data items. 3(b) Elements of Pipe-and-Filter in the scenario 1. Filters — independent transformation stages. Example: parser, validator, normalizer and indicator calculator. 2. Pipes — connectors that transport output from one filter to the next. 3. Data stream/items — market or transaction records flowing through the pipeline. 4. Filter interface/contract — each filter consumes input in an expected form and produces output for the next stage. Example mapping: The key constraint is successive transformation: each filter processes incoming data and forwards transformed output rather than controlling the entire pipeline. 3(c) How the pattern supports parallelization Buffered pipes decouple adjacent filters enough for pipeline parallelism. Example: - Parser processes item 3, - Validator processes item 2, - Normalizer processes item 1, at the same time. Thus different filters can work concurrently on different data items, increasing throughput. This does not necessarily reduce the end-to-end latency of one individual item. 3(d) Weakness / threatened quality Performance can also be threatened despite the parallelism. Another defensible answer is Availability: if every item must pass through one mandatory filter, failure of that filter can stop the whole pipeline unless recovery/redundancy is provided.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
    "concepts": [
      "availability",
      "failure",
      "latency",
      "performance",
      "pipe-and-filter",
      "recovery",
      "redundancy",
      "throughput"
    ]
  },
  {
    "id": "PY-2025-01-Q4",
    "referenceType": "past-paper",
    "examCycle": "January 2025",
    "questionNumber": 4,
    "title": "Past Paper + Model Answer — January 2025 Q4: Client-Server and Layer views; mapping; design pattern",
    "body": "4(a) Architectural views for both patterns Client-Server — Component-and-Connector (runtime) view Client-Server is best represented as a C&C view because it describes runtime request/reply interaction. - Client requests current booking/boarding-pass data. - Server provides the service and accesses central booking state. Layer — Module view Layer is best represented as a Module structure/view because it organizes implementation responsibilities and allowed-to-use dependencies. Primary relation: allowed-to-use downward dependencies. The intended separation limits direct Presentation → Data Access coupling. 4(b) Mapping between the two architectural views A mapping states how module elements correspond to runtime components. Example: | Layer/module view | C&C/runtime mapping | | Presentation Layer | Implemented mainly by Web/Mobile Client UI and server-side presentation/controller components | | Business/Service Layer | Implements the Booking Server / Booking Service runtime component | | Data Access Layer | Implements repository/database-access logic used by the Booking Service | | Persistent database | Runtime/shared data resource used through Data Access components | In prose: 4(c) Implementation-level design pattern for airline-promotion notifications Pattern: Observer - Subject: promotion/airline-offer object or service inside the application. - Observers: notification, UI or user-preference objects interested in promotions. - Trigger: a relevant promotion is added or changes state. - Action: the Subject notifies registered Observers automatically. Why it fits: the question asks for an implementation-level design pattern where dependent objects should react when another object’s state changes. Observer supplies a one-to-many notification relationship without hard-coding each concrete observer. Distinction: Publish-Subscribe would be the broader architectural event-distribution answer; Observer is the GoF implementation-level answer requested here.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2025_Answers.md",
    "concepts": [
      "module-structure",
      "component-and-connector",
      "client-server",
      "layer",
      "observer",
      "publish-subscribe",
      "state",
      "shared-data",
      "dependency"
    ]
  },
  {
    "id": "PY-2026-01-Q1",
    "referenceType": "past-paper",
    "examCycle": "January 2026",
    "questionNumber": 1,
    "title": "Past Paper + Model Answer — January 2026 Q1: HPC online platform: Quality Attribute Scenarios and Utility Tree",
    "body": "1(a) Four QA scenarios HPC1 — Performance | Part | Answer | | Source | HPC user | | Stimulus | Submits a computational job and requests job status/performance information | | Environment | Peak platform load | | Artifact | Job-management/monitoring service | | Response | System accepts the job request and returns current status/monitoring information | | Response Measure | 95% of interactive job-management/status requests complete within 2 seconds | HPC2 — Availability | Part | Answer | | Source | Compute-node/service fault | | Stimulus | One processing/service node fails while jobs are running | | Environment | Normal production operation | | Artifact | HPC job-processing platform | | Response | Platform detects the failure, reschedules/restarts affected work on a healthy node and keeps the service accessible | | Response Measure | Failure detected within 5 seconds and affected job recovery/rescheduling begins within 30 seconds | HPC3 — Security | Part | Answer | | Source | Unauthorized external actor | | Stimulus | Attempts to access another user’s submitted jobs, processed data or compute resources | | Environment | Normal Internet operation | | Artifact | Identity/job/data-access services | | Response | System authenticates/authorizes the request, rejects unauthorized access and records an audit event | | Response Measure | 100% of unauthorized access attempts are rejected and logged | HPC4 — Usability | Part | Answer | | Source | First-time HPC user | | Stimulus | Attempts to submit a computational job through the web interface | | Environment | Normal operation | | Artifact | HPC web portal | | Response | UI guides the user through data selection, resource selection, submission and confirmation | | Response Measure | 90% of first-time users successfully submit a basic job within 5 minutes without assistance | 1(b) Utility Tree [Business Value, Architectural Impact]. The [H,H] scenarios are strong ASR candidates because they have both high stakeholder value and strong architectural consequences.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
    "concepts": [
      "utility-tree",
      "response-measure",
      "asr",
      "availability",
      "failure",
      "fault",
      "performance",
      "recovery",
      "security",
      "usability",
      "business-goal"
    ]
  },
  {
    "id": "PY-2026-01-Q2",
    "referenceType": "past-paper",
    "examCycle": "January 2026",
    "questionNumber": 2,
    "title": "Past Paper + Model Answer — January 2026 Q2: HPC requirements and architectural patterns",
    "body": "2(a) Three suitable architectural patterns Requirement 1 — Notify users whenever a submitted task/workflow completes Pattern: Publish-Subscribe The job/workflow subsystem publishes a job completed event. User-notification components are subscribers and receive the event without the job processor directly calling every user. Why it fits: the requirement is event-driven notification triggered when a task changes state to completed. Requirement 2 — Store and track submitted tasks and processed data via the Internet Pattern: Client-Server The browser/application is the client and the centralized job/data-management service is the server. Clients request job status/data and submit updates through request/reply interactions while the server maintains authoritative persistent state. Why it fits: distributed users need Internet access to centrally managed job and processed-data records. Requirement 3 — Pay fees/join plans for additional computing power Pattern: Service-Oriented Architecture (SOA) The HPC platform consumes independently managed payment/billing capabilities through published network service interfaces/contracts. Why it fits: the key issue is integration/interoperability with external payment/service providers rather than merely storing user data. 2(b) Advantage and limitation for each selected pattern | Pattern | Advantage / enhanced QA | Limitation / threatened QA | | Publish-Subscribe | Modifiability/extensibility can improve because new notification channels/subscribers can be added without changing the job-completion publisher for each concrete consumer. | Performance/predictability may be threatened because queues/event routing add latency and make delivery/order timing less direct. | | Client-Server | Consistency/manageability can improve because job/data state is maintained centrally and all clients see one authoritative record. | Availability/performance may be threatened because the central server/database can become a bottleneck or single point of failure. | | SOA | Interoperability can improve because the HPC platform depends on a published payment/service contract rather than on the provider’s internal implementation. | Performance/availability may be threatened because remote calls add network/serialization latency and depend on external services. | 2(c) Runtime-observable quality attributes and measurements The four listed attributes — Availability, Performance, Usability and Security — can all be observed/measured from behavior of the running system. | QA | Runtime? | Example measurement | | Availability | Yes | 99.99% service uptime or failover within 5 seconds after a service-instance fault | | Performance | Yes | 95% of job-status requests complete within 2 seconds | | Usability | Yes | 90% of first-time users submit a basic job within 5 minutes without assistance | | Security | Yes | 100% of unauthorized job/data access attempts are rejected and logged | 2(d) Informal runtime QA scenario Example — Availability:",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
    "concepts": [
      "single-point-of-failure",
      "soa",
      "response-measure",
      "add",
      "availability",
      "client-server",
      "failover",
      "failure",
      "fault",
      "interoperability",
      "latency",
      "modifiability"
    ]
  },
  {
    "id": "PY-2026-01-Q3",
    "referenceType": "past-paper",
    "examCycle": "January 2026",
    "questionNumber": 3,
    "title": "Past Paper + Model Answer — January 2026 Q3: Map-Reduce",
    "body": "3(a) Concrete business software scenario Example: an online retailer wants to analyze billions of historical transaction/clickstream records to calculate total sales per product/category. The dataset is split across many workers: Why it fits: the workload is a very large batch dataset that can be partitioned into independent parallel Map tasks and combined through Reduce tasks. 3(b) Map-Reduce elements in the scenario 1. Input dataset / partitions — large transaction/clickstream files split into chunks. 2. Map tasks/workers — independently process partitions and emit intermediate key/value pairs, e.g. (productId, saleAmount). 3. Map-Reduce infrastructure/framework — schedules tasks, monitors workers and coordinates execution. 4. Shuffle/Sort stage — groups intermediate output by key so all values for the same product/category reach the appropriate reducer. 5. Reduce tasks/workers — combine values for each key, e.g. sum total sales per product. 6. Output — aggregated business-analysis results. 3(c) How Map-Reduce supports parallel processing and performance The infrastructure partitions a huge input dataset across many independent Map tasks, allowing multiple chunks to be processed simultaneously on different compute nodes. Intermediate key/value output is shuffled/sorted and then different Reduce tasks can aggregate independent key groups in parallel. Causal chain: The framework can also monitor/restart failed tasks, which supports resilient large-scale processing. 3(d) Weakness / threatened quality Performance may be threatened for unsuitable workloads because Map-Reduce introduces framework startup, partitioning, shuffle/sort, disk/network I/O and synchronization overhead. Small datasets can therefore run slower than a simpler sequential solution. Another key weakness is data skew: if one key receives far more data than others, one reducer becomes a straggler and limits overall completion time.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
    "concepts": [
      "map-reduce",
      "performance"
    ]
  },
  {
    "id": "PY-2026-01-Q4",
    "referenceType": "past-paper",
    "examCycle": "January 2026",
    "questionNumber": 4,
    "title": "Past Paper + Model Answer — January 2026 Q4: Architectural notation, views, view template and Map-Reduce primary presentation",
    "body": "4(a) Three architectural notation types Informal notation - Free-form boxes, lines and annotations. - Benefit: quick and easy for stakeholder communication. - Weakness: weak semantics; different readers may interpret symbols differently. - Example: simple hand-drawn Map → Shuffle → Reduce architecture sketch. Semiformal notation - Defined syntax/conventions, e.g. UML component/deployment/sequence diagrams or carefully defined architectural diagrams. - Benefit: more precise and less ambiguous while still understandable to most stakeholders/developers. - Example: UML deployment diagram showing Map/Reduce workers allocated to compute nodes. Formal notation - Mathematically precise language with rigorous semantics and possible automated analysis/verification. - Benefit: maximum precision and analyzability. - Weakness: greater cost/expertise and often unnecessary for ordinary business-system communication. - Example: a formally specified architecture/behavior model used where rigorous verification is required. General-purpose exam recommendation: semiformal notation usually gives the best balance of clarity and precision, but the choice should be justified by stakeholder and analysis needs. 4(b) Three architectural views Module View Shows static organization of implementation/code responsibilities and relations such as uses, is-part-of or allowed-to-use. Need: helps developers understand decomposition, responsibility allocation and change impact. Component-and-Connector (C&C) View Shows runtime components and connectors/interactions. Need: supports reasoning about runtime communication, concurrency, performance, availability and interaction behavior. Allocation View Shows mapping of software to its environment such as hardware/deployment nodes, file structures or teams. Need: supports deployment, scaling, resource assignment and physical/runtime separation. Remember: structure = elements/relations that exist; view = representation of one selected structure. 4(c) Four main view-template elements 1. Primary Presentation — main diagram/representation of the view. 2. Element Catalog — definitions/properties of the elements and relations appearing in the view. 3. Context Diagram — system/view boundary plus relevant external actors, systems or resources. 4. Variability Guide — optional/configurable elements, allowed alternatives, configuration points and binding decisions. Additional useful material can include rationale, known issues and cross-view correspondence, but the four above are the core requested elements. 4(d) Primary presentation of the Map-Reduce scenario A suitable labelled primary presentation: Labels should make clear that: - input is partitioned, - Map tasks operate in parallel, - infrastructure performs shuffle/sort, - Reduce tasks aggregate grouped keys, - output contains final results.",
    "source": "Learning Materials/Past Year Exam Papers/CSC3209_January_2026_Answers.md",
    "concepts": [
      "component-and-connector",
      "availability",
      "map-reduce",
      "performance",
      "architecture-notation",
      "module-structure",
      "view-documentation",
      "layer"
    ]
  }
];
  root.PAST_PAPER_REFERENCES = refs;
  const existing = root.UNIVERSAL_REFERENCES || [];
  const seen = new Set(existing.map(r => r.id));
  const additions = refs.filter(r => !seen.has(r.id));
  if (additions.length) root.UNIVERSAL_REFERENCES = [...existing, ...additions];
  if (typeof module !== 'undefined') module.exports = refs;
})(typeof window !== 'undefined' ? window : globalThis);
