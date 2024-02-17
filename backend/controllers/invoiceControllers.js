const Invoice = require('../models/Invoice');
const mongoose = require('mongoose');

const invoiceControllers = {
  createInvoice: async (req, res) => {
    try {
      const newInvoice = new Invoice({
        customer: req.body.customer,
        room: req.body.room,
        amount: req.body.amount,
        time: {
          day: req.body.time.day,
          month: req.body.time.month,
          year: req.body.time.year
        },
        amenities: req.body.amenities 
      });
      const invoice = await newInvoice.save();
      res.status(200).json(invoice);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  getAllInvoices: async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.status(200).json(invoices);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getInvoiceById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const invoice = await Invoice.findOne({ id: id });
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateInvoiceById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const invoice = await Invoice.findOneAndUpdate({ id: id }, req.body, { new: true });
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteInvoiceById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const invoice = await Invoice.findOneAndDelete({ id: id });
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = invoiceControllers;
