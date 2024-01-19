require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const Room = require('./models/Room');

//const apiRoutes = require('./routes/index');

//app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/room', (req, res) => {
  Room.find({}).select({
    roomName: 1,
    price: 1

  }).exec((err, rooms) => {
      if(err) {
          response.json({
          result: "failed",
          data: [],
          message: 'Error'
})
      } else {
          response.json({
            result: 'oke',
            data: rooms,
            message: "Success"
          }) }
})})

// app.get('/api/room', (req, res) => {
//   Room.find({"a":"b"}, (err, rooms) => {
//     if (err) {
//       console.log("Error:", err);
//       res.status(500).send("An error occurred");
//     } else {
//       res.send(JSON.stringify(rooms));
//     }
//   });
// });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log("Database connected!"))
.catch(err => console.log("Database connection error:", err));