const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
router
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createNewProduct);
router
  .get("/:productId")
  .get(productsController.getOneProduct)
  .patch(productsController.updateOneProduct)
  .delete(productsController.deleteOneProduct);
