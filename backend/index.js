const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

const customerRoute = require('./routes/customer')
const roomRoute = require('./routes/room')

app.use(cors())
app.use(express.json())
app.use('/customer', customerRoute)
app.use('/room', roomRoute)

mongoose.connect(MONGODB_URI, () => {
    console.log('CONNECTED TO MONGODB')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
