// require("dotenv").config();

// const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const User = require('./models/userModel');
// const app = express();

// app.get("/", (req, res) => res.send("Server is up and running"));

// mongoose
//   .connect(process.env.MONGODB_PATH, {
//   })
//   .then(() => console.log("Database connected!"))
//   .catch(err => console.log("Database connection corrupted",err));


//   app.use(bodyParser.json());

//   app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
  
//       if (!user || user.password !== password) {
//         return res.status(401).json({ message: "Login failed" });
//       }
  
//       res.json({ message: "Successful login", user });
//     } catch (error) {
//       console.error("Sign-in errors", error);
//       res.status(500).json({ message: "Something went wrong" });
//     }
//   });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

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

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

