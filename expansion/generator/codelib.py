# -*- coding: utf-8 -*-
"""
codelib.py
Canonical Java code examples transcribed verbatim from the CSC3209 lecture slides
(Lecture13 Creational/Structural/Behavioural) and the lecturer-supplied
ATMMachineStateExample archive / Practical Tutorial 8.

These are the ONLY code examples used as ground truth for the code question bank.
"""

# ---------------------------------------------------------------- FACTORY METHOD
FACTORY_SHAPE = '''public interface Shape {
   void draw();
}'''

FACTORY_RECTANGLE = '''public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}'''

FACTORY_SQUARE = '''public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Square::draw() method.");
   }
}'''

FACTORY_CIRCLE = '''public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}'''

FACTORY_FACTORY = '''public class ShapeFactory {

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
}'''

FACTORY_DEMO = '''public class FactoryPatternDemo {

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
}'''

FACTORY_OUTPUT = '''Inside Circle::draw() method.
Inside Rectangle::draw() method.
Inside Square::draw() method.'''

# -------------------------------------------------------------------- SINGLETON
SINGLETON_CLASS = '''public class SingleObject {

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
}'''

SINGLETON_DEMO = '''public class SingletonPatternDemo {
   public static void main(String[] args) {

      //illegal construct
      //Compile Time Error: The constructor SingleObject() is not visible
      //SingleObject object = new SingleObject();

      //Get the only object available
      SingleObject object = SingleObject.getInstance();

      //show the message
      object.showMessage();
   }
}'''

SINGLETON_OUTPUT = '''Hello World!'''

# -------------------------------------------------------------------- COMPOSITE
COMPOSITE_EMPLOYEE = '''package CompositeExample;

public interface Employee {

      public void add(Employee employee);
      public void remove(Employee employee);
      public Employee getChild(int i);
      public String getName();
      public double getSalary();
      public void print();
   }'''

COMPOSITE_DEVELOPER = '''package CompositeExample;
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
}'''

COMPOSITE_MANAGER = '''package CompositeExample;
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
}'''

COMPOSITE_DEMO = '''package CompositeExample;
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
   }'''

COMPOSITE_OUTPUT = '''------------
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
------------'''

# ----------------------------------------------------------------------- FACADE
FACADE_SHAPE = '''public interface Shape {
   void draw();
}'''

FACADE_CIRCLE = '''public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Circle::draw()");
   }
}'''

FACADE_RECTANGLE = '''public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Rectangle::draw()");
   }
}'''

FACADE_SQUARE = '''public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Square::draw()");
   }
}'''

FACADE_MAKER = '''public class ShapeMaker {
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
}'''

FACADE_DEMO = '''public class FacadePatternDemo {
   public static void main(String[] args) {
      ShapeMaker shapeMaker = new ShapeMaker();

      shapeMaker.drawCircle();
      shapeMaker.drawRectangle();
      shapeMaker.drawSquare();
   }
}'''

FACADE_OUTPUT = '''Circle::draw()
Rectangle::draw()
Square::draw()'''

# --------------------------------------------------------------------- OBSERVER
OBSERVER_SUBJECT = '''package ObserverExample;
//This Class handles adding, deleting
//and updating all observers
public interface Subject {
  public void register(Observer o);
  public void unregister(Observer o);
  public void notifyAllObservers(String s);
}'''

OBSERVER_OBSERVER = '''package ObserverExample;
//The Observers update method is called
//when the Subject changes
interface Observer{
  public void update(String name, String s);
}'''

OBSERVER_CELEBRITY = '''package ObserverExample;
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
  System.out.println("\\n" + celebrityName + " has posted :: " + post + "\\n");
  notifyAllObservers(post);
 }
}'''

OBSERVER_FOLLOWER = '''package ObserverExample;
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
}'''

OBSERVER_DEMO = '''package ObserverExample;
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
}'''

OBSERVER_OUTPUT = '''muhammad has started following Dr.Mahatir Mohammad
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
lee has received Bill Gates's post    :: This hero is playing a critical role in Kenya's preparations ...'''

# ------------------------------------------------------------- STATE (ROBOT)
STATE_INTERFACE = '''package StateExample;
public interface RoboticState {
    public void walk();
    public void cook();
    public void off();
}'''

STATE_ROBOT = '''package StateExample;
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
}'''

STATE_ON = '''package StateExample;
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
}'''

STATE_COOK = '''package StateExample;
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
}'''

STATE_OFF = '''package StateExample;
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
}'''

STATE_DEMO = '''package StateExample;
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
}'''

STATE_OUTPUT = '''Walking...
Cooking...
Walking...
Robot is switched off
Walking...
Robot is switched off
Cannot cook at Off state.'''

# --------------------------------------------------------------- STATE (ATM)
ATM_STATE = '''package ATMMachineStateExample;
public interface ATMState {
	// Different states of ATM machine
	// HasCard, NoCard, HasPin, NoCash
	void insertATMCard();
	void ejectATMCard();
	void insertPin(int pinEntered);
	void withdrawCash(int cashToWithdraw);
}'''

ATM_MACHINE = '''package ATMMachineStateExample;
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
}'''

ATM_NOCARD = '''package ATMMachineStateExample;
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
}'''

ATM_HASCARD = '''package ATMMachineStateExample;
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
}'''

ATM_HASPIN = '''package ATMMachineStateExample;
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
}'''

ATM_NOCASH = '''package ATMMachineStateExample;
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
}'''

ATM_DEMO = '''package ATMMachineStateExample;
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
}'''

ATM_OUTPUT = '''Please enter your pin
Your card is ejected
Please enter your pin
You entered the correct PIN
3000 is provided by the machine
Your card is ejected
There is no money in this ATM
Your card is ejected
There is no money in this ATM'''
