# All Code Implementation Questions

72 questions.

---

## CODE-0001 — Factory Method (Hard, 10 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

Implement the **Factory Method** pattern in Java for a shape-drawing subsystem. The client must be able to obtain a Circle, Rectangle or Square by passing a type string, without using `new` on any concrete shape class itself. Provide the product interface, all concrete products, the factory, and a demo class.

<details>
<summary><strong>Show answer</strong></summary>

Full credit needs: (1) a `Shape` product interface declaring `draw()`; (2) three ConcreteProducts each overriding `draw()`; (3) a `ShapeFactory` Creator whose `getShape(String)` selects the concrete class and returns the abstract `Shape` type; (4) a demo where the client variable is declared as `Shape`, not as a concrete type. The decisive point is that the client never calls `new Circle()` — creation knowledge is localised inside the factory.

```java
public interface Shape {
   void draw();
}

// ---
public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}

// ---
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}

// ---
public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Square::draw() method.");
   }
}

// ---
public class ShapeFactory {

   //use getShape method to get object of type shape
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
      }

      return null;
   }
}

// ---
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      //get an object of Circle and call its draw method.
      Shape shape1 = shapeFactory.getShape("CIRCLE");

      //call draw method of Circle
      shape1.draw();

      //get an object of Rectangle and call its draw method.
      Shape shape2 = shapeFactory.getShape("RECTANGLE");

      //call draw method of Rectangle
      shape2.draw();

      //get an object of Square and call its draw method.
      Shape shape3 = shapeFactory.getShape("SQUARE");

      //call draw method of square
      shape3.draw();
   }
}

/* Verified output:
Inside Circle::draw() method.
Inside Rectangle::draw() method.
Inside Square::draw() method.
*/
```

> **Exam trap:** Declaring the client variable as `Circle` instead of `Shape` destroys the decoupling the pattern exists to provide.

*Tags: Factory Method, creational, full-implementation, Shape, ShapeFactory*

</details>

---

## CODE-0002 — Factory Method (Hard, 5 marks)

**Type:** Trace program output  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

Given the lecturer's `FactoryPatternDemo`, state the **exact** console output produced, in order, and explain which object each line comes from.

<details>
<summary><strong>Show answer</strong></summary>

Three lines, one per `draw()` call, in the order the shapes were requested: CIRCLE, RECTANGLE, SQUARE. Each line is produced by the `draw()` override in the concrete class that `ShapeFactory.getShape()` instantiated. Dynamic dispatch on the `Shape` reference selects the concrete override at runtime.

```java
// Output:
Inside Circle::draw() method.
Inside Rectangle::draw() method.
Inside Square::draw() method.

// Produced by:
// line 1 <- Circle.draw()      (shapeFactory.getShape("CIRCLE"))
// line 2 <- Rectangle.draw()   (shapeFactory.getShape("RECTANGLE"))
// line 3 <- Square.draw()      (shapeFactory.getShape("SQUARE"))
```

> **Exam trap:** The declared type is `Shape`, but the method that runs is the concrete class's override — not `Shape`'s.

*Tags: Factory Method, trace-output, dynamic-dispatch*

</details>

---

## CODE-0003 — Factory Method (Very Hard, 8 marks)

**Type:** Extend the codebase  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

Extend the lecturer's Factory Method example with a new `Triangle` shape. Give every file you must add or change, and state precisely which existing classes must NOT change and why that matters for modifiability.

<details>
<summary><strong>Show answer</strong></summary>

Add `Triangle implements Shape`. Change only `ShapeFactory.getShape()` to add one branch. `Shape`, `Circle`, `Rectangle`, `Square` and every client are untouched — the creation decision is localised in one place, so the change is a *local* change in the Lecture 2 sense rather than a non-local one. This is exactly the modifiability benefit the pattern buys.

```java
public class Triangle implements Shape {

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
//            and every client that holds a Shape reference.
```

> **Exam trap:** Claiming client code must change: it must not. If it does, the abstraction has been leaked.

*Tags: Factory Method, extend, modifiability, local-change*

</details>

---

## CODE-0004 — Factory Method (Very Hard, 6 marks)

**Type:** Spot the violation  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

A student submits the code below as a Factory Method implementation. Identify why it defeats the purpose of the pattern, and give the corrected client code.

<details>
<summary><strong>Show answer</strong></summary>

The client calls `new Circle()` directly and declares the variable with the concrete type. Both the creation decision and the type dependency have leaked back into the client, so the factory is bypassed entirely — the client is now coupled to every concrete product and must be edited whenever the product set changes. Correct it by requesting the object from the factory and holding it in a `Shape` reference.

```java
// WRONG — supplied by the student
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
}
```

> **Exam trap:** Instantiating the factory but then not using it is the most common fake-Factory error.

*Tags: Factory Method, spot-the-bug, coupling*

</details>

---

## CODE-0005 — Factory Method (Hard, 5 marks)

**Type:** Map code to participants  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

For the lecturer's Factory Method example, map each Java identifier onto its GoF participant role (Product, ConcreteProduct, Creator, ConcreteCreator) and justify each mapping from the code.

<details>
<summary><strong>Show answer</strong></summary>

`Shape` = Product (declares the interface of objects the factory method creates). `Circle`/`Rectangle`/`Square` = ConcreteProduct (implement the Product interface). `ShapeFactory` = Creator, and because it also contains the selection logic and is not subclassed here, it doubles as the ConcreteCreator. `FactoryPatternDemo` = Client. Note this is the simplified 'simple factory' shaping of the pattern: the GoF form defers the decision to Creator *subclasses* overriding the factory method.

```java
// Product
public interface Shape { void draw(); }

// ConcreteProduct
public class Circle implements Shape { ... }

// Creator + ConcreteCreator (combined in this example)
public class ShapeFactory {
   public Shape getShape(String shapeType){ ... }   // the factory method
}

// Client
public class FactoryPatternDemo { public static void main(...) { ... } }
```

> **Exam trap:** The lecture slide's Structure diagram shows Creator/ConcreteCreator separately; say so rather than pretending ShapeFactory is the full GoF form.

*Tags: Factory Method, participants, GoF-roles*

</details>

---

## CODE-0006 — Singleton (Hard, 8 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

Implement the **Singleton** pattern in Java exactly as presented in the lecture. Your solution must make it a *compile-time* error for a client to construct a second instance. Include a demo class showing both the illegal construct and the legal access path.

<details>
<summary><strong>Show answer</strong></summary>

Three mandatory mechanisms: (1) a `private static` field holding the sole instance, eagerly initialised; (2) a `private` constructor, which is what makes `new SingleObject()` a compile-time error; (3) a `public static getInstance()` as the single global access point. Without the private constructor there is no Singleton — only a convention.

```java
public class SingleObject {

   //create an object of SingleObject
   private static SingleObject instance = new SingleObject();

   //make the constructor private so that this class cannot be
   //instantiated
   private SingleObject(){}

   //Get the only object available
   public static SingleObject getInstance(){
      return instance;
   }

   public void showMessage(){
      System.out.println("Hello World!");
   }
}

// ---
public class SingletonPatternDemo {
   public static void main(String[] args) {

      //illegal construct
      //Compile Time Error: The constructor SingleObject() is not visible
      //SingleObject object = new SingleObject();

      //Get the only object available
      SingleObject object = SingleObject.getInstance();

      //show the message
      object.showMessage();
   }
}

/* Verified output:
Hello World!
*/
```

> **Exam trap:** A public or default constructor makes the class a normal class with a convenience accessor, not a Singleton.

*Tags: Singleton, creational, full-implementation, private-constructor*

</details>

---

## CODE-0007 — Singleton (Very Hard, 6 marks)

**Type:** Spot the violation  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

The class below is offered as a Singleton. Identify every defect and give a corrected version.

<details>
<summary><strong>Show answer</strong></summary>

Two defects. First, the constructor is public, so `new BadSingleton()` compiles and unlimited instances can exist — the uniqueness guarantee is gone. Second, `instance` is public and non-final, so a client can reassign it and swap the 'sole' instance at runtime. Fix by privatising the constructor and the field and exposing only a static accessor.

```java
// WRONG
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
}
```

> **Exam trap:** Spotting only the public constructor and missing the mutable public field costs marks.

*Tags: Singleton, spot-the-bug, encapsulation*

</details>

---

## CODE-0008 — Singleton (Hard, 4 marks)

**Type:** Explain the compile error  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

In the lecturer's `SingletonPatternDemo` the line `SingleObject object = new SingleObject();` is commented out with the note *'Compile Time Error: The constructor SingleObject() is not visible'*. Explain the exact language mechanism that produces this error, and why this is a stronger guarantee than a runtime check.

<details>
<summary><strong>Show answer</strong></summary>

`SingleObject`'s only constructor is declared `private`, so it is not accessible outside its own class body; the compiler rejects the call at compile time. This is stronger than a runtime guard (e.g. throwing an exception in a public constructor) because violations cannot reach production at all — the code simply will not build. It is a design constraint enforced by the type system rather than by discipline.

```java
public class SingleObject {
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
SingleObject object = SingleObject.getInstance();   // the only legal path
```

> **Exam trap:** Saying it 'throws an exception' is wrong — nothing runs; it never compiles.

*Tags: Singleton, compile-time, access-modifier*

</details>

---

## CODE-0009 — Singleton (Brutal, 7 marks)

**Type:** Design trade-off in code  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

The lecture warns that Singleton introduces global state and testability problems. Using the lecturer's `SingleObject`, write a short client that demonstrates the testability problem concretely, then show one code change that mitigates it.

<details>
<summary><strong>Show answer</strong></summary>

The problem: because `getInstance()` is a static global access point, a class that calls it internally has a hidden dependency that a test cannot substitute — there is no seam to inject a stub, and state set by one test leaks into the next. Mitigation: depend on an interface and inject it, so production passes the Singleton while tests pass a fake. This trades away the 'globally reachable' convenience for controllability, which is exactly the Lecture 7 definition of testability (ability to control inputs and observe outputs).

```java
// PROBLEM: hidden, unsubstitutable dependency
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
// test:       new ReportService(new FakeMessageSource());
```

> **Exam trap:** Do not claim Singleton is simply 'bad'. State the trade-off: controlled uniqueness bought at the cost of controllability.

*Tags: Singleton, testability, global-state, trade-off*

</details>

---

## CODE-0010 — Composite (Hard, 12 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

A small organisation has a general manager at the top; under him a manager and a developer; and two further developers under that manager. Print the name and salary of every employee from the top down. Implement the **Composite** pattern in Java: give the Component interface, the Leaf, the Composite, and a demo that builds this exact tree.

<details>
<summary><strong>Show answer</strong></summary>

Component = `Employee`, declaring both the leaf operations (`getName`, `getSalary`, `print`) and the child-management operations (`add`, `remove`, `getChild`) so that clients can treat leaves and composites uniformly. Leaf = `Developer`, which implements child operations as no-ops. Composite = `Manager`, which stores a `List<Employee>` and, in `print()`, prints itself and then recursively calls `print()` on each child. The recursion is what makes an arbitrarily deep hierarchy work with no client changes.

```java
package CompositeExample;

public interface Employee {

      public void add(Employee employee);
      public void remove(Employee employee);
      public Employee getChild(int i);
      public String getName();
      public double getSalary();
      public void print();
   }

// ---
package CompositeExample;
//The leaf
public class Developer implements Employee{
  private String name;
  private double salary;

  public Developer(String name,double salary){
    this.name = name;
    this.salary = salary;
  }
  public void add(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }

  public Employee getChild(int i) {
    //this is leaf node so this method is not applicable to this class.
    return null;
  }

  public String getName() {
    return name;
  }
  public double getSalary() {
    return salary;
  }
  public void print() {
    System.out.println("------------");
    System.out.println("Name ="+getName());
    System.out.println("Salary ="+getSalary());
    System.out.println("------------");
  }
  public void remove(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }
}

// ---
package CompositeExample;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

//The composite
public class Manager implements Employee{
  private String name;
  private double salary;
  public Manager(String name,double salary){
    this.name = name;
    this.salary = salary;
  }

  List<Employee> employees = new ArrayList<Employee>();
  public void add(Employee employee) {
      employees.add(employee);
  }

  public Employee getChild(int i) {
    return employees.get(i);
  }

  public String getName() {
    return name;
  }

  public double getSalary() {
    return salary;
  }

  public void print() {
    System.out.println("------------");
    System.out.println("Name ="+getName());
    System.out.println("Salary ="+getSalary());
    System.out.println("------------");

    Iterator<Employee> employeeIterator = employees.iterator();
      while(employeeIterator.hasNext()){
        Employee employee = employeeIterator.next();
        employee.print();
      }
  }

  public void remove(Employee employee) {
    employees.remove(employee);
  }
}

// ---
package CompositeExample;
public class CompositeDesignPatternMain {
     public static void main(String[] args) {
       Employee emp1=new Developer("Mohammad", 3500);
       Employee emp2=new Developer("Lee", 4000);
       Employee manager1=new Manager("Chin",6000);
       manager1.add(emp1);
       manager1.add(emp2);
       Employee emp3=new Developer("Khair", 4500);
       Manager generalManager=new Manager("Tan", 10000);
       generalManager.add(emp3);
       generalManager.add(manager1);
       generalManager.print();
     }
   }

/* Verified output:
------------
Name =Tan
Salary =10000.0
------------
------------
Name =Khair
Salary =4500.0
------------
------------
Name =Chin
Salary =6000.0
------------
------------
Name =Mohammad
Salary =3500.0
------------
------------
Name =Lee
Salary =4000.0
------------
*/
```

> **Exam trap:** Leaving `add`/`remove`/`getChild` off the Component interface breaks uniform treatment — the client would then need to type-test before every call.

*Tags: Composite, structural, full-implementation, recursion, Employee*

</details>

---

## CODE-0011 — Composite (Very Hard, 8 marks)

**Type:** Trace program output  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

Trace the **exact** console output of the lecturer's `CompositeDesignPatternMain`, and explain why the employees appear in that specific order.

<details>
<summary><strong>Show answer</strong></summary>

The tree is: Tan(10000) -> [ Khair(4500), Chin(6000) -> [ Mohammad(3500), Lee(4000) ] ]. `generalManager.print()` prints Tan first, then iterates its children in insertion order: Khair (a leaf, prints and stops), then Chin (a composite, prints itself and then recurses into Mohammad and Lee). The ordering is therefore a depth-first, pre-order traversal following `ArrayList` insertion order. Salaries print with `.0` because `getSalary()` returns `double`.

```java
// Output:
------------
Name =Tan
Salary =10000.0
------------
------------
Name =Khair
Salary =4500.0
------------
------------
Name =Chin
Salary =6000.0
------------
------------
Name =Mohammad
Salary =3500.0
------------
------------
Name =Lee
Salary =4000.0
------------

// Traversal:
// Tan (composite)
//  ├── Khair    (leaf   — added first)
//  └── Chin     (composite — added second)
//       ├── Mohammad (leaf)
//       └── Lee      (leaf)
```

> **Exam trap:** Two easy losses: printing Chin before Khair (wrong insertion order), and writing `10000` instead of `10000.0`.

*Tags: Composite, trace-output, depth-first, pre-order*

</details>

---

## CODE-0012 — Composite (Very Hard, 6 marks)

**Type:** Explain the leaf no-ops  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

In the lecturer's `Developer` class, `add()`, `remove()` and `getChild()` have empty bodies with the comment *'this is leaf node so this method is not applicable to this class.'* Explain the design trade-off this represents, and name the alternative the GoF discuss.

<details>
<summary><strong>Show answer</strong></summary>

This is the *transparency vs. safety* trade-off. Declaring child operations on the Component interface maximises **transparency**: a client can call `add()` on any `Employee` without knowing whether it is a leaf or a composite, which is the whole point of uniform treatment. The cost is **safety**: calling `add()` on a `Developer` is meaningless yet compiles and silently does nothing. The alternative is to declare child operations only on `Composite`, which makes the error a compile-time one but forces clients to type-test and breaks uniformity. The lecture's example chooses transparency. Matches the lecture's stated consequence that Composite 'can make type-specific constraints harder'.

```java
// The lecturer's choice — TRANSPARENCY
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
// so leaves and composites are no longer treated uniformly.
```

> **Exam trap:** Calling the empty methods 'a bug' misses the point — they are a deliberate consequence of choosing transparency.

*Tags: Composite, transparency-vs-safety, design-trade-off*

</details>

---

## CODE-0013 — Composite (Very Hard, 8 marks)

**Type:** Extend the codebase  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

Extend the Composite example so that `Manager.getTotalSalary()` returns the combined salary of that manager and everyone beneath them, at any depth. Give the code and state which classes change.

<details>
<summary><strong>Show answer</strong></summary>

Add `getTotalSalary()` to the `Employee` interface. In `Developer` (leaf) it returns just its own salary — the recursion base case. In `Manager` (composite) it returns its own salary plus the recursive sum over its children. Both classes change plus the interface; the client does not need to know the tree's depth, which is the payoff of the recursive structure.

```java
// Employee.java — add to the Component interface
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
//   = 10000 + 4500 + (6000 + 3500 + 4000) = 28000.0
```

> **Exam trap:** Forgetting the leaf base case, or summing children but omitting the composite's own salary.

*Tags: Composite, extend, recursion, part-whole*

</details>

---

## CODE-0014 — Composite (Hard, 7 marks)

**Type:** Fill in the missing class  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

You are given the lecturer's `Employee` interface and `Manager` composite, but `Developer` is missing. Write the complete `Developer` leaf class so the program compiles and produces the documented output.

<details>
<summary><strong>Show answer</strong></summary>

The leaf must implement every Component method: real behaviour for `getName`, `getSalary` and `print`; no-op/`null` implementations for the three child-management operations, because a leaf has no children. `print()` must emit exactly the same dashed-line format as `Manager` so that output is uniform regardless of node type.

```java
package CompositeExample;
//The leaf
public class Developer implements Employee{
  private String name;
  private double salary;

  public Developer(String name,double salary){
    this.name = name;
    this.salary = salary;
  }
  public void add(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }

  public Employee getChild(int i) {
    //this is leaf node so this method is not applicable to this class.
    return null;
  }

  public String getName() {
    return name;
  }
  public double getSalary() {
    return salary;
  }
  public void print() {
    System.out.println("------------");
    System.out.println("Name ="+getName());
    System.out.println("Salary ="+getSalary());
    System.out.println("------------");
  }
  public void remove(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }
}
```

> **Exam trap:** Omitting `add`/`remove`/`getChild` will not compile — an interface implementation must be total.

*Tags: Composite, fill-in-the-blank, leaf*

</details>

---

## CODE-0015 — Facade (Hard, 10 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

A client needs to draw circles, rectangles and squares but should not have to know about the individual shape classes or construct any of them. Implement the **Facade** pattern in Java: give the subsystem interface, the subsystem classes, the facade, and a demo.

<details>
<summary><strong>Show answer</strong></summary>

Subsystem = `Shape` plus `Circle`/`Rectangle`/`Square`. Facade = `ShapeMaker`, which privately owns one instance of each subsystem class and exposes simple, intention-revealing methods (`drawCircle()`, `drawRectangle()`, `drawSquare()`). The client talks only to `ShapeMaker` and never imports or instantiates a subsystem class, which is exactly the coupling reduction the pattern provides. Note the subsystem classes hold no reference back to the facade — per the lecture, they 'have no knowledge of the facade'.

```java
public interface Shape {
   void draw();
}

// ---
public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Circle::draw()");
   }
}

// ---
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Rectangle::draw()");
   }
}

// ---
public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Square::draw()");
   }
}

// ---
public class ShapeMaker {
   private Shape circle;
   private Shape rectangle;
   private Shape square;

   public ShapeMaker() {
      circle = new Circle();
      rectangle = new Rectangle();
      square = new Square();
   }

   public void drawCircle(){
      circle.draw();
   }
   public void drawRectangle(){
      rectangle.draw();
   }
   public void drawSquare(){
      square.draw();
   }
}

// ---
public class FacadePatternDemo {
   public static void main(String[] args) {
      ShapeMaker shapeMaker = new ShapeMaker();

      shapeMaker.drawCircle();
      shapeMaker.drawRectangle();
      shapeMaker.drawSquare();
   }
}

/* Verified output:
Circle::draw()
Rectangle::draw()
Square::draw()
*/
```

> **Exam trap:** Making the facade's fields public, or letting subsystem classes reference the facade, breaks the one-way dependency the pattern relies on.

*Tags: Facade, structural, full-implementation, ShapeMaker*

</details>

---

## CODE-0016 — Facade (Brutal, 8 marks)

**Type:** Compare with Factory Method  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

The lecturer's Factory Method example and Facade example both use a `Shape` interface with `Circle`, `Rectangle` and `Square`. Explain, with reference to the code, why they are nevertheless different patterns solving different problems.

<details>
<summary><strong>Show answer</strong></summary>

Different intents, visible in the method signatures. `ShapeFactory.getShape(String)` **returns** a `Shape` — its job is object *creation*, and the client still holds and uses the product afterwards. `ShapeMaker.drawCircle()` returns `void` — it creates its subsystem objects once in its constructor and then *performs the work on the client's behalf*, so the client never holds a `Shape` at all. Factory Method (creational) answers 'which object do I instantiate?'; Facade (structural) answers 'how do I hide a complicated subsystem behind a simple interface?'. Similar class names, different problems.

```java
// FACTORY METHOD — creational: hands the product back to the client
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
shapeMaker.drawCircle();                            // client holds no Shape
```

> **Exam trap:** 'They both use Shape so they're similar' earns nothing. Compare the intent and the return types.

*Tags: Facade, Factory Method, compare, intent*

</details>

---

## CODE-0017 — Facade (Hard, 6 marks)

**Type:** Extend the codebase  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

Add a `drawAll()` operation to the lecturer's `ShapeMaker` that draws all three shapes in the order circle, rectangle, square. State what the client must change and what this shows about the facade's value.

<details>
<summary><strong>Show answer</strong></summary>

Only `ShapeMaker` changes; the subsystem classes and the client's existing calls are untouched. This demonstrates the facade's real payoff: it is a single, controlled place to add higher-level convenience operations, so behaviour can be composed without the client ever learning the subsystem's structure.

```java
public class ShapeMaker {
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
// UNCHANGED: Shape.java, Circle.java, Rectangle.java, Square.java
```

> **Exam trap:** The lecture warns a facade can become bloated — note the limit rather than implying unlimited additions are free.

*Tags: Facade, extend, higher-level-interface*

</details>

---

## CODE-0018 — Facade (Hard, 4 marks)

**Type:** Trace program output  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

State the exact output of the lecturer's `FacadePatternDemo`, and explain how many `Circle` objects are created during the whole run and when.

<details>
<summary><strong>Show answer</strong></summary>

Output is three lines in call order. Exactly one `Circle` is created, and it is created in the `ShapeMaker` constructor — not per call. `drawCircle()` merely delegates to the already-constructed instance, so calling it ten times still involves one `Circle`. Note the strings here are `Circle::draw()` (Facade example), not `Inside Circle::draw() method.` (Factory example) — the two decks use different message text.

```java
// Output:
Circle::draw()
Rectangle::draw()
Square::draw()

// Object creation:
// new ShapeMaker()  -> constructs Circle, Rectangle, Square ONCE each
// drawCircle()      -> reuses the existing circle field (no allocation)
```

> **Exam trap:** Mixing up the two decks' print strings — Facade prints `Circle::draw()`, Factory prints `Inside Circle::draw() method.`

*Tags: Facade, trace-output, object-lifetime*

</details>

---

## CODE-0019 — Observer (Hard, 12 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Implement the **Observer** pattern in Java for a social-media scenario: a celebrity has many followers; each follower must automatically receive every post the celebrity makes; followers may start or stop following at any time. Give the Subject interface, the Observer interface, the ConcreteSubject, the ConcreteObserver, and a demo.

<details>
<summary><strong>Show answer</strong></summary>

Subject = interface with `register`, `unregister`, `notifyAllObservers`. Observer = interface with `update(name, post)`. ConcreteSubject = `Celebrity`, holding an `ArrayList<Observer>` and calling `notifyAllObservers()` from inside `post()` so that publishing automatically triggers notification. ConcreteObserver = `Follower`, whose `update()` reacts to the notification. The decisive property: `Celebrity` knows only the `Observer` *interface*, never `Follower`, so followers can be added or removed without changing the subject — the one-to-many dependency is maintained without tight coupling.

```java
package ObserverExample;
//This Class handles adding, deleting
//and updating all observers
public interface Subject {
  public void register(Observer o);
  public void unregister(Observer o);
  public void notifyAllObservers(String s);
}

// ---
package ObserverExample;
//The Observers update method is called
//when the Subject changes
interface Observer{
  public void update(String name, String s);
}

// ---
package ObserverExample;
import java.util.ArrayList;
//This class implements Subject interface.
class Celebrity implements Subject {
    private String celebrityName;  //name of the celebrity
    private ArrayList<Observer> followers;  //list of followers
    public Celebrity(String celebrityName) {
    this.celebrityName = celebrityName;
    followers = new ArrayList<Observer>();
}
//add follower to the celebrity's registered follower list
@Override
public void register(Observer o) {
    followers.add(o);
    System.out.println(o + " has started following " + celebrityName);
}
//remove follower from celebrity's registered follower list
@Override
public void unregister(Observer o) {
   followers.remove(o);
   System.out.println(o + " has stopped following " + celebrityName);
}
//Notify all the registered followers
@Override
public void notifyAllObservers(String post) {
  for(Observer follower : followers)
  {
   follower.update(celebrityName, post);
  }
  System.out.println();
}
//This method updates the post.
//It will internally call notifyAllObservers(post) method
//after updating the post.
public void post(String post)
 {
  System.out.println("\n" + celebrityName + " has posted :: " + post + "\n");
  notifyAllObservers(post);
 }
}

// ---
package ObserverExample;
//This class implements Observer interface.
class Follower implements Observer{
  private String followerName;
  public Follower(String followerName) {
    this.followerName = followerName;
}
//This method will be called to update all followers
//regarding the new post posted by celebrity.
@Override
public void update(String celebrityName , String post) {
  System.out.println(followerName + " has received "+
  celebrityName + "'s post    :: "+ post);
}
@Override
public String toString() {
  return followerName;
 }
}

// ---
package ObserverExample;
public class ObserverDesignPattern {
public static void main(String[] args) {
  Celebrity mahatir = new Celebrity("Dr.Mahatir Mohammad");
  Celebrity billgates = new Celebrity("Bill Gates");
  Follower muhammad = new Follower("muhammad");
  Follower lee = new Follower("lee");
  Follower tan = new Follower("tan");
  Follower samir =  new Follower("samir");

  mahatir.register(muhammad);
  mahatir.register(lee);
  mahatir.register(tan);

  billgates.register(muhammad);
  billgates.register(lee);
  billgates.register(samir);

  mahatir.post("Media Statement: Prime Minister's nomination");
  billgates.post("Here are five books to read this summer if you want to "
       + "learn more about pandemics");
  billgates.unregister(samir);
  billgates.post("This hero is playing a critical role in Kenya's"
       + " preparations to tackle COVID-19 by scaling up medical "
       + "oxygen supplies that will be needed to keep the most "
       + "critically ill patients alive.");
 }
}
```

> **Exam trap:** Typing the list as `ArrayList<Follower>` instead of `ArrayList<Observer>` couples the subject to a concrete observer and defeats the pattern.

*Tags: Observer, behavioral, full-implementation, Celebrity, Follower*

</details>

---

## CODE-0020 — Observer (Brutal, 10 marks)

**Type:** Trace program output  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Trace the output of the lecturer's `ObserverDesignPattern` demo. In particular, explain exactly why `samir` receives the second Bill Gates post but not the third, and why `tan` never receives any Bill Gates post at all.

<details>
<summary><strong>Show answer</strong></summary>

Registration order produces the six 'has started following' lines. `mahatir.post(...)` notifies only mahatir's list: muhammad, lee, tan. The first `billgates.post(...)` notifies muhammad, lee, samir. Then `billgates.unregister(samir)` removes samir from that list only, so the third post reaches just muhammad and lee. `tan` never receives a Bill Gates post because tan was only ever registered with mahatir — each ConcreteSubject holds its own independent observer list. This is the pattern's key runtime property: the subject notifies exactly its current registrants, and the set can change between notifications.

```java
// Verified output:
muhammad has started following Dr.Mahatir Mohammad
lee has started following Dr.Mahatir Mohammad
tan has started following Dr.Mahatir Mohammad
muhammad has started following Bill Gates
lee has started following Bill Gates
samir has started following Bill Gates

Dr.Mahatir Mohammad has posted :: Media Statement: Prime Minister's nomination

muhammad has received Dr.Mahatir Mohammad's post    :: Media Statement: Prime Minister's nomination
lee has received Dr.Mahatir Mohammad's post    :: Media Statement: Prime Minister's nomination
tan has received Dr.Mahatir Mohammad's post    :: Media Statement: Prime Minister's nomination


Bill Gates has posted :: Here are five books to read this summer if you want to learn more about pandemics

muhammad has received Bill Gates's post    :: Here are five books to read this summer if you want to learn more about pandemics
lee has received Bill Gates's post    :: Here are five books to read this summer if you want to learn more about pandemics
samir has received Bill Gates's post    :: Here are five books to read this summer if you want to learn more about pandemics

samir has stopped following Bill Gates

Bill Gates has posted :: This hero is playing a critical role in Kenya's preparations to tackle COVID-19 by scaling up medical oxygen supplies that will be needed to keep the most critically ill patients alive.

muhammad has received Bill Gates's post    :: This hero is playing a critical role in Kenya's preparations ...
lee has received Bill Gates's post    :: This hero is playing a critical role in Kenya's preparations ...

// Why:
// mahatir.followers  = [muhammad, lee, tan]
// billgates.followers= [muhammad, lee, samir]  -> after unregister(samir): [muhammad, lee]
// each Celebrity instance owns a SEPARATE ArrayList<Observer>
```

> **Exam trap:** Assuming one global observer list. Each subject instance has its own — that is why tan never hears from Bill Gates.

*Tags: Observer, trace-output, unregister, independent-subjects*

</details>

---

## CODE-0021 — Observer (Very Hard, 8 marks)

**Type:** Extend the codebase  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Extend the Observer example with a new observer type `NewsAgency` that reacts to a celebrity post differently from a `Follower`. Give the code, and state what must change in `Celebrity`.

<details>
<summary><strong>Show answer</strong></summary>

`Celebrity` changes **not at all**. Because it is programmed against the `Observer` interface, any new implementer can be registered. This is precisely the lecture's stated advantage: 'new recipients can be added without modification to the producers'. Add `NewsAgency implements Observer` with its own `update()` behaviour and register it like any other observer.

```java
package ObserverExample;
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
// UNCHANGED: Subject.java, Observer.java, Celebrity.java, Follower.java
```

> **Exam trap:** Saying `Celebrity` must be edited: it must not. If it does, you have coupled the subject to concrete observers.

*Tags: Observer, extend, open-closed, decoupling*

</details>

---

## CODE-0022 — Observer (Brutal, 8 marks)

**Type:** Spot the violation  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

A student rewrites `Celebrity` as shown below. Explain what breaks, referencing the pattern's intent, and give the corrected code.

<details>
<summary><strong>Show answer</strong></summary>

The student typed the collection as `ArrayList<Follower>` and calls a `Follower`-specific method. The subject is now coupled to one concrete observer class: no other observer type can ever register, and adding one forces `Celebrity` to change — destroying the 'notify without knowing who' property that is the pattern's entire intent. Correct it by depending only on the `Observer` interface.

```java
// WRONG
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
}
```

> **Exam trap:** Identifying the downcast but not explaining that it defeats the intent only earns partial credit.

*Tags: Observer, spot-the-bug, ClassCastException, coupling*

</details>

---

## CODE-0023 — Observer (Brutal, 8 marks)

**Type:** Architecture vs implementation  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf; Lecture4_ArchitecturalPatterns_10_CCPatterns_Publish-Subscribe.pdf

The lecture notes Observer is *'Also Known As: Dependents, Publish-Subscribe'*. Using the `Celebrity`/`Follower` code, explain why Observer is nevertheless **not** the same thing as the architectural Publish-Subscribe pattern from Lecture 4.

<details>
<summary><strong>Show answer</strong></summary>

They sit at different levels of abstraction. In the Observer code the `Celebrity` object holds a direct `ArrayList<Observer>` of in-process object references and invokes `update()` as an ordinary synchronous method call within one JVM — this is class/object-level design. Architectural Publish-Subscribe describes *runtime components* connected by an event-distribution connector, where publishers place events on a bus and an infrastructure element routes them to subscribers that may be in separate processes or machines. In fact the lecture's list-based publish-subscribe variant is the closest architectural analogue of Observer, precisely because the publisher maintains its own subscription list. Use Publish-Subscribe for system-level event architecture; use Observer when the question asks for an object-level design pattern.

```java
// OBSERVER (implementation level) — direct object references, same JVM
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
//   * lecture weaknesses: increased latency, no guaranteed delivery/ordering
```

> **Exam trap:** Treating the two as interchangeable. The shared alias 'publish-subscribe' is the trap, not the answer.

*Tags: Observer, Publish-Subscribe, abstraction-level, architecture-vs-design*

</details>

---

## CODE-0024 — State (Robot) (Hard, 12 marks)

**Type:** Write full implementation  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

A cooking robot can walk, cook, or be switched off. If it is **on** it may walk; asking it to cook moves it to the cook state; asking it to switch off switches it off. When **cooking** it may walk or cook but cannot be switched off. When **off** it automatically switches on and walks if told to walk, but cannot cook. Implement this with the **State** pattern rather than if-else branches.

<details>
<summary><strong>Show answer</strong></summary>

State = `RoboticState` interface declaring `walk()`, `cook()`, `off()`. Context = `Robot`, which holds one instance of each ConcreteState plus a current `state` field, and delegates every public call to `state`. ConcreteStates = `RoboticOn`, `RoboticCook`, `RoboticOff`, each implementing all three operations and performing the transition by calling `robot.setRoboticState(...)`. Each branch of what would have been a large conditional now lives in its own class, so adding a state means adding a class rather than editing every conditional.

```java
package StateExample;
public interface RoboticState {
    public void walk();
    public void cook();
    public void off();
}

// ---
package StateExample;
public class Robot implements RoboticState{
    private RoboticState roboticOn;
    private RoboticState roboticCook;
    private RoboticState roboticOff;
    private RoboticState state;
    public Robot(){
        this.roboticOn = new RoboticOn(this);
        this.roboticCook = new RoboticCook(this);
        this.roboticOff = new RoboticOff(this);
        this.state = roboticOn;
    }

    public void setRoboticState(RoboticState state){
        this.state = state;
    }
    public RoboticState getState() {
        return state;
    }
    @Override
    public void walk() {
        state.walk();
    }
    @Override
    public void cook() {
        state.cook();
    }
    @Override
    public void off() {
        state.off();
    }

    public RoboticState getRoboticOn() {
        return roboticOn;
    }
    public void setRoboticOn(RoboticState roboticOn) {
        this.roboticOn = roboticOn;
    }

    public RoboticState getRoboticCook() {
        return roboticCook;
    }
    public void setRoboticCook(RoboticState roboticCook) {
        this.roboticCook = roboticCook;
    }

    public RoboticState getRoboticOff() {
        return roboticOff;
    }
    public void setRoboticOff(RoboticState roboticOff) {
        this.roboticOff = roboticOff;
    }
}

// ---
package StateExample;
public class RoboticOn implements RoboticState{
    private final Robot robot;
    public RoboticOn(Robot robot){
        this.robot = robot;
    }
    @Override
    public void walk() {
        System.out.println("Walking...");
    }
    @Override
    public void cook() {
        System.out.println("Cooking...");
        robot.setRoboticState(robot.getRoboticCook());
    }
    @Override
    public void off() {
        robot.setRoboticState(robot.getRoboticOff());
        System.out.println("Robot is switched off");
    }
}

// ---
package StateExample;
public class RoboticCook implements RoboticState{
    private final Robot robot;
    public RoboticCook(Robot robot){
        this.robot = robot;
    }
    @Override
    public void walk() {
        System.out.println("Walking...");
        robot.setRoboticState(robot.getRoboticOn());
    }
    @Override
    public void cook() {
        System.out.println("Cooking...");
    }
    @Override
    public void off() {
        System.out.println("Cannot switched off "
                + "while cooking...");
    }
}

// ---
package StateExample;
public class RoboticOff implements RoboticState{
    private final Robot robot;
    public RoboticOff(Robot robot){
        this.robot = robot;
    }
    @Override
    public void walk() {
        System.out.println("Walking...");
        robot.setRoboticState(robot.getRoboticOn());
    }
    @Override
    public void cook() {
        System.out.println("Cannot cook at Off state.");
    }
    @Override
    public void off() {
        System.out.println("Already switched off...");
    }
}

// ---
package StateExample;
public class TestStatePattern {
    public static void main(String[] args) {
        Robot robot = new Robot();
        robot.walk();
        robot.cook();
        robot.walk();
        robot.off();
        robot.walk();
        robot.off();
        robot.cook();
    }
}

/* Verified output:
Walking...
Cooking...
Walking...
Robot is switched off
Walking...
Robot is switched off
Cannot cook at Off state.
*/
```

> **Exam trap:** A ConcreteState that prints but never calls `setRoboticState` leaves the machine stuck — the transition is the point.

*Tags: State, behavioral, full-implementation, Robot, transitions*

</details>

---

## CODE-0025 — State (Robot) (Brutal, 10 marks)

**Type:** Trace program output  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Trace the exact output of the lecturer's `TestStatePattern`, naming the robot's state before and after every call.

<details>
<summary><strong>Show answer</strong></summary>

Start in RoboticOn (set by the constructor). walk -> 'Walking...', stays On. cook -> 'Cooking...', moves to Cook. walk -> 'Walking...', moves back to On. off -> moves to Off then prints 'Robot is switched off' (note the transition happens *before* the print in `RoboticOn.off()`). walk -> 'Walking...', moves to On. off -> to Off, prints again. cook -> 'Cannot cook at Off state.', no transition. Seven lines total.

```java
// Verified output:
Walking...
Cooking...
Walking...
Robot is switched off
Walking...
Robot is switched off
Cannot cook at Off state.

// State trace:
// init          -> RoboticOn
// walk()  On    -> On     : "Walking..."
// cook()  On    -> Cook   : "Cooking..."
// walk()  Cook  -> On     : "Walking..."
// off()   On    -> Off    : "Robot is switched off"
// walk()  Off   -> On     : "Walking..."
// off()   On    -> Off    : "Robot is switched off"
// cook()  Off   -> Off    : "Cannot cook at Off state."
```

> **Exam trap:** Missing that `walk()` from Off transitions back to On means the final two lines come out wrong.

*Tags: State, trace-output, state-transitions*

</details>

---

## CODE-0026 — State (Robot) (Brutal, 12 marks)

**Type:** Refactor conditionals to State  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

The code below implements the robot with enum-and-switch logic. Refactor it into the **State** pattern and explain, using the lecture's stated applicability, why the refactoring is justified.

<details>
<summary><strong>Show answer</strong></summary>

The lecture's applicability says to use State when 'operations have large, multipart conditional statements that depend on the object's state' and 'often, several operations will contain this same conditional structure'. Here all three methods repeat the same three-way switch — so a new state means editing every method, and the transition logic is scattered. The refactoring puts each branch of the conditional into its own class, so state-specific behaviour is localised and adding a state is additive.

```java
// BEFORE — the same switch repeated in every operation
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
// ... RoboticCook and RoboticOff likewise, one class per state
```

> **Exam trap:** Refactoring the syntax but leaving the switch inside each ConcreteState — the branches must disappear entirely.

*Tags: State, refactoring, conditionals, applicability*

</details>

---

## CODE-0027 — State (Robot) (Very Hard, 9 marks)

**Type:** Extend the codebase  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Add a `RoboticCharging` state to the robot: while charging it cannot walk and cannot cook, but it can be switched off. Give the new class and every change to existing classes.

<details>
<summary><strong>Show answer</strong></summary>

Add `RoboticCharging implements RoboticState`, plus a field, getter and constructor line in `Robot`. The three existing ConcreteStates need change only if a transition *into* charging is required. This is the pattern's core benefit: the new behaviour is a new class rather than a new branch inside three existing methods — contrast with the switch version, where every operation would need editing.

```java
package StateExample;
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
//   RoboticOn.java, RoboticCook.java, RoboticOff.java
```

> **Exam trap:** Adding an operation to the State interface forces every implementer to change — say so rather than claiming it is free.

*Tags: State, extend, new-state, open-closed*

</details>

---

## CODE-0028 — State (Robot) (Very Hard, 6 marks)

**Type:** Explain the transition ordering  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

In `RoboticOn.off()` the lecturer sets the new state **before** printing, whereas in `RoboticOn.cook()` the print happens **before** the transition. Does this ordering affect the observable output? Explain precisely.

<details>
<summary><strong>Show answer</strong></summary>

For this program, no — the print statements are literal strings that do not read the robot's current state, so swapping the two lines produces identical output. But the ordering *would* matter if the message were derived from state (e.g. printing `robot.getState()`), or if `setRoboticState` had side effects, or in a concurrent setting where another thread could observe the object between the two statements. The safe general rule is to complete the transition and then report, so the object is never observed in a half-updated condition.

```java
// As written in RoboticOn:
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
}
```

> **Exam trap:** Answering a flat 'yes it changes the output' without checking whether the printed string actually reads the state.

*Tags: State, ordering, side-effects, concurrency*

</details>

---

## CODE-0029 — State (ATM) (Brutal, 15 marks)

**Type:** Write full implementation  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

A bank wants an ATM system supporting: insert card, eject card, insert PIN, withdraw money. The machine behaves differently in four situations — no card inserted; card inserted; card inserted with correct PIN entered; and machine out of cash. Propose a suitable design pattern and write the complete Java implementation.

<details>
<summary><strong>Show answer</strong></summary>

The State pattern. Behaviour depends entirely on which of four situations the machine is in, and all four operations behave differently in each — the lecture's exact applicability condition. State = `ATMState` interface with the four operations. Context = `ATMMachine`, holding one instance of each state, a current `atmState`, and the machine's cash; every public method delegates to `atmState`. ConcreteStates = `NoCard`, `HasCard`, `HasPin`, `NoCash`. Note `HasPin.withdrawCash()` carries the important conditional transition: after a successful withdrawal it returns to `NoCard`, but if cash has run to zero it moves to `NoCash` instead.

```java
package ATMMachineStateExample;
public interface ATMState {
	// Different states of ATM machine
	// HasCard, NoCard, HasPin, NoCash
	void insertATMCard();
	void ejectATMCard();
	void insertPin(int pinEntered);
	void withdrawCash(int cashToWithdraw);
}

// ---
package ATMMachineStateExample;
public class ATMMachine {
	ATMState hasCard;
	ATMState noCard;
	ATMState hasCorrectPin;
	ATMState atmOutOfMoney;
	ATMState atmState;

	int cashInMachine = 3000;
	boolean correctPinEntered = false;
	public ATMMachine(){
		hasCard = new HasCard(this);
		noCard = new NoCard(this);
		hasCorrectPin = new HasPin(this);
		atmOutOfMoney = new NoCash(this);
		atmState = noCard;
		if(cashInMachine < 0){
			atmState = atmOutOfMoney;
		}
	}

	void setATMState(ATMState newATMState){
		atmState = newATMState;
	}

	public void setCashInMachine(int newCashInMachine){
		cashInMachine = newCashInMachine;
	}

	public void insertATMCard() {
		atmState.insertATMCard();
	}

	public void ejectATMCard() {
		atmState.ejectATMCard();
	}

	public void withdrawCash(int cashToWithdraw) {
		atmState.withdrawCash(cashToWithdraw);
	}

	public void insertPin(int pinEntered){
		atmState.insertPin(pinEntered);
	}

	public ATMState getYesCardState() { return hasCard; }
	public ATMState getNoCardState() { return noCard; }
	public ATMState getHasPin() { return hasCorrectPin; }
	public ATMState getNoCashState() { return atmOutOfMoney; }
}

// ---
package ATMMachineStateExample;
public class NoCard implements ATMState {

	ATMMachine atmMachine;
	public NoCard(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}

	@Override
	public void insertATMCard() {
		System.out.println("Please enter your pin");
		atmMachine.setATMState(atmMachine.getYesCardState());
	}

	@Override
	public void ejectATMCard() {
		System.out.println("You didn't enter a card");
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		System.out.println("You have not entered your card");
	}

	@Override
	public void insertPin(int pinEntered) {
		System.out.println("You have not entered your card");
	}
}

// ---
package ATMMachineStateExample;
public class HasCard implements ATMState {

	ATMMachine atmMachine;
	public HasCard(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}

	@Override
	public void insertATMCard() {
		System.out.println("You can only insert one card at a time");
	}

	public void ejectATMCard() {
		System.out.println("Your card is ejected");
		atmMachine.setATMState(atmMachine.getNoCardState());
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		System.out.println("You have not entered your PIN");
	}

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
	}
}

// ---
package ATMMachineStateExample;
public class HasPin implements ATMState {
	ATMMachine atmMachine;
	public HasPin(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}
	@Override
	public void insertATMCard() {
		System.out.println("You already inserted a card");
	}

	@Override
	public void ejectATMCard() {
		System.out.println("Your card is ejected");
		atmMachine.setATMState(atmMachine.getNoCardState());
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		if(cashToWithdraw > atmMachine.cashInMachine){
			System.out.println("There isn't enough available cash");
			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());
		} else {
			System.out.println(cashToWithdraw+" is provided by the machine");
			atmMachine.setCashInMachine(atmMachine.cashInMachine - cashToWithdraw);

			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());

			if(atmMachine.cashInMachine <= 0){
				atmMachine.setATMState(atmMachine.getNoCashState());
			}
		}
	}

	@Override
	public void insertPin(int pinEntered) {
		System.out.println("You already entered a PIN");
	}
}

// ---
package ATMMachineStateExample;
public class NoCash implements ATMState {

	ATMMachine atmMachine;
	public NoCash(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}

	@Override
	public void insertATMCard() {
		System.out.println("There is no money in this ATM");
		System.out.println("Your card is ejected");
	}

	@Override
	public void ejectATMCard() {
		System.out.println("There is no money in this ATM");
		System.out.println("There is no card to eject");
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		System.out.println("There is no money in this ATM");
	}

	@Override
	public void insertPin(int pinEntered) {
		System.out.println("There is no money in this ATM");
	}
}

// ---
package ATMMachineStateExample;
public class TestATMMachine {

	public static void main(String[] args){
		ATMMachine atmMachine = new ATMMachine();
		atmMachine.insertATMCard();
		atmMachine.ejectATMCard();
		atmMachine.insertATMCard();
		atmMachine.insertPin(1234);
		atmMachine.withdrawCash(3000);
		atmMachine.insertATMCard();
		atmMachine.insertPin(1234);
	}
}

/* Verified output:
Please enter your pin
Your card is ejected
Please enter your pin
You entered the correct PIN
3000 is provided by the machine
Your card is ejected
There is no money in this ATM
Your card is ejected
There is no money in this ATM
*/
```

> **Exam trap:** Answering 'Strategy' — Strategy swaps an interchangeable algorithm chosen by the client; here the object's own internal state drives the behaviour change and the transitions.

*Tags: State, ATM, full-implementation, tutorial-8*

</details>

---

## CODE-0030 — State (ATM) (Brutal, 10 marks)

**Type:** Trace program output  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

Trace the exact output of `TestATMMachine`, naming the ATM's state before and after every call, and explain why the last three calls all report that there is no money.

<details>
<summary><strong>Show answer</strong></summary>

Start in NoCard (constructor, since cashInMachine = 3000 is not < 0). insertATMCard -> 'Please enter your pin', to HasCard. ejectATMCard -> 'Your card is ejected', back to NoCard. insertATMCard -> to HasCard. insertPin(1234) -> correct, to HasPin. withdrawCash(3000) -> prints the amount, sets cash to 0, ejects to NoCard, then because cashInMachine <= 0 immediately overrides the state to NoCash. From that point the machine is permanently in NoCash, so insertATMCard and insertPin both fall through to NoCash's implementations, which report there is no money regardless of the input. The 1234 PIN is never even examined.

```java
// Verified output:
Please enter your pin
Your card is ejected
Please enter your pin
You entered the correct PIN
3000 is provided by the machine
Your card is ejected
There is no money in this ATM
Your card is ejected
There is no money in this ATM

// State trace:
// init                -> NoCard        (cashInMachine = 3000)
// insertATMCard()     NoCard  -> HasCard
// ejectATMCard()      HasCard -> NoCard
// insertATMCard()     NoCard  -> HasCard
// insertPin(1234)     HasCard -> HasPin      (correct PIN)
// withdrawCash(3000)  HasPin  -> NoCard -> NoCash   (cash now 0)
// insertATMCard()     NoCash  -> NoCash      "There is no money in this ATM"
// insertPin(1234)     NoCash  -> NoCash      "There is no money in this ATM"
```

> **Exam trap:** Missing the double transition inside `withdrawCash` — it sets NoCard first, then overrides to NoCash. Both happen in one call.

*Tags: State, ATM, trace-output, double-transition*

</details>

---

## CODE-0031 — State (ATM) (Brutal, 10 marks)

**Type:** Predict output for a new sequence  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

For a fresh `ATMMachine`, predict the exact output of this sequence and name the state after each call:

```
atmMachine.withdrawCash(500);
atmMachine.insertATMCard();
atmMachine.insertPin(9999);
atmMachine.insertATMCard();
atmMachine.insertPin(1234);
atmMachine.withdrawCash(5000);
```

<details>
<summary><strong>Show answer</strong></summary>

A fresh machine starts in NoCard with 3000. The withdrawal attempt with no card is rejected. The card goes in, the wrong PIN ejects it and returns to NoCard. The card goes back in, the correct PIN moves to HasPin. Requesting 5000 exceeds the 3000 available, so the machine reports insufficient cash and ejects to NoCard — importantly, the cash balance is NOT reduced and the machine does NOT enter NoCash, because that branch never touches `setCashInMachine`.

```java
// Predicted output:
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
//                                          cash NOT debited, NOT NoCash
```

> **Exam trap:** Assuming an over-limit withdrawal empties the machine or triggers NoCash — that branch never calls `setCashInMachine`.

*Tags: State, ATM, predict-output, guard-condition*

</details>

---

## CODE-0032 — State (ATM) (Brutal, 9 marks)

**Type:** Spot the violation  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

A developer edits `HasCard.insertPin()` as shown below, reporting that wrong PINs now 'work properly'. Identify the defects and give the corrected method.

<details>
<summary><strong>Show answer</strong></summary>

Two defects. First, on the wrong-PIN branch the developer sets `correctPinEntered = true` and transitions to `HasPin`, so an incorrect PIN grants withdrawal rights — a security failure, not merely a logic slip. Second, the card is never ejected on failure, so the machine is left in an inconsistent state relative to the specification. The corrected version sets the flag false, prints the rejection, and returns the machine to `NoCard` with the card ejected.

```java
// WRONG
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
}
```

> **Exam trap:** Describing it as 'a logic error' understates it — this is an authentication bypass.

*Tags: State, ATM, spot-the-bug, security*

</details>

---

## CODE-0033 — State (ATM) (Very Hard, 8 marks)

**Type:** Fill in the missing class  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

You are given `ATMState`, `ATMMachine`, `NoCard`, `HasCard` and `NoCash`, but `HasPin` is missing. Write the complete `HasPin` class so the documented behaviour and output are reproduced exactly.

<details>
<summary><strong>Show answer</strong></summary>

`HasPin` must implement all four operations: reject a second card, eject on request and return to NoCard, reject a repeated PIN entry, and handle withdrawal. Withdrawal is the demanding part — it needs the over-limit guard (report, eject, no debit), the success path (report, debit, eject to NoCard), and then the nested check that moves to NoCash when the balance has reached zero.

```java
package ATMMachineStateExample;
public class HasPin implements ATMState {
	ATMMachine atmMachine;
	public HasPin(ATMMachine newATMMachine){
		atmMachine = newATMMachine;
	}
	@Override
	public void insertATMCard() {
		System.out.println("You already inserted a card");
	}

	@Override
	public void ejectATMCard() {
		System.out.println("Your card is ejected");
		atmMachine.setATMState(atmMachine.getNoCardState());
	}

	@Override
	public void withdrawCash(int cashToWithdraw) {
		if(cashToWithdraw > atmMachine.cashInMachine){
			System.out.println("There isn't enough available cash");
			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());
		} else {
			System.out.println(cashToWithdraw+" is provided by the machine");
			atmMachine.setCashInMachine(atmMachine.cashInMachine - cashToWithdraw);

			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());

			if(atmMachine.cashInMachine <= 0){
				atmMachine.setATMState(atmMachine.getNoCashState());
			}
		}
	}

	@Override
	public void insertPin(int pinEntered) {
		System.out.println("You already entered a PIN");
	}
}
```

> **Exam trap:** Omitting the nested `if(atmMachine.cashInMachine <= 0)` — without it the ATM keeps serving customers with an empty cash box.

*Tags: State, ATM, fill-in-the-blank, HasPin*

</details>

---

## CODE-0034 — State (ATM) (Brutal, 12 marks)

**Type:** Extend the codebase  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

Extend the ATM so a card is retained after three consecutive wrong PIN attempts, using a new `CardBlocked` state. Give the new class and all changes to existing classes.

<details>
<summary><strong>Show answer</strong></summary>

Add a `wrongPinAttempts` counter to the Context (it is machine-level data, not state-level, so it belongs in `ATMMachine` alongside `cashInMachine`). Add `CardBlocked implements ATMState` where every operation refuses service. Modify only `HasCard.insertPin()`'s failure branch to increment the counter and switch to `CardBlocked` on the third failure, resetting the counter on success. `NoCard`, `HasPin` and `NoCash` are untouched — again, a new behaviour is a new class rather than edits spread across the machine.

```java
package ATMMachineStateExample;
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

// UNCHANGED: ATMState.java, NoCard.java, HasPin.java, NoCash.java
```

> **Exam trap:** Putting the counter inside `HasCard` — it would reset every time the state object is re-entered, so the count would never reach three.

*Tags: State, ATM, extend, CardBlocked, counter*

</details>

---

## CODE-0035 — State (ATM) (Very Hard, 6 marks)

**Type:** Map code to participants  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

Map the ATM implementation onto the GoF State participants (Context, State, ConcreteState) and explain the specific mechanism by which a ConcreteState changes the Context's behaviour.

<details>
<summary><strong>Show answer</strong></summary>

Context = `ATMMachine`: it defines the client-facing interface and holds a reference to the current ConcreteState. State = `ATMState`: the interface encapsulating the behaviour associated with a state. ConcreteStates = `NoCard`, `HasCard`, `HasPin`, `NoCash`. Mechanism: `ATMMachine` passes itself to each state's constructor (`new HasCard(this)`), giving every ConcreteState a back-reference. A ConcreteState then calls `atmMachine.setATMState(...)` to swap the Context's current state field, so the *next* client call is dispatched to a different object. This matches the lecture's statement that 'a context may pass itself as an argument to the State object handling the request'.

```java
// Context — holds the current state, delegates everything
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
}
```

> **Exam trap:** Saying `ATMMachine` 'is the State' — it is the Context. The State is the `ATMState` interface.

*Tags: State, ATM, participants, back-reference*

</details>

---

## CODE-0036 — State (ATM) (Brutal, 9 marks)

**Type:** Compare ATM and Robot implementations  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf; ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

Both the ATM and the cooking-robot examples implement State, but they differ in one structural respect. Identify it and explain the consequence.

<details>
<summary><strong>Show answer</strong></summary>

In the robot example the Context itself implements the State interface (`public class Robot implements RoboticState`), so `Robot` exposes exactly the same three operations it delegates. In the ATM example the Context does not implement `ATMState` — `ATMMachine` simply declares matching public methods. Consequence: the robot's Context can be passed anywhere a `RoboticState` is expected, which is occasionally convenient but blurs the Context/State distinction and creates a recursion hazard if a state ever delegated back to the Context. The ATM's separation is the cleaner reading of GoF, and it also lets the Context hold data the State interface has no business exposing (`cashInMachine`, `correctPinEntered`).

```java
// ROBOT — Context implements the State interface
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
// machine-level data the State interface never exposes.
```

> **Exam trap:** Claiming one is simply wrong. Both work; the question is what each buys and what it risks.

*Tags: State, ATM, Robot, compare, context-design*

</details>

---

## CODE-0037 — Pattern identification (Very Hard, 6 marks)

**Type:** Identify pattern from code  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Identify the design pattern in the fragment below. Justify your answer from the code structure alone, and name one pattern it is commonly confused with plus the distinguishing evidence.

<details>
<summary><strong>Show answer</strong></summary>

State. The evidence: the Context holds a field of an interface type representing its situation; every public operation delegates unconditionally to that field; and the implementing classes hold a back-reference used to reassign the Context's field, i.e. they drive their own transitions. Commonly confused with Strategy, which shares the delegation shape but differs decisively in two ways: the client selects a Strategy from outside and passes it in, and a Strategy never reassigns the Context's field. If the objects change the Context's current object themselves, it is State.

```java
public class Machine {
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
//   ...and QuickSort would never call machine.setStrategy(...).
```

> **Exam trap:** Answering 'Strategy' because both delegate. The self-directed transition is the discriminator.

*Tags: identify-pattern, State, Strategy, compare*

</details>

---

## CODE-0038 — Pattern identification (Very Hard, 6 marks)

**Type:** Identify pattern from code  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

Identify the design pattern below, justify from the code, and state which single line would break the pattern if removed.

<details>
<summary><strong>Show answer</strong></summary>

Singleton. Evidence: a private static field holding the sole instance, a private constructor preventing external construction, and a public static accessor as the single global access point. Removing the private constructor is what breaks it — without that line the class gains a default public constructor, `new Config()` compiles, and unlimited instances can exist. The static field and accessor would then be merely a convenience, not a uniqueness guarantee.

```java
public class Config {
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
//    Config b = new Config();      // two "singletons"
```

> **Exam trap:** Naming the static field as the critical line. The constructor's visibility is what enforces uniqueness.

*Tags: identify-pattern, Singleton, private-constructor*

</details>

---

## CODE-0039 — Pattern identification (Hard, 6 marks)

**Type:** Identify pattern from code  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

Identify the pattern below and justify it from the code. Explain what the client is protected from.

<details>
<summary><strong>Show answer</strong></summary>

Facade. Evidence: one class privately owns several subsystem objects, constructs them itself, and exposes simple void operations that delegate; the subsystem classes hold no reference back. The client is protected from knowing which subsystem classes exist, how many there are, how to construct them, and in what order to call them — it depends on one simple interface instead of several complex ones. Per the lecture, the facade 'glues together the classes that implement functionality without hiding them completely' — a client that needs the subsystem directly may still use it.

```java
public class MediaConverter {
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
// It never imports, constructs, or orders AudioDecoder/VideoDecoder/Muxer.
```

> **Exam trap:** Calling it Adapter. Adapter converts one existing interface into another expected one; Facade invents a simpler interface over many.

*Tags: identify-pattern, Facade, coupling*

</details>

---

## CODE-0040 — Pattern selection from scenario (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

A university portal must notify an unknown and changing set of interested students whenever a seat becomes free in a class. The set of interested students changes constantly and the portal must not know their identities in advance. Choose the appropriate **design** pattern (not architectural pattern), justify the choice against its applicability, and give a complete Java implementation.

<details>
<summary><strong>Show answer</strong></summary>

Observer. The lecture's applicability is met exactly: 'when an object should be able to notify other objects without making assumptions about who these objects are', and 'when a change to one object requires changing others, and you don't know how many objects need to be changed'. Implement the Subject/Observer interfaces, a `ClassSection` ConcreteSubject holding `List<Observer>`, and a `Student` ConcreteObserver. Because `ClassSection` depends only on the `Observer` interface, students can subscribe and unsubscribe at runtime with no change to the subject. Note the deliberate level distinction: if the exam asks for a *system-level architectural* answer the correct response is Publish-Subscribe; Observer is the object-level design answer.

```java
public interface Observer {
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
      System.out.println("\nSeat released in " + sectionCode
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
*/
```

> **Exam trap:** Answering Publish-Subscribe when the question says 'design pattern'. Read which level the question asks for.

*Tags: Observer, pattern-selection, full-implementation, notification*

</details>

---

## CODE-0041 — Pattern selection from scenario (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

An online order must behave differently depending on whether it is New, Paid, Shipped or Cancelled. A New order can be paid or cancelled; a Paid order can be shipped or cancelled; a Shipped order can do neither; a Cancelled order can do neither. The current code is a growing tangle of `if (status.equals(...))` checks repeated in every method. Choose a design pattern, justify it, and implement it.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability names this precisely: behaviour depends on internal state at runtime, and 'operations have large, multipart conditional statements that depend on the object's state' with 'several operations containing this same conditional structure'. Implement an `OrderState` interface, an `Order` Context that delegates, and four ConcreteStates. Each former conditional branch becomes a class, so adding (say) a Refunded state is a new class rather than an edit to every method.

```java
public interface OrderState {
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
}
```

> **Exam trap:** Answering Strategy. The order changes its own state as a consequence of operations; no client injects behaviour.

*Tags: State, pattern-selection, full-implementation, order-lifecycle*

</details>

---

## CODE-0042 — Pattern selection from scenario (Very Hard, 10 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

A reporting module must produce PDF, CSV or HTML exporters chosen by a runtime configuration string, and the calling code must not depend on any concrete exporter class. Choose a design pattern, justify it, and implement it.

<details>
<summary><strong>Show answer</strong></summary>

Factory Method (in the simple-factory shaping used in the lecture). The applicability fits: the calling class cannot anticipate which concrete exporter it needs, and the knowledge of which class to instantiate should be localised in one place rather than scattered through clients. Implement an `Exporter` product interface, three concrete exporters, and an `ExporterFactory` whose method maps the configuration string to a concrete class and returns the abstract type. Adding a new format then touches only the new class and the factory.

```java
public interface Exporter {
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
*/
```

> **Exam trap:** Declaring `CsvExporter exporter = ...` in the client re-couples it to the concrete class and wastes the factory.

*Tags: Factory Method, pattern-selection, full-implementation, exporter*

</details>

---

## CODE-0043 — Pattern selection from scenario (Very Hard, 10 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

A file-system browser must display files and folders. A folder contains files and other folders to arbitrary depth. The client must be able to ask any node for its total size without knowing whether it is a file or a folder. Choose a design pattern, justify it, and implement it.

<details>
<summary><strong>Show answer</strong></summary>

Composite. The applicability is met exactly: a part-whole hierarchy, and clients that should 'be able to ignore the difference between compositions of objects and individual objects'. Component = `FileSystemNode` declaring `getSize()`; Leaf = `FileNode` returning its own size (base case); Composite = `FolderNode` summing recursively over children. The client calls `getSize()` on any node and the recursion handles arbitrary depth with no type-testing.

```java
import java.util.ArrayList;
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
*/
```

> **Exam trap:** Writing `if (node instanceof FolderNode)` in the client — that is the very type-testing Composite exists to remove.

*Tags: Composite, pattern-selection, full-implementation, file-system*

</details>

---

## CODE-0044 — Category reasoning (Very Hard, 8 marks)

**Type:** Classify and justify from code  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf; Lecture13_DesignPatterns_StructuralPatterns.pdf; Lecture13_DesignPatterns_BehaviouralPatterns.pdf

For each of the six patterns implemented in the CSC3209 lectures, state its GoF category and name the single line or construct in the lecturer's code that most clearly identifies its category. 

<details>
<summary><strong>Show answer</strong></summary>

Creational patterns abstract instantiation; Structural patterns compose classes/objects into larger structures; Behavioural patterns concern algorithms and the assignment of responsibilities between objects. The identifying construct for each is the one that carries the category's defining concern: object creation for creational, composition/wrapping for structural, and delegation/notification for behavioural.

```java
// CREATIONAL — the construct is about WHO CREATES the object
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
@Override public void walk() { state.walk(); }                    // delegation to state
```

> **Exam trap:** Reciting category definitions without pointing at a specific construct in the code earns half marks at best.

*Tags: categories, creational, structural, behavioral, classification*

</details>

---

## CODE-0045 — Code quality (Brutal, 8 marks)

**Type:** Explain a design consequence  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

The lecture states that a consequence of Observer is that 'update cascades/order/debugging can become difficult'. Write a short Java example based on the `Celebrity`/`Follower` code that demonstrates a cascade problem, and state one mitigation.

<details>
<summary><strong>Show answer</strong></summary>

A cascade occurs when an observer's `update()` itself triggers another notification, so one `post()` fans out into a chain that is hard to follow in a debugger and can, in the worst case, loop forever. The example shows a `RelayFollower` that re-posts to a second celebrity; if that celebrity's followers include something that posts back, the recursion is unbounded. Mitigations: forbid state changes inside `update()`, queue notifications instead of dispatching synchronously, or add a re-entrancy guard.

```java
// A follower that re-publishes -> cascade
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
// scheduler dispatch the next round, so notification depth stays at one.
```

> **Exam trap:** Claiming Observer 'has no downsides'. The lecture explicitly lists the cascade/ordering/debugging cost.

*Tags: Observer, cascade, consequences, re-entrancy*

</details>

---

## CODE-0046 — Code quality (Very Hard, 7 marks)

**Type:** Explain a design consequence  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

The lecture warns that a Facade 'can become bloated or a bottleneck if overloaded with responsibilities'. Show, in code, what a bloated `ShapeMaker` looks like and explain what has gone wrong architecturally.

<details>
<summary><strong>Show answer</strong></summary>

A facade is meant to be a thin, delegating entry point. The bloated version has absorbed validation, persistence, logging and business rules, so it now *contains* logic rather than routing to it. Consequences: every unrelated change touches one class, it becomes a merge and testing bottleneck, and the subsystem's real structure is now hidden behind logic that belongs elsewhere. The fix is to keep the facade delegating and push responsibilities back to the subsystem or to new collaborators.

```java
// BLOATED — the facade has become the system
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
}
```

> **Exam trap:** Treating 'add another method to the facade' as always free. Each addition moves it closer to being a bottleneck.

*Tags: Facade, bloat, consequences, separation-of-concerns*

</details>

---

## CODE-0047 — Code quality (Brutal, 8 marks)

**Type:** Explain a design consequence  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

The lecture's Composite example gives `Developer` (a leaf) empty `add()` and `remove()` methods. Show two different Java strategies for handling this, and argue which is more appropriate for the ATM-style exam scenario where correctness matters more than convenience.

<details>
<summary><strong>Show answer</strong></summary>

Strategy A (the lecturer's) silently ignores the call — maximally transparent, but a genuine programming error passes unnoticed. Strategy B throws `UnsupportedOperationException` — still transparent at compile time, but the error surfaces immediately and loudly at runtime. Where correctness matters more than convenience, B is preferable: it preserves uniform treatment while converting a silent bug into an immediate, diagnosable failure. This also improves testability in the Lecture 7 sense, because the fault reveals itself on the first test execution rather than lying dormant.

```java
// STRATEGY A — silent no-op (the lecturer's version)
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
// is preserved either way. B trades silent tolerance for early detection.
```

> **Exam trap:** Saying 'B is wrong because it crashes'. A loud failure during testing is preferable to a silent one in production.

*Tags: Composite, fail-fast, testability, consequences*

</details>

---

## CODE-0048 — State (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Vending machine.** A vending machine has states: NoCoin, HasCoin, Dispensing, SoldOut. Inserting a coin in NoCoin moves to HasCoin. Selecting a product in HasCoin dispenses and returns to NoCoin, unless stock reaches zero in which case it moves to SoldOut. Selecting with no coin is refused. In SoldOut, coins are returned immediately.

Choose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `VendingMachine`, initialised to NoCoin, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects.

```java
public interface VendingState {
   void insertCoin();
   void selectProduct();
   void refund();
}

public class VendingMachine {
   private final VendingState noCoin     = new NoCoinState(this);
   private final VendingState hasCoin    = new HasCoinState(this);
   private final VendingState soldOut    = new SoldOutState(this);
   private VendingState state;
   int stock = 2;

   public VendingMachine(){
      this.state = (stock > 0) ? noCoin : soldOut;
   }
   void setState(VendingState s){ this.state = s; }
   public VendingState getNoCoin(){ return noCoin; }
   public VendingState getHasCoin(){ return hasCoin; }
   public VendingState getSoldOut(){ return soldOut; }

   public void insertCoin()    { state.insertCoin(); }
   public void selectProduct() { state.selectProduct(); }
   public void refund()        { state.refund(); }
}

public class NoCoinState implements VendingState {
   private final VendingMachine m;
   public NoCoinState(VendingMachine m){ this.m = m; }
   @Override public void insertCoin(){
      System.out.println("Coin accepted");
      m.setState(m.getHasCoin());
   }
   @Override public void selectProduct(){
      System.out.println("Insert a coin first");
   }
   @Override public void refund(){
      System.out.println("No coin to refund");
   }
}

public class HasCoinState implements VendingState {
   private final VendingMachine m;
   public HasCoinState(VendingMachine m){ this.m = m; }
   @Override public void insertCoin(){
      System.out.println("Coin already inserted");
   }
   @Override public void selectProduct(){
      m.stock--;
      System.out.println("Dispensing product (stock now " + m.stock + ")");
      if (m.stock <= 0) {
         System.out.println("Machine is now sold out");
         m.setState(m.getSoldOut());
      } else {
         m.setState(m.getNoCoin());
      }
   }
   @Override public void refund(){
      System.out.println("Coin returned");
      m.setState(m.getNoCoin());
   }
}

public class SoldOutState implements VendingState {
   private final VendingMachine m;
   public SoldOutState(VendingMachine m){ this.m = m; }
   @Override public void insertCoin(){
      System.out.println("Sold out - coin returned immediately");
   }
   @Override public void selectProduct(){
      System.out.println("Sold out");
   }
   @Override public void refund(){
      System.out.println("Sold out - nothing held");
   }
}

public class VendingDemo {
   public static void main(String[] args){
      VendingMachine m = new VendingMachine();
      m.selectProduct();   // Insert a coin first
      m.insertCoin();      // Coin accepted
      m.selectProduct();   // Dispensing product (stock now 1)
      m.insertCoin();      // Coin accepted
      m.selectProduct();   // Dispensing product (stock now 0) + sold out
      m.insertCoin();      // Sold out - coin returned immediately
   }
}
```

> **Exam trap:** The stock check inside `selectProduct()` mirrors the ATM's nested cash check: the state after a successful action depends on a guard, so one call can produce two transitions.

*Tags: State, applied-scenario, full-implementation, vending-machine*

</details>

---

## CODE-0049 — State (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Traffic light.** A pedestrian crossing light cycles Red -> Green -> Amber -> Red on a timer tick. A pedestrian request button is honoured only while Red; pressing it at any other time is queued but has no immediate effect.

Choose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `TrafficLight`, initialised to Red, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects.

```java
public interface LightState {
   void tick();
   void pedestrianRequest();
}

public class TrafficLight {
   private final LightState red    = new RedState(this);
   private final LightState green  = new GreenState(this);
   private final LightState amber  = new AmberState(this);
   private LightState state;
   boolean pedestrianWaiting = false;

   public TrafficLight(){ this.state = red; }
   void setState(LightState s){ this.state = s; }
   public LightState getRed(){ return red; }
   public LightState getGreen(){ return green; }
   public LightState getAmber(){ return amber; }

   public void tick(){ state.tick(); }
   public void pedestrianRequest(){ state.pedestrianRequest(); }
}

public class RedState implements LightState {
   private final TrafficLight t;
   public RedState(TrafficLight t){ this.t = t; }
   @Override public void tick(){
      System.out.println("Red -> Green");
      t.setState(t.getGreen());
   }
   @Override public void pedestrianRequest(){
      System.out.println("Crossing granted - walk now");
      t.pedestrianWaiting = false;
   }
}

public class GreenState implements LightState {
   private final TrafficLight t;
   public GreenState(TrafficLight t){ this.t = t; }
   @Override public void tick(){
      System.out.println("Green -> Amber");
      t.setState(t.getAmber());
   }
   @Override public void pedestrianRequest(){
      System.out.println("Request queued (traffic flowing)");
      t.pedestrianWaiting = true;
   }
}

public class AmberState implements LightState {
   private final TrafficLight t;
   public AmberState(TrafficLight t){ this.t = t; }
   @Override public void tick(){
      System.out.println("Amber -> Red");
      t.setState(t.getRed());
      if (t.pedestrianWaiting) {
         System.out.println("Queued pedestrian request now served");
         t.pedestrianWaiting = false;
      }
   }
   @Override public void pedestrianRequest(){
      System.out.println("Request queued (light changing)");
      t.pedestrianWaiting = true;
   }
}
```

> **Exam trap:** The queued flag lives on the Context, not on a ConcreteState — state objects are shared singletons here, so per-request data must not be stored in them.

*Tags: State, applied-scenario, full-implementation, traffic-light*

</details>

---

## CODE-0050 — State (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Document workflow.** A document moves Draft -> InReview -> Approved, and may be sent back from InReview to Draft. An Approved document is immutable: it can be neither edited nor re-reviewed. Editing is permitted only in Draft.

Choose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `Document`, initialised to Draft, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects.

```java
public interface DocState {
   void edit();
   void submitForReview();
   void approve();
   void reject();
}

public class Document {
   private final DocState draft    = new DraftState(this);
   private final DocState inReview = new InReviewState(this);
   private final DocState approved = new ApprovedState(this);
   private DocState state;

   public Document(){ this.state = draft; }
   void setState(DocState s){ this.state = s; }
   public DocState getDraft(){ return draft; }
   public DocState getInReview(){ return inReview; }
   public DocState getApproved(){ return approved; }

   public void edit()            { state.edit(); }
   public void submitForReview() { state.submitForReview(); }
   public void approve()         { state.approve(); }
   public void reject()          { state.reject(); }
}

public class DraftState implements DocState {
   private final Document d;
   public DraftState(Document d){ this.d = d; }
   @Override public void edit(){ System.out.println("Editing draft"); }
   @Override public void submitForReview(){
      System.out.println("Submitted for review");
      d.setState(d.getInReview());
   }
   @Override public void approve(){ System.out.println("Cannot approve a draft"); }
   @Override public void reject(){ System.out.println("Cannot reject a draft"); }
}

public class InReviewState implements DocState {
   private final Document d;
   public InReviewState(Document d){ this.d = d; }
   @Override public void edit(){ System.out.println("Cannot edit during review"); }
   @Override public void submitForReview(){ System.out.println("Already in review"); }
   @Override public void approve(){
      System.out.println("Document approved");
      d.setState(d.getApproved());
   }
   @Override public void reject(){
      System.out.println("Sent back to draft");
      d.setState(d.getDraft());
   }
}

public class ApprovedState implements DocState {
   private final Document d;
   public ApprovedState(Document d){ this.d = d; }
   @Override public void edit(){ System.out.println("Approved documents are immutable"); }
   @Override public void submitForReview(){ System.out.println("Already approved"); }
   @Override public void approve(){ System.out.println("Already approved"); }
   @Override public void reject(){ System.out.println("Cannot reject an approved document"); }
}
```

> **Exam trap:** Approved is a terminal state: every operation refuses and none transitions. Forgetting this makes the workflow reversible when the spec says it is not.

*Tags: State, applied-scenario, full-implementation, document-workflow*

</details>

---

## CODE-0051 — State (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Media player.** A player is Stopped, Playing or Paused. Play from Stopped starts from the beginning; Play from Paused resumes. Pause works only while Playing. Stop works from Playing or Paused and resets the position.

Choose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `MediaPlayer`, initialised to Stopped, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects.

```java
public interface PlayerState {
   void play();
   void pause();
   void stop();
}

public class MediaPlayer {
   private final PlayerState stopped = new StoppedState(this);
   private final PlayerState playing = new PlayingState(this);
   private final PlayerState paused  = new PausedState(this);
   private PlayerState state;
   int position = 0;

   public MediaPlayer(){ this.state = stopped; }
   void setState(PlayerState s){ this.state = s; }
   public PlayerState getStopped(){ return stopped; }
   public PlayerState getPlaying(){ return playing; }
   public PlayerState getPaused(){ return paused; }

   public void play() { state.play(); }
   public void pause(){ state.pause(); }
   public void stop() { state.stop(); }
}

public class StoppedState implements PlayerState {
   private final MediaPlayer p;
   public StoppedState(MediaPlayer p){ this.p = p; }
   @Override public void play(){
      p.position = 0;
      System.out.println("Playing from start");
      p.setState(p.getPlaying());
   }
   @Override public void pause(){ System.out.println("Nothing is playing"); }
   @Override public void stop(){ System.out.println("Already stopped"); }
}

public class PlayingState implements PlayerState {
   private final MediaPlayer p;
   public PlayingState(MediaPlayer p){ this.p = p; }
   @Override public void play(){ System.out.println("Already playing"); }
   @Override public void pause(){
      System.out.println("Paused at " + p.position + "s");
      p.setState(p.getPaused());
   }
   @Override public void stop(){
      p.position = 0;
      System.out.println("Stopped and reset");
      p.setState(p.getStopped());
   }
}

public class PausedState implements PlayerState {
   private final MediaPlayer p;
   public PausedState(MediaPlayer p){ this.p = p; }
   @Override public void play(){
      System.out.println("Resuming from " + p.position + "s");
      p.setState(p.getPlaying());
   }
   @Override public void pause(){ System.out.println("Already paused"); }
   @Override public void stop(){
      p.position = 0;
      System.out.println("Stopped and reset");
      p.setState(p.getStopped());
   }
}
```

> **Exam trap:** Play means two different things depending on state (restart vs resume). Writing one shared play() with a flag re-introduces the conditional the pattern removes.

*Tags: State, applied-scenario, full-implementation, media-player*

</details>

---

## CODE-0052 — State (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Turnstile.** A turnstile is Locked or Unlocked. Inserting a coin while Locked unlocks it. Pushing while Unlocked lets one person through and re-locks. Pushing while Locked is refused; inserting a coin while Unlocked returns the coin.

Choose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState.

<details>
<summary><strong>Show answer</strong></summary>

State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `Turnstile`, initialised to Locked, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects.

```java
public interface TurnstileState {
   void coin();
   void push();
}

public class Turnstile {
   private final TurnstileState locked   = new LockedState(this);
   private final TurnstileState unlocked = new UnlockedState(this);
   private TurnstileState state;
   int passengers = 0;

   public Turnstile(){ this.state = locked; }
   void setState(TurnstileState s){ this.state = s; }
   public TurnstileState getLocked(){ return locked; }
   public TurnstileState getUnlocked(){ return unlocked; }

   public void coin(){ state.coin(); }
   public void push(){ state.push(); }
}

public class LockedState implements TurnstileState {
   private final Turnstile t;
   public LockedState(Turnstile t){ this.t = t; }
   @Override public void coin(){
      System.out.println("Unlocked");
      t.setState(t.getUnlocked());
   }
   @Override public void push(){
      System.out.println("Locked - pay first");
   }
}

public class UnlockedState implements TurnstileState {
   private final Turnstile t;
   public UnlockedState(Turnstile t){ this.t = t; }
   @Override public void coin(){
      System.out.println("Coin returned - already unlocked");
   }
   @Override public void push(){
      t.passengers++;
      System.out.println("Passenger " + t.passengers + " through - relocking");
      t.setState(t.getLocked());
   }
}
```

> **Exam trap:** Only two states, so students often revert to a boolean. State is still justified when the *operations* differ, not just a flag value.

*Tags: State, applied-scenario, full-implementation, turnstile*

</details>

---

## CODE-0053 — Observer (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Weather station.** A weather station records temperature readings. Several independent displays (current conditions, statistics, forecast) must update whenever a new reading arrives. Displays can be added or removed while the system runs.

Choose the appropriate design pattern, justify it against the lecture's stated applicability, and give a complete Java implementation.

<details>
<summary><strong>Show answer</strong></summary>

Observer. The lecture's applicability is met on the clause 'when a change to one object requires changing others, and you don't know how many objects need to be changed': the station has no way to know how many displays exist. The distinguishing feature of this implementation is that **each observer keeps its own private history** — `StatisticsDisplay` accumulates a running sum and count, `ForecastDisplay` remembers the previous reading. That state must live in the observers, not the subject: putting it on `WeatherStation` would couple the subject to what its observers happen to compute, and adding a fourth display would then force a change to the subject. `setMeasurement()` calls `notifyObservers()` itself, so publication and notification cannot drift apart.

```java
import java.util.ArrayList;
import java.util.List;

public interface DisplayObserver {
   void update(float temperature);
}

public interface WeatherSubject {
   void registerObserver(DisplayObserver o);
   void removeObserver(DisplayObserver o);
   void notifyObservers();
}

public class WeatherStation implements WeatherSubject {
   private final List<DisplayObserver> observers = new ArrayList<DisplayObserver>();
   private float temperature;

   @Override public void registerObserver(DisplayObserver o){ observers.add(o); }
   @Override public void removeObserver(DisplayObserver o){ observers.remove(o); }
   @Override public void notifyObservers(){
      for (DisplayObserver o : observers) {
         o.update(temperature);
      }
   }
   public void setMeasurement(float temperature){
      this.temperature = temperature;
      System.out.println("\nNew reading: " + temperature + "C");
      notifyObservers();                       // state change -> notify
   }
}

public class CurrentConditionsDisplay implements DisplayObserver {
   @Override public void update(float temperature){
      System.out.println("Current conditions: " + temperature + "C");
   }
}

public class StatisticsDisplay implements DisplayObserver {
   private float sum = 0; private int count = 0;
   @Override public void update(float temperature){
      sum += temperature; count++;
      System.out.println("Average so far: " + (sum / count) + "C");
   }
}

public class ForecastDisplay implements DisplayObserver {
   private float last = Float.NaN;
   @Override public void update(float temperature){
      if (!Float.isNaN(last)) {
         System.out.println(temperature > last ? "Forecast: warmer" : "Forecast: cooler");
      }
      last = temperature;
   }
}

public class WeatherDemo {
   public static void main(String[] args){
      WeatherStation station = new WeatherStation();
      DisplayObserver current = new CurrentConditionsDisplay();
      DisplayObserver stats   = new StatisticsDisplay();
      DisplayObserver forecast= new ForecastDisplay();

      station.registerObserver(current);
      station.registerObserver(stats);
      station.registerObserver(forecast);

      station.setMeasurement(20.0f);
      station.setMeasurement(24.0f);

      station.removeObserver(stats);           // removed at run time
      station.setMeasurement(22.0f);
   }
}
```

> **Exam trap:** Each observer keeps its own private history. Putting that state on the subject would couple it to what observers happen to need.

*Tags: Observer, applied-scenario, full-implementation, weather-station*

</details>

---

## CODE-0054 — Observer (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Stock ticker.** A stock's price updates continuously. Traders, a logging service and an alert engine must all react to each change, without the stock knowing what any of them do.

Choose the appropriate design pattern, justify it against the lecture's stated applicability, and give a complete Java implementation.

<details>
<summary><strong>Show answer</strong></summary>

Observer. The applicability clause that bites here is 'an object should be able to notify other objects without making assumptions about who these objects are' — a `Trader`, an `AuditLog` and an `AlertEngine` are three completely unrelated kinds of thing, and the `Stock` must not know that. The distinguishing feature is **heterogeneity of observer types behind one interface**: all three implement `priceChanged` but do entirely different work (display, persistence, threshold evaluation). This is what demonstrates the pattern's real payoff — adding a fourth observer type requires no change to `Stock` at all, because `Stock` is programmed against the interface and never against any concrete observer.

```java
import java.util.ArrayList;
import java.util.List;

public interface PriceObserver {
   void priceChanged(String symbol, double price);
}

public class Stock {
   private final String symbol;
   private double price;
   private final List<PriceObserver> observers = new ArrayList<PriceObserver>();

   public Stock(String symbol, double price){
      this.symbol = symbol; this.price = price;
   }
   public void attach(PriceObserver o){ observers.add(o); }
   public void detach(PriceObserver o){ observers.remove(o); }

   public void setPrice(double price){
      this.price = price;
      System.out.println("\n" + symbol + " -> " + price);
      for (PriceObserver o : observers) {
         o.priceChanged(symbol, price);       // subject knows only the interface
      }
   }
}

public class Trader implements PriceObserver {
   private final String name;
   public Trader(String name){ this.name = name; }
   @Override public void priceChanged(String symbol, double price){
      System.out.println("  " + name + " sees " + symbol + " at " + price);
   }
}

public class AuditLog implements PriceObserver {
   @Override public void priceChanged(String symbol, double price){
      System.out.println("  [LOG] " + symbol + "=" + price);
   }
}

public class AlertEngine implements PriceObserver {
   private final double threshold;
   public AlertEngine(double threshold){ this.threshold = threshold; }
   @Override public void priceChanged(String symbol, double price){
      if (price > threshold) {
         System.out.println("  ** ALERT ** " + symbol + " above " + threshold);
      }
   }
}

public class TickerDemo {
   public static void main(String[] args){
      Stock acme = new Stock("ACME", 100.0);
      acme.attach(new Trader("Aisha"));
      acme.attach(new AuditLog());
      acme.attach(new AlertEngine(120.0));

      acme.setPrice(110.0);
      acme.setPrice(125.0);      // triggers the alert
   }
}
```

> **Exam trap:** Three observers of completely different kinds share one interface. Adding a fourth requires no change to Stock.

*Tags: Observer, applied-scenario, full-implementation, stock-ticker*

</details>

---

## CODE-0055 — Observer (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

**Auction bidding.** In an online auction, every registered bidder must be told immediately when a new highest bid is placed, including who placed it. Bidders may withdraw at any time.

Choose the appropriate design pattern, justify it against the lecture's stated applicability, and give a complete Java implementation.

<details>
<summary><strong>Show answer</strong></summary>

Observer. The applicability is the standard one-to-many dependency, but this implementation's distinguishing feature is that **notification is conditional on the state change actually occurring**. `placeBid()` returns early without notifying when the bid does not exceed the current high — a losing bid changes nothing, so there is nothing to announce. Notifying unconditionally would be a real defect here, spamming every bidder with non-events. Note also that the notification carries *who* placed the bid, letting each `HumanBidder` distinguish 'I am winning' from 'I was outbid' — the payload design is part of the pattern decision, not an afterthought.

```java
import java.util.ArrayList;
import java.util.List;

public interface Bidder {
   void newHighBid(String item, double amount, String bidderName);
}

public class Auction {
   private final String item;
   private double highestBid = 0;
   private String highestBidder = "none";
   private final List<Bidder> bidders = new ArrayList<Bidder>();

   public Auction(String item){ this.item = item; }
   public void join(Bidder b){ bidders.add(b); }
   public void withdraw(Bidder b){ bidders.remove(b); }

   public void placeBid(String name, double amount){
      if (amount <= highestBid) {
         System.out.println(name + "'s bid of " + amount + " is too low");
         return;                                   // no notification
      }
      highestBid = amount;
      highestBidder = name;
      System.out.println("\n" + name + " bids " + amount);
      for (Bidder b : bidders) {
         b.newHighBid(item, highestBid, highestBidder);
      }
   }
}

public class HumanBidder implements Bidder {
   private final String name;
   public HumanBidder(String name){ this.name = name; }
   @Override public void newHighBid(String item, double amount, String bidderName){
      if (bidderName.equals(name)) {
         System.out.println("  " + name + ": I am the high bidder");
      } else {
         System.out.println("  " + name + ": outbid by " + bidderName
                            + " at " + amount);
      }
   }
}

public class AuctionDemo {
   public static void main(String[] args){
      Auction auction = new Auction("Vintage Camera");
      HumanBidder aisha = new HumanBidder("Aisha");
      HumanBidder ben   = new HumanBidder("Ben");
      auction.join(aisha);
      auction.join(ben);

      auction.placeBid("Aisha", 100);
      auction.placeBid("Ben", 90);      // too low - nobody notified
      auction.placeBid("Ben", 150);
      auction.withdraw(ben);
      auction.placeBid("Aisha", 200);   // only Aisha remains
   }
}
```

> **Exam trap:** Notification is conditional: a losing bid changes nothing, so no notification fires. Notifying unconditionally is a common error.

*Tags: Observer, applied-scenario, full-implementation, auction-bidding*

</details>

---

## CODE-0056 — Composite (applied) (Brutal, 12 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

**Menu system.** A restaurant menu contains items and sub-menus (e.g. a Desserts sub-menu inside the Dinner menu), nested to any depth. The client must print the whole menu and compute the total price of any node without knowing whether that node is a single item or a whole sub-menu.

<details>
<summary><strong>Show answer</strong></summary>

Composite. Part-whole hierarchy with clients that must ignore the leaf/composite distinction — exactly the lecture's applicability. Component = `MenuComponent` declaring `print()` and `getPrice()`; Leaf = `MenuItem` returning its own price; Composite = `Menu` summing recursively. Depth is handled by the recursion, so the client never type-tests.

```java
import java.util.ArrayList;
import java.util.List;

public interface MenuComponent {
   String getName();
   double getPrice();
   void print(String indent);
}

// LEAF
public class MenuItem implements MenuComponent {
   private final String name;
   private final double price;
   public MenuItem(String name, double price){
      this.name = name; this.price = price;
   }
   @Override public String getName(){ return name; }
   @Override public double getPrice(){ return price; }      // base case
   @Override public void print(String indent){
      System.out.println(indent + name + " .... " + price);
   }
}

// COMPOSITE
public class Menu implements MenuComponent {
   private final String name;
   private final List<MenuComponent> children = new ArrayList<MenuComponent>();
   public Menu(String name){ this.name = name; }
   public void add(MenuComponent c){ children.add(c); }
   public void remove(MenuComponent c){ children.remove(c); }

   @Override public String getName(){ return name; }
   @Override public double getPrice(){
      double total = 0;
      for (MenuComponent c : children) total += c.getPrice();   // recursion
      return total;
   }
   @Override public void print(String indent){
      System.out.println(indent + "[" + name + "] total=" + getPrice());
      for (MenuComponent c : children) c.print(indent + "   ");
   }
}

public class MenuDemo {
   public static void main(String[] args){
      Menu dinner = new Menu("Dinner");
      dinner.add(new MenuItem("Nasi Lemak", 12.00));
      dinner.add(new MenuItem("Grilled Fish", 24.50));

      Menu desserts = new Menu("Desserts");
      desserts.add(new MenuItem("Cendol", 6.50));
      desserts.add(new MenuItem("Ice Kacang", 7.00));
      dinner.add(desserts);                    // sub-menu inside a menu

      dinner.print("");
      System.out.println("Bill total: " + dinner.getPrice());
   }
}

/* Output:
[Dinner] total=50.0
   Nasi Lemak .... 12.0
   Grilled Fish .... 24.5
   [Desserts] total=13.5
      Cendol .... 6.5
      Ice Kacang .... 7.0
Bill total: 50.0
*/
```

> **Exam trap:** Computing the composite's price by adding only direct children's own prices and skipping nested sub-menus.

*Tags: Composite, applied-scenario, full-implementation, menu*

</details>

---

## CODE-0057 — Composite (applied) (Very Hard, 11 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

**Organisation chart with headcount.** A university has faculties, each containing departments, each containing staff. The registry must print the structure and report the headcount of any node, whether that node is a single staff member, a department or an entire faculty.

<details>
<summary><strong>Show answer</strong></summary>

Composite. Component = `OrgUnit` with `getHeadcount()` and `print()`. Leaf = `Staff` returning 1. Composite = `Unit` summing children recursively. The uniform interface means the registry calls the same method on a person and on a faculty.

```java
import java.util.ArrayList;
import java.util.List;

public interface OrgUnit {
   String getName();
   int getHeadcount();
   void print(String indent);
}

// LEAF
public class Staff implements OrgUnit {
   private final String name;
   public Staff(String name){ this.name = name; }
   @Override public String getName(){ return name; }
   @Override public int getHeadcount(){ return 1; }         // base case
   @Override public void print(String indent){
      System.out.println(indent + "- " + name);
   }
}

// COMPOSITE
public class Unit implements OrgUnit {
   private final String name;
   private final List<OrgUnit> members = new ArrayList<OrgUnit>();
   public Unit(String name){ this.name = name; }
   public void add(OrgUnit u){ members.add(u); }
   public void remove(OrgUnit u){ members.remove(u); }

   @Override public String getName(){ return name; }
   @Override public int getHeadcount(){
      int total = 0;
      for (OrgUnit u : members) total += u.getHeadcount();   // recursion
      return total;
   }
   @Override public void print(String indent){
      System.out.println(indent + name + " (" + getHeadcount() + " staff)");
      for (OrgUnit u : members) u.print(indent + "   ");
   }
}

public class OrgDemo {
   public static void main(String[] args){
      Unit csDept = new Unit("Computing");
      csDept.add(new Staff("Dr Jasser"));
      csDept.add(new Staff("Dr Lim"));

      Unit mathDept = new Unit("Mathematics");
      mathDept.add(new Staff("Dr Rao"));

      Unit faculty = new Unit("Faculty of Science");
      faculty.add(csDept);
      faculty.add(mathDept);
      faculty.add(new Staff("Dean Tan"));      // a leaf beside composites

      faculty.print("");
      System.out.println("Total: " + faculty.getHeadcount());
   }
}

/* Output:
Faculty of Science (4 staff)
   Computing (2 staff)
      - Dr Jasser
      - Dr Lim
   Mathematics (1 staff)
      - Dr Rao
   - Dean Tan
Total: 4
*/
```

> **Exam trap:** A leaf placed alongside composites (Dean Tan) still counts as 1 — the client must not special-case it.

*Tags: Composite, applied-scenario, full-implementation, org-chart*

</details>

---

## CODE-0058 — Facade (applied) (Very Hard, 11 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

**Home theatre.** Starting a film requires dimming the lights, lowering the screen, switching the projector to widescreen, powering the amplifier, setting its volume, and starting the player — in that order. Users should press one button. Choose a pattern, justify it, and implement it.

<details>
<summary><strong>Show answer</strong></summary>

Facade. The lecture's applicability is met: a client needs a simple interface to a complex subsystem, and there are many dependencies between the client and the subsystem's implementation classes. `HomeTheatreFacade` owns the subsystem objects and encapsulates both the *set* of calls and their *order*, which is the part clients most often get wrong. Subsystem classes remain usable directly for the rare client that needs them — the facade does not hide them completely.

```java
public class Lights {
   public void dim(int level){ System.out.println("Lights dimmed to " + level + "%"); }
   public void on(){ System.out.println("Lights on"); }
}
public class Screen {
   public void down(){ System.out.println("Screen down"); }
   public void up(){ System.out.println("Screen up"); }
}
public class Projector {
   public void on(){ System.out.println("Projector on"); }
   public void wideScreenMode(){ System.out.println("Projector in widescreen mode"); }
   public void off(){ System.out.println("Projector off"); }
}
public class Amplifier {
   public void on(){ System.out.println("Amplifier on"); }
   public void setVolume(int v){ System.out.println("Volume set to " + v); }
   public void off(){ System.out.println("Amplifier off"); }
}
public class MoviePlayer {
   public void play(String movie){ System.out.println("Playing \"" + movie + "\""); }
   public void stop(){ System.out.println("Player stopped"); }
}

// THE FACADE
public class HomeTheatreFacade {
   private final Lights lights;
   private final Screen screen;
   private final Projector projector;
   private final Amplifier amp;
   private final MoviePlayer player;

   public HomeTheatreFacade(){
      this.lights = new Lights();
      this.screen = new Screen();
      this.projector = new Projector();
      this.amp = new Amplifier();
      this.player = new MoviePlayer();
   }

   public void watchMovie(String movie){      // encapsulates the ORDER too
      System.out.println("-- Get ready to watch a movie --");
      lights.dim(10);
      screen.down();
      projector.on();
      projector.wideScreenMode();
      amp.on();
      amp.setVolume(8);
      player.play(movie);
   }

   public void endMovie(){
      System.out.println("-- Shutting the theatre down --");
      player.stop();
      amp.off();
      projector.off();
      screen.up();
      lights.on();
   }
}

public class TheatreDemo {
   public static void main(String[] args){
      HomeTheatreFacade theatre = new HomeTheatreFacade();
      theatre.watchMovie("Interstellar");
      theatre.endMovie();
   }
}
```

> **Exam trap:** The facade's value here is the *sequence*, not just the grouping. An answer that only groups calls misses half the point.

*Tags: Facade, applied-scenario, full-implementation, home-theatre*

</details>

---

## CODE-0059 — Facade (applied) (Very Hard, 10 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

**Online order checkout.** Completing a purchase requires checking inventory, taking payment, arranging shipping and emailing a confirmation. The web controller should issue one call. Choose a pattern, justify it, and implement it — including what happens when one step fails.

<details>
<summary><strong>Show answer</strong></summary>

Facade. The controller depends on one class instead of four, and the facade also becomes the single place where failure handling for the sequence lives. Note the design limit the lecture warns about: a facade that starts making business decisions is drifting towards becoming a bottleneck, so keep orchestration thin and push rules into the subsystem.

```java
public class InventoryService {
   public boolean isAvailable(String sku, int qty){
      System.out.println("Checking stock for " + sku);
      return qty <= 5;
   }
   public void reserve(String sku, int qty){
      System.out.println("Reserved " + qty + " x " + sku);
   }
}
public class PaymentService {
   public boolean charge(String customer, double amount){
      System.out.println("Charging " + customer + " RM" + amount);
      return amount <= 1000;
   }
}
public class ShippingService {
   public String schedule(String customer, String sku){
      System.out.println("Shipment scheduled for " + customer);
      return "TRK-99125";
   }
}
public class EmailService {
   public void sendConfirmation(String customer, String tracking){
      System.out.println("Emailed " + customer + " tracking " + tracking);
   }
}

// THE FACADE
public class CheckoutFacade {
   private final InventoryService inventory = new InventoryService();
   private final PaymentService payment     = new PaymentService();
   private final ShippingService shipping   = new ShippingService();
   private final EmailService email         = new EmailService();

   public boolean placeOrder(String customer, String sku, int qty, double amount){
      if (!inventory.isAvailable(sku, qty)) {
         System.out.println("FAILED: insufficient stock");
         return false;
      }
      if (!payment.charge(customer, amount)) {
         System.out.println("FAILED: payment declined");
         return false;                      // nothing reserved yet
      }
      inventory.reserve(sku, qty);
      String tracking = shipping.schedule(customer, sku);
      email.sendConfirmation(customer, tracking);
      System.out.println("Order complete");
      return true;
   }
}

public class CheckoutDemo {
   public static void main(String[] args){
      CheckoutFacade checkout = new CheckoutFacade();
      checkout.placeOrder("Aisha", "SKU-1", 2, 250.00);
      System.out.println();
      checkout.placeOrder("Ben", "SKU-2", 2, 5000.00);   // payment declined
   }
}
```

> **Exam trap:** Reserving stock before payment succeeds leaves orphaned reservations — ordering matters inside the facade.

*Tags: Facade, applied-scenario, full-implementation, checkout*

</details>

---

## CODE-0060 — Factory Method (applied) (Very Hard, 10 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

**Notification channels.** A system must send notifications by email, SMS or push, selected at run time from a user preference. Calling code must not name any concrete channel class. Choose a pattern, justify it, and implement it.

<details>
<summary><strong>Show answer</strong></summary>

Factory Method. The caller cannot anticipate which concrete channel it needs, and the knowledge of which class to instantiate should sit in one place. Product = `Notifier`; ConcreteProducts = the three channels; Creator = `NotifierFactory`. Adding WhatsApp later touches the new class and the factory only.

```java
public interface Notifier {
   void send(String recipient, String message);
}

public class EmailNotifier implements Notifier {
   @Override public void send(String recipient, String message){
      System.out.println("EMAIL to " + recipient + ": " + message);
   }
}
public class SmsNotifier implements Notifier {
   @Override public void send(String recipient, String message){
      System.out.println("SMS to " + recipient + ": " + message);
   }
}
public class PushNotifier implements Notifier {
   @Override public void send(String recipient, String message){
      System.out.println("PUSH to " + recipient + ": " + message);
   }
}

public class NotifierFactory {
   public Notifier getNotifier(String channel){
      if (channel == null) {
         return null;
      }
      if (channel.equalsIgnoreCase("EMAIL")) {
         return new EmailNotifier();

      } else if (channel.equalsIgnoreCase("SMS")) {
         return new SmsNotifier();

      } else if (channel.equalsIgnoreCase("PUSH")) {
         return new PushNotifier();
      }
      return null;
   }
}

public class NotificationDemo {
   public static void main(String[] args){
      NotifierFactory factory = new NotifierFactory();
      String userPreference = "SMS";                 // resolved at run time

      Notifier notifier = factory.getNotifier(userPreference);
      notifier.send("+60123456789", "Your seat is confirmed");

      notifier = factory.getNotifier("EMAIL");
      notifier.send("aisha@example.com", "Your seat is confirmed");
   }
}
```

> **Exam trap:** Returning null silently for an unknown channel then dereferencing it. State the null contract or throw.

*Tags: Factory Method, applied-scenario, full-implementation, notifications*

</details>

---

## CODE-0061 — Singleton (applied) (Very Hard, 9 marks)

**Type:** Choose pattern and implement  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

**Application configuration.** Settings are read once from disk and must be identical everywhere in the application; no component may create a second copy. Choose a pattern, justify it, implement it, and state one risk your implementation introduces.

<details>
<summary><strong>Show answer</strong></summary>

Singleton. The lecture's applicability is met: exactly one instance must exist and be reachable from a well-known access point. Private static instance, private constructor, public static accessor. Risk: the global access point creates hidden dependencies that make testing harder (no seam for substituting configuration), and any mutable state on the singleton becomes shared global state across the whole program.

```java
import java.util.HashMap;
import java.util.Map;

public class AppConfig {
   //the single instance, created eagerly at class-load time
   private static AppConfig instance = new AppConfig();

   private final Map<String,String> settings = new HashMap<String,String>();

   //private constructor: no other instance can ever be created
   private AppConfig(){
      System.out.println("Loading configuration from disk (once)");
      settings.put("db.url", "jdbc:mysql://localhost/portal");
      settings.put("max.upload.mb", "25");
   }

   public static AppConfig getInstance(){
      return instance;
   }

   public String get(String key){
      return settings.get(key);
   }
}

public class ConfigDemo {
   public static void main(String[] args){
      AppConfig a = AppConfig.getInstance();
      AppConfig b = AppConfig.getInstance();

      System.out.println("db.url = " + a.get("db.url"));
      System.out.println("Same instance? " + (a == b));   // true
      // new AppConfig();  -> will not compile: constructor is private
   }
}

/* Output:
Loading configuration from disk (once)
db.url = jdbc:mysql://localhost/portal
Same instance? true
*/

// RISK: getInstance() is a global access point, so any class can reach
// configuration without declaring the dependency. Tests cannot substitute a
// different configuration, and mutable settings become shared global state.
```

> **Exam trap:** Claiming the loading message prints twice — it prints once, at class-load, however many times getInstance() is called.

*Tags: Singleton, applied-scenario, full-implementation, configuration*

</details>

---

## CODE-0062 — UML to code (Very Hard, 8 marks)

**Type:** Translate UML to code  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf

The lecture's Factory Method Structure diagram shows `Shape` as an `<<Interface>>` with `+draw() : void`; `Circle`, `Square` and `Rectangle` each with `+draw() : void` connected to `Shape` by *implements*; `ShapeFactory` with `+getShape() : Shape` connected to the concrete shapes by *creates*; and `FactoryPatternDemo` with `+main() : void` connected to `ShapeFactory` by *asks*. Write the Java that this diagram specifies.

<details>
<summary><strong>Show answer</strong></summary>

Translate each UML element literally: `<<Interface>>` becomes `interface`; the *implements* arrows become `implements` clauses; the `+` visibility markers become `public`; `getShape() : Shape` becomes a method whose return type is the interface, not a concrete class; the *creates* relation becomes `new` expressions inside the factory; the *asks* relation becomes the demo holding a `ShapeFactory` and calling it.

```java
public interface Shape {
   void draw();
}

// ---
public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}

// ---
public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Square::draw() method.");
   }
}

// ---
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}

// ---
public class ShapeFactory {

   //use getShape method to get object of type shape
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
      }

      return null;
   }
}

// ---
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      //get an object of Circle and call its draw method.
      Shape shape1 = shapeFactory.getShape("CIRCLE");

      //call draw method of Circle
      shape1.draw();

      //get an object of Rectangle and call its draw method.
      Shape shape2 = shapeFactory.getShape("RECTANGLE");

      //call draw method of Rectangle
      shape2.draw();

      //get an object of Square and call its draw method.
      Shape shape3 = shapeFactory.getShape("SQUARE");

      //call draw method of square
      shape3.draw();
   }
}
```

> **Exam trap:** Typing getShape()'s return as a concrete class contradicts the diagram, which shows `: Shape`.

*Tags: UML, translate, Factory Method*

</details>

---

## CODE-0063 — UML to code (Very Hard, 8 marks)

**Type:** Translate UML to code  
**Source:** Lecture13_DesignPatterns_StructuralPatterns.pdf

The lecture's Composite diagram shows `Employee` with `+getName() +getSalary() +print() +Add(Employee) +Remove(Employee) +GetChild(int)`; `Developer` with only `+getName() +getSalary() +print()`; and `Manager` with all six operations plus a *children* aggregation back to `Employee`. Write the Java, and explain what the aggregation diamond dictates.

<details>
<summary><strong>Show answer</strong></summary>

The diamond on the Manager end of the *children* association is an aggregation: `Manager` holds a collection of `Employee` references. That single symbol is what makes recursion possible, because the collection is typed to the Component interface and therefore may contain other `Manager` objects. `Developer` still implements all six operations (an interface implementation must be total) but the three child operations are no-ops, which is why the diagram lists only three against it.

```java
// Employee — the Component (all six operations)
public interface Employee {
      public void add(Employee employee);
      public void remove(Employee employee);
      public Employee getChild(int i);
      public String getName();
      public double getSalary();
      public void print();
}

// Manager — the Composite; the AGGREGATION becomes a List<Employee>
public class Manager implements Employee{
  private String name;
  private double salary;
  List<Employee> employees = new ArrayList<Employee>();   // <-- the diamond
  ...
}

// Developer — the Leaf; still implements all six, three are no-ops
public class Developer implements Employee{
  public void add(Employee employee) {
    //this is leaf node so this method is not applicable to this class.
  }
  ...
}

// The aggregation is typed to Employee (not Manager), so a Manager's children
// may themselves be Managers -> arbitrary depth, handled by recursion.
```

> **Exam trap:** Typing the list `List<Developer>` would forbid nested managers and destroy the recursive structure.

*Tags: UML, translate, Composite, aggregation*

</details>

---

## CODE-0064 — Code to UML (Very Hard, 8 marks)

**Type:** Derive UML from code  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

From the lecturer's ATM State implementation, derive the class diagram: list every class/interface, its key members, and the relationships (implements, association, dependency). Present it as a textual class diagram.

<details>
<summary><strong>Show answer</strong></summary>

Four ConcreteStates implement `ATMState`. `ATMMachine` has an association to `ATMState` (its current state) and also holds one instance of each ConcreteState. Each ConcreteState holds a back-association to `ATMMachine`, which is what lets it trigger transitions. The bidirectional association between Context and ConcreteState is the structural signature of the State pattern.

```java
+-------------------------------+
|        <<interface>>          |
|          ATMState             |
+-------------------------------+
| +insertATMCard() : void       |
| +ejectATMCard() : void        |
| +insertPin(int) : void        |
| +withdrawCash(int) : void     |
+-------------------------------+
              /_\   implements
               |------------------------------+----------------+
               |            |                 |                |
     +-----------------+ +----------+ +--------------+ +---------------+
     |     NoCard      | | HasCard  | |   HasPin     | |    NoCash     |
     +-----------------+ +----------+ +--------------+ +---------------+
     | -atmMachine     | |-atmMachine| |-atmMachine  | |-atmMachine    |
     +-----------------+ +----------+ +--------------+ +---------------+
               |            |                 |                |
               +------------+--------+--------+----------------+
                                     |  association (back-reference)
                                     v
                        +-------------------------------+
                        |          ATMMachine           |   <-- Context
                        +-------------------------------+
                        | -hasCard      : ATMState      |
                        | -noCard       : ATMState      |
                        | -hasCorrectPin: ATMState      |
                        | -atmOutOfMoney: ATMState      |
                        | -atmState     : ATMState      |  <-- current state
                        | -cashInMachine: int           |
                        | -correctPinEntered : boolean  |
                        +-------------------------------+
                        | +insertATMCard() : void       |
                        | +ejectATMCard() : void        |
                        | +insertPin(int) : void        |
                        | +withdrawCash(int) : void     |
                        | ~setATMState(ATMState) : void |
                        +-------------------------------+

Relationships:
  NoCard/HasCard/HasPin/NoCash  --implements-->  ATMState
  ATMMachine                    --association-->  ATMState  (holds current + all four)
  each ConcreteState            --association-->  ATMMachine (back-reference)
  TestATMMachine                --dependency-->   ATMMachine
```

> **Exam trap:** Drawing only Context -> State and omitting the back-reference misses the mechanism that makes transitions possible.

*Tags: UML, derive, State, ATM, class-diagram*

</details>

---

## CODE-0065 — Code to UML (Hard, 7 marks)

**Type:** Derive UML from code  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

Derive the class diagram for the lecturer's Observer example, showing the two interfaces, the two concrete classes and every relationship.

<details>
<summary><strong>Show answer</strong></summary>

`Celebrity` implements `Subject`; `Follower` implements `Observer`; `Celebrity` aggregates many `Observer` (not many `Follower`) — that typing is the whole point, and the diagram must show it against the interface. The demo class depends on both concretes.

```java
+---------------------------+           +--------------------------+
|      <<interface>>        |           |     <<interface>>        |
|         Subject           |           |        Observer          |
+---------------------------+           +--------------------------+
| +register(Observer)       |           | +update(String,String)   |
| +unregister(Observer)     |           +--------------------------+
| +notifyAllObservers(String)|                      /_\
+---------------------------+                        |  implements
            /_\                                      |
             |  implements                +--------------------------+
             |                            |        Follower          |
+---------------------------+             +--------------------------+
|        Celebrity          |             | -followerName : String   |
+---------------------------+             +--------------------------+
| -celebrityName : String   |             | +update(String,String)   |
| -followers : ArrayList<Observer>  <>----| +toString() : String     |
+---------------------------+   0..*      +--------------------------+
| +register(Observer)       |   aggregation is typed to Observer,
| +unregister(Observer)     |   NOT to Follower  <-- the decoupling
| +notifyAllObservers(String)|
| +post(String)             |
+---------------------------+
             ^
             |  dependency
+---------------------------+
|  ObserverDesignPattern    |
| +main(String[]) : void    |
+---------------------------+
```

> **Exam trap:** Drawing the aggregation to `Follower` instead of `Observer` — that would document a coupling the code deliberately avoids.

*Tags: UML, derive, Observer, class-diagram*

</details>

---

## CODE-0066 — State (ATM) (Brutal, 9 marks)

**Type:** Predict output for a new sequence  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

For a freshly constructed object, predict the **exact** console output of the following sequence and name the state after every call.

```java
atmMachine.insertATMCard();
atmMachine.insertATMCard();
atmMachine.withdrawCash(100);
atmMachine.insertPin(1234);
atmMachine.withdrawCash(100);
atmMachine.ejectATMCard();
```

<details>
<summary><strong>Show answer</strong></summary>

Start NoCard(3000). insertATMCard -> HasCard. A second insert is refused by `HasCard.insertATMCard()` with no transition. withdrawCash in HasCard is refused because no PIN has been entered. insertPin(1234) -> HasPin. withdrawCash(100) succeeds: 100 < 3000, so it prints the amount, debits to 2900, ejects to NoCard; since 2900 > 0 the NoCash branch does not fire. The final ejectATMCard now runs in NoCard, which reports there is no card.

```java
// Predicted output:
Please enter your pin
You can only insert one card at a time
You have not entered your PIN
You entered the correct PIN
100 is provided by the machine
Your card is ejected
You didn't enter a card
```

> **Exam trap:** The card is already ejected by the successful withdrawal, so the explicit ejectATMCard afterwards fails.

*Tags: trace-output, predict, state-(atm)*

</details>

---

## CODE-0067 — State (ATM) (Brutal, 9 marks)

**Type:** Predict output for a new sequence  
**Source:** ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

For a freshly constructed object, predict the **exact** console output of the following sequence and name the state after every call.

```java
atmMachine.insertATMCard();
atmMachine.insertPin(1234);
atmMachine.withdrawCash(2999);
atmMachine.insertATMCard();
atmMachine.insertPin(1234);
atmMachine.withdrawCash(1);
```

<details>
<summary><strong>Show answer</strong></summary>

After withdrawing 2999 the balance is exactly 1, which is greater than 0, so the machine returns to NoCard rather than NoCash and remains usable. The second withdrawal of 1 then drives the balance to exactly 0 — and because the guard is `<= 0`, the machine now transitions to NoCash *after* ejecting the card. Nothing further would be served.

```java
// Predicted output:
Please enter your pin
You entered the correct PIN
2999 is provided by the machine
Your card is ejected
Please enter your pin
You entered the correct PIN
1 is provided by the machine
Your card is ejected
```

> **Exam trap:** Boundary case: the guard is `<= 0`, not `< 0`, so a balance of exactly zero does trigger NoCash — but only after the second withdrawal.

*Tags: trace-output, predict, state-(atm)*

</details>

---

## CODE-0068 — State (Robot) (Brutal, 8 marks)

**Type:** Predict output for a new sequence  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

For a freshly constructed object, predict the **exact** console output of the following sequence and name the state after every call.

```java
robot.cook();
robot.off();
robot.cook();
robot.walk();
robot.cook();
robot.off();
```

<details>
<summary><strong>Show answer</strong></summary>

Start in RoboticOn. cook -> prints 'Cooking...' and moves to Cook. off in Cook is refused, printing 'Cannot switched off while cooking...' with **no transition**, so the robot stays in Cook. cook in Cook prints 'Cooking...' and again does not transition (only `RoboticOn.cook()` transitions). walk in Cook prints 'Walking...' and returns to On. cook in On prints 'Cooking...' and moves to Cook. The final off is therefore issued in Cook and is refused a second time. The robot never reaches the Off state in this sequence.

State trace: On -> Cook -> Cook -> Cook -> On -> Cook -> Cook.

```java
// Predicted output:
Cooking...
Cannot switched off while cooking...
Cooking...
Walking...
Cooking...
Cannot switched off while cooking...
```

> **Exam trap:** Assuming the last `off()` succeeds. Because the preceding `cook()` moved the robot back into Cook, the robot is never switched off at all in this sequence.

*Tags: trace-output, predict, state-(robot)*

</details>

---

## CODE-0069 — Pattern selection (Brutal, 8 marks)

**Type:** Reject an inappropriate pattern  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf; ATMMachineStateExample (lecturer archive); CSC3209_PracticalTutorial8_SampleSolution.pdf

A student proposes using the **Singleton** pattern for the `ATMMachine` class, arguing that 'there is only one ATM machine, so it should be a Singleton'. Evaluate this proposal against the lecture's stated applicability and give your recommendation with code.

<details>
<summary><strong>Show answer</strong></summary>

Reject it. Singleton's applicability is that there *must* be exactly one instance and it must be reachable from a well-known access point. Here the constraint is incidental, not essential: a bank runs many ATMs, and even one physical machine does not require the *class* to forbid a second instance. Making it a Singleton would prevent instantiating a test ATM, block running two machines in one process, and add global state for no benefit. Recommend leaving `ATMMachine` an ordinary class. Note that the *State* objects inside it are effectively one-per-machine already, created in the constructor.

```java
// PROPOSED (reject)
public class ATMMachine {
   private static ATMMachine instance = new ATMMachine();
   private ATMMachine(){ ... }
   public static ATMMachine getInstance(){ return instance; }
}
// Consequences:
//   - cannot create a second ATM (a bank has many)
//   - cannot create an isolated ATM per test -> tests share cash balance
//   - cashInMachine becomes global mutable state

// RECOMMENDED — ordinary class, as the lecturer wrote it
public class ATMMachine {
	ATMState hasCard, noCard, hasCorrectPin, atmOutOfMoney, atmState;
	int cashInMachine = 3000;
	public ATMMachine(){                       // public: many ATMs allowed
		hasCard = new HasCard(this);
		noCard = new NoCard(this);
		hasCorrectPin = new HasPin(this);
		atmOutOfMoney = new NoCash(this);
		atmState = noCard;
	}
}

// Each machine gets its OWN state objects and its OWN cash balance:
//   ATMMachine lobby  = new ATMMachine();
//   ATMMachine drivethru = new ATMMachine();
//   ATMMachine underTest = new ATMMachine();   // isolated for testing
```

> **Exam trap:** 'There is only one of it in real life' is not the Singleton criterion. The criterion is that more than one must be impossible.

*Tags: Singleton, reject-pattern, applicability, ATM*

</details>

---

## CODE-0070 — Pattern selection (Brutal, 8 marks)

**Type:** Reject an inappropriate pattern  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf; Lecture13_DesignPatterns_StructuralPatterns.pdf

A developer proposes replacing the lecturer's `ShapeFactory` with a **Facade** because 'both hide details from the client'. Evaluate the proposal and state what the client would lose.

<details>
<summary><strong>Show answer</strong></summary>

Reject it. The two patterns hide different things. The client here genuinely needs to *obtain and hold* a `Shape` and then decide when to draw it; a Facade returns void and performs the work itself, so the client would lose the ability to hold, store, pass or defer the product. Converting to a Facade would also mean the facade must anticipate every operation the client might want to perform, growing towards the bloat the lecture warns about. Keep the Factory when the client needs the object; use a Facade when the client wants the work done.

```java
// CURRENT (correct) — client obtains and controls the product
ShapeFactory shapeFactory = new ShapeFactory();
Shape shape1 = shapeFactory.getShape("CIRCLE");
List<Shape> canvas = new ArrayList<Shape>();
canvas.add(shape1);                 // store it
// ... later, on user action:
for (Shape s : canvas) s.draw();    // client decides WHEN

// PROPOSED (rejected) — facade does the work, returns nothing
public class ShapeMaker {
   public void drawCircle(){ circle.draw(); }     // void
}
shapeMaker.drawCircle();            // drawn immediately, nothing returned

// What the client LOSES:
//   * cannot store shapes in a collection
//   * cannot pass a shape to another component
//   * cannot defer or repeat drawing
//   * every new client need forces a new method on the facade
```

> **Exam trap:** 'Both hide details' is true but useless. Compare what each returns and what the client does next.

*Tags: Facade, Factory Method, reject-pattern, intent*

</details>

---

## CODE-0071 — Pattern selection (Brutal, 9 marks)

**Type:** Choose between two patterns  
**Source:** Lecture13_DesignPatterns_BehaviouralPatterns.pdf

For each requirement below, decide whether **State** or **Strategy** is correct, and justify from the code shape each would produce.

(a) A payment must be processed by card, bank transfer or e-wallet, chosen by the user at checkout.
(b) A support ticket behaves differently while Open, Escalated or Closed, and operations move it between these.

<details>
<summary><strong>Show answer</strong></summary>

(a) Strategy. The algorithm is interchangeable and *selected by the client*; the payment object never decides to become a different payment method on its own. (b) State. The ticket's own operations drive transitions between situations, and each operation behaves differently per situation. The discriminator is direction of control: with Strategy the client injects the behaviour; with State the object reassigns its own current behaviour object.

```java
// (a) STRATEGY — client injects, object never self-transitions
public interface PaymentStrategy { void pay(double amount); }

public class CardPayment implements PaymentStrategy {
   public void pay(double amount){ System.out.println("Card: " + amount); }
}
public class EWalletPayment implements PaymentStrategy {
   public void pay(double amount){ System.out.println("E-wallet: " + amount); }
}

public class Checkout {
   private PaymentStrategy strategy;
   public void setStrategy(PaymentStrategy s){ this.strategy = s; }  // CLIENT sets
   public void pay(double amount){ strategy.pay(amount); }
}
// checkout.setStrategy(new CardPayment());   <-- decision comes from outside
// CardPayment NEVER calls checkout.setStrategy(...)

// (b) STATE — object transitions itself
public interface TicketState { void escalate(); void close(); }

public class Ticket {
   private TicketState state = new OpenState(this);
   void setState(TicketState s){ this.state = s; }
   public TicketState getEscalated(){ return new EscalatedState(this); }
   public void escalate(){ state.escalate(); }
   public void close(){ state.close(); }
}

public class OpenState implements TicketState {
   private final Ticket t;
   public OpenState(Ticket t){ this.t = t; }
   public void escalate(){
      System.out.println("Escalated to tier 2");
      t.setState(t.getEscalated());        // <-- SELF-TRANSITION = State
   }
   public void close(){ System.out.println("Ticket closed"); }
}
```

> **Exam trap:** Both produce a Context delegating to an interface. Only the direction of control tells them apart.

*Tags: State, Strategy, choose-between, discriminator*

</details>

---

## CODE-0072 — Pattern selection (Brutal, 9 marks)

**Type:** Choose between two patterns  
**Source:** Lecture13_DesignPatterns_CreationalPatterns.pdf; Lecture13_DesignPatterns_StructuralPatterns.pdf

A reporting subsystem needs a class that (i) hides four collaborating classes behind one method, and (ii) guarantees that only one such class exists process-wide. A student says 'that's the Facade pattern' and another says 'that's Singleton'. Resolve the disagreement with code.

<details>
<summary><strong>Show answer</strong></summary>

Both are right about different requirements, and the two patterns compose rather than compete. Facade addresses requirement (i) — a simple interface over a complex subsystem. Singleton addresses requirement (ii) — controlled unique instantiation. The correct answer applies Facade to the structure and Singleton to the instantiation of that facade, then notes the cost: the resulting class inherits Singleton's testability problem, so if the subsystem must be substituted in tests, prefer a plain facade with a single shared instance managed by the caller.

```java
// Facade STRUCTURE + Singleton INSTANTIATION
public class ReportFacade {

   // --- Singleton part: controlled unique instantiation ---
   private static ReportFacade instance = new ReportFacade();
   public static ReportFacade getInstance(){ return instance; }

   // --- Facade part: owns the subsystem, exposes one simple operation ---
   private final DataLoader loader;
   private final Aggregator aggregator;
   private final Formatter formatter;
   private final Exporter exporter;

   private ReportFacade(){                 // private -> both patterns satisfied
      this.loader     = new DataLoader();
      this.aggregator = new Aggregator();
      this.formatter  = new Formatter();
      this.exporter   = new Exporter();
   }

   public void generate(String period){
      loader.load(period);
      aggregator.summarise();
      formatter.render();
      exporter.write();
   }
}

// Client:
//   ReportFacade.getInstance().generate("2026-Q1");

// COST: the facade is now globally reachable and unsubstitutable, so tests
// cannot swap in a fake subsystem. If that matters, drop the Singleton half:
//   public ReportFacade(){ ... }          // ordinary constructor
//   and let the caller hold one shared instance.
```

> **Exam trap:** Treating it as an either/or. Patterns compose; the exam credit is in naming which requirement each one answers.

*Tags: Facade, Singleton, composition, resolve-disagreement*

</details>

---
