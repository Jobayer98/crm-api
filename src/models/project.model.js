const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  projectName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Project", projectSchema);
