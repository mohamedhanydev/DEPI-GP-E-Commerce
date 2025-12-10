const express = require("express");
const router = express.Router();
const stripeController = require("../controllers/stripeController");
const authMiddleware = require("../middlwares/authMiddleware");

router.post(
  "/create-checkout-session",
  authMiddleware,
  stripeController.createCheckoutSession
);

module.exports = router;
