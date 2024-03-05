const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    time: {
        type: String
    },
    room: {},
    customer: {},
    electricity: {},
    water: {},
    others: [],
    total: {
        type: Number
    },
    status: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending'
    }
});

invoiceSchema.pre('save', async function (next) {
    const invoice = this;
    const Invoice = mongoose.model('Invoice');
    if (!invoice.id) {
        const lastInvoice = await Invoice.findOne({}, {}, { sort: { id: -1 } });
        invoice.id = lastInvoice ? lastInvoice.id + 1 : 1;
    }
    next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;