var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/allOK', function(req, res) {
    res.render('allOK', { title: 'Express', user: req.user });
});

module.exports = router;
