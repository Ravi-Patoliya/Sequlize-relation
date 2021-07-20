var express = require('express');
var router = express.Router();
var userWorkingDay = require('../controllers/userWorkingDay.controller')

/* GET userWorkingDays listing. */
router.get('/', userWorkingDay.getuserWorkingDay);
router.get('/:id', userWorkingDay.finduserWorkingDayById);
router.post('/', userWorkingDay.createuserWorkingDay);
router.put('/:id', userWorkingDay.updateuserWorkingDay);
router.delete('/:id', userWorkingDay.deleteuserWorkingDay);

module.exports = router;
