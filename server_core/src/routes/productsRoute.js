import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
  createOneProduct,
} from "../controllers/productsController.js";
import auth from "../middlwares/authMiddleware.js";
import adminAuth from "../middlwares/adminAuthMiddleware.js";

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
export default router;
