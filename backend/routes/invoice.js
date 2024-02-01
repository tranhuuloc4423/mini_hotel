const invoiceControllers = require('../controllers/invoiceControllers');
const router = require('express').Router();

router.post('/create', invoiceControllers.createInvoice);
router.get('/', invoiceControllers.getAllInvoices);
router.get('/:id', invoiceControllers.getInvoiceById);
router.put('/:id', invoiceControllers.updateInvoiceById);
router.delete('/:id', invoiceControllers.deleteInvoiceById);

module.exports = router;