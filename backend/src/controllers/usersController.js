const userService = require("../services/auth");

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
    res
      .status(error.status || 500)
      .json({ message: `failed to create new user: ${error.message}` });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
