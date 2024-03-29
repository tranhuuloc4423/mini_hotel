const roomControllers = require('../controllers/roomControllers')
const router = require('express').Router()

router.post('/create', roomControllers.createRoom)
router.get('/', roomControllers.getAllRooms)
router.get('/:id', roomControllers.getRoomById)
router.put('/:id', roomControllers.updateRoomById)
router.put('/add_customer/:id', roomControllers.addCustomerForRoom)
router.delete('/:id', roomControllers.deleteRoomById)

module.exports = router
