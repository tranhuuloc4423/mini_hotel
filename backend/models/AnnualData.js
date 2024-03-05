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
  rooms: []
});
  
const AnnualDataSchema = new mongoose.Schema({
    january: MonthlyDataSchema,
    february: MonthlyDataSchema,
    march: MonthlyDataSchema,
    april: MonthlyDataSchema,
    may: MonthlyDataSchema,
    june: MonthlyDataSchema,
    july: MonthlyDataSchema,
    august: MonthlyDataSchema,
    september: MonthlyDataSchema,
    october: MonthlyDataSchema,
    november: MonthlyDataSchema,
    december: MonthlyDataSchema
    }, { timestamps: true }
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
