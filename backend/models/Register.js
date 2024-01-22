const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 16,
        minLength: 8
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 30
    },
    address: {
        type: String,
        required: true,
        maxLength: 100
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        maxLength: 10
    }
  },
  { timestamps: true }
);

regSchema.pre('save', async function (next) {
    const register = this;
    const Register = mongoose.model('Register'); 
    if (!register.id) {
      const lastUser = await Register.findOne({}, {}, { sort: { 'id': -1 } });
      register.id = lastUser ? lastUser.id + 1 : 1;
    }
    next();
  });

const Register = mongoose.model('Register', regSchema);

module.exports = Register;