const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

//internal middleware
const authRouter = require("./routes/auth.route");

const app = express();

// middlerware
app.use(express.json(), cookieParser(), morgan("tiny"), cors());

// routes middleware
app.use("/api/v1", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// error handler

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
  });
});

module.exports = app;
