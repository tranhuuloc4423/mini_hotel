const express = require('express')
const router = express.Router()
const annualDataController = require('../controllers/annualdataControllers')

router.post('/create', annualDataController.createMonthlyData)
router.get('/:month', annualDataController.getTotalRevenueByMonth)

module.exports = router
