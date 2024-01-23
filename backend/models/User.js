const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        fullname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        email: {
            type: String,
            required: true,
            maxLength: 30
        },
        address: {
            type: String,
            maxLength: 100
        },
        phonenumber: {
            type: String,
            maxLength: 10
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    const user = this
    const User = mongoose.model('User')
    if (!user.id) {
        const lastUser = await User.findOne({}, {}, { sort: { id: -1 } })
        user.id = lastUser ? lastUser.id + 1 : 1
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
