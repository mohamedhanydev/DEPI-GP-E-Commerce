import express from "express";
const router = express.Router();
import {
  getAllOrders,
  getOrderById,
  createOrder,
  createOrderFromSession,
} from "../controllers/ordersController.js";
import authMiddleware from "../middlwares/authMiddleware.js";
import adminAuth from "../middlwares/adminAuthMiddleware.js";

router.get("/", authMiddleware, adminAuth, getAllOrders);
router.get("/:id", authMiddleware, adminAuth, getOrderById);
router.post("/", authMiddleware, createOrder);
router.post(
  "/create-order-from-session",
  authMiddleware,
  createOrderFromSession
);

export default router;
