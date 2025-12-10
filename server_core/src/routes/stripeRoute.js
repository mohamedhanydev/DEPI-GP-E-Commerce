import express from "express";
const router = express.Router();
import { createCheckoutSession } from "../controllers/stripeController.js";
import authMiddleware from "../middlwares/authMiddleware.js";

router.post(
  "/create-checkout-session",
  authMiddleware,
  createCheckoutSession
);

export default router;
