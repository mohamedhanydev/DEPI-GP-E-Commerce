import * as userService from "../services/userService.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ message: "retrieved users successfully", data: users });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    res.status(200).json({ message: "deleted user successfully", data: user });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const profile = async (req, res) => {
  try {
    const currentUser = await userService.getUserData(req.user.id);
    res
      .status(200)
      .json({ message: "retrieved user successfully", user: currentUser });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
