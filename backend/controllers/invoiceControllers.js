const Invoice = require('../models/Invoice')
const Amenities = require('../models/Amenities')

const invoiceControllers = {
    createInvoice: async (req, res) => {
        try {
            const { time, room, customer, electricity, water, others } =
                req.body

            // Calculate electricity values
            const electricityOld = Number(electricity.old)
            const electricityNew = Number(electricity.new)
            const electricityUse = Number(electricityNew - electricityOld)
            const electricityPrice = await Amenities.findOne({
                name: 'Electricity'
            })
            const electricityTotal = Number(
                electricityUse * electricityPrice.price
            )

            // Calculate water values
            const waterOld = Number(water.old)
            const waterNew = Number(water.new)
            const waterUse = Number(waterNew - waterOld)
            const waterPrice = await Amenities.findOne({ name: 'Water' })
            const waterTotal = Number(waterUse * waterPrice.price)

            // Calculate other values
            const othersUpdated = await Promise.all(
                others?.map(async (item) => {
                    const amenity = await Amenities.findOne({ name: item.name })
                    const quantity = Number(item.quantity)
                    const price = Number(amenity.price)
                    const otherTotal = Number(quantity * price)
                    return { ...item, quantity, otherTotal }
                })
            )

            const otherTotal = othersUpdated.reduce(
                (sum, item) => sum + item.otherTotal,
                0
            )
            const roomPrice = Number(room.price)

            // Calculate total value
            const finalTotal = Number(
                roomPrice + electricityTotal + waterTotal + otherTotal
            )

            // Create new invoice
            const newInvoice = new Invoice({
                time: time,
                room: { ...room },
                customer: customer,
                electricity: {
                    old: electricityOld,
                    new: electricityNew,
                    use: electricityUse,
                    total: electricityTotal
                },
                water: {
                    old: waterOld,
                    new: waterNew,
                    use: waterUse,
                    total: waterTotal
                },
                others: othersUpdated,
                total: finalTotal
            })

            const invoice = await newInvoice.save()
            return res.status(200).json(invoice)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
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

// {
//     "time": "09/02/2024",
//     "room": {
//       "name": "room2",
//       "price": "500"
//     },
//     "customer": "roku",
//     "electricity": {
//       "old": "12",
//       "new": "22"
//     },
//     "water": {
//       "old": "12",
//       "new": "22"
//     },
//     "other":
//     [
//       {
//         "name": "Parking",
//         "quantity": "1"
//       },
//       {
//         "name": "Wifi",
//         "quantity": "1"
//       }
//     ]
//   }
