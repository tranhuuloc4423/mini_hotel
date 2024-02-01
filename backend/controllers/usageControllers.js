const AmenitiesUsage = require('../models/AmenitiesUsage');
const mongoose = require('mongoose');

const usageControllers = {
  createUsage: async (req, res) => {
    try {
      const newUsage = new AmenitiesUsage({
        amenity: req.body.amenity,
        room: req.body.room,
        oldIndex: req.body.oldIndex,
        newIndex: req.body.newIndex,
        type: req.body.type,
        amount: req.body.amount
      });
      
      const usage = await newUsage.save();
      res.status(200).json(usage);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  getAllUsages: async (req, res) => {
    try {
      const usages = await AmenitiesUsage.find();
      res.status(200).json(usages);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  getUsageById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const usage = await AmenitiesUsage.findOne({ id: id });
      res.status(200).json(usage);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  updateUsageById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedUsage = await AmenitiesUsage.findOneAndUpdate({ id: id }, req.body, { new: true });
      res.status(200).json(updatedUsage);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  deleteUsageById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deletedUsage = await AmenitiesUsage.findOneAndDelete({ id: id });
      res.status(200).json(deletedUsage);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
};

module.exports = usageControllers;
