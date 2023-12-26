var express = require('express');
var router = express.Router();
const user = require("../controllers/user")
const authController = require('../controllers/auth');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressTask' });
});

router.get('/user', user.show);
router.get('/login', authController.loginshow);

module.exports = router;
