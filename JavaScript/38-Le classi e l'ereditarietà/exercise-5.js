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

  get dato() {
    return (this.#amount)
  }

  set dato(val) {
    this.#amount = val;
  }

}

class BankAccountVip extends BankAccount{

  constructor(dato){
    super(dato);
  }

  deposit(amount) {
    if (this.dato >= 1000) {
      amount += (amount * 3 / 100);
      this.dato += amount;
    }
    else {
      this.dato = amount;
    }

  }

}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();