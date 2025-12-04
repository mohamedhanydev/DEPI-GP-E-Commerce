const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/me", userController.profile);
// router.put("/me", userController.updateUserData);
module.exports = router;
