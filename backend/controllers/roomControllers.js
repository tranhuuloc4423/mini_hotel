const Room = require('../models/Room')
const Customer = require('../models/Customer')

const roomControllers = {
    createRoom: async (req, res) => {
        try {
            const imageData = req.body.image
            // const buffer = Buffer.from(imageData)
            const newRoom = new Room({
                roomname: req.body.roomname,
                price: req.body.price,
                capacity: req.body.capacity,
                image: req.body.image
            })
            const room = await newRoom.save()
            res.status(200).json(room)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getAllRooms: async (req, res) => {
        try {
            const rooms = await Room.find()
            res.status(200).json(rooms)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOne({ id: id })
                .populate('customer')
                .populate('amenities')
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOneAndUpdate({ id: id }, req.body, {
                new: true
            })
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOneAndDelete({ id: id })
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addCustomerForRoom: async (req, res) => {
        try {
            const roomId = Number(req.params.id)
            const customer = req.body.customer

            const room = await Room.findOne({ id: roomId })

            const customerExists = await Room.exists({ customer: customer })

            if (customerExists) {
                return res
                    .status(400)
                    .json({ error: 'CustomerId already exists' })
            }

            if (!room) {
                return res.status(404).json({ message: 'Room not found' })
            }

            room.customer = customer
            await room.save()

            res.status(200).json({
                message: 'Customer added to room successfully'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = roomControllers
