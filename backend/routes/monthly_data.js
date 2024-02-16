const monthly_dataControllers = require('../controllers/monthly_dataControllers');
const router = require('express').Router();

router.post('/create', monthly_dataControllers.createAmenity);

module.exports = router;