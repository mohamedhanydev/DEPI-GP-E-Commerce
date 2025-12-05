const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .route("/")
  .post(cartController.addItemToCart)
  .get(cartController.getAllCartItems)
  .delete(cartController.deleteAllCartItems);

router.route("/:productId").delete(cartController.deleteOneCartItem);
router.route("/increase/:productId").put(cartController.increaseItemInCart);
router.route("/decrease/:productId").delete(cartController.decreaseItemInCart);
module.exports = router;
