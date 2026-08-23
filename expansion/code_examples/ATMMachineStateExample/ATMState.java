package ATMMachineStateExample;
public interface ATMState {	
	// Different states of ATM machine
	// HasCard, NoCard, HasPin, NoCash	
	void insertATMCard();	
	void ejectATMCard();	
	void insertPin(int pinEntered);	
	void withdrawCash(int cashToWithdraw);	
}