const customerControllers = require('../controllers/customerControllers')

const router = require('express').Router()

router.post('/create', customerControllers.createCustomer);
router.get('/', customerControllers.getAllCustomers);
router.get('/:id', customerControllers.getCustomerById);
router.put('/:id', customerControllers.updateCustomerById);
router.delete('/:id', customerControllers.deleteCustomerById);

module.exports = router
