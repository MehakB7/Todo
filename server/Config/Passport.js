const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../modals/user");

const customField = {
  usernameField: "email",
  passwordField: "password",
};

const verifiy = async (email, password, done) => {
  console.log("email", email, password);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      done(null, false);
    }

    if (user) {
      const isSame = bcrypt.compare(password, user.password);
      if (isSame) {
        done(null, user);
      } else {
        done(null, false);
      }
    }
  } catch (e) {
    done(null, false);
  }
};

const strategy = new LocalStrategy(customField, verifiy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});

module.exports = {
  strategy,
};
