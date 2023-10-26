const customError = require("../utils/customError");
const User = require("../models/user.model");

class AuthController {
  // register handler
  static async register(req, res, next) {
    try {
      const { name, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return next(new customError("Passwords do not match", 400));
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      if (!user) {
        return next(new customError("Failed to register", 400));
      }

      const token = user.generateJWT();

      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res
        .status(201)
        .cookie("access_token", "Bearer " + token, options)
        .json({
          message: "Successfully registered",
          data: user,
          token,
        });
    } catch (error) {
      return next(new customError(error, 400));
    }
  }

  // login handler
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new customError("Please provide email and password", 400));
      }

      const user = await User.findOne({ email });

      if (!user) {
        return next(new customError("Invalid email or password", 400));
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return next(new customError("Invalid email or password", 400));
      }

      const token = user.generateJWT();

      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.clearCookie("access_token");
      res
        .status(200)
        .cookie("access_token", "Bearer " + token, options)
        .json({
          message: "Successfully logged in",
          data: user,
          token,
        });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = AuthController;
