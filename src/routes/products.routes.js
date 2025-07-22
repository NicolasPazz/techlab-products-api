import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", authenticateToken, getAllProducts);
router.get("/:id", authenticateToken, getProductById);
router.post("/create", authenticateToken, createProduct);
router.put("/:id", authenticateToken, updateProduct);
router.delete("/:id", authenticateToken, deleteProduct);

export default router;
