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