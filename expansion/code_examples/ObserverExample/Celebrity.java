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
