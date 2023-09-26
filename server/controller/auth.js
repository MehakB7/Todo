const { User } = require("../modals/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { firstName, email, password, lastName } = req.body;

  if (!firstName || !email || !password) {
    res.status(400).json({ message: " Please provide all the fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already present" });
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
      });

      const save = newUser.save();
      res.status(201).json(save);
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

const whoami = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.user.id },
      { email: 1, firstName: 1, lastName: 1 }
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  register,
  whoami,
};
