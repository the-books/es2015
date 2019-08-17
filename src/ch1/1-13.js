class Checking {

  constructor(amount) {
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
    }
    else if (amount > this.balance) {
      console.log("Insufficient funds");
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

const account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500

account.withdraw(750);
console.log(account.toString()); // Balance: 750

account.withdraw(800); // Insufficient funds
console.log(account.toString()); // Balance: 750
