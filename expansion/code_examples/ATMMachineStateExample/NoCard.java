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