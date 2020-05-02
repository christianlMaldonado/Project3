const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const passport = require("passport");

router.route("/register").post(controller.create);

router.route("/auth").post(controller.authentication);

// router.route("/profile").get(passport.authenticate("jwt", { session: false }), controller.profile);

module.exports = router;
