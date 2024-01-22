const Register = require('../models/Register');
const mongoose = require('mongoose');

const registerControllers = {
  createUser: async (req, res) => {
    try {
      const newUser = new Register({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        email: req.body.email,
        address: req.body.address,
        phonenumber: req.body.phonenumber
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};

module.exports = registerControllers;
