const Amenities = require('../models/Amenities')

const amenityControllers = {
    createAmenity: async (req, res) => {
        try {
            const newAmenity = new Amenities({
                name: req.body.name,
                unit: req.body.unit,
                price: req.body.price,
                mandatory: req.body.mandatory ? true : false
            })
            const amenity = await newAmenity.save()
            res.status(200).json(amenity)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },

    getAllAmenities: async (req, res) => {
        try {
            const amenities = await Amenities.find()
            res.status(200).json(amenities)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getAmenityById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const amenity = await Amenities.findOne({ id: id })
            res.status(200).json(amenity)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    updateAmenityById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            // const amenityName = req.body.name;
            // if (amenityName === 'water' || amenityName === 'electricity' || amenityName === 'Water' || amenityName === 'Electricity') {
            //   return res.status(400).json({ error: "Cannot edit default amenities: Water and Electricity" });
            // }
            const amenity = await Amenities.findOneAndUpdate(
                { id: id },
                req.body,
                { new: true }
            )
            res.status(200).json(amenity)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteAmenityById: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const amenity = await Amenities.findOne({ id: id })
            if (amenity?.mandatory) {
                return res.status(400).json({
                    error: 'Cannot delete default amenities: Water and Electricity'
                })
            } else if (amenity.IsInUse) {
                return res.status(400).json({
                    error: 'Amenity was using!'
                })
            } else {
                const amenity = await Amenities.findOneAndDelete({ id: id })
                res.status(200).json(amenity)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAmenityInUseStatus: async (req, res) => {
        const id = req.params.id

        try {
            const amenity = await Amenity.findById(id) // Tìm amenity theo id

            if (!amenity) {
                return res
                    .status(404)
                    .json({ message: 'Tiện nghi không tồn tại' })
            }

            amenity.IsInUse = true // Đánh dấu amenity đang được sử dụng
            await amenity.save()

            res.status(200).json({
                message: 'Cập nhật trạng thái tiện nghi thành công'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Đã xảy ra lỗi khi cập nhật trạng thái tiện nghi',
                error: error.message
            })
        }
    },
    updateAmenityNotInUseStatus: async (req, res) => {
        const id = req.params.id // Lấy id từ request params

        try {
            const amenity = await Amenity.findById(id) // Tìm amenity theo id

            if (!amenity) {
                return res
                    .status(404)
                    .json({ message: 'Tiện nghi không tồn tại' })
            }

            amenity.IsInUse = false // Đánh dấu amenity không được sử dụng
            await amenity.save()

            res.status(200).json({
                message: 'Cập nhật trạng thái tiện nghi thành công'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Đã xảy ra lỗi khi cập nhật trạng thái tiện nghi',
                error: error.message
            })
        }
    }
}

module.exports = amenityControllers
