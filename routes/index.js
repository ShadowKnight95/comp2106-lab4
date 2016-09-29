var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'This is a website that lists off all of my family memebers.' });
});

/* GET mom page. */
router.get('/mom', function(req, res, next) {
  res.render('mom', { title: 'Mom', message: 'My moms name is Wendy. She is a stay at home mom who takes care of the house and watches my siblings. She enjoys reading and writing.' });
});

/* GET dad page. */
router.get('/dad', function(req, res, next) {
  res.render('dad', { title: 'Dad', message: 'My dads name is Nigel. He works at the BMO data center. He works with HVAC.' });
});

/* GET brother page. */
router.get('/brother', function(req, res, next) {
  res.render('brother', { title: 'Brother', message: 'My brothers name is Anderson. He is 9 years old. he turns 10 in Janruary and likes art.' });
});

/* GET my page. */
router.get('/zac', function(req, res, next) {
  res.render('zac', { title: 'My Page', message: 'This is my page. I am making this page for a lab in class. I am in the COPA course.' });
});

module.exports = router;