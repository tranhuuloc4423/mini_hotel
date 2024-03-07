const AnnualData = require('../models/AnnualData')
const Invoice = require('../models/Invoice')

const createAnnualData = async (req, res) => {
    const {
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
    } = req.body
    const annualData = new AnnualData({
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
    })

    try {
        const createdAnnualData = await annualData.save()
        res.status(201).json(createdAnnualData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getTotalRevenueByMonth = async (req, res) => {
    const { month } = req.params
    try {
        const annualData = await AnnualData.findOne()
        if (annualData) {
            const monthlyData = annualData[month.toLowerCase()]
            if (monthlyData) {
                const roomData = monthlyData.rooms

                let totalRevenue = 0
                for (const room of roomData) {
                    const invoices = await Invoice.find({
                        room: room._id,
                        time: month,
                        status: 'paid'
                    })
                    for (const invoice of invoices) {
                        totalRevenue += invoice.total
                    }
                }
                res.status(200).json({ totalRevenue })
            } else {
                res.status(404).json({
                    message: 'Không tìm thấy dữ liệu hàng tháng'
                })
            }
        } else {
            res.status(404).json({ message: 'Không tìm thấy dữ liệu hàng năm' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createAnnualData,
    getTotalRevenueByMonth
}

// const data = {
//     january: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     },
//     february: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     },
//     march: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     }
// }

// pass data
// khi hoá đơn đã thanh toán
// const data = {
//   month: "1",
//   invoice: {
//     id,room, customer,(water, electricity (old,new,use,total)), others, total
//   }
// }

// expected data
// const data = [
//   // từng tháng
//   {
//     month: 1,
//     data: {
//       revenue: "2131",
//       invoices: [
//         {
//           "Từng hoá đơn y chang invoice model",
//           "Khi truyền hoá đơn vô thì cập nhật revenue bằng cách lặp qua các hoá đơn lấy total",
//         },
//         {

//         },
//         {

//         }
//       ]
//     }
//   },
//   {
//     month: "2",
//     invoices: [
//       {
//         "Từng hoá đơn y chang invoice model",
//         "Khi truyền hoá đơn vô thì cập nhật revenue bằng cách lặp qua các hoá đơn lấy total",
//       },
//       {},
//       {}
//     ]
//   }
// ]
