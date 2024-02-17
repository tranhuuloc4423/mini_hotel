const Room = require('../models/Room')
const Customer = require('../models/Customer')

const mongoose = require('mongoose')

const roomControllers = {
    createRoom: async (req, res) => {
        try {
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
            const roomId = parseInt(req.params.roomId); 
            const customerId = parseInt(req.params.customerId); 

            const room = await Room.findOne({ id: roomId }); 
            if (!room) {
                return res.status(404).json({ message: 'Room not found' });
            }

            const customer = await Customer.findOne({ id: customerId }); 
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            room.customer = customerId; 
            await room.save(); 

            res.status(200).json({ message: 'Customer added to room successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = roomControllers
