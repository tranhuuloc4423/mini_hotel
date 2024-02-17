const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        roomname: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        occupied: {
            type: Boolean,
            default: false
        },
        image: {
            data: Buffer,
            contentType: String
        },
        customer: {
            type: Number
        }
    },
    { timestamps: true }
)

roomSchema.pre('save', async function (next) {
    const room = this
    const Room = mongoose.model('Room')
    if (!room.id) {
        const lastRoom = await Room.findOne({}, {}, { sort: { id: -1 } })
        room.id = lastRoom ? lastRoom.id + 1 : 1
    }
    next()
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
