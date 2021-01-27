function Bank() {
  this.accounts = {};
  this.id = 0;
}
//test
function Account(name, initialDeposit) {
  this.name = name;
  this.amount = initialDeposit;
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts[account.id] = account;
}

Bank.prototype.findAccount = function(id) {
  if (this.accounts[id] != undefined) {
    return this.accounts[id];
  }
  return false;
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
    // alert(bank[1]);
  });
  $("#move-money").submit(function(event) {
    event.preventDefault();
    const index = $("#id").val();
    const deposit = parseInt($("#deposit").val());
    const withdraw = parseInt($("#withdraw").val());
    bank.accounts[index].deposit(deposit);
    bank.accounts[index].withdraw(withdraw);
    $("#output").text("$" + bank.accounts[index].amount);
  });
});