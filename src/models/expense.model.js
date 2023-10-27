const { Schema, model } = require("mongoose");

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    amounts: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Expense", expenseSchema);
