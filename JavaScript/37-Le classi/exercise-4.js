class BankAccount{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposit(deposito){
        return this.saldo += deposito;
    }
    withdraw(prelievo){
        return this.saldo -= prelievo;
    }
    view(){
        console.log(this.saldo) 
    }
}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
