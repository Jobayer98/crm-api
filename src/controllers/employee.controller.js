const customError = require("../utils/customError");
const employeeModel = require("../models/employee.model");

class EmployeeController {
  static async addEmployee(req, res, next) {
    try {
      const employee = await employeeModel.create({
        ...req.body,
      });

      if (!employee) {
        return next(new customError("Failed to add employee", 400));
      }

      return res.status(201).json({
        message: "Successfully added employee",
        data: employee,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async getEmployees(req, res, next) {
    try {
      const employees = await employeeModel
        .find()
        .select("firstName email designation department joined");

      if (!employees) {
        return next(new customError("No employees found", 404));
      }

      return res.status(200).json({
        message: "Successfully fetched employees",
        data: employees,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async getEmployee(req, res, next) {
    try {
      const { id } = req.params;

      const employee = await employeeModel.findById(id);

      if (!employee) {
        return next(new customError("Employee not found", 404));
      }

      return res.status(200).json({
        message: "Successfully fetched employee",
        data: employee,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async updateEmployee(req, res, next) {
    try {
      const { id } = req.params;
      const employee = await employeeModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!employee) {
        return next(new customError("Employee not found", 404));
      }

      return res.status(200).json({
        message: "Successfully updated employee",
        data: employee,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async deleteEmployee(req, res, next) {
    try {
      const { id } = req.params;

      const employee = await employeeModel.findByIdAndDelete(id);

      if (!employee) {
        return next(new customError("Employee not found", 404));
      }

      return res.status(200).json({
        message: "Successfully deleted employee",
        data: employee,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = EmployeeController;
