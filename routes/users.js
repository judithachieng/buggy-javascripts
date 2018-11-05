var express = require('express');
var router = express.Router

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hoorah! We got to the user resource')
});

module.exports = router;
