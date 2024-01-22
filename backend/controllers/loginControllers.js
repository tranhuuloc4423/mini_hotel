const Login = require('../models/Login');
const mongoose = require('mongoose');

const loginControllers = {
  getUserById: async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await Login.findOne({ id: userId });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = loginControllers;
