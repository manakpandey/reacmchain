var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getDemand', function(req, res, next) {
  //call function
  res.render('index', { title: 'Express' });
});

module.exports = router;
