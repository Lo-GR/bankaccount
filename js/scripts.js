function Bank() {
  this.accounts = {};
  this.id = 0;
}

function Account(name, initialDeposit) {
  this.name = name;
  this.amount = initialDeposit;
}

Bank.prototype.assignId = function() {
  this.id += 1;
  return this.id;
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts[account.id] = account;
}


Account.prototype.deposit = function(money) {
  this.amount += money;
}

Account.prototype.withdraw = function(money) {
  if (this.amount - money < 0) {
    alert("Insufficient amount");
  } else {
    this.amount -= money;
  }
}

let bank = new Bank();
$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    const name = $("#newName").val();
    const initialDeposit = $("#initialDeposit").val();
    let newAccount = new Account(name, initialDeposit);
    bank.addAccount(newAccount);
  });
  $("#move-money").submit(function(event) {
    event.preventDefault();
    const id = $("id").val();
    const deposit = $("#deposit").val();
    const withdraw = $("#withdraw").val();
    bank[id].deposit(deposit);
    bank[id].withdraw(withdraw);
    $("#output").text("$" + bank[id].amount);
  });
});