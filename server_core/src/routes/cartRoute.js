import express from "express";
const router = express.Router();
import {
  addItemToCart,
  getAllCartItems,
  deleteAllCartItems,
  deleteOneCartItem,
  increaseItemInCart,
  decreaseItemInCart,
} from "../controllers/cartController.js";

router
  .route("/")
  .post(addItemToCart)
  .get(getAllCartItems)
  .delete(deleteAllCartItems);

router.route("/:productId").delete(deleteOneCartItem);
router.route("/increase/:productId").put(increaseItemInCart);
router.route("/decrease/:productId").delete(decreaseItemInCart);
export default router;
