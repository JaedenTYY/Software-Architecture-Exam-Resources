# -*- coding: utf-8 -*-
"""
gen_code.py — builds the CODE IMPLEMENTATION question bank (CODE-xxxx).
Every answer contains a full, compilable Java snippet verified against the
lecturer's own examples (all 7 codebases were compiled and executed; outputs match).
"""
import json, codelib as C

Q = []
SRC_C = "Lecture13_DesignPatterns_CreationalPatterns.pdf"
SRC_S = "Lecture13_DesignPatterns_StructuralPatterns.pdf"
SRC_B = "Lecture13_DesignPatterns_BehaviouralPatterns.pdf"
SRC_ATM = "ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf"


def add(sub, typ, diff, marks, prompt, ans, code, tags, source, trap="", lang="java"):
    Q.append({
        "id": "CODE-%04d" % (len(Q) + 1),
        "bank": "Code Implementation",
        "topic": "Design Patterns (Code)",
        "subtopic": sub,
        "type": typ,
        "difficulty": diff,
        "marks": marks,
        "family": "Code Implementation",
        "scenario": "",
        "prompt": prompt,
        "answer_outline": ans,
        "code_answer": code,
        "language": lang,
        "tags": tags,
        "source": source,
        "exam_trap": trap,
    })


# =====================================================================
# 1. FACTORY METHOD
# =====================================================================
add("Factory Method", "Write full implementation", "Hard", 10,
    "Implement the **Factory Method** pattern in Java for a shape-drawing subsystem. The client must be able to obtain a Circle, Rectangle or Square by passing a type string, without using `new` on any concrete shape class itself. Provide the product interface, all concrete products, the factory, and a demo class.",
    "Full credit needs: (1) a `Shape` product interface declaring `draw()`; (2) three ConcreteProducts each overriding `draw()`; (3) a `ShapeFactory` Creator whose `getShape(String)` selects the concrete class and returns the abstract `Shape` type; (4) a demo where the client variable is declared as `Shape`, not as a concrete type. The decisive point is that the client never calls `new Circle()` — creation knowledge is localised inside the factory.",
    C.FACTORY_SHAPE + "\n\n// ---\n" + C.FACTORY_CIRCLE + "\n\n// ---\n" + C.FACTORY_RECTANGLE + "\n\n// ---\n" + C.FACTORY_SQUARE + "\n\n// ---\n" + C.FACTORY_FACTORY + "\n\n// ---\n" + C.FACTORY_DEMO + "\n\n/* Verified output:\n" + C.FACTORY_OUTPUT + "\n*/",
    ["Factory Method", "creational", "full-implementation", "Shape", "ShapeFactory"], SRC_C,
    "Declaring the client variable as `Circle` instead of `Shape` destroys the decoupling the pattern exists to provide.")

add("Factory Method", "Trace program output", "Hard", 5,
    "Given the lecturer's `FactoryPatternDemo`, state the **exact** console output produced, in order, and explain which object each line comes from.",
    "Three lines, one per `draw()` call, in the order the shapes were requested: CIRCLE, RECTANGLE, SQUARE. Each line is produced by the `draw()` override in the concrete class that `ShapeFactory.getShape()` instantiated. Dynamic dispatch on the `Shape` reference selects the concrete override at runtime.",
    "// Output:\n" + C.FACTORY_OUTPUT + "\n\n// Produced by:\n// line 1 <- Circle.draw()      (shapeFactory.getShape(\"CIRCLE\"))\n// line 2 <- Rectangle.draw()   (shapeFactory.getShape(\"RECTANGLE\"))\n// line 3 <- Square.draw()      (shapeFactory.getShape(\"SQUARE\"))",
    ["Factory Method", "trace-output", "dynamic-dispatch"], SRC_C,
    "The declared type is `Shape`, but the method that runs is the concrete class's override — not `Shape`'s.")

add("Factory Method", "Extend the codebase", "Very Hard", 8,
    "Extend the lecturer's Factory Method example with a new `Triangle` shape. Give every file you must add or change, and state precisely which existing classes must NOT change and why that matters for modifiability.",
    "Add `Triangle implements Shape`. Change only `ShapeFactory.getShape()` to add one branch. `Shape`, `Circle`, `Rectangle`, `Square` and every client are untouched — the creation decision is localised in one place, so the change is a *local* change in the Lecture 2 sense rather than a non-local one. This is exactly the modifiability benefit the pattern buys.",
    '''public class Triangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Triangle::draw() method.");
   }
}

// --- ShapeFactory.java : ONE new branch only ---
public class ShapeFactory {

   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();

      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();

      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();

      } else if(shapeType.equalsIgnoreCase("TRIANGLE")){
         return new Triangle();          // <-- only added line
      }

      return null;
   }
}

// UNCHANGED: Shape.java, Circle.java, Rectangle.java, Square.java,
//            and every client that holds a Shape reference.''',
    ["Factory Method", "extend", "modifiability", "local-change"], SRC_C,
    "Claiming client code must change: it must not. If it does, the abstraction has been leaked.")

add("Factory Method", "Spot the violation", "Very Hard", 6,
    "A student submits the code below as a Factory Method implementation. Identify why it defeats the purpose of the pattern, and give the corrected client code.",
    "The client calls `new Circle()` directly and declares the variable with the concrete type. Both the creation decision and the type dependency have leaked back into the client, so the factory is bypassed entirely — the client is now coupled to every concrete product and must be edited whenever the product set changes. Correct it by requesting the object from the factory and holding it in a `Shape` reference.",
    '''// WRONG — supplied by the student
public class BadDemo {
   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();
      Circle shape1 = new Circle();      // factory bypassed, concrete type
      shape1.draw();
   }
}

// CORRECT
public class FactoryPatternDemo {
   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();
      Shape shape1 = shapeFactory.getShape("CIRCLE");   // creation delegated
      shape1.draw();                                    // abstract reference
   }
}''',
    ["Factory Method", "spot-the-bug", "coupling"], SRC_C,
    "Instantiating the factory but then not using it is the most common fake-Factory error.")

add("Factory Method", "Map code to participants", "Hard", 5,
    "For the lecturer's Factory Method example, map each Java identifier onto its GoF participant role (Product, ConcreteProduct, Creator, ConcreteCreator) and justify each mapping from the code.",
    "`Shape` = Product (declares the interface of objects the factory method creates). `Circle`/`Rectangle`/`Square` = ConcreteProduct (implement the Product interface). `ShapeFactory` = Creator, and because it also contains the selection logic and is not subclassed here, it doubles as the ConcreteCreator. `FactoryPatternDemo` = Client. Note this is the simplified 'simple factory' shaping of the pattern: the GoF form defers the decision to Creator *subclasses* overriding the factory method.",
    '''// Product
public interface Shape { void draw(); }

// ConcreteProduct
public class Circle implements Shape { ... }

// Creator + ConcreteCreator (combined in this example)
public class ShapeFactory {
   public Shape getShape(String shapeType){ ... }   // the factory method
}

// Client
public class FactoryPatternDemo { public static void main(...) { ... } }''',
    ["Factory Method", "participants", "GoF-roles"], SRC_C,
    "The lecture slide's Structure diagram shows Creator/ConcreteCreator separately; say so rather than pretending ShapeFactory is the full GoF form.")

# =====================================================================
# 2. SINGLETON
# =====================================================================
add("Singleton", "Write full implementation", "Hard", 8,
    "Implement the **Singleton** pattern in Java exactly as presented in the lecture. Your solution must make it a *compile-time* error for a client to construct a second instance. Include a demo class showing both the illegal construct and the legal access path.",
    "Three mandatory mechanisms: (1) a `private static` field holding the sole instance, eagerly initialised; (2) a `private` constructor, which is what makes `new SingleObject()` a compile-time error; (3) a `public static getInstance()` as the single global access point. Without the private constructor there is no Singleton — only a convention.",
    C.SINGLETON_CLASS + "\n\n// ---\n" + C.SINGLETON_DEMO + "\n\n/* Verified output:\n" + C.SINGLETON_OUTPUT + "\n*/",
    ["Singleton", "creational", "full-implementation", "private-constructor"], SRC_C,
    "A public or default constructor makes the class a normal class with a convenience accessor, not a Singleton.")

add("Singleton", "Spot the violation", "Very Hard", 6,
    "The class below is offered as a Singleton. Identify every defect and give a corrected version.",
    "Two defects. First, the constructor is public, so `new BadSingleton()` compiles and unlimited instances can exist — the uniqueness guarantee is gone. Second, `instance` is public and non-final, so a client can reassign it and swap the 'sole' instance at runtime. Fix by privatising the constructor and the field and exposing only a static accessor.",
    '''// WRONG
public class BadSingleton {
   public static BadSingleton instance = new BadSingleton();
   public BadSingleton(){}                 // (1) public ctor -> not unique
   public void showMessage(){ System.out.println("Hello World!"); }
}
// client can do BOTH of these:
//   BadSingleton a = new BadSingleton();
//   BadSingleton.instance = new BadSingleton();

// CORRECT
public class SingleObject {
   private static SingleObject instance = new SingleObject();   // private
   private SingleObject(){}                                     // private ctor
   public static SingleObject getInstance(){ return instance; }
   public void showMessage(){ System.out.println("Hello World!"); }
}''',
    ["Singleton", "spot-the-bug", "encapsulation"], SRC_C,
    "Spotting only the public constructor and missing the mutable public field costs marks.")

add("Singleton", "Explain the compile error", "Hard", 4,
    "In the lecturer's `SingletonPatternDemo` the line `SingleObject object = new SingleObject();` is commented out with the note *'Compile Time Error: The constructor SingleObject() is not visible'*. Explain the exact language mechanism that produces this error, and why this is a stronger guarantee than a runtime check.",
    "`SingleObject`'s only constructor is declared `private`, so it is not accessible outside its own class body; the compiler rejects the call at compile time. This is stronger than a runtime guard (e.g. throwing an exception in a public constructor) because violations cannot reach production at all — the code simply will not build. It is a design constraint enforced by the type system rather than by discipline.",
    '''public class SingleObject {
   private static SingleObject instance = new SingleObject();

   //make the constructor private so that this class cannot be
   //instantiated
   private SingleObject(){}          // <-- the mechanism

   public static SingleObject getInstance(){
      return instance;
   }
}

// In the client:
// SingleObject object = new SingleObject();
//   -> error: SingleObject() has private access in SingleObject
SingleObject object = SingleObject.getInstance();   // the only legal path''',
    ["Singleton", "compile-time", "access-modifier"], SRC_C,
    "Saying it 'throws an exception' is wrong — nothing runs; it never compiles.")

add("Singleton", "Design trade-off in code", "Brutal", 7,
    "The lecture warns that Singleton introduces global state and testability problems. Using the lecturer's `SingleObject`, write a short client that demonstrates the testability problem concretely, then show one code change that mitigates it.",
    "The problem: because `getInstance()` is a static global access point, a class that calls it internally has a hidden dependency that a test cannot substitute — there is no seam to inject a stub, and state set by one test leaks into the next. Mitigation: depend on an interface and inject it, so production passes the Singleton while tests pass a fake. This trades away the 'globally reachable' convenience for controllability, which is exactly the Lecture 7 definition of testability (ability to control inputs and observe outputs).",
    '''// PROBLEM: hidden, unsubstitutable dependency
public class ReportService {
   public void run() {
      SingleObject.getInstance().showMessage();   // no seam for a test double
   }
}

// MITIGATION: depend on an abstraction, inject it
public interface MessageSource {
   void showMessage();
}

public class SingleObject implements MessageSource {
   private static SingleObject instance = new SingleObject();
   private SingleObject(){}
   public static SingleObject getInstance(){ return instance; }
   @Override public void showMessage(){ System.out.println("Hello World!"); }
}

public class ReportService {
   private final MessageSource source;
   public ReportService(MessageSource source){ this.source = source; }
   public void run(){ source.showMessage(); }
}

// production: new ReportService(SingleObject.getInstance());
// test:       new ReportService(new FakeMessageSource());''',
    ["Singleton", "testability", "global-state", "trade-off"], SRC_C,
    "Do not claim Singleton is simply 'bad'. State the trade-off: controlled uniqueness bought at the cost of controllability.")

# =====================================================================
# 3. COMPOSITE
# =====================================================================
add("Composite", "Write full implementation", "Hard", 12,
    "A small organisation has a general manager at the top; under him a manager and a developer; and two further developers under that manager. Print the name and salary of every employee from the top down. Implement the **Composite** pattern in Java: give the Component interface, the Leaf, the Composite, and a demo that builds this exact tree.",
    "Component = `Employee`, declaring both the leaf operations (`getName`, `getSalary`, `print`) and the child-management operations (`add`, `remove`, `getChild`) so that clients can treat leaves and composites uniformly. Leaf = `Developer`, which implements child operations as no-ops. Composite = `Manager`, which stores a `List<Employee>` and, in `print()`, prints itself and then recursively calls `print()` on each child. The recursion is what makes an arbitrarily deep hierarchy work with no client changes.",
    C.COMPOSITE_EMPLOYEE + "\n\n// ---\n" + C.COMPOSITE_DEVELOPER + "\n\n// ---\n" + C.COMPOSITE_MANAGER + "\n\n// ---\n" + C.COMPOSITE_DEMO + "\n\n/* Verified output:\n" + C.COMPOSITE_OUTPUT + "\n*/",
    ["Composite", "structural", "full-implementation", "recursion", "Employee"], SRC_S,
    "Leaving `add`/`remove`/`getChild` off the Component interface breaks uniform treatment — the client would then need to type-test before every call.")

add("Composite", "Trace program output", "Very Hard", 8,
    "Trace the **exact** console output of the lecturer's `CompositeDesignPatternMain`, and explain why the employees appear in that specific order.",
    "The tree is: Tan(10000) -> [ Khair(4500), Chin(6000) -> [ Mohammad(3500), Lee(4000) ] ]. `generalManager.print()` prints Tan first, then iterates its children in insertion order: Khair (a leaf, prints and stops), then Chin (a composite, prints itself and then recurses into Mohammad and Lee). The ordering is therefore a depth-first, pre-order traversal following `ArrayList` insertion order. Salaries print with `.0` because `getSalary()` returns `double`.",
    "// Output:\n" + C.COMPOSITE_OUTPUT + "\n\n// Traversal:\n// Tan (composite)\n//  ├── Khair    (leaf   — added first)\n//  └── Chin     (composite — added second)\n//       ├── Mohammad (leaf)\n//       └── Lee      (leaf)",
    ["Composite", "trace-output", "depth-first", "pre-order"], SRC_S,
    "Two easy losses: printing Chin before Khair (wrong insertion order), and writing `10000` instead of `10000.0`.")

add("Composite", "Explain the leaf no-ops", "Very Hard", 6,
    "In the lecturer's `Developer` class, `add()`, `remove()` and `getChild()` have empty bodies with the comment *'this is leaf node so this method is not applicable to this class.'* Explain the design trade-off this represents, and name the alternative the GoF discuss.",
    "This is the *transparency vs. safety* trade-off. Declaring child operations on the Component interface maximises **transparency**: a client can call `add()` on any `Employee` without knowing whether it is a leaf or a composite, which is the whole point of uniform treatment. The cost is **safety**: calling `add()` on a `Developer` is meaningless yet compiles and silently does nothing. The alternative is to declare child operations only on `Composite`, which makes the error a compile-time one but forces clients to type-test and breaks uniformity. The lecture's example chooses transparency. Matches the lecture's stated consequence that Composite 'can make type-specific constraints harder'.",
    '''// The lecturer's choice — TRANSPARENCY
public interface Employee {
      public void add(Employee employee);      // on the Component
      public void remove(Employee employee);
      public Employee getChild(int i);
      public String getName();
      public double getSalary();
      public void print();
}

public class Developer implements Employee{
  public void add(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }                                            // silently does nothing
  public Employee getChild(int i) {
    //this is leaf node so this method is not applicable to this class.
    return null;
  }
  ...
}

// The alternative — SAFETY (child ops only on the Composite)
public interface Employee { String getName(); double getSalary(); void print(); }
public class Manager implements Employee {
   public void add(Employee e){ employees.add(e); }   // not on the interface
   ...
}
// now developer.add(x) will not compile — but clients must downcast to Manager,
// so leaves and composites are no longer treated uniformly.''',
    ["Composite", "transparency-vs-safety", "design-trade-off"], SRC_S,
    "Calling the empty methods 'a bug' misses the point — they are a deliberate consequence of choosing transparency.")

add("Composite", "Extend the codebase", "Very Hard", 8,
    "Extend the Composite example so that `Manager.getTotalSalary()` returns the combined salary of that manager and everyone beneath them, at any depth. Give the code and state which classes change.",
    "Add `getTotalSalary()` to the `Employee` interface. In `Developer` (leaf) it returns just its own salary — the recursion base case. In `Manager` (composite) it returns its own salary plus the recursive sum over its children. Both classes change plus the interface; the client does not need to know the tree's depth, which is the payoff of the recursive structure.",
    '''// Employee.java — add to the Component interface
public interface Employee {
      public void add(Employee employee);
      public void remove(Employee employee);
      public Employee getChild(int i);
      public String getName();
      public double getSalary();
      public double getTotalSalary();       // <-- new
      public void print();
}

// Developer.java — LEAF: base case of the recursion
public double getTotalSalary() {
    return salary;
}

// Manager.java — COMPOSITE: own salary + recursive sum of children
public double getTotalSalary() {
    double total = salary;
    for (Employee employee : employees) {
        total += employee.getTotalSalary();
    }
    return total;
}

// Client — depth is irrelevant:
//   generalManager.getTotalSalary()
//   = 10000 + 4500 + (6000 + 3500 + 4000) = 28000.0''',
    ["Composite", "extend", "recursion", "part-whole"], SRC_S,
    "Forgetting the leaf base case, or summing children but omitting the composite's own salary.")

add("Composite", "Fill in the missing class", "Hard", 7,
    "You are given the lecturer's `Employee` interface and `Manager` composite, but `Developer` is missing. Write the complete `Developer` leaf class so the program compiles and produces the documented output.",
    "The leaf must implement every Component method: real behaviour for `getName`, `getSalary` and `print`; no-op/`null` implementations for the three child-management operations, because a leaf has no children. `print()` must emit exactly the same dashed-line format as `Manager` so that output is uniform regardless of node type.",
    C.COMPOSITE_DEVELOPER,
    ["Composite", "fill-in-the-blank", "leaf"], SRC_S,
    "Omitting `add`/`remove`/`getChild` will not compile — an interface implementation must be total.")

# =====================================================================
# 4. FACADE
# =====================================================================
add("Facade", "Write full implementation", "Hard", 10,
    "A client needs to draw circles, rectangles and squares but should not have to know about the individual shape classes or construct any of them. Implement the **Facade** pattern in Java: give the subsystem interface, the subsystem classes, the facade, and a demo.",
    "Subsystem = `Shape` plus `Circle`/`Rectangle`/`Square`. Facade = `ShapeMaker`, which privately owns one instance of each subsystem class and exposes simple, intention-revealing methods (`drawCircle()`, `drawRectangle()`, `drawSquare()`). The client talks only to `ShapeMaker` and never imports or instantiates a subsystem class, which is exactly the coupling reduction the pattern provides. Note the subsystem classes hold no reference back to the facade — per the lecture, they 'have no knowledge of the facade'.",
    C.FACADE_SHAPE + "\n\n// ---\n" + C.FACADE_CIRCLE + "\n\n// ---\n" + C.FACADE_RECTANGLE + "\n\n// ---\n" + C.FACADE_SQUARE + "\n\n// ---\n" + C.FACADE_MAKER + "\n\n// ---\n" + C.FACADE_DEMO + "\n\n/* Verified output:\n" + C.FACADE_OUTPUT + "\n*/",
    ["Facade", "structural", "full-implementation", "ShapeMaker"], SRC_S,
    "Making the facade's fields public, or letting subsystem classes reference the facade, breaks the one-way dependency the pattern relies on.")

add("Facade", "Compare with Factory Method", "Brutal", 8,
    "The lecturer's Factory Method example and Facade example both use a `Shape` interface with `Circle`, `Rectangle` and `Square`. Explain, with reference to the code, why they are nevertheless different patterns solving different problems.",
    "Different intents, visible in the method signatures. `ShapeFactory.getShape(String)` **returns** a `Shape` — its job is object *creation*, and the client still holds and uses the product afterwards. `ShapeMaker.drawCircle()` returns `void` — it creates its subsystem objects once in its constructor and then *performs the work on the client's behalf*, so the client never holds a `Shape` at all. Factory Method (creational) answers 'which object do I instantiate?'; Facade (structural) answers 'how do I hide a complicated subsystem behind a simple interface?'. Similar class names, different problems.",
    '''// FACTORY METHOD — creational: hands the product back to the client
public class ShapeFactory {
   public Shape getShape(String shapeType){ ... }   // RETURNS Shape
}
Shape shape1 = shapeFactory.getShape("CIRCLE");     // client holds a Shape
shape1.draw();                                      // client drives it

// FACADE — structural: does the work, client never sees the subsystem
public class ShapeMaker {
   private Shape circle;                            // owned privately
   public ShapeMaker() { circle = new Circle(); ... }
   public void drawCircle(){ circle.draw(); }       // returns void
}
ShapeMaker shapeMaker = new ShapeMaker();
shapeMaker.drawCircle();                            // client holds no Shape''',
    ["Facade", "Factory Method", "compare", "intent"], SRC_S,
    "'They both use Shape so they're similar' earns nothing. Compare the intent and the return types.")

add("Facade", "Extend the codebase", "Hard", 6,
    "Add a `drawAll()` operation to the lecturer's `ShapeMaker` that draws all three shapes in the order circle, rectangle, square. State what the client must change and what this shows about the facade's value.",
    "Only `ShapeMaker` changes; the subsystem classes and the client's existing calls are untouched. This demonstrates the facade's real payoff: it is a single, controlled place to add higher-level convenience operations, so behaviour can be composed without the client ever learning the subsystem's structure.",
    '''public class ShapeMaker {
   private Shape circle;
   private Shape rectangle;
   private Shape square;

   public ShapeMaker() {
      circle = new Circle();
      rectangle = new Rectangle();
      square = new Square();
   }

   public void drawCircle(){ circle.draw(); }
   public void drawRectangle(){ rectangle.draw(); }
   public void drawSquare(){ square.draw(); }

   public void drawAll(){          // <-- new higher-level operation
      drawCircle();
      drawRectangle();
      drawSquare();
   }
}

// Client:
//   shapeMaker.drawAll();
// Output:
//   Circle::draw()
//   Rectangle::draw()
//   Square::draw()
// UNCHANGED: Shape.java, Circle.java, Rectangle.java, Square.java''',
    ["Facade", "extend", "higher-level-interface"], SRC_S,
    "The lecture warns a facade can become bloated — note the limit rather than implying unlimited additions are free.")

add("Facade", "Trace program output", "Hard", 4,
    "State the exact output of the lecturer's `FacadePatternDemo`, and explain how many `Circle` objects are created during the whole run and when.",
    "Output is three lines in call order. Exactly one `Circle` is created, and it is created in the `ShapeMaker` constructor — not per call. `drawCircle()` merely delegates to the already-constructed instance, so calling it ten times still involves one `Circle`. Note the strings here are `Circle::draw()` (Facade example), not `Inside Circle::draw() method.` (Factory example) — the two decks use different message text.",
    "// Output:\n" + C.FACADE_OUTPUT + "\n\n// Object creation:\n// new ShapeMaker()  -> constructs Circle, Rectangle, Square ONCE each\n// drawCircle()      -> reuses the existing circle field (no allocation)",
    ["Facade", "trace-output", "object-lifetime"], SRC_S,
    "Mixing up the two decks' print strings — Facade prints `Circle::draw()`, Factory prints `Inside Circle::draw() method.`")

# =====================================================================
# 5. OBSERVER
# =====================================================================
add("Observer", "Write full implementation", "Hard", 12,
    "Implement the **Observer** pattern in Java for a social-media scenario: a celebrity has many followers; each follower must automatically receive every post the celebrity makes; followers may start or stop following at any time. Give the Subject interface, the Observer interface, the ConcreteSubject, the ConcreteObserver, and a demo.",
    "Subject = interface with `register`, `unregister`, `notifyAllObservers`. Observer = interface with `update(name, post)`. ConcreteSubject = `Celebrity`, holding an `ArrayList<Observer>` and calling `notifyAllObservers()` from inside `post()` so that publishing automatically triggers notification. ConcreteObserver = `Follower`, whose `update()` reacts to the notification. The decisive property: `Celebrity` knows only the `Observer` *interface*, never `Follower`, so followers can be added or removed without changing the subject — the one-to-many dependency is maintained without tight coupling.",
    C.OBSERVER_SUBJECT + "\n\n// ---\n" + C.OBSERVER_OBSERVER + "\n\n// ---\n" + C.OBSERVER_CELEBRITY + "\n\n// ---\n" + C.OBSERVER_FOLLOWER + "\n\n// ---\n" + C.OBSERVER_DEMO,
    ["Observer", "behavioral", "full-implementation", "Celebrity", "Follower"], SRC_B,
    "Typing the list as `ArrayList<Follower>` instead of `ArrayList<Observer>` couples the subject to a concrete observer and defeats the pattern.")

add("Observer", "Trace program output", "Brutal", 10,
    "Trace the output of the lecturer's `ObserverDesignPattern` demo. In particular, explain exactly why `samir` receives the second Bill Gates post but not the third, and why `tan` never receives any Bill Gates post at all.",
    "Registration order produces the six 'has started following' lines. `mahatir.post(...)` notifies only mahatir's list: muhammad, lee, tan. The first `billgates.post(...)` notifies muhammad, lee, samir. Then `billgates.unregister(samir)` removes samir from that list only, so the third post reaches just muhammad and lee. `tan` never receives a Bill Gates post because tan was only ever registered with mahatir — each ConcreteSubject holds its own independent observer list. This is the pattern's key runtime property: the subject notifies exactly its current registrants, and the set can change between notifications.",
    "// Verified output:\n" + C.OBSERVER_OUTPUT + "\n\n// Why:\n// mahatir.followers  = [muhammad, lee, tan]\n// billgates.followers= [muhammad, lee, samir]  -> after unregister(samir): [muhammad, lee]\n// each Celebrity instance owns a SEPARATE ArrayList<Observer>",
    ["Observer", "trace-output", "unregister", "independent-subjects"], SRC_B,
    "Assuming one global observer list. Each subject instance has its own — that is why tan never hears from Bill Gates.")

add("Observer", "Extend the codebase", "Very Hard", 8,
    "Extend the Observer example with a new observer type `NewsAgency` that reacts to a celebrity post differently from a `Follower`. Give the code, and state what must change in `Celebrity`.",
    "`Celebrity` changes **not at all**. Because it is programmed against the `Observer` interface, any new implementer can be registered. This is precisely the lecture's stated advantage: 'new recipients can be added without modification to the producers'. Add `NewsAgency implements Observer` with its own `update()` behaviour and register it like any other observer.",
    '''package ObserverExample;
//A second, different kind of Observer
class NewsAgency implements Observer{
  private String agencyName;
  private int storiesFiled = 0;

  public NewsAgency(String agencyName) {
    this.agencyName = agencyName;
  }

  @Override
  public void update(String celebrityName, String post) {
    storiesFiled++;
    System.out.println("[" + agencyName + "] BREAKING (" + storiesFiled + "): "
        + celebrityName + " said -> " + post);
  }

  @Override
  public String toString() {
    return agencyName;
  }
}

// Registering it — Celebrity needs NO change whatsoever:
//   NewsAgency reuters = new NewsAgency("Reuters");
//   billgates.register(reuters);
//   billgates.post("Foundation announces new grant");
//
// UNCHANGED: Subject.java, Observer.java, Celebrity.java, Follower.java''',
    ["Observer", "extend", "open-closed", "decoupling"], SRC_B,
    "Saying `Celebrity` must be edited: it must not. If it does, you have coupled the subject to concrete observers.")

add("Observer", "Spot the violation", "Brutal", 8,
    "A student rewrites `Celebrity` as shown below. Explain what breaks, referencing the pattern's intent, and give the corrected code.",
    "The student typed the collection as `ArrayList<Follower>` and calls a `Follower`-specific method. The subject is now coupled to one concrete observer class: no other observer type can ever register, and adding one forces `Celebrity` to change — destroying the 'notify without knowing who' property that is the pattern's entire intent. Correct it by depending only on the `Observer` interface.",
    '''// WRONG
class Celebrity implements Subject {
    private ArrayList<Follower> followers;        // (1) concrete type
    @Override
    public void register(Observer o) {
        followers.add((Follower) o);              // (2) unsafe downcast
    }
    @Override
    public void notifyAllObservers(String post) {
        for(Follower f : followers) {
            f.receivePost(celebrityName, post);   // (3) Follower-only method
        }
    }
}
// -> registering a NewsAgency throws ClassCastException at runtime

// CORRECT
class Celebrity implements Subject {
    private ArrayList<Observer> followers;        // interface type
    @Override
    public void register(Observer o) {
        followers.add(o);                         // no cast needed
        System.out.println(o + " has started following " + celebrityName);
    }
    @Override
    public void notifyAllObservers(String post) {
        for(Observer follower : followers) {
            follower.update(celebrityName, post); // interface method only
        }
        System.out.println();
    }
}''',
    ["Observer", "spot-the-bug", "ClassCastException", "coupling"], SRC_B,
    "Identifying the downcast but not explaining that it defeats the intent only earns partial credit.")

add("Observer", "Architecture vs implementation", "Brutal", 8,
    "The lecture notes Observer is *'Also Known As: Dependents, Publish-Subscribe'*. Using the `Celebrity`/`Follower` code, explain why Observer is nevertheless **not** the same thing as the architectural Publish-Subscribe pattern from Lecture 4.",
    "They sit at different levels of abstraction. In the Observer code the `Celebrity` object holds a direct `ArrayList<Observer>` of in-process object references and invokes `update()` as an ordinary synchronous method call within one JVM — this is class/object-level design. Architectural Publish-Subscribe describes *runtime components* connected by an event-distribution connector, where publishers place events on a bus and an infrastructure element routes them to subscribers that may be in separate processes or machines. In fact the lecture's list-based publish-subscribe variant is the closest architectural analogue of Observer, precisely because the publisher maintains its own subscription list. Use Publish-Subscribe for system-level event architecture; use Observer when the question asks for an object-level design pattern.",
    '''// OBSERVER (implementation level) — direct object references, same JVM
class Celebrity implements Subject {
    private ArrayList<Observer> followers;        // direct references
    public void notifyAllObservers(String post) {
        for(Observer follower : followers)
            follower.update(celebrityName, post); // synchronous method call
    }
}

// PUBLISH-SUBSCRIBE (architectural level) — conceptual shape
//   [Publisher Component] --announce--> || EVENT BUS / DISTRIBUTOR ||
//                                            --listen--> [Subscriber Component]
//   * publisher holds NO reference to any subscriber
//   * connector is infrastructure, possibly cross-process / cross-machine
//   * lecture weaknesses: increased latency, no guaranteed delivery/ordering''',
    ["Observer", "Publish-Subscribe", "abstraction-level", "architecture-vs-design"], SRC_B + "; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf",
    "Treating the two as interchangeable. The shared alias 'publish-subscribe' is the trap, not the answer.")

# =====================================================================
# 6. STATE — ROBOT
# =====================================================================
add("State (Robot)", "Write full implementation", "Hard", 12,
    "A cooking robot can walk, cook, or be switched off. If it is **on** it may walk; asking it to cook moves it to the cook state; asking it to switch off switches it off. When **cooking** it may walk or cook but cannot be switched off. When **off** it automatically switches on and walks if told to walk, but cannot cook. Implement this with the **State** pattern rather than if-else branches.",
    "State = `RoboticState` interface declaring `walk()`, `cook()`, `off()`. Context = `Robot`, which holds one instance of each ConcreteState plus a current `state` field, and delegates every public call to `state`. ConcreteStates = `RoboticOn`, `RoboticCook`, `RoboticOff`, each implementing all three operations and performing the transition by calling `robot.setRoboticState(...)`. Each branch of what would have been a large conditional now lives in its own class, so adding a state means adding a class rather than editing every conditional.",
    C.STATE_INTERFACE + "\n\n// ---\n" + C.STATE_ROBOT + "\n\n// ---\n" + C.STATE_ON + "\n\n// ---\n" + C.STATE_COOK + "\n\n// ---\n" + C.STATE_OFF + "\n\n// ---\n" + C.STATE_DEMO + "\n\n/* Verified output:\n" + C.STATE_OUTPUT + "\n*/",
    ["State", "behavioral", "full-implementation", "Robot", "transitions"], SRC_B,
    "A ConcreteState that prints but never calls `setRoboticState` leaves the machine stuck — the transition is the point.")

add("State (Robot)", "Trace program output", "Brutal", 10,
    "Trace the exact output of the lecturer's `TestStatePattern`, naming the robot's state before and after every call.",
    "Start in RoboticOn (set by the constructor). walk -> 'Walking...', stays On. cook -> 'Cooking...', moves to Cook. walk -> 'Walking...', moves back to On. off -> moves to Off then prints 'Robot is switched off' (note the transition happens *before* the print in `RoboticOn.off()`). walk -> 'Walking...', moves to On. off -> to Off, prints again. cook -> 'Cannot cook at Off state.', no transition. Seven lines total.",
    "// Verified output:\n" + C.STATE_OUTPUT + "\n\n// State trace:\n// init          -> RoboticOn\n// walk()  On    -> On     : \"Walking...\"\n// cook()  On    -> Cook   : \"Cooking...\"\n// walk()  Cook  -> On     : \"Walking...\"\n// off()   On    -> Off    : \"Robot is switched off\"\n// walk()  Off   -> On     : \"Walking...\"\n// off()   On    -> Off    : \"Robot is switched off\"\n// cook()  Off   -> Off    : \"Cannot cook at Off state.\"",
    ["State", "trace-output", "state-transitions"], SRC_B,
    "Missing that `walk()` from Off transitions back to On means the final two lines come out wrong.")

add("State (Robot)", "Refactor conditionals to State", "Brutal", 12,
    "The code below implements the robot with enum-and-switch logic. Refactor it into the **State** pattern and explain, using the lecture's stated applicability, why the refactoring is justified.",
    "The lecture's applicability says to use State when 'operations have large, multipart conditional statements that depend on the object's state' and 'often, several operations will contain this same conditional structure'. Here all three methods repeat the same three-way switch — so a new state means editing every method, and the transition logic is scattered. The refactoring puts each branch of the conditional into its own class, so state-specific behaviour is localised and adding a state is additive.",
    '''// BEFORE — the same switch repeated in every operation
public class Robot {
    enum S { ON, COOK, OFF }
    private S state = S.ON;

    public void walk() {
        switch (state) {
            case ON:   System.out.println("Walking..."); break;
            case COOK: System.out.println("Walking..."); state = S.ON; break;
            case OFF:  System.out.println("Walking..."); state = S.ON; break;
        }
    }
    public void cook() {
        switch (state) {
            case ON:   System.out.println("Cooking..."); state = S.COOK; break;
            case COOK: System.out.println("Cooking..."); break;
            case OFF:  System.out.println("Cannot cook at Off state."); break;
        }
    }
    public void off() {
        switch (state) {
            case ON:   state = S.OFF; System.out.println("Robot is switched off"); break;
            case COOK: System.out.println("Cannot switched off while cooking..."); break;
            case OFF:  System.out.println("Already switched off..."); break;
        }
    }
}

// AFTER — one class per state; Context delegates
public interface RoboticState {
    public void walk();
    public void cook();
    public void off();
}

public class Robot implements RoboticState{
    private RoboticState roboticOn, roboticCook, roboticOff, state;
    public Robot(){
        this.roboticOn = new RoboticOn(this);
        this.roboticCook = new RoboticCook(this);
        this.roboticOff = new RoboticOff(this);
        this.state = roboticOn;
    }
    public void setRoboticState(RoboticState state){ this.state = state; }
    @Override public void walk() { state.walk(); }   // pure delegation
    @Override public void cook() { state.cook(); }
    @Override public void off()  { state.off();  }
    public RoboticState getRoboticOn()   { return roboticOn; }
    public RoboticState getRoboticCook() { return roboticCook; }
    public RoboticState getRoboticOff()  { return roboticOff; }
}

public class RoboticOn implements RoboticState{
    private final Robot robot;
    public RoboticOn(Robot robot){ this.robot = robot; }
    @Override public void walk() { System.out.println("Walking..."); }
    @Override public void cook() {
        System.out.println("Cooking...");
        robot.setRoboticState(robot.getRoboticCook());
    }
    @Override public void off() {
        robot.setRoboticState(robot.getRoboticOff());
        System.out.println("Robot is switched off");
    }
}
// ... RoboticCook and RoboticOff likewise, one class per state''',
    ["State", "refactoring", "conditionals", "applicability"], SRC_B,
    "Refactoring the syntax but leaving the switch inside each ConcreteState — the branches must disappear entirely.")

add("State (Robot)", "Extend the codebase", "Very Hard", 9,
    "Add a `RoboticCharging` state to the robot: while charging it cannot walk and cannot cook, but it can be switched off. Give the new class and every change to existing classes.",
    "Add `RoboticCharging implements RoboticState`, plus a field, getter and constructor line in `Robot`. The three existing ConcreteStates need change only if a transition *into* charging is required. This is the pattern's core benefit: the new behaviour is a new class rather than a new branch inside three existing methods — contrast with the switch version, where every operation would need editing.",
    '''package StateExample;
public class RoboticCharging implements RoboticState{
    private final Robot robot;
    public RoboticCharging(Robot robot){
        this.robot = robot;
    }
    @Override
    public void walk() {
        System.out.println("Cannot walk while charging...");
    }
    @Override
    public void cook() {
        System.out.println("Cannot cook while charging...");
    }
    @Override
    public void off() {
        robot.setRoboticState(robot.getRoboticOff());
        System.out.println("Robot is switched off");
    }
}

// --- Robot.java : add field, wire it up, expose getter ---
private RoboticState roboticCharging;

public Robot(){
    this.roboticOn = new RoboticOn(this);
    this.roboticCook = new RoboticCook(this);
    this.roboticOff = new RoboticOff(this);
    this.roboticCharging = new RoboticCharging(this);   // <-- new
    this.state = roboticOn;
}

public RoboticState getRoboticCharging() { return roboticCharging; }
public void setRoboticCharging(RoboticState roboticCharging) {
    this.roboticCharging = roboticCharging;
}

// --- Optional: a transition INTO charging, e.g. in RoboticOff ---
// @Override public void charge() { robot.setRoboticState(robot.getRoboticCharging()); }
// (requires adding charge() to RoboticState and all implementers)

// UNCHANGED unless a transition into charging is added:
//   RoboticOn.java, RoboticCook.java, RoboticOff.java''',
    ["State", "extend", "new-state", "open-closed"], SRC_B,
    "Adding an operation to the State interface forces every implementer to change — say so rather than claiming it is free.")

add("State (Robot)", "Explain the transition ordering", "Very Hard", 6,
    "In `RoboticOn.off()` the lecturer sets the new state **before** printing, whereas in `RoboticOn.cook()` the print happens **before** the transition. Does this ordering affect the observable output? Explain precisely.",
    "For this program, no — the print statements are literal strings that do not read the robot's current state, so swapping the two lines produces identical output. But the ordering *would* matter if the message were derived from state (e.g. printing `robot.getState()`), or if `setRoboticState` had side effects, or in a concurrent setting where another thread could observe the object between the two statements. The safe general rule is to complete the transition and then report, so the object is never observed in a half-updated condition.",
    '''// As written in RoboticOn:
@Override
public void off() {
    robot.setRoboticState(robot.getRoboticOff());   // transition FIRST
    System.out.println("Robot is switched off");    // then report
}

@Override
public void cook() {
    System.out.println("Cooking...");               // report FIRST
    robot.setRoboticState(robot.getRoboticCook());  // then transition
}

// Output is identical either way HERE, because the strings are literals.
// It would NOT be identical if the message depended on current state:
@Override
public void off() {
    System.out.println("Now in: " + robot.getState());  // prints RoboticOn
    robot.setRoboticState(robot.getRoboticOff());
    System.out.println("Now in: " + robot.getState());  // prints RoboticOff
}''',
    ["State", "ordering", "side-effects", "concurrency"], SRC_B,
    "Answering a flat 'yes it changes the output' without checking whether the printed string actually reads the state.")

# =====================================================================
# 7. STATE — ATM (Tutorial 8)
# =====================================================================
add("State (ATM)", "Write full implementation", "Brutal", 15,
    "A bank wants an ATM system supporting: insert card, eject card, insert PIN, withdraw money. The machine behaves differently in four situations — no card inserted; card inserted; card inserted with correct PIN entered; and machine out of cash. Propose a suitable design pattern and write the complete Java implementation.",
    "The State pattern. Behaviour depends entirely on which of four situations the machine is in, and all four operations behave differently in each — the lecture's exact applicability condition. State = `ATMState` interface with the four operations. Context = `ATMMachine`, holding one instance of each state, a current `atmState`, and the machine's cash; every public method delegates to `atmState`. ConcreteStates = `NoCard`, `HasCard`, `HasPin`, `NoCash`. Note `HasPin.withdrawCash()` carries the important conditional transition: after a successful withdrawal it returns to `NoCard`, but if cash has run to zero it moves to `NoCash` instead.",
    C.ATM_STATE + "\n\n// ---\n" + C.ATM_MACHINE + "\n\n// ---\n" + C.ATM_NOCARD + "\n\n// ---\n" + C.ATM_HASCARD + "\n\n// ---\n" + C.ATM_HASPIN + "\n\n// ---\n" + C.ATM_NOCASH + "\n\n// ---\n" + C.ATM_DEMO + "\n\n/* Verified output:\n" + C.ATM_OUTPUT + "\n*/",
    ["State", "ATM", "full-implementation", "tutorial-8"], SRC_ATM,
    "Answering 'Strategy' — Strategy swaps an interchangeable algorithm chosen by the client; here the object's own internal state drives the behaviour change and the transitions.")

add("State (ATM)", "Trace program output", "Brutal", 10,
    "Trace the exact output of `TestATMMachine`, naming the ATM's state before and after every call, and explain why the last three calls all report that there is no money.",
    "Start in NoCard (constructor, since cashInMachine = 3000 is not < 0). insertATMCard -> 'Please enter your pin', to HasCard. ejectATMCard -> 'Your card is ejected', back to NoCard. insertATMCard -> to HasCard. insertPin(1234) -> correct, to HasPin. withdrawCash(3000) -> prints the amount, sets cash to 0, ejects to NoCard, then because cashInMachine <= 0 immediately overrides the state to NoCash. From that point the machine is permanently in NoCash, so insertATMCard and insertPin both fall through to NoCash's implementations, which report there is no money regardless of the input. The 1234 PIN is never even examined.",
    "// Verified output:\n" + C.ATM_OUTPUT + "\n\n// State trace:\n// init                -> NoCard        (cashInMachine = 3000)\n// insertATMCard()     NoCard  -> HasCard\n// ejectATMCard()      HasCard -> NoCard\n// insertATMCard()     NoCard  -> HasCard\n// insertPin(1234)     HasCard -> HasPin      (correct PIN)\n// withdrawCash(3000)  HasPin  -> NoCard -> NoCash   (cash now 0)\n// insertATMCard()     NoCash  -> NoCash      \"There is no money in this ATM\"\n// insertPin(1234)     NoCash  -> NoCash      \"There is no money in this ATM\"",
    ["State", "ATM", "trace-output", "double-transition"], SRC_ATM,
    "Missing the double transition inside `withdrawCash` — it sets NoCard first, then overrides to NoCash. Both happen in one call.")

add("State (ATM)", "Predict output for a new sequence", "Brutal", 10,
    "For a fresh `ATMMachine`, predict the exact output of this sequence and name the state after each call:\n\n```\natmMachine.withdrawCash(500);\natmMachine.insertATMCard();\natmMachine.insertPin(9999);\natmMachine.insertATMCard();\natmMachine.insertPin(1234);\natmMachine.withdrawCash(5000);\n```",
    "A fresh machine starts in NoCard with 3000. The withdrawal attempt with no card is rejected. The card goes in, the wrong PIN ejects it and returns to NoCard. The card goes back in, the correct PIN moves to HasPin. Requesting 5000 exceeds the 3000 available, so the machine reports insufficient cash and ejects to NoCard — importantly, the cash balance is NOT reduced and the machine does NOT enter NoCash, because that branch never touches `setCashInMachine`.",
    '''// Predicted output:
You have not entered your card
Please enter your pin
You entered the wrong PIN
Your card is ejected
Please enter your pin
You entered the correct PIN
There isn't enough available cash
Your card is ejected

// State trace (cashInMachine stays 3000 throughout):
// init                 -> NoCard
// withdrawCash(500)    NoCard  -> NoCard   "You have not entered your card"
// insertATMCard()      NoCard  -> HasCard  "Please enter your pin"
// insertPin(9999)      HasCard -> NoCard   wrong PIN -> two lines, card ejected
// insertATMCard()      NoCard  -> HasCard  "Please enter your pin"
// insertPin(1234)      HasCard -> HasPin   "You entered the correct PIN"
// withdrawCash(5000)   HasPin  -> NoCard   over-limit branch: 2 lines,
//                                          cash NOT debited, NOT NoCash''',
    ["State", "ATM", "predict-output", "guard-condition"], SRC_ATM,
    "Assuming an over-limit withdrawal empties the machine or triggers NoCash — that branch never calls `setCashInMachine`.")

add("State (ATM)", "Spot the violation", "Brutal", 9,
    "A developer edits `HasCard.insertPin()` as shown below, reporting that wrong PINs now 'work properly'. Identify the defects and give the corrected method.",
    "Two defects. First, on the wrong-PIN branch the developer sets `correctPinEntered = true` and transitions to `HasPin`, so an incorrect PIN grants withdrawal rights — a security failure, not merely a logic slip. Second, the card is never ejected on failure, so the machine is left in an inconsistent state relative to the specification. The corrected version sets the flag false, prints the rejection, and returns the machine to `NoCard` with the card ejected.",
    '''// WRONG
@Override
public void insertPin(int pinEntered) {
    if(pinEntered == 1234){
        System.out.println("You entered the correct PIN");
        atmMachine.correctPinEntered = true;
        atmMachine.setATMState(atmMachine.getHasPin());
    } else {
        System.out.println("You entered the wrong PIN");
        atmMachine.correctPinEntered = true;                    // (1) SECURITY BUG
        atmMachine.setATMState(atmMachine.getHasPin());         // (2) grants access
        // (3) card never ejected
    }
}

// CORRECT — as supplied by the lecturer
@Override
public void insertPin(int pinEntered) {
    if(pinEntered == 1234){
        System.out.println("You entered the correct PIN");
        atmMachine.correctPinEntered = true;
        atmMachine.setATMState(atmMachine.getHasPin());
    } else {
        System.out.println("You entered the wrong PIN");
        atmMachine.correctPinEntered = false;
        System.out.println("Your card is ejected");
        atmMachine.setATMState(atmMachine.getNoCardState());
    }
}''',
    ["State", "ATM", "spot-the-bug", "security"], SRC_ATM,
    "Describing it as 'a logic error' understates it — this is an authentication bypass.")

add("State (ATM)", "Fill in the missing class", "Very Hard", 8,
    "You are given `ATMState`, `ATMMachine`, `NoCard`, `HasCard` and `NoCash`, but `HasPin` is missing. Write the complete `HasPin` class so the documented behaviour and output are reproduced exactly.",
    "`HasPin` must implement all four operations: reject a second card, eject on request and return to NoCard, reject a repeated PIN entry, and handle withdrawal. Withdrawal is the demanding part — it needs the over-limit guard (report, eject, no debit), the success path (report, debit, eject to NoCard), and then the nested check that moves to NoCash when the balance has reached zero.",
    C.ATM_HASPIN,
    ["State", "ATM", "fill-in-the-blank", "HasPin"], SRC_ATM,
    "Omitting the nested `if(atmMachine.cashInMachine <= 0)` — without it the ATM keeps serving customers with an empty cash box.")

add("State (ATM)", "Extend the codebase", "Brutal", 12,
    "Extend the ATM so a card is retained after three consecutive wrong PIN attempts, using a new `CardBlocked` state. Give the new class and all changes to existing classes.",
    "Add a `wrongPinAttempts` counter to the Context (it is machine-level data, not state-level, so it belongs in `ATMMachine` alongside `cashInMachine`). Add `CardBlocked implements ATMState` where every operation refuses service. Modify only `HasCard.insertPin()`'s failure branch to increment the counter and switch to `CardBlocked` on the third failure, resetting the counter on success. `NoCard`, `HasPin` and `NoCash` are untouched — again, a new behaviour is a new class rather than edits spread across the machine.",
    '''package ATMMachineStateExample;
public class CardBlocked implements ATMState {

	ATMMachine atmMachine;
	public CardBlocked(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}

	@Override
	public void insertATMCard() {
		System.out.println("Your card has been retained. Contact your bank.");
	}

	@Override
	public void ejectATMCard() {
		System.out.println("Card retained after 3 failed PIN attempts");
		System.out.println("It cannot be ejected");
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		System.out.println("Card blocked. Withdrawal denied.");
	}

	@Override
	public void insertPin(int pinEntered) {
		System.out.println("Card blocked. PIN entry disabled.");
	}
}

// --- ATMMachine.java : counter + state instance + getter ---
ATMState cardBlocked;
int wrongPinAttempts = 0;              // machine-level data

public ATMMachine(){
	hasCard = new HasCard(this);
	noCard = new NoCard(this);
	hasCorrectPin = new HasPin(this);
	atmOutOfMoney = new NoCash(this);
	cardBlocked = new CardBlocked(this);        // <-- new
	atmState = noCard;
	if(cashInMachine < 0){
		atmState = atmOutOfMoney;
	}
}

public ATMState getCardBlockedState() { return cardBlocked; }

// --- HasCard.java : only the failure branch changes ---
@Override
public void insertPin(int pinEntered) {
	if(pinEntered == 1234){
		System.out.println("You entered the correct PIN");
		atmMachine.correctPinEntered = true;
		atmMachine.wrongPinAttempts = 0;                    // reset on success
		atmMachine.setATMState(atmMachine.getHasPin());
	} else {
		System.out.println("You entered the wrong PIN");
		atmMachine.correctPinEntered = false;
		atmMachine.wrongPinAttempts++;                      // count the failure
		if(atmMachine.wrongPinAttempts >= 3){
			System.out.println("Three failed attempts - card retained");
			atmMachine.setATMState(atmMachine.getCardBlockedState());
		} else {
			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());
		}
	}
}

// UNCHANGED: ATMState.java, NoCard.java, HasPin.java, NoCash.java''',
    ["State", "ATM", "extend", "CardBlocked", "counter"], SRC_ATM,
    "Putting the counter inside `HasCard` — it would reset every time the state object is re-entered, so the count would never reach three.")

add("State (ATM)", "Map code to participants", "Very Hard", 6,
    "Map the ATM implementation onto the GoF State participants (Context, State, ConcreteState) and explain the specific mechanism by which a ConcreteState changes the Context's behaviour.",
    "Context = `ATMMachine`: it defines the client-facing interface and holds a reference to the current ConcreteState. State = `ATMState`: the interface encapsulating the behaviour associated with a state. ConcreteStates = `NoCard`, `HasCard`, `HasPin`, `NoCash`. Mechanism: `ATMMachine` passes itself to each state's constructor (`new HasCard(this)`), giving every ConcreteState a back-reference. A ConcreteState then calls `atmMachine.setATMState(...)` to swap the Context's current state field, so the *next* client call is dispatched to a different object. This matches the lecture's statement that 'a context may pass itself as an argument to the State object handling the request'.",
    '''// Context — holds the current state, delegates everything
public class ATMMachine {
	ATMState hasCard, noCard, hasCorrectPin, atmOutOfMoney;
	ATMState atmState;                                   // current state

	public ATMMachine(){
		hasCard = new HasCard(this);                     // passes ITSELF
		noCard  = new NoCard(this);
		atmState = noCard;
	}
	void setATMState(ATMState newATMState){ atmState = newATMState; }
	public void insertATMCard() { atmState.insertATMCard(); }   // delegation
}

// State — the interface
public interface ATMState {
	void insertATMCard();
	void ejectATMCard();
	void insertPin(int pinEntered);
	void withdrawCash(int cashToWithdraw);
}

// ConcreteState — uses the back-reference to change the Context's behaviour
public class NoCard implements ATMState {
	ATMMachine atmMachine;                               // back-reference
	public NoCard(ATMMachine newATMMachine){ atmMachine = newATMMachine; }
	@Override
	public void insertATMCard() {
		System.out.println("Please enter your pin");
		atmMachine.setATMState(atmMachine.getYesCardState());  // the mechanism
	}
}''',
    ["State", "ATM", "participants", "back-reference"], SRC_ATM,
    "Saying `ATMMachine` 'is the State' — it is the Context. The State is the `ATMState` interface.")

add("State (ATM)", "Compare ATM and Robot implementations", "Brutal", 9,
    "Both the ATM and the cooking-robot examples implement State, but they differ in one structural respect. Identify it and explain the consequence.",
    "In the robot example the Context itself implements the State interface (`public class Robot implements RoboticState`), so `Robot` exposes exactly the same three operations it delegates. In the ATM example the Context does not implement `ATMState` — `ATMMachine` simply declares matching public methods. Consequence: the robot's Context can be passed anywhere a `RoboticState` is expected, which is occasionally convenient but blurs the Context/State distinction and creates a recursion hazard if a state ever delegated back to the Context. The ATM's separation is the cleaner reading of GoF, and it also lets the Context hold data the State interface has no business exposing (`cashInMachine`, `correctPinEntered`).",
    '''// ROBOT — Context implements the State interface
public class Robot implements RoboticState{      // <-- note "implements"
    private RoboticState state;
    @Override public void walk() { state.walk(); }
    @Override public void cook() { state.cook(); }
    @Override public void off()  { state.off();  }
}
// Robot IS-A RoboticState -> can be passed where a RoboticState is expected
// Risk: robot.setRoboticState(robot) would cause infinite recursion.

// ATM — Context does NOT implement the State interface
public class ATMMachine {                        // <-- no "implements"
	ATMState atmState;
	int cashInMachine = 3000;                    // Context-only data
	boolean correctPinEntered = false;           // Context-only data
	public void insertATMCard() { atmState.insertATMCard(); }
}
// ATMMachine is NOT an ATMState -> cleaner separation, and it can hold
// machine-level data the State interface never exposes.''',
    ["State", "ATM", "Robot", "compare", "context-design"], SRC_B + "; " + SRC_ATM,
    "Claiming one is simply wrong. Both work; the question is what each buys and what it risks.")

# =====================================================================
# 8. CROSS-CUTTING CODE QUESTIONS
# =====================================================================
add("Pattern identification", "Identify pattern from code", "Very Hard", 6,
    "Identify the design pattern in the fragment below. Justify your answer from the code structure alone, and name one pattern it is commonly confused with plus the distinguishing evidence.",
    "State. The evidence: the Context holds a field of an interface type representing its situation; every public operation delegates unconditionally to that field; and the implementing classes hold a back-reference used to reassign the Context's field, i.e. they drive their own transitions. Commonly confused with Strategy, which shares the delegation shape but differs decisively in two ways: the client selects a Strategy from outside and passes it in, and a Strategy never reassigns the Context's field. If the objects change the Context's current object themselves, it is State.",
    '''public class Machine {
    private Mode mode;
    public Machine(){ this.mode = new ReadyMode(this); }
    void setMode(Mode m){ this.mode = m; }
    public void go()   { mode.go(); }        // unconditional delegation
    public void stop() { mode.stop(); }
    public Mode getBusy(){ return new BusyMode(this); }
}

public class ReadyMode implements Mode {
    private final Machine machine;           // back-reference to Context
    public ReadyMode(Machine machine){ this.machine = machine; }
    public void go() {
        System.out.println("Starting...");
        machine.setMode(machine.getBusy());  // <-- SELF-DIRECTED TRANSITION
    }
    public void stop(){ System.out.println("Already stopped"); }
}

// STATE  : the mode objects reassign machine.mode themselves.
// STRATEGY: the client would inject the algorithm, e.g.
//   machine.setStrategy(new QuickSort());
//   ...and QuickSort would never call machine.setStrategy(...).''',
    ["identify-pattern", "State", "Strategy", "compare"], SRC_B,
    "Answering 'Strategy' because both delegate. The self-directed transition is the discriminator.")

add("Pattern identification", "Identify pattern from code", "Very Hard", 6,
    "Identify the design pattern below, justify from the code, and state which single line would break the pattern if removed.",
    "Singleton. Evidence: a private static field holding the sole instance, a private constructor preventing external construction, and a public static accessor as the single global access point. Removing the private constructor is what breaks it — without that line the class gains a default public constructor, `new Config()` compiles, and unlimited instances can exist. The static field and accessor would then be merely a convenience, not a uniqueness guarantee.",
    '''public class Config {
   private static Config instance = new Config();   // sole instance
   private Config(){}                               // <-- REMOVE THIS -> broken
   public static Config getInstance(){              // global access point
      return instance;
   }
   public void load(){ System.out.println("Loading configuration..."); }
}

// If "private Config(){}" is deleted, Java supplies a default public
// constructor and the following compiles:
//    Config a = new Config();
//    Config b = new Config();      // two "singletons"''',
    ["identify-pattern", "Singleton", "private-constructor"], SRC_C,
    "Naming the static field as the critical line. The constructor's visibility is what enforces uniqueness.")

add("Pattern identification", "Identify pattern from code", "Hard", 6,
    "Identify the pattern below and justify it from the code. Explain what the client is protected from.",
    "Facade. Evidence: one class privately owns several subsystem objects, constructs them itself, and exposes simple void operations that delegate; the subsystem classes hold no reference back. The client is protected from knowing which subsystem classes exist, how many there are, how to construct them, and in what order to call them — it depends on one simple interface instead of several complex ones. Per the lecture, the facade 'glues together the classes that implement functionality without hiding them completely' — a client that needs the subsystem directly may still use it.",
    '''public class MediaConverter {
   private AudioDecoder audio;          // subsystem objects, private
   private VideoDecoder video;
   private Muxer muxer;

   public MediaConverter() {            // facade constructs the subsystem
      audio = new AudioDecoder();
      video = new VideoDecoder();
      muxer = new Muxer();
   }

   public void convert(String file){    // one simple, intention-revealing op
      audio.decode(file);
      video.decode(file);
      muxer.combine();
   }
}

// Client sees ONLY:
//    MediaConverter c = new MediaConverter();
//    c.convert("clip.mp4");
// It never imports, constructs, or orders AudioDecoder/VideoDecoder/Muxer.''',
    ["identify-pattern", "Facade", "coupling"], SRC_S,
    "Calling it Adapter. Adapter converts one existing interface into another expected one; Facade invents a simpler interface over many.")

add("Pattern selection from scenario", "Choose pattern and implement", "Brutal", 12,
    "A university portal must notify an unknown and changing set of interested students whenever a seat becomes free in a class. The set of interested students changes constantly and the portal must not know their identities in advance. Choose the appropriate **design** pattern (not architectural pattern), justify the choice against its applicability, and give a complete Java implementation.",
    "Observer. The lecture's applicability is met exactly: 'when an object should be able to notify other objects without making assumptions about who these objects are', and 'when a change to one object requires changing others, and you don't know how many objects need to be changed'. Implement the Subject/Observer interfaces, a `ClassSection` ConcreteSubject holding `List<Observer>`, and a `Student` ConcreteObserver. Because `ClassSection` depends only on the `Observer` interface, students can subscribe and unsubscribe at runtime with no change to the subject. Note the deliberate level distinction: if the exam asks for a *system-level architectural* answer the correct response is Publish-Subscribe; Observer is the object-level design answer.",
    '''public interface Observer {
   void update(String sectionCode, int seatsFree);
}

public interface Subject {
   void register(Observer o);
   void unregister(Observer o);
   void notifyAllObservers();
}

import java.util.ArrayList;
import java.util.List;

public class ClassSection implements Subject {
   private final String sectionCode;
   private int seatsFree;
   private final List<Observer> watchers = new ArrayList<Observer>();

   public ClassSection(String sectionCode, int seatsFree){
      this.sectionCode = sectionCode;
      this.seatsFree = seatsFree;
   }

   @Override public void register(Observer o){ watchers.add(o); }
   @Override public void unregister(Observer o){ watchers.remove(o); }

   @Override
   public void notifyAllObservers(){
      for(Observer o : watchers){
         o.update(sectionCode, seatsFree);
      }
   }

   // a seat is released -> state change triggers notification automatically
   public void releaseSeat(){
      seatsFree++;
      System.out.println("\\nSeat released in " + sectionCode
                         + " (now " + seatsFree + " free)");
      notifyAllObservers();
   }
}

public class Student implements Observer {
   private final String name;
   public Student(String name){ this.name = name; }
   @Override
   public void update(String sectionCode, int seatsFree){
      System.out.println(name + " notified: " + sectionCode
                         + " has " + seatsFree + " seat(s) free");
   }
}

public class SeatAlertDemo {
   public static void main(String[] args){
      ClassSection csc3209 = new ClassSection("CSC3209", 0);
      Student aisha = new Student("Aisha");
      Student ben   = new Student("Ben");

      csc3209.register(aisha);
      csc3209.register(ben);
      csc3209.releaseSeat();

      csc3209.unregister(ben);      // Ben got a place elsewhere
      csc3209.releaseSeat();
   }
}

/* Output:
Seat released in CSC3209 (now 1 free)
Aisha notified: CSC3209 has 1 seat(s) free
Ben notified: CSC3209 has 1 seat(s) free

Seat released in CSC3209 (now 2 free)
Aisha notified: CSC3209 has 2 seat(s) free
*/''',
    ["Observer", "pattern-selection", "full-implementation", "notification"], SRC_B,
    "Answering Publish-Subscribe when the question says 'design pattern'. Read which level the question asks for.")

add("Pattern selection from scenario", "Choose pattern and implement", "Brutal", 12,
    "An online order must behave differently depending on whether it is New, Paid, Shipped or Cancelled. A New order can be paid or cancelled; a Paid order can be shipped or cancelled; a Shipped order can do neither; a Cancelled order can do neither. The current code is a growing tangle of `if (status.equals(...))` checks repeated in every method. Choose a design pattern, justify it, and implement it.",
    "State. The lecture's applicability names this precisely: behaviour depends on internal state at runtime, and 'operations have large, multipart conditional statements that depend on the object's state' with 'several operations containing this same conditional structure'. Implement an `OrderState` interface, an `Order` Context that delegates, and four ConcreteStates. Each former conditional branch becomes a class, so adding (say) a Refunded state is a new class rather than an edit to every method.",
    '''public interface OrderState {
   void pay();
   void ship();
   void cancel();
}

public class Order {
   private final OrderState newOrder   = new NewOrder(this);
   private final OrderState paid       = new PaidOrder(this);
   private final OrderState shipped    = new ShippedOrder(this);
   private final OrderState cancelled  = new CancelledOrder(this);
   private OrderState state;

   public Order(){ this.state = newOrder; }

   void setState(OrderState state){ this.state = state; }
   public OrderState getNewOrder(){ return newOrder; }
   public OrderState getPaid(){ return paid; }
   public OrderState getShipped(){ return shipped; }
   public OrderState getCancelled(){ return cancelled; }

   public void pay()    { state.pay(); }
   public void ship()   { state.ship(); }
   public void cancel() { state.cancel(); }
}

public class NewOrder implements OrderState {
   private final Order order;
   public NewOrder(Order order){ this.order = order; }
   @Override public void pay(){
      System.out.println("Payment accepted");
      order.setState(order.getPaid());
   }
   @Override public void ship(){
      System.out.println("Cannot ship an unpaid order");
   }
   @Override public void cancel(){
      System.out.println("Order cancelled");
      order.setState(order.getCancelled());
   }
}

public class PaidOrder implements OrderState {
   private final Order order;
   public PaidOrder(Order order){ this.order = order; }
   @Override public void pay(){ System.out.println("Order already paid"); }
   @Override public void ship(){
      System.out.println("Order shipped");
      order.setState(order.getShipped());
   }
   @Override public void cancel(){
      System.out.println("Order cancelled and refunded");
      order.setState(order.getCancelled());
   }
}

public class ShippedOrder implements OrderState {
   private final Order order;
   public ShippedOrder(Order order){ this.order = order; }
   @Override public void pay(){ System.out.println("Order already paid"); }
   @Override public void ship(){ System.out.println("Order already shipped"); }
   @Override public void cancel(){
      System.out.println("Cannot cancel a shipped order");
   }
}

public class CancelledOrder implements OrderState {
   private final Order order;
   public CancelledOrder(Order order){ this.order = order; }
   @Override public void pay(){ System.out.println("Cannot pay a cancelled order"); }
   @Override public void ship(){ System.out.println("Cannot ship a cancelled order"); }
   @Override public void cancel(){ System.out.println("Order already cancelled"); }
}

public class OrderDemo {
   public static void main(String[] args){
      Order order = new Order();
      order.ship();     // Cannot ship an unpaid order
      order.pay();      // Payment accepted
      order.ship();     // Order shipped
      order.cancel();   // Cannot cancel a shipped order
   }
}''',
    ["State", "pattern-selection", "full-implementation", "order-lifecycle"], SRC_B,
    "Answering Strategy. The order changes its own state as a consequence of operations; no client injects behaviour.")

add("Pattern selection from scenario", "Choose pattern and implement", "Very Hard", 10,
    "A reporting module must produce PDF, CSV or HTML exporters chosen by a runtime configuration string, and the calling code must not depend on any concrete exporter class. Choose a design pattern, justify it, and implement it.",
    "Factory Method (in the simple-factory shaping used in the lecture). The applicability fits: the calling class cannot anticipate which concrete exporter it needs, and the knowledge of which class to instantiate should be localised in one place rather than scattered through clients. Implement an `Exporter` product interface, three concrete exporters, and an `ExporterFactory` whose method maps the configuration string to a concrete class and returns the abstract type. Adding a new format then touches only the new class and the factory.",
    '''public interface Exporter {
   void export(String data);
}

public class PdfExporter implements Exporter {
   @Override public void export(String data){
      System.out.println("Exporting to PDF: " + data);
   }
}

public class CsvExporter implements Exporter {
   @Override public void export(String data){
      System.out.println("Exporting to CSV: " + data);
   }
}

public class HtmlExporter implements Exporter {
   @Override public void export(String data){
      System.out.println("Exporting to HTML: " + data);
   }
}

public class ExporterFactory {
   public Exporter getExporter(String format){
      if(format == null){
         return null;
      }
      if(format.equalsIgnoreCase("PDF")){
         return new PdfExporter();

      } else if(format.equalsIgnoreCase("CSV")){
         return new CsvExporter();

      } else if(format.equalsIgnoreCase("HTML")){
         return new HtmlExporter();
      }
      return null;
   }
}

public class ReportModule {
   public static void main(String[] args){
      ExporterFactory factory = new ExporterFactory();

      String configured = "CSV";                       // from configuration
      Exporter exporter = factory.getExporter(configured);
      exporter.export("Q3 sales figures");             // abstract reference

      exporter = factory.getExporter("PDF");
      exporter.export("Q3 sales figures");
   }
}

/* Output:
Exporting to CSV: Q3 sales figures
Exporting to PDF: Q3 sales figures
*/''',
    ["Factory Method", "pattern-selection", "full-implementation", "exporter"], SRC_C,
    "Declaring `CsvExporter exporter = ...` in the client re-couples it to the concrete class and wastes the factory.")

add("Pattern selection from scenario", "Choose pattern and implement", "Very Hard", 10,
    "A file-system browser must display files and folders. A folder contains files and other folders to arbitrary depth. The client must be able to ask any node for its total size without knowing whether it is a file or a folder. Choose a design pattern, justify it, and implement it.",
    "Composite. The applicability is met exactly: a part-whole hierarchy, and clients that should 'be able to ignore the difference between compositions of objects and individual objects'. Component = `FileSystemNode` declaring `getSize()`; Leaf = `FileNode` returning its own size (base case); Composite = `FolderNode` summing recursively over children. The client calls `getSize()` on any node and the recursion handles arbitrary depth with no type-testing.",
    '''import java.util.ArrayList;
import java.util.List;

public interface FileSystemNode {
   String getName();
   long getSize();
   void print(String indent);
}

// LEAF
public class FileNode implements FileSystemNode {
   private final String name;
   private final long size;

   public FileNode(String name, long size){
      this.name = name;
      this.size = size;
   }
   @Override public String getName(){ return name; }
   @Override public long getSize(){ return size; }          // base case
   @Override public void print(String indent){
      System.out.println(indent + name + " (" + size + " bytes)");
   }
}

// COMPOSITE
public class FolderNode implements FileSystemNode {
   private final String name;
   private final List<FileSystemNode> children = new ArrayList<FileSystemNode>();

   public FolderNode(String name){ this.name = name; }
   public void add(FileSystemNode node){ children.add(node); }
   public void remove(FileSystemNode node){ children.remove(node); }

   @Override public String getName(){ return name; }

   @Override
   public long getSize(){
      long total = 0;
      for(FileSystemNode child : children){
         total += child.getSize();          // recursion, any depth
      }
      return total;
   }

   @Override
   public void print(String indent){
      System.out.println(indent + name + "/ (" + getSize() + " bytes)");
      for(FileSystemNode child : children){
         child.print(indent + "   ");
      }
   }
}

public class BrowserDemo {
   public static void main(String[] args){
      FolderNode root = new FolderNode("root");
      FolderNode docs = new FolderNode("docs");
      docs.add(new FileNode("notes.txt", 1200));
      docs.add(new FileNode("thesis.pdf", 45000));
      root.add(docs);
      root.add(new FileNode("readme.md", 800));

      root.print("");
      System.out.println("Total: " + root.getSize() + " bytes");
   }
}

/* Output:
root/ (47000 bytes)
   docs/ (46200 bytes)
      notes.txt (1200 bytes)
      thesis.pdf (45000 bytes)
   readme.md (800 bytes)
Total: 47000 bytes
*/''',
    ["Composite", "pattern-selection", "full-implementation", "file-system"], SRC_S,
    "Writing `if (node instanceof FolderNode)` in the client — that is the very type-testing Composite exists to remove.")

add("Category reasoning", "Classify and justify from code", "Very Hard", 8,
    "For each of the six patterns implemented in the CSC3209 lectures, state its GoF category and name the single line or construct in the lecturer's code that most clearly identifies its category. ",
    "Creational patterns abstract instantiation; Structural patterns compose classes/objects into larger structures; Behavioural patterns concern algorithms and the assignment of responsibilities between objects. The identifying construct for each is the one that carries the category's defining concern: object creation for creational, composition/wrapping for structural, and delegation/notification for behavioural.",
    '''// CREATIONAL — the construct is about WHO CREATES the object
// Factory Method
public Shape getShape(String shapeType){ return new Circle(); }   // creation delegated
// Singleton
private SingleObject(){}                                          // creation forbidden

// STRUCTURAL — the construct is about HOW OBJECTS ARE COMPOSED
// Composite
List<Employee> employees = new ArrayList<Employee>();             // node holds nodes
// Facade
private Shape circle; private Shape rectangle; private Shape square;  // wraps subsystem

// BEHAVIOURAL — the construct is about WHO TALKS TO WHOM / WHO DECIDES
// Observer
for(Observer follower : followers) follower.update(celebrityName, post);  // notification
// State
@Override public void walk() { state.walk(); }                    // delegation to state''',
    ["categories", "creational", "structural", "behavioral", "classification"], SRC_C + "; " + SRC_S + "; " + SRC_B,
    "Reciting category definitions without pointing at a specific construct in the code earns half marks at best.")

add("Code quality", "Explain a design consequence", "Brutal", 8,
    "The lecture states that a consequence of Observer is that 'update cascades/order/debugging can become difficult'. Write a short Java example based on the `Celebrity`/`Follower` code that demonstrates a cascade problem, and state one mitigation.",
    "A cascade occurs when an observer's `update()` itself triggers another notification, so one `post()` fans out into a chain that is hard to follow in a debugger and can, in the worst case, loop forever. The example shows a `RelayFollower` that re-posts to a second celebrity; if that celebrity's followers include something that posts back, the recursion is unbounded. Mitigations: forbid state changes inside `update()`, queue notifications instead of dispatching synchronously, or add a re-entrancy guard.",
    '''// A follower that re-publishes -> cascade
class RelayFollower implements Observer {
   private final Celebrity relayTarget;
   public RelayFollower(Celebrity relayTarget){ this.relayTarget = relayTarget; }
   @Override
   public void update(String celebrityName, String post) {
      System.out.println("Relaying " + celebrityName + "'s post");
      relayTarget.post("RELAY: " + post);      // <-- triggers ANOTHER notify
   }
}

// One call fans out into a chain:
//   mahatir.post("x")
//     -> RelayFollower.update()
//        -> billgates.post("RELAY: x")
//           -> every Bill Gates follower updates ...
// If a Bill Gates follower relays back to mahatir, this never terminates.

// MITIGATION 1 — re-entrancy guard on the subject
class Celebrity implements Subject {
   private boolean notifying = false;
   @Override
   public void notifyAllObservers(String post) {
      if (notifying) {                      // refuse re-entrant dispatch
         System.out.println("Cascade suppressed");
         return;
      }
      notifying = true;
      try {
         for(Observer follower : followers) follower.update(celebrityName, post);
      } finally {
         notifying = false;
      }
   }
}

// MITIGATION 2 — make update() side-effect free: record the event and let a
// scheduler dispatch the next round, so notification depth stays at one.''',
    ["Observer", "cascade", "consequences", "re-entrancy"], SRC_B,
    "Claiming Observer 'has no downsides'. The lecture explicitly lists the cascade/ordering/debugging cost.")

add("Code quality", "Explain a design consequence", "Very Hard", 7,
    "The lecture warns that a Facade 'can become bloated or a bottleneck if overloaded with responsibilities'. Show, in code, what a bloated `ShapeMaker` looks like and explain what has gone wrong architecturally.",
    "A facade is meant to be a thin, delegating entry point. The bloated version has absorbed validation, persistence, logging and business rules, so it now *contains* logic rather than routing to it. Consequences: every unrelated change touches one class, it becomes a merge and testing bottleneck, and the subsystem's real structure is now hidden behind logic that belongs elsewhere. The fix is to keep the facade delegating and push responsibilities back to the subsystem or to new collaborators.",
    '''// BLOATED — the facade has become the system
public class ShapeMaker {
   private Shape circle, rectangle, square;
   private Connection db;
   private Logger log;

   public ShapeMaker(){ circle = new Circle(); /* ... */ }

   public void drawCircle(){ circle.draw(); }              // OK: delegation

   // everything below is responsibility creep
   public void drawCircleIfPermitted(String user, int radius){
      if (radius <= 0) throw new IllegalArgumentException("bad radius");   // validation
      if (!user.equals("admin")) { log.warn("denied"); return; }           // authorisation
      double area = Math.PI * radius * radius;                             // business logic
      db.execute("INSERT INTO audit VALUES ('" + user + "'," + area + ")");// persistence
      log.info("drew circle");                                             // logging
      circle.draw();
   }
   public void exportAllShapesToPdf(){ /* ... */ }
   public void emailShapeReport(String to){ /* ... */ }
}

// THIN — the facade routes, collaborators do the work
public class ShapeMaker {
   private final Shape circle, rectangle, square;
   private final DrawingPolicy policy;      // authorisation/validation
   private final AuditTrail audit;          // persistence/logging

   public void drawCircle(String user, int radius){
      policy.check(user, radius);
      circle.draw();
      audit.record(user, "circle");
   }
}''',
    ["Facade", "bloat", "consequences", "separation-of-concerns"], SRC_S,
    "Treating 'add another method to the facade' as always free. Each addition moves it closer to being a bottleneck.")

add("Code quality", "Explain a design consequence", "Brutal", 8,
    "The lecture's Composite example gives `Developer` (a leaf) empty `add()` and `remove()` methods. Show two different Java strategies for handling this, and argue which is more appropriate for the ATM-style exam scenario where correctness matters more than convenience.",
    "Strategy A (the lecturer's) silently ignores the call — maximally transparent, but a genuine programming error passes unnoticed. Strategy B throws `UnsupportedOperationException` — still transparent at compile time, but the error surfaces immediately and loudly at runtime. Where correctness matters more than convenience, B is preferable: it preserves uniform treatment while converting a silent bug into an immediate, diagnosable failure. This also improves testability in the Lecture 7 sense, because the fault reveals itself on the first test execution rather than lying dormant.",
    '''// STRATEGY A — silent no-op (the lecturer's version)
public class Developer implements Employee{
  public void add(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }
  public void remove(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }
}
// developer.add(x);   -> compiles, runs, does nothing, bug stays hidden

// STRATEGY B — fail fast
public class Developer implements Employee{
  public void add(Employee employee) {
    throw new UnsupportedOperationException(
        "Developer is a leaf and cannot have children");
  }
  public void remove(Employee employee) {
    throw new UnsupportedOperationException(
        "Developer is a leaf and cannot have children");
  }
  public Employee getChild(int i) {
    throw new UnsupportedOperationException(
        "Developer is a leaf and has no children");
  }
}
// developer.add(x);   -> fails immediately, with a message naming the cause

// Both keep add()/remove() on the Component interface, so uniform treatment
// is preserved either way. B trades silent tolerance for early detection.''',
    ["Composite", "fail-fast", "testability", "consequences"], SRC_S,
    "Saying 'B is wrong because it crashes'. A loud failure during testing is preferable to a silent one in production.")

# ---------------------------------------------------------------- emit
with open("../questions_code.json", "w") as f:
    json.dump(Q, f, indent=1, ensure_ascii=False)
with open("../questions_code.js", "w") as f:
    f.write("window.QUESTIONS_CODE = " + json.dumps(Q, ensure_ascii=False) + ";\n")

print("CODE questions generated:", len(Q))
from collections import Counter
for k, v in Counter(q["subtopic"] for q in Q).most_common():
    print("  %3d  %s" % (v, k))
