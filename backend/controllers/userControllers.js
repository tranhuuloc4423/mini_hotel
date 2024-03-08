const User = require('../models/User');

const userController = {
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { fullname, email, address, phonenumber } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        { id },
        { fullname, email, address, phonenumber },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Người dùng không tồn tại' });
      }

      res.json({ message: 'Thông tin người dùng đã được cập nhật', data: user });
    } catch (error) {
      res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật thông tin người dùng' });
    }
  },
  
  changePassword: async (req, res) => {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
  
    try {
      const user = await User.findOne({ id });
  
      if (!user) {
        return res.status(404).json({ message: 'Người dùng không tồn tại' });
      }
  
      if (user.password !== currentPassword) {
        return res.status(400).json({ message: 'Mật khẩu hiện tại không chính xác' });
      }
  
      user.password = newPassword;
      await user.save();
  
      res.json({ message: 'Mật khẩu đã được thay đổi' });
    } catch (error) {
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thay đổi mật khẩu' });
    }
  }
}
  
  module.exports = userController