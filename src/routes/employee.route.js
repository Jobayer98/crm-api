const EmployeeController = require("../controllers/employee.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-employee")
  .post(isLoggedIn, customRole("admin"), EmployeeController.addEmployee);
router
  .route("/get-employees")
  .get(isLoggedIn, customRole("admin"), EmployeeController.getEmployees);
router
  .route("/get-employees/:id")
  .get(isLoggedIn, customRole("admin"), EmployeeController.getEmployee)
  .patch(isLoggedIn, customRole("admin"), EmployeeController.updateEmployee)
  .delete(isLoggedIn, customRole("admin"), EmployeeController.deleteEmployee);

module.exports = router;
