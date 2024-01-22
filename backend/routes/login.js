const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/loginControllers');

router.get('/:id', loginControllers.getUserById);

module.exports = router;
