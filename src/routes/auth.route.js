const AuthController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");
const router = require("express").Router();

router.route("/signup").post(AuthController.register);
router.route("/login").post(AuthController.login);
router.route("/logout").get(auth, AuthController.logout);

module.exports = router;
