const { Schema, model } = require("mongoose");

const quotationSchema = new Schema({
  companyName: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    street: String,
    city: String,
    country: String,
    postalCode: String,
  },
  customerDetails: {
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
  },
  items: [
    {
      description: {
        type: String,
        trim: true,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Quotation", quotationSchema);
