const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookie = require('cookie-parser')

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
    console.log('CONNECTED TO MONGODB')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
