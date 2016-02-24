var Account = function(params){
  this.owner = params.owner;
  this.amount = params.amount;
  this.type = params.type;
  this.details = params.details;
};

module.exports = Account;
