const mongoose = require('mongoose');

const amenitiesUsageSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    amenity: {

    },
    room: {

    },
    oldIndex: {
        type: Number,
    },
    newIndex: {
        type: Number,
    },
    type: {
        type: String,
        enum: ['Per month', 'Per year', 'Per people'], 
        required: true
    },
    amount: {
        type: Number,
    },

}, { timestamps: true });

roomSchema.pre('save', async function (next) {
    const amenitiesUsageSchema = this;
    const AmenitiesUsage = mongoose.model('AmenitiesUsage');
    if (!amenitiesUsageSchema.id) {
        const lastAmenitiesUsage = await AmenitiesUsage.findOne({}, {}, { sort: { id: -1 } });
        amenitiesUsageSchema.id = lastAmenitiesUsage ? lastAmenitiesUsage.id + 1 : 1;
    }
    next();
});

const AmenitiesUsage = mongoose.model('AmenitiesUsage', amenitiesUsageSchema);

module.exports = AmenitiesUsage;
