var React = require('react');
var Bank = require('../bank/bank.js');
var AccountList = require('./AccountList.jsx');

var AccountBox = React.createClass({


  render: function(){

    return(
      <div>
        <h2>{this.props.title}</h2>
        <h4>Total: £{this.props.bank.totalCash(this.props.type).toFixed(2)}</h4>
        <AccountList type={this.props.type} bank={this.props.bank}></AccountList>
      </div>
      );
  }
});

module.exports = AccountBox;