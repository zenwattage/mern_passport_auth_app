var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/logout'), (req, res) => {
  console.log('inside logout');

  req.logout();
  res.redirect('/');
};

module.exports = router;
