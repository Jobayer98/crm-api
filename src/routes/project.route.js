const ProjectController = require("../controllers/project.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-project")
  .post(isLoggedIn, customRole("admin"), ProjectController.addNewProject);
router
  .route("/get-projects")
  .get(isLoggedIn, customRole("admin"), ProjectController.getProjects);
router
  .route("/get-project/:id")
  .get(isLoggedIn, customRole("admin"), ProjectController.getProjectInfo)
  .patch(isLoggedIn, customRole("admin"), ProjectController.updateProject)
  .delete(isLoggedIn, customRole("admin"), ProjectController.deleteProject);

module.exports = router;
