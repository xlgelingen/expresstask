var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');
var userController = require("../controllers/user");
const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/isbn', bookController.getIsbn);

router.post('/user', userController.add);
router.put('/user/updatename', userController.updateName);
router.put('/user/updateemail', userController.updateEmail);
router.put('/user/updatepassword', userController.updatePassword);
router.delete('/user', userController.delete);

router.post('/login', authController.login);


module.exports = router;
