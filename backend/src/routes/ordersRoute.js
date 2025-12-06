const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");
const authMiddleware = require("../middlwares/authMiddleware");

router.post("/", authMiddleware, ordersController.createOrder);
router.post(
  "/create-order-from-session",
  authMiddleware,
  ordersController.createOrderFromSession
);

module.exports = router;
