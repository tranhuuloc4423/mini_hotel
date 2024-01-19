const Customer = require('../models/Customer')

const customerControllers = {
    postCustomer: async (req, res) => {
        try {
            const newCustomer = await new Customer({
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber
            })
            const customer = await newCustomer.save()
            res.status(200).json(customer)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getAllCustomer: async (req, res) => {
        try {
            const customer = await Customer.find()
            res.status(200).json(customer)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = customerControllers
