const Amenities = require('../models/Amenities');
const mongoose = require('mongoose');

const amenityControllers = {
  createAmenity: async (req, res) => {
    try {
      const newAmenity = new Amenities({
        name: req.body.name,
        calUnit: req.body.calUnit,
        price: req.body.price
      });
      const amenity = await newAmenity.save();
      res.status(200).json(amenity);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getAllAmenities: async (req, res) => {
    try {
      const amenities = await Amenities.find();
      res.status(200).json(amenities);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAmenityById: async (req, res) => {
    try {
      const amenityId = parseInt(req.params.id);
      const amenity = await Amenities.findOne({ amenityId: amenityId });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAmenityById: async (req, res) => {
    try {
      const amenityId = parseInt(req.params.id);
      const amenity = await Amenities.findOneAndUpdate({ amenityId: amenityId }, req.body, { new: true });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteAmenityById: async (req, res) => {
    try {
      const amenityId = parseInt(req.params.id);
      const amenity = await Amenities.findOneAndDelete({ amenityId: amenityId });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = amenityControllers;
