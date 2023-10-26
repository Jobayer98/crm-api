const clientModel = require("../models/client.model");
const customError = require("../utils/customError");

class ClientController {
  static async addclient(req, res, next) {
    try {
      const client = await clientModel.create({
        ...req.body,
      });

      if (!client) {
        return next(new customError("Failed to add client", 400));
      }

      return res.status(201).json({
        message: "Successfully added client",
        data: client,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async getclients(req, res, next) {
    try {
      const clients = await clientModel.find().select("firstName email phone");

      if (!clients) {
        return next(new customError("No clients found", 404));
      }

      return res.status(200).json({
        message: "Successfully fetched clients",
        data: clients,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async getclient(req, res, next) {
    try {
      const { id } = req.params;

      const client = await clientModel.findById(id);

      if (!client) {
        return next(new customError("client not found", 404));
      }

      return res.status(200).json({
        message: "Successfully fetched client",
        data: client,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async updateclient(req, res, next) {
    try {
      const { id } = req.params;
      const client = await clientModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!client) {
        return next(new customError("client not found", 404));
      }

      return res.status(200).json({
        message: "Successfully updated client",
        data: client,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  static async deleteclient(req, res, next) {
    try {
      const { id } = req.params;

      const client = await clientModel.findByIdAndDelete(id);

      if (!client) {
        return next(new customError("client not found", 404));
      }

      return res.status(200).json({
        message: "Successfully deleted client",
        data: client,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = ClientController;
