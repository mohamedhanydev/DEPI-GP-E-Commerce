const express = require("express");
const router = express.Router();
const {
  getCart,
  addOrUpdateCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cart");
const { protect } = require("../middleware/auth");

router.get("/", protect, getCart);
router.post("/", protect, addOrUpdateCart);
router.delete("/:productId", protect, removeFromCart);
router.delete("/", protect, clearCart);

module.exports = router;
