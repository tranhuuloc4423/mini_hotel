const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
    {
        roomId: {
            type: Number,
            unique: true
        },
        roomName: {
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
        isOccupied: {
            type: Boolean,
            default: false
        },
        occupants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer'
            }
        ]
    },
    { timestamps: true }
)

roomSchema.pre('save', async function (next) {
    const room = this
    const Room = mongoose.model('Room')
    if (!room.roomId) {
        const lastRoom = await Room.findOne({}, {}, { sort: { roomId: -1 } })
        room.roomId = lastRoom ? lastRoom.roomId + 1 : 1
    }
    next()
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
