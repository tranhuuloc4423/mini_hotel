const mongoose = require('mongoose');

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
    }
}, { timestamps: true });

amenitiesSchema.pre('save', async function (next) {
    const amenity = this;
    const Amenities = mongoose.model('Amenities');
    if (!amenity.id) {
        try {
            const lastAmenity = await Amenities.findOne({}, {}, { sort: { id: -1 } });
            amenity.id = lastAmenity ? lastAmenity.id + 1 : 1;
        } catch (error) {
            console.error("Error while generating ID:", error);
            throw error;
        }
    }

    // Check if "Water" and "Electricity" exist
    const water = await Amenities.findOne({ name: 'Water' });
    const electricity = await Amenities.findOne({ name: 'Electricity' });

    // If they don't exist, add them
    if (!water) {
        await Amenities.create({ name: 'Water', unit: 'm3', price: 10000 });
    }
    if (!electricity) {
        await Amenities.create({ name: 'Electricity', unit: 'kWh', price: 2000 });
    }

    next();
});

const Amenities = mongoose.model('Amenities', amenitiesSchema);

module.exports = Amenities;
