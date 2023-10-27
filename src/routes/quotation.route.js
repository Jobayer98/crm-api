const QuotationController = require("../controllers/quotation.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-quotation")
  .post(isLoggedIn, customRole("admin"), QuotationController.addQuotation);
router
  .route("/get-quotations")
  .get(isLoggedIn, customRole("admin"), QuotationController.getQuotations);
router
  .route("/get-quotations/:id")
  .get(isLoggedIn, customRole("admin"), QuotationController.getQuotationInfo)
  .patch(isLoggedIn, customRole("admin"), QuotationController.updateQuotation)
  .delete(isLoggedIn, customRole("admin"), QuotationController.deleteQuotation);

module.exports = router;
