var web3 = require('web3');
var net = require('net');

var config = function () {

  this.logFormat = "combined";
  // this.providerAddr = "http://52.142.199.184:22000";
  //this.providerAddr = "http://52.142.220.82:22000";
  this.providerAddr = "http://localhost:22000";
  this.provider = new web3.providers.HttpProvider(this.providerAddr);

  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";

  // this.erc20ABI = [{ "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "totalSupply", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }];
  // this.erc20ABI = [{constant:false,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{inputs:[{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"decimals",type:"uint8"},{name:"N03",type:"address"},{name:"N10",type:"address"}],payable:false,stateMutability:"nonpayable",type:"constructor"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:true,name:"to",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"owner",type:"address"},{indexed:true,name:"spender",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Approval",type:"event"},{constant:false,inputs:[{name:"to",type:"string"},{name:"concepto",type:"string"},{name:"tipo",type:"string"},{name:"moneda",type:"string"},{name:"importeML",type:"uint256"},{name:"signo",type:"uint256"},{name:"fecha",type:"string"},{name:"sociedadFrom",type:"string"},{name:"divisionFrom",type:"string"}],name:"sendFromOwner",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getTransaction",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getFrom",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getConcepto",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:false,stateMutability:"view",type:"function"}];
  // this.erc20ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getTransaction","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"string"},{"name":"concepto","type":"string"},{"name":"tipo","type":"string"},{"name":"moneda","type":"string"},{"name":"importeML","type":"uint256"},{"name":"signo","type":"uint256"},{"name":"fecha","type":"string"},{"name":"sociedadFrom","type":"string"},{"name":"divisionFrom","type":"string"}],"name":"sendFromOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getConcepto","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getFrom","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"N03","type":"address"},{"name":"N10","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
  this.erc20ABI = [{constant:false,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{inputs:[{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"decimals",type:"uint8"},{name:"N03",type:"address"},{name:"N10",type:"address"}],payable:false,stateMutability:"nonpayable",type:"constructor"},{anonymous:false,inputs:[{indexed:false,name:"from",type:"string"},{indexed:false,name:"to",type:"string"},{indexed:false,name:"value",type:"uint256"},{indexed:false,name:"concepto",type:"string"}],name:"InfoTransaction",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:true,name:"to",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"owner",type:"address"},{indexed:true,name:"spender",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Approval",type:"event"},{constant:false,inputs:[{name:"to",type:"string"},{name:"concepto",type:"string"},{name:"tipo",type:"string"},{name:"moneda",type:"string"},{name:"importeML",type:"uint256"},{name:"signo",type:"uint256"},{name:"fecha",type:"string"},{name:"sociedadFrom",type:"string"},{name:"divisionFrom",type:"string"}],name:"sendFromOwner",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getTransaction",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getFrom",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"id",type:"uint256"}],name:"getConcepto",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:false,stateMutability:"view",type:"function"}];
  this.tokenShortName = "FTK";
  this.tokenAddress = "0x931026816ddb52ecdddab46c4c660acf92b664d0";
  this.tokenDecimals = 18;
  this.tokenName = "FerroToken";
  this.tokenDescription = "Quorum";
  this.tokenTotalSupply = -1;

  this.exportStartBlock = 0; // Start block for the historic export (set to 0 for a full export)

  this.names = {
    "0x931026816ddb52ecdddab46c4c660acf92b664d0": "q0"
  }
}

module.exports = config;
