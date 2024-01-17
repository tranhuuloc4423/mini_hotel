const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
    unique: true
  },
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  cardTitle: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isOccupied: {
    type: Boolean,
    default: false
  },
  occupants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;