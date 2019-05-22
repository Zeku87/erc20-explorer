var BigNumber = require('bignumber.js');
//var Ether     = new BigNumber(10e+17);

function tokenFormatter(config) {
  self = this;
  self.config = config;
  
  /* This function just formats the amount */
  self.format = function(amount) {
  
    if(amount !== undefined){
      var ret = new BigNumber(amount.toString());
      return ret + " " + config.tokenShortName;
    }
    else{
      return "" + 0;
    }
  };
}

module.exports = tokenFormatter;