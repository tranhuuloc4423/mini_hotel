const Invoice = require('../models/Invoice')
const Amenities = require('../models/Amenities')

const invoiceControllers = {
    createInvoice: async (req, res) => {
        try {
            const { time, room, customer, electricity, water, other, total } = req.body;

            // Calculate electricity values
            const electricityOld = electricity.old;
            const electricityNew = electricity.new;
            const electricityUse = electricityNew - electricityOld;
            const electricityPrice = await Amenities.findOne({ name: 'Electricity' }).select('price');
            const electricityTotal = electricityUse * electricityPrice;

            // Calculate water values
            const waterOld = water.old;
            const waterNew = water.new;
            const waterUse = waterNew - waterOld;
            const waterPrice = await Amenities.findOne({ name: 'Water' }).select('price');
            const waterTotal = waterUse * waterPrice;

            // Calculate other values
            const otherUpdated = await Promise.all(
                other.map(async (item) => {
                    const amenity = await Amenities.findOne({ name: item.name });
                    const quantity = item.quantity;
                    const total = quantity * amenity.price;
                    return { ...item, quantity, total };
                })
            );

            // Calculate total value
            const finalTotal = electricityTotal + waterTotal;

            // Create new invoice
            const newInvoice = new Invoice({
                time,
                room,
                customer,
                electricity: { old: electricityOld, new: electricityNew, use: electricityUse, total: electricityTotal },
                water: { old: waterOld, new: waterNew, use: waterUse, total: waterTotal },
                other: otherUpdated,
                total: finalTotal
            });

            const invoice = await newInvoice.save();
            return res.status(200).json(invoice);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    getAllInvoices: async (req, res) => {
        try {
            const invoices = await Invoice.find()
            res.status(200).json(invoices)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getInvoiceById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const invoice = await Invoice.findOne({ id: id })
            res.status(200).json(invoice)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    updateInvoiceById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const invoice = await Invoice.findOneAndUpdate(
                { id: id },
                req.body,
                { new: true }
            )
            res.status(200).json(invoice)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteInvoiceById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const invoice = await Invoice.findOneAndDelete({ id: id })
            res.status(200).json(invoice)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = invoiceControllers
