const userController = require('../controllers/userControllers');
const router = require('express').Router()

router.put('/:id', userController.updateUser);
router.put('/:id/change-password', userController.changePassword);

module.exports = router;