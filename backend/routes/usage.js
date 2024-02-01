const usageControllers = require('../controllers/usageControllers');
const router = require('express').Router();

router.post('/create', usageControllers.createUsage);
router.get('/', usageControllers.getAllUsages);
router.get('/:id', usageControllers.getUsageById);
router.put('/:id', usageControllers.updateUsageById);
router.delete('/:id', usageControllers.deleteUsageById);

module.exports = router;