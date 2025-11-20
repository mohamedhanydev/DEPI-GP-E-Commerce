const express = require("express");
const router = express.Router();

router.route("/").get(getCartItems).delete(deleteAllCartItems);

router.route("/items").post(addCartItem);
router
  .route("/items/:itemId")
  .patch(updateCartItemQuantity)
  .delete(deleteOneCartItem);
