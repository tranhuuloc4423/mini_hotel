const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookie = require('cookie-parser')
const schedule = require('node-schedule')
const Room = require('./models/Room')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI
const appRoute = require('./routes/index')

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)
app.use(express.json())
app.use('/', appRoute)

app.get('/home', (req, res) => {
    const accessToken = req.cookies.accessToken
    if (!accessToken) {
        res.redirect('/login')
    }
})

mongoose.connect(MONGODB_URI, () => {
    const resetJob = schedule.scheduleJob('0 0 1 * *', function () {
        // Thực hiện việc reset trường "hasInvoice" tại đây.
        const currentMonth = new Date().getMonth() + 1 // Lấy tháng hiện tại.
        const currentYear = new Date().getFullYear() // Lấy năm hiện tại.
        const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1 // Xác định tháng tiếp theo.
        const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear // Xác định năm tiếp theo.

        Room.updateMany(
            { createdAt: { $lt: new Date(nextYear, nextMonth - 1) } },
            { $set: { hasInvoice: false } }
        )
            .then(() => {
                console.log('Reset trạng thái đã đóng tiền thành công.')
            })
            .catch((error) => {
                console.error('Lỗi khi reset trạng thái đã đóng tiền:', error)
            })
    })

    console.log('CONNECTED TO MONGODB')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
