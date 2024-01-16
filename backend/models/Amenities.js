const mongoose = require('mongoose');

const amenitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Amenities = mongoose.model('Amenities', amenitiesSchema);

module.exports = Amenities;