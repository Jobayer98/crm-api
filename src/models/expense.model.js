const { Schema, model } = require("mongoose");

const expenseSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  amounts: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Expense", expenseSchema);
