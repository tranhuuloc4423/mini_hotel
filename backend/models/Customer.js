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
        type: Date, // Note
        required: true
      },
      idCard: {
        type: Number,
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
      },
      address: {
        type: String,
        required: true,
        maxLength: 100
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
            type: Date,
            required: true
        },
        idCard: {
            type: Number,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            maxLength: 10
        }
      }]
  },
  { timestamps: true }
);

customerSchema.pre('save', async function (next) {
    const customer = this
    const Customer = mongoose.model('Customer')
    if (!customer.customerId) {
        const lastCustomer = await Customer.findOne(
            {},
            {},
            { sort: { customerId: -1 } }
        )
        customer.customerId = lastCustomer ? lastCustomer.customerId + 1 : 1
    }
    next()
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
