const customError = require("../utils/customError");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.access_token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new customError("Unauthorized user", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      return next(new customError("Unauthorized user", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new customError(error.message, 400));
  }
};

module.exports = auth;