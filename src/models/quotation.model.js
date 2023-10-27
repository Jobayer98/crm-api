const { Schema, model } = require("mongoose");

const quotationSchema = new Schema({
  projectName: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  duration: {
    type: Date,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Quotation", quotationSchema);
