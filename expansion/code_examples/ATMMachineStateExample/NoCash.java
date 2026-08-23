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