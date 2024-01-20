const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            default: 0,
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
)

module.exports = mongoose.model('Customer', customerSchema)
