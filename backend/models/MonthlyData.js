const mongoose = require('mongoose');

const MonthlyDataSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        time: {
            month: {
                type: Number,
            },
            year: {
                type: Number, 
            }
        },
        rooms: [{
            amenities: []
        }]
    },
    { timestamps: true }
)

amenitiesSchema.pre('save', async function (next) {
    const data = this;
    const MonthlyData = mongoose.model('MonthlyData');
    if (!data.id) {
        const lastData = await MonthlyData.findOne({},{},{ sort: { id: -1 } })
        data.id = lastData ? lastData.id + 1 : 1
    }
    next();
});

const MonthlyData = mongoose.model('MonthlyData', MonthlyDataSchema);

module.exports = MonthlyData;
