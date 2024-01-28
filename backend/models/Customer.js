const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
      customerId: {
          type: Number,
          unique: true
      },
      fullName: {
        type: String,
        required: true
      },
      sex: {
        type: String,
        enum: ['Male', 'Female'], 
        required: true
      },
      dob: {
        type: Date, // "YYYY-MM-DD"
        required: true
      },
      idCard: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      amenities: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        calUnit: {
            type: String,
            required: true
        },
        isUse: {
            type: Boolean,
            default: false
        }
      }],
      members: [{
        fullName: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            enum: ['Male', 'Female'],
            required: true
        },
        dob: {
            type: Date, // "YYYY-MM-DD"
            required: true
        },
        idCard: {
            type: Number,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
        }
      }]
  },
  { timestamps: true }
);

customerSchema.pre('save', async function (next) {
  const customer = this;
  const Customer = mongoose.model('Customer');
  if (!customer.customerId) {
      const lastCustomer = await Customer.findOne({}, {}, { sort: { customerId: -1 } });
      customer.customerId = lastCustomer ? lastCustomer.customerId + 1 : 1;
  }
  next();
});

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
