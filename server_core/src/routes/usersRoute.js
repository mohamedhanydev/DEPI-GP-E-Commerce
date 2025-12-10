import express from "express";
const router = express.Router();
import {
  getAllUsers,
  profile,
  deleteUser,
} from "../controllers/usersController.js";
import auth from "../middlwares/authMiddleware.js";
import adminAuth from "../middlwares/adminAuthMiddleware.js";

router.get("/", auth, adminAuth, getAllUsers);
router.get("/me", auth, profile);
router.delete("/:id", auth, adminAuth, deleteUser);
// router.put("/me", userController.updateUserData);
export default router;
