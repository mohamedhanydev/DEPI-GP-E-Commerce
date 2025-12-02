class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}
const User = require("../models/User");
const { hashPassword, comparePassword } = require("./hashService");
const register = async (userData) => {
  try {
    const { username, email, password, role } = userData;
    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, email, hashedPassword, role });
    await newUser.save();
    res.json({ message: "User has been added succesfully", newUser });
  } catch (error) {
    throw new ServiceError("failed to create new user");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ message: "invalid email or password!" });
    const checkPassword = await comparePassword(
      password,
      existingUser.password
    );
    if (!checkPassword)
      res.status(400).json({ message: "invalid email or password!" });
    res.json({ message: "logged in succesfully", data: existingUser });
  } catch (error) {
    throw new ServiceError("failed to login");
  }
};

module.exports = {
  register,
  login,
};
