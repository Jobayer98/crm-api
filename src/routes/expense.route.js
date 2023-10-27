const ExpenseController = require("../controllers/expense.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-expense")
  .post(isLoggedIn, customRole("admin"), ExpenseController.addExpense);
router
  .route("/expenses")
  .get(isLoggedIn, customRole("admin"), ExpenseController.getExpenses);
router
  .route("/expenses/:id")
  .patch(isLoggedIn, customRole("admin"), ExpenseController.updateExpense)
  .delete(isLoggedIn, customRole("admin"), ExpenseController.deleteExpense);

module.exports = router;
