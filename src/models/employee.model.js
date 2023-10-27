const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, "Password must be at least 6 characters"],
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
  role: {
    type: String,
    lowercase: true,
    default: "employee",
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
    // required: true,
  },
  department: {
    type: String,
    trim: true,
    // required: true,
  },
  salary: {
    type: Number,
    // required: true,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

// Hash password
employeeSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = await bcrypt.hash(user.password, 10);

  next();
});

// // Compare password
employeeSchema.methods.comparePassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

// Hide user credentials
employeeSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Generate JWT
employeeSchema.methods.generateJWT = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "3hr",
  });

  return token;
};

module.exports = model("Employee", employeeSchema);
