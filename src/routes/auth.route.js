const AuthController = require("../controllers/auth.controller");
const router = require("express").Router();

router.route("/login").get(AuthController.login);
router.route("/signup").post(AuthController.register);

module.exports = router;
