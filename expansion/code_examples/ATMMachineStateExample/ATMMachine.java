package ATMMachineStateExample;
public class ATMMachine {	
	ATMState hasCard;     
	ATMState noCard;
	ATMState hasCorrectPin;
	ATMState atmOutOfMoney;	
	ATMState atmState;
	
	int cashInMachine = 3000;
	boolean correctPinEntered = false;	
	public ATMMachine(){		
		hasCard = new HasCard(this);
		noCard = new NoCard(this);
		hasCorrectPin = new HasPin(this);
		atmOutOfMoney = new NoCash(this);		
		atmState = noCard;		
		if(cashInMachine < 0){			
			atmState = atmOutOfMoney;			
		}		
	}
	
	void setATMState(ATMState newATMState){		
		atmState = newATMState;		
	}
	
	public void setCashInMachine(int newCashInMachine){		
		cashInMachine = newCashInMachine;		
	}
	
	public void insertATMCard() {		
		atmState.insertATMCard();		
	}

	public void ejectATMCard() {		
		atmState.ejectATMCard();		
	}

	public void withdrawCash(int cashToWithdraw) {		
		atmState.withdrawCash(cashToWithdraw);		
	}

	public void insertPin(int pinEntered){		
		atmState.insertPin(pinEntered);		
	}
	
	public ATMState getYesCardState() { return hasCard; }
	public ATMState getNoCardState() { return noCard; }
	public ATMState getHasPin() { return hasCorrectPin; }
	public ATMState getNoCashState() { return atmOutOfMoney; }
	
}