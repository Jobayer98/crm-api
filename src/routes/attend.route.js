const router = require("express").Router();
const AttendController = require("../controllers/attend.controller");
const isLoggedIn = require("../middlewares/auth.middleware");

router.route("/in-time").post(isLoggedIn, AttendController.entryTime);
// router.route("/out-time").patch(isLoggedIn, AttendController.exitTime);
module.exports = router;
