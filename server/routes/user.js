const express = require("express");
const { register } = require("../controller/auth");
const passport = require("passport");
const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
});

router.post("/register", register);

module.exports = {
  userRouter: router,
};