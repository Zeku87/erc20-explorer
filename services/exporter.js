var async = require('async');
var Web3 = require('web3');
var moment = require('moment');

var exporter = function (config, db) {
  var self = this;

  self.config = config;
  self.db = db;

  self.web3 = new Web3();
  self.web3.setProvider(config.provider);
  self.contract = self.web3.eth.contract(config.erc20ABI).at(config.tokenAddress);
  self.allEvents = self.contract.allEvents({ fromBlock: config.exportStartBlock, toBlock: "latest" });
  self.newEvents = self.contract.allEvents();

  console.log("Concepto: " + self.contract.getConcepto('0'));

  // Processes new events
  self.newEvents.watch(function (err, log) {
    if (err) {
      console.log("Error receiving new log:", err);
      return;
    }
    console.log("New log received:", log);

    self.processLog(log, function (err) {
      console.log("New log processed");
    });

    if (log.event === "Transfer") {
      self.exportBalance(log.args.from);
      self.exportBalance(log.args.to);
    }
    if (log.event === "Approval") {
      self.exportBalance(log.args.owner);
      self.exportBalance(log.args.spender);
    }
  });

  // Retrieves historical events and processed them
  self.allEvents.get(function (err, logs) {
    console.log("No logs? " + JSON.stringify(logs));
    console.log("Historical events received");
    if (err) {
      console.log("Error receiving historical events:", err);
      return;
    }
    var accounts = {};
    var concepto = "";

    logs.forEach(function (log, index, array) {
      if (log.event === "Transfer") {
        accounts[log.args.from] = log.args.from;
        accounts[log.args.to] = log.args.to;
        if (log.args.from === "0x0000000000000000000000000000000000000000") {
          log.concept = "Creación de tokens"
        }else{
          log.concept = array[index + 1].args.concepto
        }
      }

      if (log.event === "Approval") {
        accounts[log.args.owner] = log.args.owner;
        accounts[log.args.spender] = log.args.spender;
      }

      console.log("History" + log.event + ": " + log.args.from + ", " + log.args.to);
    });

    async.eachSeries(logs, self.processLog, function (err) {
      console.log("All historical logs processed");
      self.exportBatchAccounts(accounts);
    });
  });

  self.exportBatchAccounts = function (accounts) {
    async.eachSeries(accounts, function (item, callback) {
      self.exportBalance(item, callback);
    }, function (err) {
      console.log("All historical balances updated");
    });
  }

  self.processLog = function (log, callback) {
    log._id = log.blockNumber + "_" + log.transactionIndex + "_" + log.logIndex;

    console.log("Exporting log:", log._id);

    self.web3.eth.getBlock(log.blockNumber, false, function (err, block) {
      if (err) {
        console.log("Error retrieving block information for log:", err);
        callback();
        return;
      }
      console.log("Timestamp: " + block.timestamp);
      console.log("Date: " + moment(block.timestamp, "yy/mm/dd").fromNow());
      log.timestamp = block.timestamp;

      if (log.args && log.args.value) {
        log.args.value = log.args.value.toNumber();
      }

      if(log.args.from === "0xed9d02e382b34818e88b88a309c7fe71e65f419d"){
        log.from_name = "N03"
      }

      if(log.args.from === "0x0fbdc686b912d7722dc86510934589e0aaf3b55a"){
        log.from_name = "N10"
      }

      if(log.args.to === "0xed9d02e382b34818e88b88a309c7fe71e65f419d"){
        log.to_name = "N03"
      }

      if(log.args.to === "0x0fbdc686b912d7722dc86510934589e0aaf3b55a"){
        log.to_name = "N10"
      }

      self.db.insert(log, function (err, newLogs) {
        console.log(log.concept)
        if (err) {
          if (err.message.indexOf("unique") !== -1) {
            console.log(log._id, "already exported!");
          } else {
            console.log("Error inserting log:", err);
          }
        } else {
          console.log("Insertion " + JSON.stringify(newLogs));
        }

        callback();
      });
    });
  }

  self.exportBalance = function (address, callback) {
    console.log("Exporting balance of", address);
    self.contract.balanceOf(address, function (err, balance) {
      var doc = { _id: address, balance: balance.toNumber() };
      self.db.update({ _id: doc._id }, doc, { upsert: true }, function (err, numReplaced) {
        if (err) {
          console.log("Error updating balance:", err);
        } else {
          console.log("Balance export completed");
        }

        if (callback)
          callback();
      });
    });
  }

  console.log("Exporter initialized, waiting for historical events...");
}

module.exports = exporter;