const AnnualData = require('../models/AnnualData')
const Invoice = require('../models/Invoice');

const annualDataController =  {
    createMonthlyData : async (req, res) => {
        try {
            const { month } = req.params;
            const paidInvoices = await Invoice.find({ time: month, status: 'paid' });
            const revenue = paidInvoices.reduce((totalRevenue, invoice) => totalRevenue + invoice.total, 0);
            const monthlyData = {
                month,
                revenue,
                invoices: paidInvoices
            };
        
            let annualData = await AnnualData.findOne();
            if (!annualData) {
              annualData = new AnnualData({
                data: [monthlyData]
              });
              await annualData.save();
              return res.status(201).json(annualData);
            }
    
            const existingMonthData = annualData.data.find(data => data.month === month);
            if (existingMonthData) {
              return res.status(400).json({ error: 'Dữ liệu theo tháng đã tồn tại' });
            }
    
            annualData.data.push(monthlyData);
            await annualData.save();
            return res.status(201).json(annualData);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Lỗi server' });
        }
    },
    
    getTotalRevenueByMonth: async (req, res) => {
        try {
            const { month } = req.params;
            const annualData = await AnnualData.findOne();
            if (!annualData) {
            return res.status(404).json({ error: 'Không tìm thấy dữ liệu theo năm' });
            }
            const monthlyData = annualData.data.find(data => data.month === month);
            if (!monthlyData) {
            return res.status(404).json({ error: 'Không tìm thấy dữ liệu theo tháng' });
            }
            return res.status(200).json(monthlyData);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Lỗi server' });
        }
    } 
};

module.exports = annualDataController

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
// }

// pass data
// khi hoá đơn đã thanh toán
// const data = {
//   month: "1",
//   invoice: {
//     id,room, customer,(water, electricity (old,new,use,total)), others, total
//   }
// }

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
// ]
