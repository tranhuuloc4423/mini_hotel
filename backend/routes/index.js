const express = require('express');
const router = express.Router();

router.get('/room', (req, res) => {
  // Xử lý logic để lấy danh sách khách hàng từ cơ sở dữ liệu
  // ...
  // Gửi danh sách khách hàng dưới dạng JSON về client
  res.json();
});

router.post('/customers', (req, res) => {
  // Xử lý logic để tạo mới khách hàng trong cơ sở dữ liệu
  // ...
  // Gửi thông báo thành công về client
  res.json({ message: 'Customer created successfully' });
});

router.put('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  // Xử lý logic để cập nhật thông tin khách hàng với customerId trong cơ sở dữ liệu
  // ...
  // Gửi thông báo thành công về client
  res.json({ message: 'Customer updated successfully' });
});

router.delete('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  // Xử lý logic để xóa khách hàng với customerId trong cơ sở dữ liệu
  // ...
  // Gửi thông báo thành công về client
  res.json({ message: 'Customer deleted successfully' });
});

module.exports = router;