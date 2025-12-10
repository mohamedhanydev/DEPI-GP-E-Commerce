const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
  createOneProduct,
} = require("../controllers/productsController");
const auth = require("../middlwares/authMiddleware");
const adminAuth = require("../middlwares/adminAuthMiddleware");

// retrieve all products (accessible to all, or just authenticated users, for now all)
router.get("/", getAllProducts);
// create new product (admin only)
router.post("/", auth, adminAuth, createOneProduct);
// retrieve one product (accessible to all)
router.get("/:id", getOneProduct);
// update one product (admin only)
router.patch("/:id", auth, adminAuth, updateOneProduct);
// delete one product (admin only)
router.delete("/:id", auth, adminAuth, deleteOneProduct);
module.exports = router;
