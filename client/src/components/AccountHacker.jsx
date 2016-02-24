var React = require('react');

var AccountHacker = React.createClass({


  handleClick: function(event){
    event.preventDefault()
    var value = event.target.children[0].value;
    this.props.onButtonClick(value);
  },

  render: function() {

    return(
      <div>
        <form onSubmit={this.handleClick}>
        <input type="text" defaultValue="Enter Name"/>
        <input type="submit" value="Hack Account" />
        </form>
      </div>
      )
  }
})

module.exports = AccountHacker;