require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Server is up and running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_PATH, {
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

