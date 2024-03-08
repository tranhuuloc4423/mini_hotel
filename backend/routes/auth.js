const authController = require('../controllers/authControllers')
const router = require('express').Router()

// login
router.post('/login', authController.loginUser)

// register
router.post('/register', authController.registerUser)

module.exports = router
