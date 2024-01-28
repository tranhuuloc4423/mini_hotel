const Room = require('../models/Room');
const mongoose = require('mongoose');


const roomControllers = {
  createRoom: async (req, res) => {
    try {
      const newRoom = new Room({
        roomName: req.body.roomName,
        price: req.body.price,
        capacity: req.body.capacity,
        customerId: req.body.customerId
      });
      const room = await newRoom.save();
      res.status(200).json(room);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getRoomById: async (req, res) => {
    try {
      const roomId = parseInt(req.params.id);
      const room = await Room.findOne({ roomId: roomId }).populate('customerId');
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateRoomById: async (req, res) => {
    try {
      const roomId = parseInt(req.params.id);
      const room = await Room.findOneAndUpdate({ roomId: roomId }, req.body, { new: true });
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  
  deleteRoomById: async (req, res) => {
    try {
      const roomId = parseInt(req.params.id);
      const room = await Room.findOneAndDelete({ roomId: roomId });
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },  
  getCustomerByRoomId: async (req, res) => {
    try {
      const roomId = parseInt(req.params.id);

      const room = await Room.findOne({ roomId: roomId });

      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }

      const customerIds = room.customerId;

      if (!customerIds || customerIds.length === 0) {
        return res.status(404).json({ message: "No customers found in the room" });
      }

      const customers = await Customer.find({ customerId: { $in: customerIds } });

      res.status(200).json(customers);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = roomControllers;