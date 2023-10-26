const customError = require("../utils/customError");

class AuthController {
  // register handler
  static register(req, res, next) {
    try {
      const { name, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return next(new customError("Passwords do not match", 400));
      }

      res.status(201).json({
        message: "Successfully registered",
        data: { name, email, password },
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = AuthController;
