var React = require('react');

var InterestAdder = React.createClass({


  handleClick: function(event){
    event.preventDefault()
    var value = event.target.children[0].value;
    if(value == 100){
      var confirm = window.confirm("are you sure? 100% is very generous");
      if(confirm === false){
        return;
      }
    }
    this.props.onButtonClick(value);
  },

  render: function() {

    return(
      <div>
        <form onSubmit={this.handleClick}>
        <input type="number" defaultValue={10} min={0} max={100}/>
        <input type="submit" value="Add Interest" />
        </form>
      </div>
      )
  }
})

module.exports = InterestAdder;