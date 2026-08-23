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
