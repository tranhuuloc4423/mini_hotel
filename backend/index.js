require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send("Server is up and running"));

mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => console.log("Database connected!"))
.catch(err => console.log("Database connection corrupted",err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

