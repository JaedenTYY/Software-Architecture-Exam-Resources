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
