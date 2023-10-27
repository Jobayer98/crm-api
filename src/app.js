const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

//internal middleware
const authRouter = require("./routes/auth.route");
const employeeRouter = require("./routes/employee.route");
const clientRouter = require("./routes/client.route");
const projectRouter = require("./routes/project.route");
const attendRouter = require("./routes/attend.route");
const expenseRouter = require("./routes/expense.route");
const quotationRouter = require("./routes/quotation.route");

const app = express();

// middlerware
app.use(express.json(), cookieParser(), morgan("tiny"), cors());

// routes middleware
app.use("/api/v1", authRouter);
app.use("/api/v1", employeeRouter);
app.use("/api/v1", clientRouter);
app.use("/api/v1", projectRouter);
app.use("/api/v1", quotationRouter);
app.use("/api/v1", expenseRouter);
app.use("/api/v1", attendRouter);

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
