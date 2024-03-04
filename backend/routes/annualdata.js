const express = require('express');
const router = express.Router();
const annualDataController = require('../controllers/annualdataControllers');

router.get('/annualdata', annualDataController.getAllAnnualData);
router.get('/annualdata/:id', annualDataController.getAnnualDataById);
router.post('/annualdata', annualDataController.createAnnualData);
router.put('/annualdata/:id', annualDataController.updateAnnualDataById);
router.delete('/annualdata/:id', annualDataController.deleteAnnualDataById);

module.exports = router;