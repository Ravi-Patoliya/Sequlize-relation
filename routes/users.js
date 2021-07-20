var express = require('express');
var router = express.Router();
var User = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', User.getUser);
router.get('/:id', User.findUserById);
router.post('/', User.createUser);
router.put('/:id', User.updateUser);
router.delete('/:id', User.deleteUser);

module.exports = router;
