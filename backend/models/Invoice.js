const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    time: {
        day: {
            type: Number
        },
        month: {
            type: Number
        },
        year: {
            type: Number
        }
    },
    customer: {},
    amenities: [],
    room: {},
    amount: {
        type: Number,
        required: true
    }
    // invoiceDate: {
    //   type: Date,
    //   default: Date.now
    // }
})

invoiceSchema.pre('save', async function (next) {
    const invoice = this
    const Invoice = mongoose.model('Invoice')
    if (!invoice.id) {
        const lastInvoice = await Invoice.findOne({}, {}, { sort: { id: -1 } })
        invoice.id = lastInvoice ? lastInvoice.id + 1 : 1
    }
    next()
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice
