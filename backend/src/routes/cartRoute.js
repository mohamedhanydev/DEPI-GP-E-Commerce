const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
router
  .route("/")
  .get(cartController.getAllCartItems)
  .delete(cartController.deleteAllCartItems);

router.route("/items").post(cartController.addCartItem);
router
  .route("/items/:itemId")
  .patch(cartController.updateCartItemQuantity)
  .delete(cartController.deleteOneCartItem);
