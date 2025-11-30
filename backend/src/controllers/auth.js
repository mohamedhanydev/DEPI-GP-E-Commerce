const authService = require("../services/auth");

const registerUser = async (req, res) => {
  try {
    const newUser = await authService.registerUser(req.body);
    res.status(201).send({ status: "OK", data: newUser });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.status(200).send({ status: "OK", data: token });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
