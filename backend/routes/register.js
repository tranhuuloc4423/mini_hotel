const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers');

router.post('/create', registerControllers.createUser);

module.exports = router;
