const express = require("express");
const router = express.Router();
const { createOrder, getOrders, getOrder } = require("../controllers/orders");
const { protect } = require("../middleware/auth");

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/:id", protect, getOrder);

module.exports = router;
