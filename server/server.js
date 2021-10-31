// Imports
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const rootDir = require("./helpers/path.helper");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Route Imports
const authRouter = require("./routes/auth.routes");
const homeRouter = require("./routes/home.routes");
const profileRouter = require("./routes/profile.routes");
const accountRouter = require("./routes/account.routes");
const reviewRouter = require("./routes/review.routes");

// Dotenv
require("dotenv").config({ path: path.join(rootDir, "secure", ".env") });

// Port
const PORT = process.env.PORT || 5000;

// Initialize App
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

// view engine
app.set('view engine', 'ejs');

// Database connection & app start
mongoose.connect(process.env.dbURI)
  .then(result => {
    console.log("connected to MongoDB Atlas");
    app.listen(PORT, () => console.log("server running on port", PORT));
  })
  .catch(err => console.log(err));

// Routes
app.use(authRouter);

app.use(profileRouter);

app.use(accountRouter);

app.use(reviewRouter);

app.use(homeRouter);

// 404 page
app.use((req, res) => res.status(404).json({ message: "Page not found" }));