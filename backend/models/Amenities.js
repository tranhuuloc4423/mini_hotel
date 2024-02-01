const mongoose = require('mongoose')

const amenitiesSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }},
    { timestamps: true }
);

amenitiesSchema.pre('save', async function (next) {
    const amenity = this
    const Amenities = mongoose.model('Amenities')
    if (!amenity.id) {
        const lastAmenity = await Amenities.findOne({},{},{ sort: { id: -1 } })
        amenity.id = lastAmenity ? lastAmenity.id + 1 : 1
    }
    next()
})

const Amenities = mongoose.model('Amenities', amenitiesSchema)

module.exports = Amenities
