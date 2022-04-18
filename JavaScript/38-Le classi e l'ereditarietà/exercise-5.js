class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount{

  /*constructor(saldo){
    this.saldo = saldo;
  }*/

  deposit(deposito){
    return this.saldo += deposito;
  }

  withdraw(prelievo){
    return this.saldo -= prelievo;
  }

  view(){
    console.log(this.saldo);
  }

}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();