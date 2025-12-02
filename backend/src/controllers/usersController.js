const userService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!email || !username || !password || !role)
      return res
        .status(400)
        .json({ message: "missing email or username or password or role" });
    const registerUser = await userService.register({
      username,
      email,
      password,
      role,
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!email || !username || !password || !role)
      return res
        .status(400)
        .json({ message: "missing email or username or password or role" });
    const loginUser = await userService.login({
      email,
      password,
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
