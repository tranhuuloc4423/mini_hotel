const express = require('express');
const router = express.Router();
const annualDataController = require('../controllers/annualdataControllers');

router.post('/data', annualDataController.createAnnualData);

module.exports = router;