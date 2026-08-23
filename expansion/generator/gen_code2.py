# -*- coding: utf-8 -*-
"""
gen_code2.py — batch 2 of the CODE bank.
Adds scenario-driven implementation tasks, UML<->code translation, additional
execution traces, interface-design questions and applicability reasoning.
Appends to questions_code.json produced by gen_code.py.
"""
import json, codelib as C

with open("../questions_code.json") as f:
    Q = json.load(f)

SRC_C = "Lecture13_DesignPatterns_CreationalPatterns.pdf"
SRC_S = "Lecture13_DesignPatterns_StructuralPatterns.pdf"
SRC_B = "Lecture13_DesignPatterns_BehaviouralPatterns.pdf"
SRC_I = "Lecture13_DesignPatterns_Introduction.pdf"
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
# A. SCENARIO -> STATE PATTERN (each scenario has genuinely different logic)
# =====================================================================
STATE_SCENARIOS = [
    ("Vending machine", "A vending machine has states: NoCoin, HasCoin, Dispensing, SoldOut. Inserting a coin in NoCoin moves to HasCoin. Selecting a product in HasCoin dispenses and returns to NoCoin, unless stock reaches zero in which case it moves to SoldOut. Selecting with no coin is refused. In SoldOut, coins are returned immediately.",
     "VendingMachine", "NoCoin", '''public interface VendingState {
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
}''',
     "The stock check inside `selectProduct()` mirrors the ATM's nested cash check: the state after a successful action depends on a guard, so one call can produce two transitions."),

    ("Traffic light", "A pedestrian crossing light cycles Red -> Green -> Amber -> Red on a timer tick. A pedestrian request button is honoured only while Red; pressing it at any other time is queued but has no immediate effect.",
     "TrafficLight", "Red", '''public interface LightState {
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
}''',
     "The queued flag lives on the Context, not on a ConcreteState — state objects are shared singletons here, so per-request data must not be stored in them."),

    ("Document workflow", "A document moves Draft -> InReview -> Approved, and may be sent back from InReview to Draft. An Approved document is immutable: it can be neither edited nor re-reviewed. Editing is permitted only in Draft.",
     "Document", "Draft", '''public interface DocState {
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
}''',
     "Approved is a terminal state: every operation refuses and none transitions. Forgetting this makes the workflow reversible when the spec says it is not."),

    ("Media player", "A player is Stopped, Playing or Paused. Play from Stopped starts from the beginning; Play from Paused resumes. Pause works only while Playing. Stop works from Playing or Paused and resets the position.",
     "MediaPlayer", "Stopped", '''public interface PlayerState {
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
}''',
     "Play means two different things depending on state (restart vs resume). Writing one shared play() with a flag re-introduces the conditional the pattern removes."),

    ("Turnstile", "A turnstile is Locked or Unlocked. Inserting a coin while Locked unlocks it. Pushing while Unlocked lets one person through and re-locks. Pushing while Locked is refused; inserting a coin while Unlocked returns the coin.",
     "Turnstile", "Locked", '''public interface TurnstileState {
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
}''',
     "Only two states, so students often revert to a boolean. State is still justified when the *operations* differ, not just a flag value."),
]

for name, spec, ctx, init, code, trap in STATE_SCENARIOS:
    add("State (applied)", "Choose pattern and implement", "Brutal", 12,
        "**%s.** %s\n\nChoose the appropriate design pattern, justify the choice against the lecture's stated applicability, and give a complete Java implementation including the Context, the State interface and every ConcreteState." % (name, spec),
        "State. The lecture's applicability is satisfied: behaviour depends on the object's internal state and must change at run time, and the operations would otherwise contain large multipart conditionals repeated across methods. Context = `%s`, initialised to %s, delegating every operation to the current state object. Each ConcreteState implements all operations and performs its own transitions via the Context's setter. Data shared across states (counters, positions) belongs on the Context, not on individual state objects." % (ctx, init),
        code,
        ["State", "applied-scenario", "full-implementation", name.lower().replace(" ", "-")],
        SRC_B, trap)

# =====================================================================
# B. SCENARIO -> OBSERVER
# =====================================================================
OBSERVER_SCENARIOS = [
    ("Weather station", "A weather station records temperature readings. Several independent displays (current conditions, statistics, forecast) must update whenever a new reading arrives. Displays can be added or removed while the system runs.",
     '''import java.util.ArrayList;
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
      System.out.println("\\nNew reading: " + temperature + "C");
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
}''',
     "Each observer keeps its own private history. Putting that state on the subject would couple it to what observers happen to need."),

    ("Stock ticker", "A stock's price updates continuously. Traders, a logging service and an alert engine must all react to each change, without the stock knowing what any of them do.",
     '''import java.util.ArrayList;
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
      System.out.println("\\n" + symbol + " -> " + price);
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
}''',
     "Three observers of completely different kinds share one interface. Adding a fourth requires no change to Stock."),

    ("Auction bidding", "In an online auction, every registered bidder must be told immediately when a new highest bid is placed, including who placed it. Bidders may withdraw at any time.",
     '''import java.util.ArrayList;
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
      System.out.println("\\n" + name + " bids " + amount);
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
}''',
     "Notification is conditional: a losing bid changes nothing, so no notification fires. Notifying unconditionally is a common error."),
]

OBS_ANSWERS = {
 "Weather station":
   "Observer. The lecture's applicability is met on the clause 'when a change to one object requires changing others, and you don't know how many objects need to be changed': the station has no way to know how many displays exist. The distinguishing feature of this implementation is that **each observer keeps its own private history** — `StatisticsDisplay` accumulates a running sum and count, `ForecastDisplay` remembers the previous reading. That state must live in the observers, not the subject: putting it on `WeatherStation` would couple the subject to what its observers happen to compute, and adding a fourth display would then force a change to the subject. `setMeasurement()` calls `notifyObservers()` itself, so publication and notification cannot drift apart.",
 "Stock ticker":
   "Observer. The applicability clause that bites here is 'an object should be able to notify other objects without making assumptions about who these objects are' — a `Trader`, an `AuditLog` and an `AlertEngine` are three completely unrelated kinds of thing, and the `Stock` must not know that. The distinguishing feature is **heterogeneity of observer types behind one interface**: all three implement `priceChanged` but do entirely different work (display, persistence, threshold evaluation). This is what demonstrates the pattern's real payoff — adding a fourth observer type requires no change to `Stock` at all, because `Stock` is programmed against the interface and never against any concrete observer.",
 "Auction bidding":
   "Observer. The applicability is the standard one-to-many dependency, but this implementation's distinguishing feature is that **notification is conditional on the state change actually occurring**. `placeBid()` returns early without notifying when the bid does not exceed the current high — a losing bid changes nothing, so there is nothing to announce. Notifying unconditionally would be a real defect here, spamming every bidder with non-events. Note also that the notification carries *who* placed the bid, letting each `HumanBidder` distinguish 'I am winning' from 'I was outbid' — the payload design is part of the pattern decision, not an afterthought.",
}

for name, spec, code, trap in [(s[0], s[1], s[2], s[3]) for s in OBSERVER_SCENARIOS]:
    add("Observer (applied)", "Choose pattern and implement", "Brutal", 12,
        "**%s.** %s\n\nChoose the appropriate design pattern, justify it against the lecture's stated applicability, and give a complete Java implementation." % (name, spec),
        OBS_ANSWERS[name],
        code,
        ["Observer", "applied-scenario", "full-implementation", name.lower().replace(" ", "-")],
        SRC_B, trap)

# =====================================================================
# C. SCENARIO -> COMPOSITE / FACADE / FACTORY / SINGLETON
# =====================================================================
add("Composite (applied)", "Choose pattern and implement", "Brutal", 12,
    "**Menu system.** A restaurant menu contains items and sub-menus (e.g. a Desserts sub-menu inside the Dinner menu), nested to any depth. The client must print the whole menu and compute the total price of any node without knowing whether that node is a single item or a whole sub-menu.",
    "Composite. Part-whole hierarchy with clients that must ignore the leaf/composite distinction — exactly the lecture's applicability. Component = `MenuComponent` declaring `print()` and `getPrice()`; Leaf = `MenuItem` returning its own price; Composite = `Menu` summing recursively. Depth is handled by the recursion, so the client never type-tests.",
    '''import java.util.ArrayList;
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
*/''',
    ["Composite", "applied-scenario", "full-implementation", "menu"], SRC_S,
    "Computing the composite's price by adding only direct children's own prices and skipping nested sub-menus.")

add("Composite (applied)", "Choose pattern and implement", "Very Hard", 11,
    "**Organisation chart with headcount.** A university has faculties, each containing departments, each containing staff. The registry must print the structure and report the headcount of any node, whether that node is a single staff member, a department or an entire faculty.",
    "Composite. Component = `OrgUnit` with `getHeadcount()` and `print()`. Leaf = `Staff` returning 1. Composite = `Unit` summing children recursively. The uniform interface means the registry calls the same method on a person and on a faculty.",
    '''import java.util.ArrayList;
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
*/''',
    ["Composite", "applied-scenario", "full-implementation", "org-chart"], SRC_S,
    "A leaf placed alongside composites (Dean Tan) still counts as 1 — the client must not special-case it.")

add("Facade (applied)", "Choose pattern and implement", "Very Hard", 11,
    "**Home theatre.** Starting a film requires dimming the lights, lowering the screen, switching the projector to widescreen, powering the amplifier, setting its volume, and starting the player — in that order. Users should press one button. Choose a pattern, justify it, and implement it.",
    "Facade. The lecture's applicability is met: a client needs a simple interface to a complex subsystem, and there are many dependencies between the client and the subsystem's implementation classes. `HomeTheatreFacade` owns the subsystem objects and encapsulates both the *set* of calls and their *order*, which is the part clients most often get wrong. Subsystem classes remain usable directly for the rare client that needs them — the facade does not hide them completely.",
    '''public class Lights {
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
   public void play(String movie){ System.out.println("Playing \\"" + movie + "\\""); }
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
}''',
    ["Facade", "applied-scenario", "full-implementation", "home-theatre"], SRC_S,
    "The facade's value here is the *sequence*, not just the grouping. An answer that only groups calls misses half the point.")

add("Facade (applied)", "Choose pattern and implement", "Very Hard", 10,
    "**Online order checkout.** Completing a purchase requires checking inventory, taking payment, arranging shipping and emailing a confirmation. The web controller should issue one call. Choose a pattern, justify it, and implement it — including what happens when one step fails.",
    "Facade. The controller depends on one class instead of four, and the facade also becomes the single place where failure handling for the sequence lives. Note the design limit the lecture warns about: a facade that starts making business decisions is drifting towards becoming a bottleneck, so keep orchestration thin and push rules into the subsystem.",
    '''public class InventoryService {
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
}''',
    ["Facade", "applied-scenario", "full-implementation", "checkout"], SRC_S,
    "Reserving stock before payment succeeds leaves orphaned reservations — ordering matters inside the facade.")

add("Factory Method (applied)", "Choose pattern and implement", "Very Hard", 10,
    "**Notification channels.** A system must send notifications by email, SMS or push, selected at run time from a user preference. Calling code must not name any concrete channel class. Choose a pattern, justify it, and implement it.",
    "Factory Method. The caller cannot anticipate which concrete channel it needs, and the knowledge of which class to instantiate should sit in one place. Product = `Notifier`; ConcreteProducts = the three channels; Creator = `NotifierFactory`. Adding WhatsApp later touches the new class and the factory only.",
    '''public interface Notifier {
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
}''',
    ["Factory Method", "applied-scenario", "full-implementation", "notifications"], SRC_C,
    "Returning null silently for an unknown channel then dereferencing it. State the null contract or throw.")

add("Singleton (applied)", "Choose pattern and implement", "Very Hard", 9,
    "**Application configuration.** Settings are read once from disk and must be identical everywhere in the application; no component may create a second copy. Choose a pattern, justify it, implement it, and state one risk your implementation introduces.",
    "Singleton. The lecture's applicability is met: exactly one instance must exist and be reachable from a well-known access point. Private static instance, private constructor, public static accessor. Risk: the global access point creates hidden dependencies that make testing harder (no seam for substituting configuration), and any mutable state on the singleton becomes shared global state across the whole program.",
    '''import java.util.HashMap;
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
// different configuration, and mutable settings become shared global state.''',
    ["Singleton", "applied-scenario", "full-implementation", "configuration"], SRC_C,
    "Claiming the loading message prints twice — it prints once, at class-load, however many times getInstance() is called.")

# =====================================================================
# D. UML <-> CODE
# =====================================================================
add("UML to code", "Translate UML to code", "Very Hard", 8,
    "The lecture's Factory Method Structure diagram shows `Shape` as an `<<Interface>>` with `+draw() : void`; `Circle`, `Square` and `Rectangle` each with `+draw() : void` connected to `Shape` by *implements*; `ShapeFactory` with `+getShape() : Shape` connected to the concrete shapes by *creates*; and `FactoryPatternDemo` with `+main() : void` connected to `ShapeFactory` by *asks*. Write the Java that this diagram specifies.",
    "Translate each UML element literally: `<<Interface>>` becomes `interface`; the *implements* arrows become `implements` clauses; the `+` visibility markers become `public`; `getShape() : Shape` becomes a method whose return type is the interface, not a concrete class; the *creates* relation becomes `new` expressions inside the factory; the *asks* relation becomes the demo holding a `ShapeFactory` and calling it.",
    C.FACTORY_SHAPE + "\n\n// ---\n" + C.FACTORY_CIRCLE + "\n\n// ---\n" + C.FACTORY_SQUARE + "\n\n// ---\n" + C.FACTORY_RECTANGLE + "\n\n// ---\n" + C.FACTORY_FACTORY + "\n\n// ---\n" + C.FACTORY_DEMO,
    ["UML", "translate", "Factory Method"], SRC_C,
    "Typing getShape()'s return as a concrete class contradicts the diagram, which shows `: Shape`.")

add("UML to code", "Translate UML to code", "Very Hard", 8,
    "The lecture's Composite diagram shows `Employee` with `+getName() +getSalary() +print() +Add(Employee) +Remove(Employee) +GetChild(int)`; `Developer` with only `+getName() +getSalary() +print()`; and `Manager` with all six operations plus a *children* aggregation back to `Employee`. Write the Java, and explain what the aggregation diamond dictates.",
    "The diamond on the Manager end of the *children* association is an aggregation: `Manager` holds a collection of `Employee` references. That single symbol is what makes recursion possible, because the collection is typed to the Component interface and therefore may contain other `Manager` objects. `Developer` still implements all six operations (an interface implementation must be total) but the three child operations are no-ops, which is why the diagram lists only three against it.",
    '''// Employee — the Component (all six operations)
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
// may themselves be Managers -> arbitrary depth, handled by recursion.''',
    ["UML", "translate", "Composite", "aggregation"], SRC_S,
    "Typing the list `List<Developer>` would forbid nested managers and destroy the recursive structure.")

add("Code to UML", "Derive UML from code", "Very Hard", 8,
    "From the lecturer's ATM State implementation, derive the class diagram: list every class/interface, its key members, and the relationships (implements, association, dependency). Present it as a textual class diagram.",
    "Four ConcreteStates implement `ATMState`. `ATMMachine` has an association to `ATMState` (its current state) and also holds one instance of each ConcreteState. Each ConcreteState holds a back-association to `ATMMachine`, which is what lets it trigger transitions. The bidirectional association between Context and ConcreteState is the structural signature of the State pattern.",
    '''+-------------------------------+
|        <<interface>>          |
|          ATMState             |
+-------------------------------+
| +insertATMCard() : void       |
| +ejectATMCard() : void        |
| +insertPin(int) : void        |
| +withdrawCash(int) : void     |
+-------------------------------+
              /_\\   implements
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
  TestATMMachine                --dependency-->   ATMMachine''',
    ["UML", "derive", "State", "ATM", "class-diagram"], SRC_ATM,
    "Drawing only Context -> State and omitting the back-reference misses the mechanism that makes transitions possible.")

add("Code to UML", "Derive UML from code", "Hard", 7,
    "Derive the class diagram for the lecturer's Observer example, showing the two interfaces, the two concrete classes and every relationship.",
    "`Celebrity` implements `Subject`; `Follower` implements `Observer`; `Celebrity` aggregates many `Observer` (not many `Follower`) — that typing is the whole point, and the diagram must show it against the interface. The demo class depends on both concretes.",
    '''+---------------------------+           +--------------------------+
|      <<interface>>        |           |     <<interface>>        |
|         Subject           |           |        Observer          |
+---------------------------+           +--------------------------+
| +register(Observer)       |           | +update(String,String)   |
| +unregister(Observer)     |           +--------------------------+
| +notifyAllObservers(String)|                      /_\\
+---------------------------+                        |  implements
            /_\\                                      |
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
+---------------------------+''',
    ["UML", "derive", "Observer", "class-diagram"], SRC_B,
    "Drawing the aggregation to `Follower` instead of `Observer` — that would document a coupling the code deliberately avoids.")

# =====================================================================
# E. ADDITIONAL EXECUTION TRACES
# =====================================================================
TRACES = [
    ("State (ATM)", "Predict output for a new sequence", 9,
     '''atmMachine.insertATMCard();
atmMachine.insertATMCard();
atmMachine.withdrawCash(100);
atmMachine.insertPin(1234);
atmMachine.withdrawCash(100);
atmMachine.ejectATMCard();''',
     '''Please enter your pin
You can only insert one card at a time
You have not entered your PIN
You entered the correct PIN
100 is provided by the machine
Your card is ejected
You didn't enter a card''',
     "Start NoCard(3000). insertATMCard -> HasCard. A second insert is refused by `HasCard.insertATMCard()` with no transition. withdrawCash in HasCard is refused because no PIN has been entered. insertPin(1234) -> HasPin. withdrawCash(100) succeeds: 100 < 3000, so it prints the amount, debits to 2900, ejects to NoCard; since 2900 > 0 the NoCash branch does not fire. The final ejectATMCard now runs in NoCard, which reports there is no card.",
     "The card is already ejected by the successful withdrawal, so the explicit ejectATMCard afterwards fails."),

    ("State (ATM)", "Predict output for a new sequence", 9,
     '''atmMachine.insertATMCard();
atmMachine.insertPin(1234);
atmMachine.withdrawCash(2999);
atmMachine.insertATMCard();
atmMachine.insertPin(1234);
atmMachine.withdrawCash(1);''',
     '''Please enter your pin
You entered the correct PIN
2999 is provided by the machine
Your card is ejected
Please enter your pin
You entered the correct PIN
1 is provided by the machine
Your card is ejected''',
     "After withdrawing 2999 the balance is exactly 1, which is greater than 0, so the machine returns to NoCard rather than NoCash and remains usable. The second withdrawal of 1 then drives the balance to exactly 0 — and because the guard is `<= 0`, the machine now transitions to NoCash *after* ejecting the card. Nothing further would be served.",
     "Boundary case: the guard is `<= 0`, not `< 0`, so a balance of exactly zero does trigger NoCash — but only after the second withdrawal."),

    ("State (Robot)", "Predict output for a new sequence", 8,
     '''robot.cook();
robot.off();
robot.cook();
robot.walk();
robot.cook();
robot.off();''',
     '''Cooking...
Cannot switched off while cooking...
Cooking...
Walking...
Cooking...
Cannot switched off while cooking...''',
     "Start in RoboticOn. cook -> prints 'Cooking...' and moves to Cook. off in Cook is refused, printing 'Cannot switched off while cooking...' with **no transition**, so the robot stays in Cook. cook in Cook prints 'Cooking...' and again does not transition (only `RoboticOn.cook()` transitions). walk in Cook prints 'Walking...' and returns to On. cook in On prints 'Cooking...' and moves to Cook. The final off is therefore issued in Cook and is refused a second time. The robot never reaches the Off state in this sequence.\n\nState trace: On -> Cook -> Cook -> Cook -> On -> Cook -> Cook.",
     "Assuming the last `off()` succeeds. Because the preceding `cook()` moved the robot back into Cook, the robot is never switched off at all in this sequence."),
]

for sub, typ, marks, seq, out, expl, trap in TRACES:
    add(sub, typ, "Brutal", marks,
        "For a freshly constructed object, predict the **exact** console output of the following sequence and name the state after every call.\n\n```java\n%s\n```" % seq,
        expl,
        "// Predicted output:\n" + out,
        ["trace-output", "predict", sub.lower().replace(" ", "-")],
        SRC_ATM if "ATM" in sub else SRC_B, trap)

# =====================================================================
# F. INTERFACE / APPLICABILITY REASONING
# =====================================================================
add("Pattern selection", "Reject an inappropriate pattern", "Brutal", 8,
    "A student proposes using the **Singleton** pattern for the `ATMMachine` class, arguing that 'there is only one ATM machine, so it should be a Singleton'. Evaluate this proposal against the lecture's stated applicability and give your recommendation with code.",
    "Reject it. Singleton's applicability is that there *must* be exactly one instance and it must be reachable from a well-known access point. Here the constraint is incidental, not essential: a bank runs many ATMs, and even one physical machine does not require the *class* to forbid a second instance. Making it a Singleton would prevent instantiating a test ATM, block running two machines in one process, and add global state for no benefit. Recommend leaving `ATMMachine` an ordinary class. Note that the *State* objects inside it are effectively one-per-machine already, created in the constructor.",
    '''// PROPOSED (reject)
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
//   ATMMachine underTest = new ATMMachine();   // isolated for testing''',
    ["Singleton", "reject-pattern", "applicability", "ATM"], SRC_C + "; " + SRC_ATM,
    "'There is only one of it in real life' is not the Singleton criterion. The criterion is that more than one must be impossible.")

add("Pattern selection", "Reject an inappropriate pattern", "Brutal", 8,
    "A developer proposes replacing the lecturer's `ShapeFactory` with a **Facade** because 'both hide details from the client'. Evaluate the proposal and state what the client would lose.",
    "Reject it. The two patterns hide different things. The client here genuinely needs to *obtain and hold* a `Shape` and then decide when to draw it; a Facade returns void and performs the work itself, so the client would lose the ability to hold, store, pass or defer the product. Converting to a Facade would also mean the facade must anticipate every operation the client might want to perform, growing towards the bloat the lecture warns about. Keep the Factory when the client needs the object; use a Facade when the client wants the work done.",
    '''// CURRENT (correct) — client obtains and controls the product
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
//   * every new client need forces a new method on the facade''',
    ["Facade", "Factory Method", "reject-pattern", "intent"], SRC_C + "; " + SRC_S,
    "'Both hide details' is true but useless. Compare what each returns and what the client does next.")

add("Pattern selection", "Choose between two patterns", "Brutal", 9,
    "For each requirement below, decide whether **State** or **Strategy** is correct, and justify from the code shape each would produce.\n\n(a) A payment must be processed by card, bank transfer or e-wallet, chosen by the user at checkout.\n(b) A support ticket behaves differently while Open, Escalated or Closed, and operations move it between these.",
    "(a) Strategy. The algorithm is interchangeable and *selected by the client*; the payment object never decides to become a different payment method on its own. (b) State. The ticket's own operations drive transitions between situations, and each operation behaves differently per situation. The discriminator is direction of control: with Strategy the client injects the behaviour; with State the object reassigns its own current behaviour object.",
    '''// (a) STRATEGY — client injects, object never self-transitions
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
}''',
    ["State", "Strategy", "choose-between", "discriminator"], SRC_B,
    "Both produce a Context delegating to an interface. Only the direction of control tells them apart.")

add("Pattern selection", "Choose between two patterns", "Brutal", 9,
    "A reporting subsystem needs a class that (i) hides four collaborating classes behind one method, and (ii) guarantees that only one such class exists process-wide. A student says 'that's the Facade pattern' and another says 'that's Singleton'. Resolve the disagreement with code.",
    "Both are right about different requirements, and the two patterns compose rather than compete. Facade addresses requirement (i) — a simple interface over a complex subsystem. Singleton addresses requirement (ii) — controlled unique instantiation. The correct answer applies Facade to the structure and Singleton to the instantiation of that facade, then notes the cost: the resulting class inherits Singleton's testability problem, so if the subsystem must be substituted in tests, prefer a plain facade with a single shared instance managed by the caller.",
    '''// Facade STRUCTURE + Singleton INSTANTIATION
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
//   and let the caller hold one shared instance.''',
    ["Facade", "Singleton", "composition", "resolve-disagreement"], SRC_C + "; " + SRC_S,
    "Treating it as an either/or. Patterns compose; the exam credit is in naming which requirement each one answers.")

# ---------------------------------------------------------------- emit
with open("../questions_code.json", "w") as f:
    json.dump(Q, f, indent=1, ensure_ascii=False)
with open("../questions_code.js", "w") as f:
    f.write("window.QUESTIONS_CODE = " + json.dumps(Q, ensure_ascii=False) + ";\n")

print("CODE questions total:", len(Q))
from collections import Counter
for k, v in Counter(q["subtopic"] for q in Q).most_common():
    print("  %3d  %s" % (v, k))
