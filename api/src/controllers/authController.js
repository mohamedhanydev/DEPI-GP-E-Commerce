const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { username, email, password, role = "user" } = req.body;
    if (!email || !username || !password)
      return res
        .status(400)
        .json({ message: "missing email or username or password or role" });
    const registerUser = await authService.register({
      username,
      email,
      password,
      role,
    });
    res.status(200).json({ message: "registeration done!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email | !password)
      return res
        .status(400)
        .json({ message: "missing email or username or password or role" });
    const credentials = await authService.login({
      email,
      password,
    });
    res.status(200).json({ message: "login done!", credentials });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
