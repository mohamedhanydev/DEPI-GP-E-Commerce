const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
  createOneProduct,
} = require("../controllers/productsController");
// retrieve all products
router.get("/", getAllProducts);
// create new product
router.post("/", createOneProduct);
// retrieve one product
router.get("/:id", getOneProduct);
// update one product
router.patch("/:id", updateOneProduct);
// delete one product
router.delete("/:id", deleteOneProduct);
module.exports = router;
