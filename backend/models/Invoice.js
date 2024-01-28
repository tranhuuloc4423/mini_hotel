const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceId: {
    type: Number,
    unique: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    require: true
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    require: true
  },
  amount: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  invoiceDate: {
    type: Date,
    default: Date.now
  }
});

invoiceSchema.pre('save', async function (next) {
  const invoice = this;
  const Invoice = mongoose.model('Invoice');
  if (!invoice.invoiceId) {
      const lastInvoice = await Invoice.findOne({}, {}, { sort: { invoiceId: -1 } });
      invoice.invoiceId = lastInvoice ? lastInvoice.invoiceId + 1 : 1;
  }
  next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;