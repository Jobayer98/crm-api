const ExpenseController = require("../controllers/expense.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-expese")
  .post(isLoggedIn, customRole("admin"), ExpenseController.addExpense);
router
  .route("/get-expenses")
  .get(isLoggedIn, customRole("admin"), ExpenseController.getExpenses);
router
  .route("/update-expense/:id")
  .patch(isLoggedIn, customRole("admin"), ExpenseController.updateExpense)
  .delete(isLoggedIn, customRole("admin"), ExpenseController.deleteExpense);

module.exports = router;
