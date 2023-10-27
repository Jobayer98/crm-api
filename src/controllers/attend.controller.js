const attendModel = require("../models/attend.model");
const customError = require("../utils/customError");

class AttendController {
  static async entryTime(req, res, next) {
    try {
      const attend = await attendModel.create({
        employee: req.user._id,
        inTime: Date.now(),
      });

      res.status(201).json({
        message: "Success",
        attend,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  //   static async exitTime(req, res, next) {
  //     try {
  //       const exit = await attendModel.where({ employee: req.user_id });

  //       res.status(201).json({
  //         message: "Success",
  //         exit,
  //       });
  //     } catch (error) {
  //       return next(new customError(error.message, 400));
  //     }
  //   }
}

module.exports = AttendController;
