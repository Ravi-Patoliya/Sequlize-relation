var express = require('express');
var router = express.Router();
var WorkingDay = require('../controllers/workingDay.controller')

/* GET WorkingDays listing. */
router.get('/', WorkingDay.getWorkingDay);
router.get('/:id', WorkingDay.findWorkingDayById);
router.post('/', WorkingDay.createWorkingDay);
router.put('/:id', WorkingDay.updateWorkingDay);
router.delete('/:id', WorkingDay.deleteWorkingDay);

module.exports = router;
