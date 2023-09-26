const express = require("express");
const { register, whoami } = require("../controller/auth");
const passport = require("passport");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
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

router.get("/whoami", auth, whoami);

module.exports = {
  userRouter: router,
};
