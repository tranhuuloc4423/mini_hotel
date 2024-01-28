const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
      customerId: {
        type: Number,
        unique: true
      },
      fullname: {
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
      idcard: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phonenumber: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true,
      },
      amenities: [{
        amenityId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Amenities'
        }
      }],
      members: [{
        fullname: {
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
        idcard: {
            type: Number,
            required: true
        },
        phonenumber: {
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
