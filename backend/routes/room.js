const roomControllers = require('../controllers/roomControllers');
const router = require('express').Router();

router.post('/create', roomControllers.createRoom);
router.get('/', roomControllers.getAllRooms);
router.get('/:id', roomControllers.getRoomById);
router.put('/:id', roomControllers.updateRoomById);
router.delete('/:id', roomControllers.deleteRoomById);
router.get('/customer/:id', roomControllers.getCustomerByRoomId);

module.exports = router;