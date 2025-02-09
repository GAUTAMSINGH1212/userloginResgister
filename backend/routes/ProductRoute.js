import express from "express";
import uploadimage from "../multer/multerConfig.js";

import {
  addcreateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/ProductControllers.js";

const router = express.Router();
router.post("/add", uploadimage.single("image"), addcreateProduct);
// router.post("/add", addcreateProduct);
router.get("/", getAllProducts);
router.post("/:id", getProductById);
router.post("/update/:id", updateProduct);
router.post("/delete/:id", deleteProduct);

export default router;
