const mongoose = require('mongoose')

const Monthly_DataSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        time: {
            month: {
                type: Number
            },
            year: {
                type: Number
            }
        },
        rooms: [ 
            {
                amenities: []
            }
        ]
    },
    { timestamps: true }
)

Monthly_DataSchema.pre('save', async function (next) {
    const data = this
    const Monthly_Data = mongoose.model('Monthly_Data')
    if (!data.id) {
        const lastData = await Monthly_Data.findOne({}, {}, { sort: { id: -1 } })
        data.id = lastData ? lastData.id + 1 : 1
    }
    next()
})

const Monthly_Data = mongoose.model('Monthly_Data', Monthly_DataSchema)

module.exports = Monthly_Data
