const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const auth = require("../middlwares/authMiddleware");
const adminAuth = require("../middlwares/adminAuthMiddleware");

router.get("/", auth, adminAuth, userController.getAllUsers);
router.get("/me", auth, userController.profile);
router.delete("/:id", auth, adminAuth, userController.deleteUser);
// router.put("/me", userController.updateUserData);
module.exports = router;
