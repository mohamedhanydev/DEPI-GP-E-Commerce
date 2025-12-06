const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");
const authMiddleware = require("../middlwares/authMiddleware");
const adminAuth = require("../middlwares/adminAuthMiddleware");

router.get("/", authMiddleware, adminAuth, ordersController.getAllOrders);
router.get("/:id", authMiddleware, adminAuth, ordersController.getOrderById);
router.post("/", authMiddleware, ordersController.createOrder);
router.post(
  "/create-order-from-session",
  authMiddleware,
  ordersController.createOrderFromSession
);

module.exports = router;
