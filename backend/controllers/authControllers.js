const User = require('../models/User')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')

const authController = {
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                res.status(500).json('Wrong username!')
            } else {
                const validPassword = await bcrypt.compare(
                    req.body.password,
                    user.password
                )
                if (!validPassword) {
                    res.status(500).json('Wrong password!')
                }
                if (user && validPassword) {
                    res.cookie('accessToken', 'BOARDING_HOUSE', {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    // res.redirect('/home')
                    res.status(200).json(user)
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // create user
            const newUser = await new User({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                address: req.body.address,
                phonenumber: req.body.phonenumber,
                password: hashed
            })

            console.log(newUser)

            // save to db
            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    },
    logoutUser: async (req, res) => {
        try {
            // Thực hiện các bước để đăng xuất người dùng
            // Ví dụ: Xóa thông tin đăng nhập khỏi session hoặc token hết hạn

            // Xóa thông tin đăng nhập khỏi session (nếu sử dụng session)
            req.session.destroy()

            // Hoặc hủy token (nếu sử dụng token)
            // Ví dụ: blacklist token, thiết lập thời gian hết hạn token, v.v.

            // Gửi phản hồi
            res.status(200).json('Logout successful')
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = authController
