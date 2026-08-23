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
