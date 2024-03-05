const express = require('express')
const router = express.Router()

const customerRoute = require('./customer')
const roomRoute = require('./room')
const amenityRoute = require('./amenity')
const invoiceRoute = require('./invoice')
const authRoute = require('./auth')
const dataRoute = require('./annualdata')

router.use('/customer', customerRoute)
router.use('/room', roomRoute)
router.use('/amenity', amenityRoute)
router.use('/invoice', invoiceRoute)
router.use('/auth', authRoute)
router.use('/data', dataRoute)

module.exports = router