const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}

const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ServiceError("User already exists", 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (credentials) => {
  try {
    const { email, password } = credentials;
    const user = await User.findOne({ email });
    if (!user) {
      throw new ServiceError("Invalid credentials", 401);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ServiceError("Invalid credentials", 401);
    }
    const payload = {
      id: user.id,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  loginUser,
};
