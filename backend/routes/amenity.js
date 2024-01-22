const amenityControllers = require('../controllers/amenityControllers');
const router = require('express').Router();

router.post('/create', amenityControllers.createAmenity);
router.get('/', amenityControllers.getAllAmenities);
router.get('/:id', amenityControllers.getAmenityById);
router.put('/:id', amenityControllers.updateAmenityById);
router.delete('/:id', amenityControllers.deleteAmenityById);

module.exports = router;