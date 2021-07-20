var express = require('express');
var router = express.Router();
var Company = require('../controllers/company.controller')

/* GET Companys listing. */
router.get('/', Company.getCompany);
router.get('/:id', Company.findCompanyById);
router.post('/', Company.createCompany);
router.put('/:id', Company.updateCompany);
router.delete('/:id', Company.deleteCompany);

module.exports = router;
