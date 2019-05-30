var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('http://52.142.199.184:8080/poc-intercompany-1/download');
});

module.exports = router;
