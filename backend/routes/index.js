const express = require('express')
const router = express.Router()

const customerRoute = require('./customer')
const roomRoute = require('./room')
const amenityRoute = require('./amenity')
const invoiceRoute = require('./invoice')
const authRoute = require('./auth')
const usageRoute = require('./auth')

router.use('/customer', customerRoute)
router.use('/room', roomRoute)
router.use('/amenity', amenityRoute)
router.use('/invoice', invoiceRoute)
router.use('/auth', authRoute)
router.use('/usage', usageRoute)

module.exports = router
