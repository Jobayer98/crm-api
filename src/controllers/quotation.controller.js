const quotationModel = require("../models/quotation.model");
const customError = require("../utils/customError");

class QuotationController {
  // add a new quotation
  static async addQuotation(req, res, next) {
    try {
      const quotation = await quotationModel.create({ ...req.body });

      if (!quotation) {
        return next(new customError("Failed to add quotation"), 400);
      }

      res.status(201).json({
        message: "Successfully added quotation",
        data: quotation,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
  // get all quotations
  static async getQuotations(req, res, next) {
    try {
      const quotation = await quotationModel
        .find()
        .select("projectName budget duration");

      if (!quotation) {
        return next(new customError("quotations not found"), 404);
      }

      res.status(200).json({
        message: "Successfully fetched quotation",
        data: quotation,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // get all quotation information
  static async getQuotationInfo(req, res, next) {
    try {
      const { id } = req.params;
      const quotation = await quotationModel.findById(id);

      if (!quotation) {
        return next(new customError("quotation not found"), 404);
      }

      res.status(200).json({
        message: "Successfully fetched quotation",
        data: quotation,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // update quotation details
  static async updateQuotation(req, res, next) {
    try {
      const { id } = req.params;
      const quotation = await quotationModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!quotation) {
        return next(new customError("quotation not found", 404));
      }

      return res.status(200).json({
        message: "Successfully updated quotation",
        data: quotation,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // delete quotation
  static async deleteQuotation(req, res, next) {
    try {
      const { id } = req.params;
      const quotation = await quotationModel.findByIdAndDelete(id);

      if (!quotation) {
        return next(new customError("quotation not found", 404));
      }

      return res.status(200).json({
        message: "Successfully deleted quotation",
        data: quotation,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = QuotationController;
