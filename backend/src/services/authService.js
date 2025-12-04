class ServiceError extends Error {
  constructor(message, status = 500, originalError = null) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
    this.originalError = originalError;
  }
}
const User = require("../models/User");
const { generateToken } = require("./jwtService");
const { hashPassword, comparePassword } = require("./hashService");
const register = async (userData) => {
  try {
    const { username, email, password, role } = userData;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) throw new ServiceError("user already exists", 400);
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
  } catch (error) {
    throw new ServiceError(
      error.message || "Registeration failed",
      error.status,
      error.originalError
    );
  }
};

const login = async (userData) => {
  try {
    const { email, password } = userData;
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new ServiceError("invalid email or password", 400);
    const checkPassword = await comparePassword(
      password,
      existingUser.password
    );
    if (!checkPassword)
      throw new ServiceError("invalid email or password", 400);
    const token = generateToken({
      id: existingUser._id,
      email: existingUser.email,
    });
    return token;
  } catch (error) {
    throw new ServiceError(
      error.message || "Login failed",
      error.status,
      error
    );
  }
};

module.exports = {
  register,
  login,
};
