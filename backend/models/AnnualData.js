const mongoose = require('mongoose')

const MonthlyDataSchema = new mongoose.Schema({
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
  

const AnnualData = mongoose.model('AnnualData', AnnualDataSchema)

module.exports = AnnualData
