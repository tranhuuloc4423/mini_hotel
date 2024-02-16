const Amenities = require('../models/Amenities');
const mongoose = require('mongoose');

const amenityControllers = {
  createAmenity: async (req, res) => {
    try {
      const newAmenity = new Amenities({
        name: req.body.name,
        unit: req.body.unit,
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
      const id = parseInt(req.params.id);
      const amenity = await Amenities.findOne({ id: id });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAmenityById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      // const amenityName = req.body.name;
      // if (amenityName === 'water' || amenityName === 'electricity' || amenityName === 'Water' || amenityName === 'Electricity') {
      //   return res.status(400).json({ error: "Cannot edit default amenities: Water and Electricity" });
      // }
      const amenity = await Amenities.findOneAndUpdate({ id: id }, req.body, { new: true });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteAmenityById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const amenityName = req.body.name;
      if (amenityName === 'water' || amenityName === 'electricity' || amenityName === 'Water' || amenityName === 'Electricity') {
        return res.status(400).json({ error: "Cannot delete default amenities: Water and Electricity" });
      }
      const amenity = await Amenities.findOneAndDelete({ id: id });
      res.status(200).json(amenity);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = amenityControllers;
