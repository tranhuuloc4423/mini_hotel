const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        fullname: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            required: true
        },
        dob: {
            type: String, // "YYYY-MM-DD"
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
            required: true
        },
        amenities: [],
        members: []
    },
    { timestamps: true }
)

customerSchema.pre('save', async function (next) {
    const customer = this
    const Customer = mongoose.model('Customer')
    if (!customer.id) {
        const lastCustomer = await Customer.findOne(
            {},
            {},
            { sort: { id: -1 } }
        )
        customer.id = lastCustomer ? lastCustomer.id + 1 : 1
    }
    next()
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
