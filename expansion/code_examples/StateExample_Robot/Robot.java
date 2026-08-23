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
