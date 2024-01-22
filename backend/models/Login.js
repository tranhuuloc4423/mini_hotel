const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
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
    }
  },
  { timestamps: true }
);

loginSchema.pre('save', async function (next) {
  const login = this;
  const Login = mongoose.model('Login'); 
  if (!login.id) {
    const lastUser = await Login.findOne({}, {}, { sort: { 'id': -1 } });
    login.id = lastUser ? lastUser.id + 1 : 1;
  }
  next();
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;