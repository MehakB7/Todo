const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 7,
  },
  firstName: {
    type: String,
    require: true,
    min: 2,
    max: 30,
  },
  lastName: {
    type: String,
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = {
  User,
};
