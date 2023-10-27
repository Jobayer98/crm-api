const projectModel = require("../models/project.model");
const customError = require("../utils/customError");

class ProjetController {
  // add a new project
  static async addNewProject(req, res, next) {
    try {
      const project = await projectModel.create({ ...req.body });

      if (!project) {
        return next(new customError("Failed to add project"), 400);
      }

      res.status(201).json({
        message: "Successfully added project",
        data: project,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
  // get all projects
  static async getProjects(req, res, next) {
    try {
      const project = await projectModel
        .find()
        .select("projectName budget duration");

      if (!project) {
        return next(new customError("Projects not found"), 404);
      }

      res.status(200).json({
        message: "Successfully fetched project",
        data: project,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // get all project information
  static async getProjectInfo(req, res, next) {
    try {
      const { id } = req.params;
      const project = await projectModel.findById(id);

      if (!project) {
        return next(new customError("Project not found"), 404);
      }

      res.status(200).json({
        message: "Successfully fetched project",
        data: project,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // update project details
  static async updateProject(req, res, next) {
    try {
      const { id } = req.params;
      const project = await projectModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!project) {
        return next(new customError("project not found", 404));
      }

      return res.status(200).json({
        message: "Successfully updated project",
        data: project,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }

  // delete project
  static async deleteProject(req, res, next) {
    try {
      const { id } = req.params;
      const project = await projectModel.findByIdAndDelete(id);

      if (!project) {
        return next(new customError("project not found", 404));
      }

      return res.status(200).json({
        message: "Successfully deleted project",
        data: project,
      });
    } catch (error) {
      return next(new customError(error.message, 400));
    }
  }
}

module.exports = ProjetController;
