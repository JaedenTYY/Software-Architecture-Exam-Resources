package ATMMachineStateExample;
public class HasPin implements ATMState {	
	ATMMachine atmMachine;	
	public HasPin(ATMMachine newATMMachine){		
		atmMachine = newATMMachine;		
	}	
	@Override
	public void insertATMCard() {		
		System.out.println("You already inserted a card");		
	}
	
	@Override
	public void ejectATMCard() {		
		System.out.println("Your card is ejected");
		atmMachine.setATMState(atmMachine.getNoCardState());		
	}
	
	@Override
	public void withdrawCash(int cashToWithdraw) {		
		if(cashToWithdraw > atmMachine.cashInMachine){			
			System.out.println("There isn't enough available cash");
			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());			
		} else {			
			System.out.println(cashToWithdraw+" is provided by the machine");
			atmMachine.setCashInMachine(atmMachine.cashInMachine - cashToWithdraw);
			
			System.out.println("Your card is ejected");
			atmMachine.setATMState(atmMachine.getNoCardState());
			
			if(atmMachine.cashInMachine <= 0){ 				
				atmMachine.setATMState(atmMachine.getNoCashState());				
			}
		} 
	}
	
	@Override
	public void insertPin(int pinEntered) {		
		System.out.println("You already entered a PIN");		
	}	
}