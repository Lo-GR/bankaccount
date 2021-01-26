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
  if(this.amount - money < 0) {
    alert("Insufficient amount");
  }
  else {
    this.amount -= money;
  }
}







$(document).ready(function() {

});