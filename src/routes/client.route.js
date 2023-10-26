const ClientController = require("../controllers/client.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const customRole = require("../middlewares/customeRole.middleware");

const router = require("express").Router();

router
  .route("/add-client")
  .post(isLoggedIn, customRole("admin"), ClientController.addclient);
router
  .route("/get-clients")
  .get(isLoggedIn, customRole("admin"), ClientController.getclients);
router
  .route("/get-client/:id")
  .get(isLoggedIn, customRole("admin"), ClientController.getclient)
  .patch(isLoggedIn, customRole("admin"), ClientController.updateclient)
  .delete(isLoggedIn, customRole("admin"), ClientController.deleteclient);

module.exports = router;
