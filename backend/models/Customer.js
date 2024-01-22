const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 30
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      maxLength: 10
    }
  },
  { timestamps: true }
);

customerSchema.pre('save', async function (next) {
  const customer = this;
  const Customer = mongoose.model('Customer');
  if (!customer.customerId) {
    const lastCustomer = await Customer.findOne({}, {}, { sort: { 'customerId': -1 } });
    customer.customerId = lastCustomer ? lastCustomer.customerId + 1 : 1;
  }
  next();
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;