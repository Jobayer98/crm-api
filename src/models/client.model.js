const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
  },
  address: {
    street: String,
    city: String,
    country: String,
    postalCode: String,
  },
});

module.exports = model("Client", clientSchema);
