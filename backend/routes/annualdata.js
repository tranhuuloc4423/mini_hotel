const express = require('express');
const router = express.Router();
const annualDataController = require('../controllers/annualdataControllers.');

router.post('/data/:month', annualDataController.createMonthlyData);
router.get('/data/:month', annualDataController.getTotalRevenueByMonth);

module.exports = router;