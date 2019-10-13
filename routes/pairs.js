var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/save_stat/', function(req, res, next) {
    res.JSON({ status: 'ok' });
});

module.exports = router;