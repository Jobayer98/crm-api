const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
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
  cost: {
    type: Number,
  },
  duration: {
    type: Date,
  },
});

module.exports = model("Project", projectSchema);
