const Customer = require('../models/Customer');

const customerControllers = {
  createCustomer: async (req, res) => {
    try {
      const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      });
      const customer = await newCustomer.save();
      res.status(200).json(customer);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCustomerById: async (req, res) => {
    try {
      const customerId = parseInt(req.params.id);
      const customer = await Customer.findOne({ customerId: customerId });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCustomerById: async (req, res) => {
    try {
      const customerId = parseInt(req.params.id);
      const customer = await Customer.findOneAndUpdate({ customerId: customerId }, req.body, { new: true });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCustomerById: async (req, res) => {
    try {
      const customerId = parseInt(req.params.id);
      const customer = await Customer.findOneAndDelete({ customerId: customerId });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = customerControllers;
