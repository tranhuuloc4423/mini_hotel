const mongoose = require('mongoose')

const amenitiesSchema = new mongoose.Schema(
    {
        amenityId: {
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
        }
    },
    { timestamps: true }
);

amenitiesSchema.pre('save', async function (next) {
    const amenity = this
    const Amenities = mongoose.model('Amenities')
    if (!amenity.amenityId) {
        const lastAmenity = await Amenities.findOne({},{},{ sort: { amenityId: -1 } })
        amenity.amenityId = lastAmenity ? lastAmenity.amenityId + 1 : 1
    }
    next()
})

const Amenities = mongoose.model('Amenities', amenitiesSchema)

module.exports = Amenities
