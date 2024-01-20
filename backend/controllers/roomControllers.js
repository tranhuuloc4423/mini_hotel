const Room = require('../models/Room')

const roomControllers = {
    postRoom: async (req, res) => {
        try {
            const newRoom = await new Room({
                roomName: req.body.roomName,
                roomId: req.body.roomId,
                price: req.body.price,
                capacity: req.body.capacity,
                // isOccupied: req.body.isOccupied,
                // occupants: req.body.occupants
            })
            const room = await newRoom.save()
            res.status(200).json(room)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getAllRoom: async (req, res) => {
        try {
            const room = await Room.find()
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = roomControllers
