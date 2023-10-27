const expenseModel = require("../models/expense.model");
const customError = require("../utils/customError");

class ExpenseController {
  static async addExpense(req, res, next) {
    try {
      const { title, amounts } = req.body;

      const expense = await expenseModel.create({ title, amounts });

      if (!expense) {
        return next(new customError("Failed to add expense", 400));
      }

      res.status(201).json({
        message: "Successfully added expense",
        expense,
      });
    } catch (error) {
      return next(new customError(error.message));
    }
  }

  static async getExpenses(req, res, next) {
    try {
      const expense = await expenseModel.find();

      if (!expense) {
        return next(new customError("Expense not found", 404));
      }

      res.status(200).json({
        message: "Successfully fetched expense",
        data: expense,
      });
    } catch (error) {
      return next(new customError(error.message));
    }
  }

  static async updateExpense(req, res, next) {
    try {
      const { id } = req.params;
      const expense = await expenseModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!expense) {
        return next(new customError("Expense not found", 404));
      }

      res.status(200).json({
        message: "Successfully updated expense",
        data: expense,
      });
    } catch (error) {
      return next(new customError(error.message));
    }
  }

  static async deleteExpense(req, res, next) {
    try {
      const { id } = req.params;
      const expense = await expenseModel.findByIdAndDelete(id);

      if (!expense) {
        return next(new customError("Expense not found", 404));
      }

      res.status(200).json({
        message: "Successfully deleted expense",
        data: expense,
      });
    } catch (error) {
      return next(new customError(error.message));
    }
  }
}

module.exports = ExpenseController;
