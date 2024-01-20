const customerControllers = require('../controllers/customerControllers')

const router = require('express').Router()

// POST
router.post('/create', customerControllers.postCustomer)

// GET
router.get('/getall', customerControllers.getAllCustomer)

module.exports = router
