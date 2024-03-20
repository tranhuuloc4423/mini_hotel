const Room = require('../models/Room')
const Customer = require('../models/Customer')

const roomControllers = {
    createRoom: async (req, res) => {
        try {
            const newRoom = new Room({
                roomname: req.body.roomname,
                price: req.body.price,
                capacity: req.body.capacity,
                image: req.body.image
            })
            const room = await newRoom.save()
            res.status(200).json(room)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getAllRooms: async (req, res) => {
        try {
            const rooms = await Room.find()
            res.status(200).json(rooms)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOne({ id: id })
                .populate('customer')
                .populate('amenities')
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOneAndUpdate({ id: id }, req.body, {
                new: true
            })
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteRoomById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const room = await Room.findOneAndDelete({ id: id })
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addCustomerForRoom: async (req, res) => {
        try {
            const roomId = Number(req.params.id)
            const customer = req.body.customer

            const room = await Room.findOne({ id: roomId })

            const customerExists = await Room.exists({ customer: customer })

            if (customerExists) {
                return res
                    .status(400)
                    .json({ error: 'CustomerId already exists' })
            }

            if (!room) {
                return res.status(404).json({ message: 'Room not found' })
            }

            room.customer = customer
            room.hasInvoice = false
            await room.save()

            res.status(200).json({
                message: 'Customer added to room successfully'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    updateRoomOccupiedStatus: async (req, res) => {
        const roomId = req.params.id; // Lấy roomId từ request
    
        try {
            const room = await Room.findOne({id : id }); // Tìm phòng theo id
    
            if (!room) {
                return res.status(404).json({ message: 'Phòng không tồn tại' });
            }
    
            room.occupied = true; // Đánh dấu phòng đã được sử dụng
            await room.save();
    
            res.status(200).json({ message: 'Cập nhật trạng thái phòng thành công' });
        } catch (error) {
            res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật trạng thái phòng', error: error.message });
        }
    },
    updateRoomNotOccupiedStatus: async (req, res) => {
        const roomId = req.params.id; // Lấy roomId từ request
    
        try {
            const room = await Room.findOne({id : id }); // Tìm phòng theo id
    
            if (!room) {
                return res.status(404).json({ message: 'Phòng không tồn tại' });
            }
    
            room.occupied = false; // Đánh dấu phòng chưa được sử dụng
            await room.save();
    
            res.status(200).json({ message: 'Cập nhật trạng thái phòng thành công' });
        } catch (error) {
            res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật trạng thái phòng', error: error.message });
        }
    },
    updateRoomNotHasInvoiceStatus: async (req, res) => {
        const id = req.params.id; // Lấy id từ request 
    
        try {
            const room = await Room.findOne({ id: id }); // Tìm phòng theo id
    
            if (!room) {
                return res.status(404).json({ message: 'Phòng không tồn tại' });
            }
    
            room.hasInvoice = false; // Đánh dấu phòng chưa có hóa đơn
            await room.save(); 
    
            res.status(200).json({ message: 'Cập nhật trạng thái hóa đơn phòng thành công' });
        } catch (error) {
            res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật trạng thái hóa đơn phòng', error: error.message });
        }
    }
}

module.exports = roomControllers
