import express from "express";
import {
    addcreateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/ProductControllers.js";

const router = express.Router();

router.post("/add", addcreateProduct);
router.post("/product", getAllProducts);
router.post("/:id", getProductById);
router.post("/update/:id", updateProduct);
router.post("/delete/:id", deleteProduct);

export default router;
