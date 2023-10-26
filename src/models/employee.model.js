const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  LastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    country: String,
    postalCode: String,
  },
  designation: {
    type: String,
    trim: true,
    required: true,
  },
  department: {
    type: String,
    trim: true,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Employee", employeeSchema);
