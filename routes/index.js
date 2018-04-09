var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Canal West Studio',
  	subtitle: 'Comprehensive Consulting',
  	location: 'Washington, DC',
  	address: '1101 Connecticut Ave.',
  	suite: 'Suite 450',
  	zip: '20036'
  });
});

module.exports = router;
