const Customer = require('../models/Customer');

const customerControllers = {
  createCustomer: async (req, res) => {
    try {
      const newCustomer = new Customer({
        fullname: req.body.fullname,
        sex: req.body.sex,
        dob: req.body.dob,
        idcard: req.body.idcard,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        amenities: req.body.amenities,
        members: req.body.members
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

  getAmenityByCustomerId: async (req, res) => {
    try {
      const customerId = parseInt(req.params.id);

      const customer = await Customer.findOne({ customerId: customerId });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      const amenityIds = customer.amenityId;

      if (!amenityIds || amenityIds.length === 0) {
        return res.status(404).json({ message: "No amenity found in the customer" });
      }

      const amenities = await Amenity.find({ amenityId: { $in: amenityIds } });

      res.status(200).json(amenities);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = customerControllers;
