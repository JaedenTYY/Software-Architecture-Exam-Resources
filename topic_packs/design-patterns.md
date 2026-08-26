# Design Patterns — CSC3209 Question Pack

Questions: **384**

## Q03193 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** University Student Portal  

For the University Student Portal, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the University Student Portal, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the University Student Portal. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the University Student Portal, the University Student Portal ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03194 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** University Student Portal  

For the University Student Portal, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the University Student Portal, Component = NavigationItem; Leaf = a University Student Portal screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the University Student Portal, the UniversityStudentPortalFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03195 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** University Student Portal  

For the University Student Portal, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the University Student Portal, Subject = UniversityStudentPortalStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the University Student Portal, Context = UniversityStudentPortalTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03196 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Online Trading Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Trading Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Online Trading Platform, the Online Trading Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03197 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Online Trading Platform, Component = NavigationItem; Leaf = a Online Trading Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Online Trading Platform, the OnlineTradingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03198 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Trading Platform  

For the Online Trading Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Online Trading Platform, Subject = OnlineTradingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Online Trading Platform, Context = OnlineTradingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03199 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Electricity Utility App, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Electricity Utility App. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Electricity Utility App, the Electricity Utility App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03200 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Electricity Utility App, Component = NavigationItem; Leaf = a Electricity Utility App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Electricity Utility App, the ElectricityUtilityAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03201 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Electricity Utility App  

For the Electricity Utility App, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Electricity Utility App, Subject = ElectricityUtilityAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Electricity Utility App, Context = ElectricityUtilityAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03202 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Digital Game Store, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Game Store. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Digital Game Store, the Digital Game Store ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03203 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Digital Game Store, Component = NavigationItem; Leaf = a Digital Game Store screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Digital Game Store, the DigitalGameStoreFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03204 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Game Store  

For the Digital Game Store, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Digital Game Store, Subject = DigitalGameStoreStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Digital Game Store, Context = DigitalGameStoreTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03205 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Flight Booking System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Flight Booking System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Flight Booking System, the Flight Booking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03206 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Flight Booking System, Component = NavigationItem; Leaf = a Flight Booking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Flight Booking System, the FlightBookingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03207 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Flight Booking System  

For the Flight Booking System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Flight Booking System, Subject = FlightBookingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Flight Booking System, Context = FlightBookingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03208 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the E-Commerce Marketplace, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the E-Commerce Marketplace. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the E-Commerce Marketplace, the E-Commerce Marketplace ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03209 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the E-Commerce Marketplace, Component = NavigationItem; Leaf = a E-Commerce Marketplace screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the E-Commerce Marketplace, the ECommerceMarketplaceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03210 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** E-Commerce Marketplace  

For the E-Commerce Marketplace, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the E-Commerce Marketplace, Subject = ECommerceMarketplaceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the E-Commerce Marketplace, Context = ECommerceMarketplaceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03211 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Digital Banking App, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Banking App. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Digital Banking App, the Digital Banking App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03212 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Digital Banking App, Component = NavigationItem; Leaf = a Digital Banking App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Digital Banking App, the DigitalBankingAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03213 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Banking App  

For the Digital Banking App, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Digital Banking App, Subject = DigitalBankingAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Digital Banking App, Context = DigitalBankingAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03214 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Food Delivery Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Food Delivery Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Food Delivery Platform, the Food Delivery Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03215 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Food Delivery Platform, Component = NavigationItem; Leaf = a Food Delivery Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Food Delivery Platform, the FoodDeliveryPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03216 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Food Delivery Platform  

For the Food Delivery Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Food Delivery Platform, Subject = FoodDeliveryPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Food Delivery Platform, Context = FoodDeliveryPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03217 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Hospital Information System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hospital Information System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Hospital Information System, the Hospital Information System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03218 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Hospital Information System, Component = NavigationItem; Leaf = a Hospital Information System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Hospital Information System, the HospitalInformationSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03219 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Hospital Information System  

For the Hospital Information System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Hospital Information System, Subject = HospitalInformationSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Hospital Information System, Context = HospitalInformationSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03220 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Smart Traffic Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Traffic Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Smart Traffic Platform, the Smart Traffic Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03221 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Smart Traffic Platform, Component = NavigationItem; Leaf = a Smart Traffic Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Smart Traffic Platform, the SmartTrafficPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03222 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Traffic Platform  

For the Smart Traffic Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Smart Traffic Platform, Subject = SmartTrafficPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Smart Traffic Platform, Context = SmartTrafficPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03223 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Ride-Hailing Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Ride-Hailing Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Ride-Hailing Platform, the Ride-Hailing Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03224 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Ride-Hailing Platform, Component = NavigationItem; Leaf = a Ride-Hailing Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Ride-Hailing Platform, the RideHailingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03225 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Ride-Hailing Platform  

For the Ride-Hailing Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Ride-Hailing Platform, Subject = RideHailingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Ride-Hailing Platform, Context = RideHailingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03226 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Video Streaming Service, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Video Streaming Service. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Video Streaming Service, the Video Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03227 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Video Streaming Service, Component = NavigationItem; Leaf = a Video Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Video Streaming Service, the VideoStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03228 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Video Streaming Service  

For the Video Streaming Service, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Video Streaming Service, Subject = VideoStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Video Streaming Service, Context = VideoStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03229 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Music Streaming Service, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Music Streaming Service. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Music Streaming Service, the Music Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03230 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Music Streaming Service, Component = NavigationItem; Leaf = a Music Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Music Streaming Service, the MusicStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03231 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Music Streaming Service  

For the Music Streaming Service, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Music Streaming Service, Subject = MusicStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Music Streaming Service, Context = MusicStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03232 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Cloud File Storage, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cloud File Storage. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Cloud File Storage, the Cloud File Storage ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03233 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Cloud File Storage, Component = NavigationItem; Leaf = a Cloud File Storage screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Cloud File Storage, the CloudFileStorageFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03234 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Cloud File Storage  

For the Cloud File Storage, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Cloud File Storage, Subject = CloudFileStorageStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Cloud File Storage, Context = CloudFileStorageTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03235 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Social Network  

For the Social Network, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Social Network, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Social Network. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Social Network, the Social Network ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03236 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Social Network  

For the Social Network, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Social Network, Component = NavigationItem; Leaf = a Social Network screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Social Network, the SocialNetworkFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03237 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Social Network  

For the Social Network, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Social Network, Subject = SocialNetworkStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Social Network, Context = SocialNetworkTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03238 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Smart Home Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Home Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Smart Home Platform, the Smart Home Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03239 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Smart Home Platform, Component = NavigationItem; Leaf = a Smart Home Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Smart Home Platform, the SmartHomePlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03240 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Smart Home Platform  

For the Smart Home Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Smart Home Platform, Subject = SmartHomePlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Smart Home Platform, Context = SmartHomePlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03241 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Logistics Tracking System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Logistics Tracking System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Logistics Tracking System, the Logistics Tracking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03242 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Logistics Tracking System, Component = NavigationItem; Leaf = a Logistics Tracking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Logistics Tracking System, the LogisticsTrackingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03243 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Logistics Tracking System  

For the Logistics Tracking System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Logistics Tracking System, Subject = LogisticsTrackingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Logistics Tracking System, Context = LogisticsTrackingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03244 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Insurance Claims System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Insurance Claims System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Insurance Claims System, the Insurance Claims System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03245 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Insurance Claims System, Component = NavigationItem; Leaf = a Insurance Claims System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Insurance Claims System, the InsuranceClaimsSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03246 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Insurance Claims System  

For the Insurance Claims System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Insurance Claims System, Subject = InsuranceClaimsSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Insurance Claims System, Context = InsuranceClaimsSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03247 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Hotel Booking Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hotel Booking Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Hotel Booking Platform, the Hotel Booking Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03248 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Hotel Booking Platform, Component = NavigationItem; Leaf = a Hotel Booking Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Hotel Booking Platform, the HotelBookingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03249 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Hotel Booking Platform  

For the Hotel Booking Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Hotel Booking Platform, Subject = HotelBookingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Hotel Booking Platform, Context = HotelBookingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03250 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Online Learning Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Learning Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Online Learning Platform, the Online Learning Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03251 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Online Learning Platform, Component = NavigationItem; Leaf = a Online Learning Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Online Learning Platform, the OnlineLearningPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03252 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Learning Platform  

For the Online Learning Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Online Learning Platform, Subject = OnlineLearningPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Online Learning Platform, Context = OnlineLearningPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03253 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Cybersecurity Monitoring Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cybersecurity Monitoring Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Cybersecurity Monitoring Platform, the Cybersecurity Monitoring Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03254 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Cybersecurity Monitoring Platform, Component = NavigationItem; Leaf = a Cybersecurity Monitoring Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Cybersecurity Monitoring Platform, the CybersecurityMonitoringPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03255 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Cybersecurity Monitoring Platform  

For the Cybersecurity Monitoring Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Cybersecurity Monitoring Platform, Subject = CybersecurityMonitoringPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Cybersecurity Monitoring Platform, Context = CybersecurityMonitoringPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03256 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Warehouse Management System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Warehouse Management System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Warehouse Management System, the Warehouse Management System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03257 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Warehouse Management System, Component = NavigationItem; Leaf = a Warehouse Management System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Warehouse Management System, the WarehouseManagementSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03258 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Warehouse Management System  

For the Warehouse Management System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Warehouse Management System, Subject = WarehouseManagementSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Warehouse Management System, Context = WarehouseManagementSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03259 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Payroll and HR System, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Payroll and HR System. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Payroll and HR System, the Payroll and HR System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03260 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Payroll and HR System, Component = NavigationItem; Leaf = a Payroll and HR System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Payroll and HR System, the PayrollAndHRSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03261 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Payroll and HR System  

For the Payroll and HR System, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Payroll and HR System, Subject = PayrollAndHRSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Payroll and HR System, Context = PayrollAndHRSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03262 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Telecommunications Billing, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Telecommunications Billing. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Telecommunications Billing, the Telecommunications Billing ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03263 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Telecommunications Billing, Component = NavigationItem; Leaf = a Telecommunications Billing screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Telecommunications Billing, the TelecommunicationsBillingFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03264 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Telecommunications Billing  

For the Telecommunications Billing, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Telecommunications Billing, Subject = TelecommunicationsBillingStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Telecommunications Billing, Context = TelecommunicationsBillingTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03265 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Library  

For the Digital Library, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Digital Library, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Library. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Digital Library, the Digital Library ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03266 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Digital Library  

For the Digital Library, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Digital Library, Component = NavigationItem; Leaf = a Digital Library screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Digital Library, the DigitalLibraryFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03267 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Library  

For the Digital Library, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Digital Library, Subject = DigitalLibraryStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Digital Library, Context = DigitalLibraryTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03268 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Medical Imaging Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Medical Imaging Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Medical Imaging Platform, the Medical Imaging Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03269 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Medical Imaging Platform, Component = NavigationItem; Leaf = a Medical Imaging Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Medical Imaging Platform, the MedicalImagingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03270 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Medical Imaging Platform  

For the Medical Imaging Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Medical Imaging Platform, Subject = MedicalImagingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Medical Imaging Platform, Context = MedicalImagingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03271 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Manufacturing Monitoring, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Manufacturing Monitoring. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Manufacturing Monitoring, the Manufacturing Monitoring ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03272 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Manufacturing Monitoring, Component = NavigationItem; Leaf = a Manufacturing Monitoring screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Manufacturing Monitoring, the ManufacturingMonitoringFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03273 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Manufacturing Monitoring  

For the Manufacturing Monitoring, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Manufacturing Monitoring, Subject = ManufacturingMonitoringStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Manufacturing Monitoring, Context = ManufacturingMonitoringTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03274 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Government Citizen Portal, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Government Citizen Portal. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Government Citizen Portal, the Government Citizen Portal ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03275 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Government Citizen Portal, Component = NavigationItem; Leaf = a Government Citizen Portal screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Government Citizen Portal, the GovernmentCitizenPortalFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03276 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Government Citizen Portal  

For the Government Citizen Portal, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Government Citizen Portal, Subject = GovernmentCitizenPortalStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Government Citizen Portal, Context = GovernmentCitizenPortalTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03277 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Wallet  

For the Digital Wallet, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Digital Wallet, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Wallet. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Digital Wallet, the Digital Wallet ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03278 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Digital Wallet  

For the Digital Wallet, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Digital Wallet, Component = NavigationItem; Leaf = a Digital Wallet screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Digital Wallet, the DigitalWalletFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03279 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Digital Wallet  

For the Digital Wallet, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Digital Wallet, Subject = DigitalWalletStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Digital Wallet, Context = DigitalWalletTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03280 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Event Ticketing Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Event Ticketing Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Event Ticketing Platform, the Event Ticketing Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03281 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Event Ticketing Platform, Component = NavigationItem; Leaf = a Event Ticketing Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Event Ticketing Platform, the EventTicketingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03282 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Event Ticketing Platform  

For the Event Ticketing Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Event Ticketing Platform, Subject = EventTicketingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Event Ticketing Platform, Context = EventTicketingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03283 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Online Auction Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Auction Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Online Auction Platform, the Online Auction Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03284 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Online Auction Platform, Component = NavigationItem; Leaf = a Online Auction Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Online Auction Platform, the OnlineAuctionPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03285 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Online Auction Platform  

For the Online Auction Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Online Auction Platform, Subject = OnlineAuctionPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Online Auction Platform, Context = OnlineAuctionPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03286 — Creational (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, explain the general concept of **Creational design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Creational patterns:** abstract object creation so clients are less dependent on concrete construction.

**1. Factory Method:** define a creation operation while allowing subclasses to choose the concrete Product. In the Supply Chain Platform, Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Supply Chain Platform. Motivation: use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**2. Singleton:** ensure exactly one controlled instance and provide a global access point. In the Supply Chain Platform, the Supply Chain Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies. Motivation: use it only when the domain genuinely requires one coordinated instance.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03287 — Structural (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Extended  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, explain the general concept of **Structural design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Structural patterns:** compose classes and objects into useful larger structures.

**1. Composite:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. In the Supply Chain Platform, Component = NavigationItem; Leaf = a Supply Chain Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu. Motivation: use it when individual objects and recursive groups must support the same operations.

**2. Facade:** provide one simpler higher-level interface over a complex subsystem. In the Supply Chain Platform, the SupplyChainPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation. Motivation: use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03288 — Behavioral (Hard, 6 marks)

**Type:** Category + examples  
**Exam family:** Past Paper Q4  
**Scenario:** Supply Chain Platform  

For the Supply Chain Platform, explain the general concept of **Behavioral design patterns**. Name two patterns from the lecturer's catalogue and give a plausible scenario plus motivation for each.

<details><summary>Answer framework / marking outline</summary>

**Behavioral patterns:** organize algorithms, responsibilities and communication among objects.

**1. Observer:** define a one-to-many dependency so registered dependents update automatically after Subject state changes. In the Supply Chain Platform, Subject = SupplyChainPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes. Motivation: use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**2. State:** allow a Context to vary its own behavior by delegating to its current State object. In the Supply Chain Platform, Context = SupplyChainPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State. Motivation: use it when state-specific behavior would otherwise be spread across repeated conditionals.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03289 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **Factory Method** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete University Student Portal mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the University Student Portal.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03290 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, a framework inside the Student Portal knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the University Student Portal:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the University Student Portal.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03291 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **Factory Method** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Online Trading Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Trading Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03292 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, a framework inside the Trading Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Online Trading Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Trading Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03293 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **Factory Method** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Electricity Utility App mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Electricity Utility App.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03294 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, a framework inside the Utility Application knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Electricity Utility App:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Electricity Utility App.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03295 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **Factory Method** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Digital Game Store mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Game Store.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03296 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, a framework inside the Game Distribution Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Digital Game Store:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Game Store.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03297 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **Factory Method** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Flight Booking System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Flight Booking System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03298 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, a framework inside the Flight Booking System knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Flight Booking System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Flight Booking System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03299 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **Factory Method** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete E-Commerce Marketplace mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the E-Commerce Marketplace.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03300 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, a framework inside the Marketplace knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the E-Commerce Marketplace:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the E-Commerce Marketplace.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03301 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **Factory Method** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Digital Banking App mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Banking App.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03302 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, a framework inside the Banking Application knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Digital Banking App:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Digital Banking App.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03303 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **Factory Method** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Food Delivery Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Food Delivery Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03304 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, a framework inside the Food Delivery Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Food Delivery Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Food Delivery Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03305 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **Factory Method** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Hospital Information System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hospital Information System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03306 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, a framework inside the Hospital Information System knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Hospital Information System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hospital Information System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03307 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **Factory Method** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Smart Traffic Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Traffic Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03308 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, a framework inside the Traffic Management Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Smart Traffic Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Traffic Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03309 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **Factory Method** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Ride-Hailing Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Ride-Hailing Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03310 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, a framework inside the Ride-Hailing Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Ride-Hailing Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Ride-Hailing Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03311 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **Factory Method** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Video Streaming Service mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Video Streaming Service.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03312 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, a framework inside the Streaming Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Video Streaming Service:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Video Streaming Service.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03313 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **Factory Method** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Music Streaming Service mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Music Streaming Service.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03314 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, a framework inside the Music Streaming Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Music Streaming Service:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Music Streaming Service.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03315 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **Factory Method** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Cloud File Storage mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cloud File Storage.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03316 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, a framework inside the Cloud Storage Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Cloud File Storage:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cloud File Storage.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03317 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **Factory Method** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Social Network mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Social Network.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03318 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, a framework inside the Social Network knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Social Network:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Social Network.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03319 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **Factory Method** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Smart Home Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Home Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03320 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, a framework inside the Smart Home Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Smart Home Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Smart Home Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03321 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **Factory Method** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Logistics Tracking System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Logistics Tracking System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03322 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, a framework inside the Logistics Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Logistics Tracking System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Logistics Tracking System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03323 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **Factory Method** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Insurance Claims System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Insurance Claims System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03324 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, a framework inside the Claims Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Insurance Claims System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Insurance Claims System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03325 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **Factory Method** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Hotel Booking Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hotel Booking Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03326 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, a framework inside the Hotel Booking Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Hotel Booking Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Hotel Booking Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03327 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **Factory Method** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Online Learning Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Learning Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03328 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, a framework inside the Learning Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Online Learning Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Online Learning Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03329 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **Factory Method** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Cybersecurity Monitoring Platform mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cybersecurity Monitoring Platform.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03330 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, a framework inside the Security Monitoring Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Cybersecurity Monitoring Platform:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Cybersecurity Monitoring Platform.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03331 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **Factory Method** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Warehouse Management System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Warehouse Management System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03332 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, a framework inside the Warehouse Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Warehouse Management System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Warehouse Management System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03333 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **Factory Method** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Payroll and HR System mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Payroll and HR System.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03334 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, a framework inside the HR Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Payroll and HR System:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Payroll and HR System.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03335 — Factory Method (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **Factory Method** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** define a creation operation while allowing subclasses to choose the concrete Product.
**When to use:** use it when framework code knows when a product is needed but should not hard-code which concrete class is created.
**Concrete Telecommunications Billing mapping:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Telecommunications Billing.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03336 — Factory Method (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, a framework inside the Telecom Billing Platform knows when it must create a product object but subclasses should decide which concrete product class is instantiated. Decide whether **Factory Method** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Factory Method is suitable.** The requirement matches its intent: define a creation operation while allowing subclasses to choose the concrete Product. use it when framework code knows when a product is needed but should not hard-code which concrete class is created.

**Participant mapping in the Telecommunications Billing:** Product = Notification; ConcreteProducts = EmailNotification and SmsNotification; Creator = NotificationCreator; ConcreteCreators = EmailNotificationCreator and SmsNotificationCreator in the Telecommunications Billing.

**Less suitable alternative - Singleton:** Singleton controls instance count and does not delegate the concrete product choice to subclasses.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03337 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **Singleton** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete University Student Portal mapping:** the University Student Portal ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03338 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, the Student Portal requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the University Student Portal:** the University Student Portal ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03339 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **Singleton** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Online Trading Platform mapping:** the Online Trading Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03340 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, the Trading Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Online Trading Platform:** the Online Trading Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03341 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **Singleton** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Electricity Utility App mapping:** the Electricity Utility App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03342 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, the Utility Application requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Electricity Utility App:** the Electricity Utility App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03343 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **Singleton** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Digital Game Store mapping:** the Digital Game Store ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03344 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, the Game Distribution Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Digital Game Store:** the Digital Game Store ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03345 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **Singleton** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Flight Booking System mapping:** the Flight Booking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03346 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, the Flight Booking System requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Flight Booking System:** the Flight Booking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03347 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **Singleton** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete E-Commerce Marketplace mapping:** the E-Commerce Marketplace ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03348 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, the Marketplace requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the E-Commerce Marketplace:** the E-Commerce Marketplace ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03349 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **Singleton** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Digital Banking App mapping:** the Digital Banking App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03350 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, the Banking Application requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Digital Banking App:** the Digital Banking App ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03351 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **Singleton** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Food Delivery Platform mapping:** the Food Delivery Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03352 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, the Food Delivery Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Food Delivery Platform:** the Food Delivery Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03353 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **Singleton** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Hospital Information System mapping:** the Hospital Information System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03354 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, the Hospital Information System requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Hospital Information System:** the Hospital Information System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03355 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **Singleton** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Smart Traffic Platform mapping:** the Smart Traffic Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03356 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, the Traffic Management Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Smart Traffic Platform:** the Smart Traffic Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03357 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **Singleton** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Ride-Hailing Platform mapping:** the Ride-Hailing Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03358 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, the Ride-Hailing Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Ride-Hailing Platform:** the Ride-Hailing Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03359 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **Singleton** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Video Streaming Service mapping:** the Video Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03360 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, the Streaming Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Video Streaming Service:** the Video Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03361 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **Singleton** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Music Streaming Service mapping:** the Music Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03362 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, the Music Streaming Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Music Streaming Service:** the Music Streaming Service ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03363 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **Singleton** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Cloud File Storage mapping:** the Cloud File Storage ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03364 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, the Cloud Storage Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Cloud File Storage:** the Cloud File Storage ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03365 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **Singleton** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Social Network mapping:** the Social Network ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03366 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, the Social Network requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Social Network:** the Social Network ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03367 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **Singleton** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Smart Home Platform mapping:** the Smart Home Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03368 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, the Smart Home Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Smart Home Platform:** the Smart Home Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03369 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **Singleton** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Logistics Tracking System mapping:** the Logistics Tracking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03370 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, the Logistics Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Logistics Tracking System:** the Logistics Tracking System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03371 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **Singleton** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Insurance Claims System mapping:** the Insurance Claims System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03372 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, the Claims Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Insurance Claims System:** the Insurance Claims System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03373 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **Singleton** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Hotel Booking Platform mapping:** the Hotel Booking Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03374 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, the Hotel Booking Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Hotel Booking Platform:** the Hotel Booking Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03375 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **Singleton** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Online Learning Platform mapping:** the Online Learning Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03376 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, the Learning Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Online Learning Platform:** the Online Learning Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03377 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **Singleton** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Cybersecurity Monitoring Platform mapping:** the Cybersecurity Monitoring Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03378 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, the Security Monitoring Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Cybersecurity Monitoring Platform:** the Cybersecurity Monitoring Platform ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03379 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **Singleton** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Warehouse Management System mapping:** the Warehouse Management System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03380 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, the Warehouse Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Warehouse Management System:** the Warehouse Management System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03381 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **Singleton** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Payroll and HR System mapping:** the Payroll and HR System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03382 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, the HR Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Payroll and HR System:** the Payroll and HR System ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03383 — Singleton (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **Singleton** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Creational.
**Intent:** ensure exactly one controlled instance and provide a global access point.
**When to use:** use it only when the domain genuinely requires one coordinated instance.
**Concrete Telecommunications Billing mapping:** the Telecommunications Billing ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03384 — Singleton (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, the Telecom Billing Platform requires exactly one shared manager/spooler-style object with a well-known access point. Decide whether **Singleton** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Singleton is suitable.** The requirement matches its intent: ensure exactly one controlled instance and provide a global access point. use it only when the domain genuinely requires one coordinated instance.

**Participant mapping in the Telecommunications Billing:** the Telecommunications Billing ConfigurationRegistry has a private constructor, owns one static instance and exposes getInstance(); clients share that registry rather than constructing conflicting copies.

**Less suitable alternative - Factory Method:** Factory Method varies concrete products but does not enforce that only one instance exists.



**Grounding:** Lecture13_DesignPatterns_CreationalPatterns.pdf

</details>

## Q03385 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **Composite** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete University Student Portal mapping:** Component = NavigationItem; Leaf = a University Student Portal screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03386 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, the Student Portal has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the University Student Portal:** Component = NavigationItem; Leaf = a University Student Portal screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03387 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **Composite** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Online Trading Platform mapping:** Component = NavigationItem; Leaf = a Online Trading Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03388 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, the Trading Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Online Trading Platform:** Component = NavigationItem; Leaf = a Online Trading Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03389 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **Composite** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Electricity Utility App mapping:** Component = NavigationItem; Leaf = a Electricity Utility App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03390 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, the Utility Application has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Electricity Utility App:** Component = NavigationItem; Leaf = a Electricity Utility App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03391 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **Composite** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Digital Game Store mapping:** Component = NavigationItem; Leaf = a Digital Game Store screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03392 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, the Game Distribution Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Digital Game Store:** Component = NavigationItem; Leaf = a Digital Game Store screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03393 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **Composite** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Flight Booking System mapping:** Component = NavigationItem; Leaf = a Flight Booking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03394 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, the Flight Booking System has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Flight Booking System:** Component = NavigationItem; Leaf = a Flight Booking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03395 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **Composite** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete E-Commerce Marketplace mapping:** Component = NavigationItem; Leaf = a E-Commerce Marketplace screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03396 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, the Marketplace has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the E-Commerce Marketplace:** Component = NavigationItem; Leaf = a E-Commerce Marketplace screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03397 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **Composite** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Digital Banking App mapping:** Component = NavigationItem; Leaf = a Digital Banking App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03398 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, the Banking Application has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Digital Banking App:** Component = NavigationItem; Leaf = a Digital Banking App screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03399 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **Composite** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Food Delivery Platform mapping:** Component = NavigationItem; Leaf = a Food Delivery Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03400 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, the Food Delivery Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Food Delivery Platform:** Component = NavigationItem; Leaf = a Food Delivery Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03401 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **Composite** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Hospital Information System mapping:** Component = NavigationItem; Leaf = a Hospital Information System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03402 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, the Hospital Information System has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Hospital Information System:** Component = NavigationItem; Leaf = a Hospital Information System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03403 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **Composite** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Smart Traffic Platform mapping:** Component = NavigationItem; Leaf = a Smart Traffic Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03404 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, the Traffic Management Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Smart Traffic Platform:** Component = NavigationItem; Leaf = a Smart Traffic Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03405 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **Composite** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Ride-Hailing Platform mapping:** Component = NavigationItem; Leaf = a Ride-Hailing Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03406 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, the Ride-Hailing Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Ride-Hailing Platform:** Component = NavigationItem; Leaf = a Ride-Hailing Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03407 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **Composite** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Video Streaming Service mapping:** Component = NavigationItem; Leaf = a Video Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03408 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, the Streaming Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Video Streaming Service:** Component = NavigationItem; Leaf = a Video Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03409 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **Composite** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Music Streaming Service mapping:** Component = NavigationItem; Leaf = a Music Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03410 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, the Music Streaming Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Music Streaming Service:** Component = NavigationItem; Leaf = a Music Streaming Service screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03411 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **Composite** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Cloud File Storage mapping:** Component = NavigationItem; Leaf = a Cloud File Storage screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03412 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, the Cloud Storage Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Cloud File Storage:** Component = NavigationItem; Leaf = a Cloud File Storage screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03413 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **Composite** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Social Network mapping:** Component = NavigationItem; Leaf = a Social Network screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03414 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, the Social Network has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Social Network:** Component = NavigationItem; Leaf = a Social Network screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03415 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **Composite** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Smart Home Platform mapping:** Component = NavigationItem; Leaf = a Smart Home Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03416 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, the Smart Home Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Smart Home Platform:** Component = NavigationItem; Leaf = a Smart Home Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03417 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **Composite** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Logistics Tracking System mapping:** Component = NavigationItem; Leaf = a Logistics Tracking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03418 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, the Logistics Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Logistics Tracking System:** Component = NavigationItem; Leaf = a Logistics Tracking System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03419 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **Composite** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Insurance Claims System mapping:** Component = NavigationItem; Leaf = a Insurance Claims System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03420 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, the Claims Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Insurance Claims System:** Component = NavigationItem; Leaf = a Insurance Claims System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03421 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **Composite** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Hotel Booking Platform mapping:** Component = NavigationItem; Leaf = a Hotel Booking Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03422 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, the Hotel Booking Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Hotel Booking Platform:** Component = NavigationItem; Leaf = a Hotel Booking Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03423 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **Composite** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Online Learning Platform mapping:** Component = NavigationItem; Leaf = a Online Learning Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03424 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, the Learning Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Online Learning Platform:** Component = NavigationItem; Leaf = a Online Learning Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03425 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **Composite** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Cybersecurity Monitoring Platform mapping:** Component = NavigationItem; Leaf = a Cybersecurity Monitoring Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03426 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, the Security Monitoring Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Cybersecurity Monitoring Platform:** Component = NavigationItem; Leaf = a Cybersecurity Monitoring Platform screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03427 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **Composite** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Warehouse Management System mapping:** Component = NavigationItem; Leaf = a Warehouse Management System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03428 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, the Warehouse Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Warehouse Management System:** Component = NavigationItem; Leaf = a Warehouse Management System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03429 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **Composite** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Payroll and HR System mapping:** Component = NavigationItem; Leaf = a Payroll and HR System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03430 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, the HR Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Payroll and HR System:** Component = NavigationItem; Leaf = a Payroll and HR System screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03431 — Composite (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **Composite** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly.
**When to use:** use it when individual objects and recursive groups must support the same operations.
**Concrete Telecommunications Billing mapping:** Component = NavigationItem; Leaf = a Telecommunications Billing screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03432 — Composite (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, the Telecom Billing Platform has a recursive part-whole hierarchy where clients should treat single items and groups uniformly. Decide whether **Composite** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Composite is suitable.** The requirement matches its intent: represent recursive part-whole trees so clients treat Leaves and Composite groups uniformly. use it when individual objects and recursive groups must support the same operations.

**Participant mapping in the Telecommunications Billing:** Component = NavigationItem; Leaf = a Telecommunications Billing screen link; Composite = MenuGroup containing NavigationItems; render() is invoked uniformly on a link or a nested menu.

**Less suitable alternative - Facade:** Facade simplifies entry to a subsystem but does not model recursive child containment or uniform Leaf/Composite operations.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03433 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **Facade** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete University Student Portal mapping:** the UniversityStudentPortalFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03434 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, clients of a complex subsystem inside the Student Portal should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the University Student Portal:** the UniversityStudentPortalFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03435 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **Facade** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Online Trading Platform mapping:** the OnlineTradingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03436 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, clients of a complex subsystem inside the Trading Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Online Trading Platform:** the OnlineTradingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03437 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **Facade** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Electricity Utility App mapping:** the ElectricityUtilityAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03438 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, clients of a complex subsystem inside the Utility Application should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Electricity Utility App:** the ElectricityUtilityAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03439 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **Facade** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Digital Game Store mapping:** the DigitalGameStoreFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03440 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, clients of a complex subsystem inside the Game Distribution Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Digital Game Store:** the DigitalGameStoreFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03441 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **Facade** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Flight Booking System mapping:** the FlightBookingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03442 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, clients of a complex subsystem inside the Flight Booking System should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Flight Booking System:** the FlightBookingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03443 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **Facade** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete E-Commerce Marketplace mapping:** the ECommerceMarketplaceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03444 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, clients of a complex subsystem inside the Marketplace should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the E-Commerce Marketplace:** the ECommerceMarketplaceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03445 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **Facade** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Digital Banking App mapping:** the DigitalBankingAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03446 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, clients of a complex subsystem inside the Banking Application should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Digital Banking App:** the DigitalBankingAppFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03447 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **Facade** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Food Delivery Platform mapping:** the FoodDeliveryPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03448 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, clients of a complex subsystem inside the Food Delivery Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Food Delivery Platform:** the FoodDeliveryPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03449 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **Facade** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Hospital Information System mapping:** the HospitalInformationSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03450 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, clients of a complex subsystem inside the Hospital Information System should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Hospital Information System:** the HospitalInformationSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03451 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **Facade** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Smart Traffic Platform mapping:** the SmartTrafficPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03452 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, clients of a complex subsystem inside the Traffic Management Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Smart Traffic Platform:** the SmartTrafficPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03453 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **Facade** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Ride-Hailing Platform mapping:** the RideHailingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03454 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, clients of a complex subsystem inside the Ride-Hailing Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Ride-Hailing Platform:** the RideHailingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03455 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **Facade** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Video Streaming Service mapping:** the VideoStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03456 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, clients of a complex subsystem inside the Streaming Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Video Streaming Service:** the VideoStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03457 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **Facade** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Music Streaming Service mapping:** the MusicStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03458 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, clients of a complex subsystem inside the Music Streaming Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Music Streaming Service:** the MusicStreamingServiceFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03459 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **Facade** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Cloud File Storage mapping:** the CloudFileStorageFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03460 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, clients of a complex subsystem inside the Cloud Storage Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Cloud File Storage:** the CloudFileStorageFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03461 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **Facade** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Social Network mapping:** the SocialNetworkFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03462 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, clients of a complex subsystem inside the Social Network should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Social Network:** the SocialNetworkFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03463 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **Facade** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Smart Home Platform mapping:** the SmartHomePlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03464 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, clients of a complex subsystem inside the Smart Home Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Smart Home Platform:** the SmartHomePlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03465 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **Facade** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Logistics Tracking System mapping:** the LogisticsTrackingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03466 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, clients of a complex subsystem inside the Logistics Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Logistics Tracking System:** the LogisticsTrackingSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03467 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **Facade** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Insurance Claims System mapping:** the InsuranceClaimsSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03468 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, clients of a complex subsystem inside the Claims Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Insurance Claims System:** the InsuranceClaimsSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03469 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **Facade** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Hotel Booking Platform mapping:** the HotelBookingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03470 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, clients of a complex subsystem inside the Hotel Booking Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Hotel Booking Platform:** the HotelBookingPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03471 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **Facade** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Online Learning Platform mapping:** the OnlineLearningPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03472 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, clients of a complex subsystem inside the Learning Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Online Learning Platform:** the OnlineLearningPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03473 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **Facade** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Cybersecurity Monitoring Platform mapping:** the CybersecurityMonitoringPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03474 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, clients of a complex subsystem inside the Security Monitoring Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Cybersecurity Monitoring Platform:** the CybersecurityMonitoringPlatformFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03475 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **Facade** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Warehouse Management System mapping:** the WarehouseManagementSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03476 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, clients of a complex subsystem inside the Warehouse Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Warehouse Management System:** the WarehouseManagementSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03477 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **Facade** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Payroll and HR System mapping:** the PayrollAndHRSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03478 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, clients of a complex subsystem inside the HR Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Payroll and HR System:** the PayrollAndHRSystemFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03479 — Facade (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **Facade** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Structural.
**Intent:** provide one simpler higher-level interface over a complex subsystem.
**When to use:** use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.
**Concrete Telecommunications Billing mapping:** the TelecommunicationsBillingFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03480 — Facade (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, clients of a complex subsystem inside the Telecom Billing Platform should use one simplified entry point instead of depending directly on many subsystem classes. Decide whether **Facade** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Facade is suitable.** The requirement matches its intent: provide one simpler higher-level interface over a complex subsystem. use it when clients need a stable simple entry point and should not coordinate many subsystem objects themselves.

**Participant mapping in the Telecommunications Billing:** the TelecommunicationsBillingFacade exposes completeTransaction(); it coordinates AuthenticationService, ValidationService, Repository and NotificationService while the client depends only on the Facade operation.

**Less suitable alternative - Composite:** Composite models recursive part-whole trees and does not provide a simplified workflow interface over unrelated subsystem services.



**Grounding:** Lecture13_DesignPatterns_StructuralPatterns.pdf

</details>

## Q03481 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **Observer** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete University Student Portal mapping:** Subject = UniversityStudentPortalStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03482 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, when a seat becomes available in a preferred class, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the University Student Portal:** Subject = UniversityStudentPortalStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03483 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **Observer** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Online Trading Platform mapping:** Subject = OnlineTradingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03484 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, when a watched stock reaches a target price, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Online Trading Platform:** Subject = OnlineTradingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03485 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **Observer** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Electricity Utility App mapping:** Subject = ElectricityUtilityAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03486 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, when consumption exceeds a threshold, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Electricity Utility App:** Subject = ElectricityUtilityAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03487 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **Observer** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Digital Game Store mapping:** Subject = DigitalGameStoreStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03488 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, when a new game matches user preferences, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Digital Game Store:** Subject = DigitalGameStoreStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03489 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **Observer** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Flight Booking System mapping:** Subject = FlightBookingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03490 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, when a fare promotion becomes available, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Flight Booking System:** Subject = FlightBookingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03491 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **Observer** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete E-Commerce Marketplace mapping:** Subject = ECommerceMarketplaceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03492 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, when a saved product goes on sale, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the E-Commerce Marketplace:** Subject = ECommerceMarketplaceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03493 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **Observer** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Digital Banking App mapping:** Subject = DigitalBankingAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03494 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, when a suspicious transaction is detected, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Digital Banking App:** Subject = DigitalBankingAppStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03495 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **Observer** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Food Delivery Platform mapping:** Subject = FoodDeliveryPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03496 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, when the rider is approaching the delivery location, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Food Delivery Platform:** Subject = FoodDeliveryPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03497 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **Observer** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Hospital Information System mapping:** Subject = HospitalInformationSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03498 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, when a critical lab value is recorded, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Hospital Information System:** Subject = HospitalInformationSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03499 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **Observer** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Smart Traffic Platform mapping:** Subject = SmartTrafficPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03500 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, when congestion exceeds a threshold, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Smart Traffic Platform:** Subject = SmartTrafficPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03501 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **Observer** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Ride-Hailing Platform mapping:** Subject = RideHailingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03502 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, when a driver accepts the trip, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Ride-Hailing Platform:** Subject = RideHailingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03503 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **Observer** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Video Streaming Service mapping:** Subject = VideoStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03504 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, when a followed series releases an episode, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Video Streaming Service:** Subject = VideoStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03505 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **Observer** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Music Streaming Service mapping:** Subject = MusicStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03506 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, when a followed artist releases a track, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Music Streaming Service:** Subject = MusicStreamingServiceStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03507 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **Observer** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Cloud File Storage mapping:** Subject = CloudFileStorageStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03508 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, when a shared file is modified, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Cloud File Storage:** Subject = CloudFileStorageStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03509 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **Observer** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Social Network mapping:** Subject = SocialNetworkStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03510 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, when a followed account publishes content, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Social Network:** Subject = SocialNetworkStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03511 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **Observer** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Smart Home Platform mapping:** Subject = SmartHomePlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03512 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, when a smoke sensor enters alarm state, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Smart Home Platform:** Subject = SmartHomePlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03513 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **Observer** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Logistics Tracking System mapping:** Subject = LogisticsTrackingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03514 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, when a shipment is delayed, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Logistics Tracking System:** Subject = LogisticsTrackingSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03515 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **Observer** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Insurance Claims System mapping:** Subject = InsuranceClaimsSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03516 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, when a high-risk claim is submitted, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Insurance Claims System:** Subject = InsuranceClaimsSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03517 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **Observer** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Hotel Booking Platform mapping:** Subject = HotelBookingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03518 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, when a saved hotel drops below a target price, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Hotel Booking Platform:** Subject = HotelBookingPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03519 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **Observer** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Online Learning Platform mapping:** Subject = OnlineLearningPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03520 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, when a new lesson is released, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Online Learning Platform:** Subject = OnlineLearningPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03521 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **Observer** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Cybersecurity Monitoring Platform mapping:** Subject = CybersecurityMonitoringPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03522 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, when a high-severity intrusion signal appears, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Cybersecurity Monitoring Platform:** Subject = CybersecurityMonitoringPlatformStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03523 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **Observer** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Warehouse Management System mapping:** Subject = WarehouseManagementSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03524 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, when inventory drops below reorder level, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Warehouse Management System:** Subject = WarehouseManagementSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03525 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **Observer** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Payroll and HR System mapping:** Subject = PayrollAndHRSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03526 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, when a leave request changes state, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Payroll and HR System:** Subject = PayrollAndHRSystemStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03527 — Observer (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **Observer** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** define a one-to-many dependency so registered dependents update automatically after Subject state changes.
**When to use:** use it for implementation-level notification where the Subject must not depend on concrete observer classes.
**Concrete Telecommunications Billing mapping:** Subject = TelecommunicationsBillingStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03528 — Observer (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, when mobile data usage exceeds a threshold, an unknown number of in-process dependent objects must update automatically without the subject being tightly coupled to them. Decide whether **Observer** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, Observer is suitable.** The requirement matches its intent: define a one-to-many dependency so registered dependents update automatically after Subject state changes. use it for implementation-level notification where the Subject must not depend on concrete observer classes.

**Participant mapping in the Telecommunications Billing:** Subject = TelecommunicationsBillingStatusModel; Observers = DashboardView and NotificationAdapter; attach()/detach() maintain the changing set and notifyObservers() calls update() after status changes.

**Less suitable alternative - State:** State changes one Context's own behavior; it does not model one Subject notifying a set of dependent objects.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03529 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** University Student Portal  

Apply the **State** design pattern to the University Student Portal. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete University Student Portal mapping:** Context = UniversityStudentPortalTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03530 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** University Student Portal  

In the University Student Portal, the same Student Portal object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the University Student Portal:** Context = UniversityStudentPortalTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03531 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

Apply the **State** design pattern to the Online Trading Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Online Trading Platform mapping:** Context = OnlineTradingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03532 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Trading Platform  

In the Online Trading Platform, the same Trading Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Online Trading Platform:** Context = OnlineTradingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03533 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

Apply the **State** design pattern to the Electricity Utility App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Electricity Utility App mapping:** Context = ElectricityUtilityAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03534 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Electricity Utility App  

In the Electricity Utility App, the same Utility Application object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Electricity Utility App:** Context = ElectricityUtilityAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03535 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

Apply the **State** design pattern to the Digital Game Store. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Digital Game Store mapping:** Context = DigitalGameStoreTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03536 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Game Store  

In the Digital Game Store, the same Game Distribution Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Digital Game Store:** Context = DigitalGameStoreTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03537 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

Apply the **State** design pattern to the Flight Booking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Flight Booking System mapping:** Context = FlightBookingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03538 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Flight Booking System  

In the Flight Booking System, the same Flight Booking System object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Flight Booking System:** Context = FlightBookingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03539 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

Apply the **State** design pattern to the E-Commerce Marketplace. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete E-Commerce Marketplace mapping:** Context = ECommerceMarketplaceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03540 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** E-Commerce Marketplace  

In the E-Commerce Marketplace, the same Marketplace object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the E-Commerce Marketplace:** Context = ECommerceMarketplaceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03541 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

Apply the **State** design pattern to the Digital Banking App. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Digital Banking App mapping:** Context = DigitalBankingAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03542 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Digital Banking App  

In the Digital Banking App, the same Banking Application object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Digital Banking App:** Context = DigitalBankingAppTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03543 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

Apply the **State** design pattern to the Food Delivery Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Food Delivery Platform mapping:** Context = FoodDeliveryPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03544 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Food Delivery Platform  

In the Food Delivery Platform, the same Food Delivery Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Food Delivery Platform:** Context = FoodDeliveryPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03545 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

Apply the **State** design pattern to the Hospital Information System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Hospital Information System mapping:** Context = HospitalInformationSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03546 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hospital Information System  

In the Hospital Information System, the same Hospital Information System object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Hospital Information System:** Context = HospitalInformationSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03547 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

Apply the **State** design pattern to the Smart Traffic Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Smart Traffic Platform mapping:** Context = SmartTrafficPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03548 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Traffic Platform  

In the Smart Traffic Platform, the same Traffic Management Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Smart Traffic Platform:** Context = SmartTrafficPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03549 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

Apply the **State** design pattern to the Ride-Hailing Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Ride-Hailing Platform mapping:** Context = RideHailingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03550 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Ride-Hailing Platform  

In the Ride-Hailing Platform, the same Ride-Hailing Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Ride-Hailing Platform:** Context = RideHailingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03551 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

Apply the **State** design pattern to the Video Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Video Streaming Service mapping:** Context = VideoStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03552 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Video Streaming Service  

In the Video Streaming Service, the same Streaming Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Video Streaming Service:** Context = VideoStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03553 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

Apply the **State** design pattern to the Music Streaming Service. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Music Streaming Service mapping:** Context = MusicStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03554 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Music Streaming Service  

In the Music Streaming Service, the same Music Streaming Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Music Streaming Service:** Context = MusicStreamingServiceTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03555 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

Apply the **State** design pattern to the Cloud File Storage. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Cloud File Storage mapping:** Context = CloudFileStorageTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03556 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cloud File Storage  

In the Cloud File Storage, the same Cloud Storage Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Cloud File Storage:** Context = CloudFileStorageTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03557 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Social Network  

Apply the **State** design pattern to the Social Network. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Social Network mapping:** Context = SocialNetworkTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03558 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Social Network  

In the Social Network, the same Social Network object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Social Network:** Context = SocialNetworkTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03559 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

Apply the **State** design pattern to the Smart Home Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Smart Home Platform mapping:** Context = SmartHomePlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03560 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Smart Home Platform  

In the Smart Home Platform, the same Smart Home Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Smart Home Platform:** Context = SmartHomePlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03561 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

Apply the **State** design pattern to the Logistics Tracking System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Logistics Tracking System mapping:** Context = LogisticsTrackingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03562 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Logistics Tracking System  

In the Logistics Tracking System, the same Logistics Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Logistics Tracking System:** Context = LogisticsTrackingSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03563 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

Apply the **State** design pattern to the Insurance Claims System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Insurance Claims System mapping:** Context = InsuranceClaimsSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03564 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Insurance Claims System  

In the Insurance Claims System, the same Claims Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Insurance Claims System:** Context = InsuranceClaimsSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03565 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

Apply the **State** design pattern to the Hotel Booking Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Hotel Booking Platform mapping:** Context = HotelBookingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03566 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Hotel Booking Platform  

In the Hotel Booking Platform, the same Hotel Booking Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Hotel Booking Platform:** Context = HotelBookingPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03567 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

Apply the **State** design pattern to the Online Learning Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Online Learning Platform mapping:** Context = OnlineLearningPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03568 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Online Learning Platform  

In the Online Learning Platform, the same Learning Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Online Learning Platform:** Context = OnlineLearningPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03569 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

Apply the **State** design pattern to the Cybersecurity Monitoring Platform. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Cybersecurity Monitoring Platform mapping:** Context = CybersecurityMonitoringPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03570 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Cybersecurity Monitoring Platform  

In the Cybersecurity Monitoring Platform, the same Security Monitoring Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Cybersecurity Monitoring Platform:** Context = CybersecurityMonitoringPlatformTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03571 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

Apply the **State** design pattern to the Warehouse Management System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Warehouse Management System mapping:** Context = WarehouseManagementSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03572 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Warehouse Management System  

In the Warehouse Management System, the same Warehouse Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Warehouse Management System:** Context = WarehouseManagementSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03573 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

Apply the **State** design pattern to the Payroll and HR System. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Payroll and HR System mapping:** Context = PayrollAndHRSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03574 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Payroll and HR System  

In the Payroll and HR System, the same HR Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Payroll and HR System:** Context = PayrollAndHRSystemTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03575 — State (Very Hard, 6 marks)

**Type:** Intent/applicability/participants  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

Apply the **State** design pattern to the Telecommunications Billing. State its category and intent, explain when it should be used, identify its participants, and construct a scenario-specific mapping.

<details><summary>Answer framework / marking outline</summary>

**Category:** Behavioral.
**Intent:** allow a Context to vary its own behavior by delegating to its current State object.
**When to use:** use it when state-specific behavior would otherwise be spread across repeated conditionals.
**Concrete Telecommunications Billing mapping:** Context = TelecommunicationsBillingTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>

## Q03576 — State (Brutal, 5 marks)

**Type:** Pattern selection under ambiguity  
**Exam family:** Extended  
**Scenario:** Telecommunications Billing  

In the Telecommunications Billing, the same Telecom Billing Platform object must behave differently at runtime as its internal lifecycle state changes, and the code currently contains repeated large state-dependent conditionals. Decide whether **State** is suitable. Justify using intent, applicability and participant relationships, then name one superficially plausible but less suitable alternative and explain why.

<details><summary>Answer framework / marking outline</summary>

**Yes, State is suitable.** The requirement matches its intent: allow a Context to vary its own behavior by delegating to its current State object. use it when state-specific behavior would otherwise be spread across repeated conditionals.

**Participant mapping in the Telecommunications Billing:** Context = TelecommunicationsBillingTransaction; State = TransactionState; ConcreteStates = Draft, Submitted and Completed; submit() and cancel() behave through the current State and transitions replace that State.

**Less suitable alternative - Observer:** Observer distributes change notifications to dependents; it does not encapsulate the Context's state-specific behavior.



**Grounding:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

</details>
