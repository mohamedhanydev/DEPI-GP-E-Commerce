const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router
  .route("/")
  .post(cartController.addItemToCart)
  .get(cartController.getAllCartItems)
  .delete(cartController.deleteAllCartItems);

router.route("/:itemId").delete(cartController.deleteOneCartItem);
module.exports = router;
