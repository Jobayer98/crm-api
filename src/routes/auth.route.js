const AuthController = require("../controllers/auth.controller");
const isLoggedIn = require("../middlewares/auth.middleware");
const router = require("express").Router();

router.route("/signup").post(AuthController.register);
router.route("/login").post(AuthController.login);
router.route("/logout").get(isLoggedIn, AuthController.logout);

module.exports = router;
