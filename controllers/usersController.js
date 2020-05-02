// const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/user");

module.exports = {
  create: function (req, res) {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      isStudent: req.body.isStudent,
    });

    User.addUser(newUser, (err, user) => {
      if (err) {
        res.json({ success: false, msg: "Failed to register user" });
      } else {
        res.json({ success: true, msg: "User registered successfully" });
      }
    });
  },
  authentication: function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: "User not found" });
      }

      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 604800,
          });
          res.json({
            success: true,
            token: "bearer " + token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
            },
          });
        } else {
          return res.json({ success: false, msg: "Wrong Password" });
        }
      });
    });
  },
  profile: function (req, res) {
    res.json({ user: req.user });
  },
};
