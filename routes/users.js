const express = require("express");
const router = express.Router();
const controller = require("../controller/usersController");
const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const config = require("../config/database");
// const User = require("../models/user");

// // register route
// router.post("/register", (req, res, next) => {
//   let newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//     isStudent: req.body.isStudent,
//   });

//   User.addUser(newUser, (err, user) => {
//     if (err) {
//       res.json({ success: false, msg: "Failed to register user" });
//     } else {
//       res.json({ success: true, msg: "User registered successfully" });
//     }
//   });
// });

// // user authentication post route
// router.post("/auth", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   User.getUserByUsername(username, (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       return res.json({ success: false, msg: "User not found" });
//     }

//     User.comparePassword(password, user.password, (err, isMatch) => {
//       if (err) throw err;
//       if (isMatch) {
//         const token = jwt.sign(user.toJSON(), config.secret, {
//           expiresIn: 604800,
//         });
//         res.json({
//           success: true,
//           token: "bearer " + token,
//           user: {
//             id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email,
//           },
//         });
//       } else {
//         return res.json({ success: false, msg: "Wrong Password" });
//       }
//     });
//   });
// });

// router.get("/profile", passport.authenticate("jwt", { session: false }), (req, res, next) => {
//   res.json({ user: req.user });
// });

router.route("/register").post(controller.create);

router.route("/auth").post(controller.authentication);

router.route("/profile", passport.authenticate("jwt", { session: false })).get(controller.profile);

module.exports = router;
