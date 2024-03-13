const mongoose = require('mongoose')

const MonthlyDataSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    revenue: {
        type: Number,
        required: true
    },
    invoices: []
})

const AnnualDataSchema = new mongoose.Schema(
    {
        annual_data: [
            {
                month: {
                    type: Number
                },
                monthly_data: MonthlyDataSchema
            }
        ]
    },
    { timestamps: true }
)

AnnualDataSchema.pre('save', async function (next) {
    const data = this
    const Data = mongoose.model('AnnualData')
    if (!data.id) {
        const lastData = await Data.findOne({}, {}, { sort: { id: -1 } })
        data.id = lastData ? lastData.id + 1 : 1
    }
    next()
})

const AnnualData = mongoose.model('AnnualData', AnnualDataSchema)

module.exports = AnnualData
