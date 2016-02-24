var React = require('react');

var AccountList = React.createClass({


  render: function() {

    var accounts = this.props.bank.filteredAccounts(this.props.type);

    var accountsList = accounts.map(function(account, index){

        if(account.hacked === true){
          var style = {
            color: "red",
            fontWeight: "bold"
          }
        }
        else {
          var style = {
            color: "black"
          }
        }
        return <li key={index} style={style}> {account.owner}: £{account.amount.toFixed(2)}</li>
    })

    return(
      <div>
      <ul>
      {accountsList}
      </ul>
      </div>
      )
  }
})

module.exports = AccountList;