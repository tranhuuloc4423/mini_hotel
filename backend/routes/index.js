const express = require('express')
const router = express.Router()

const customerRoute = require('./customer')
const roomRoute = require('./room')
const amenityRoute = require('./amenity')
const authRoute = require('./auth')

router.use('/customer', customerRoute)
router.use('/room', roomRoute)
router.use('/amenity', amenityRoute)
router.use('/auth', authRoute)

module.exports = router
