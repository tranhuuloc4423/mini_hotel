const mongoose = require('mongoose')

const amenitiesSchema = new mongoose.Schema(
    {
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
        },
        mandatory: {
            type: Boolean
        },
        IsInUse: { // XÁC ĐỊNH XEM AMENITY CÓ ĐANG ĐƯỢC SỬ DỤNG HAY KHÔNG
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

amenitiesSchema.pre('save', async function (next) {
    const amenity = this
    const Amenities = mongoose.model('Amenities')
    if (!amenity.id) {
        const lastAmenity = await Amenities.findOne(
            {},
            {},
            { sort: { id: -1 } }
        )
        amenity.id = lastAmenity ? lastAmenity.id + 1 : 1
    }
    next()
})

const Amenities = mongoose.model('Amenities', amenitiesSchema)

// Amenities.findOneAndUpdate(
//     { name: 'Water' },
//     { mandatory: true },
//     { upsert: true },
//     (err) => {
//         if (err) {
//             console.error(
//                 'Error setting default mandatory value for Water:',
//                 err
//             )
//         }
//     }
// )

// Amenities.findOneAndUpdate(
//     { name: 'Electricity' },
//     { mandatory: true },
//     { upsert: true },
//     (err) => {
//         if (err) {
//             console.error(
//                 'Error setting default mandatory value for Electricity:',
//                 err
//             )
//         }
//     }
// )

module.exports = Amenities
