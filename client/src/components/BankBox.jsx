var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');
var AccountBox = require('./AccountBox.jsx');
var InterestAdder = require('./InterestAdder.jsx')
var AccountHacker = require('./AccountHacker.jsx')

var bank = new Bank();
for(var account of sampleAccounts){
  bank.addAccount(account);
}

var BankBox = React.createClass({



  getInitialState: function(){
    return {accounts: sampleAccounts, bank: bank};
  },

  handleInterestButton: function(amount){
    var newBank = this.state.bank;
    newBank.addInterest(amount);
    this.setState({bank: newBank})
  },

  handleAccountHack: function(name){
    if(name === "Rick"){
      return;
    }
    var newBank = this.state.bank;
    var accountToHack = newBank.findAccountByOwnerName(name);
    var Rick = newBank.findAccountByOwnerName("Rick");
    if(accountToHack === null){
      return;
    }
    Rick.amount += accountToHack.amount;
    accountToHack.amount = 0;
    accountToHack.hacked = true;
    this.setState({bank: newBank});
  },

  render: function(){
    return(
      <div>
      <h1>CC React Bank</h1>
      <h2>Total: £{this.state.bank.totalCash().toFixed(2)}</h2>
      <AccountBox type="business" bank={bank} title="Business Accounts"></AccountBox>
      <AccountBox type="personal" bank={bank} title="Personal Accounts"></AccountBox>
      <InterestAdder value={10} onButtonClick={this.handleInterestButton}></InterestAdder>
      <AccountHacker onButtonClick={this.handleAccountHack}></AccountHacker>
      </div>
      );
  }
});

module.exports = BankBox;