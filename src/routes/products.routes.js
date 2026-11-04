import { Router } from "express";
import { authenticateToken, requireRole } from "../middlewares/auth.middleware.js";
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
router.post("/create", authenticateToken, requireRole("admin"), createProduct);
router.put("/:id", authenticateToken, requireRole("admin"), updateProduct);
router.delete("/:id", authenticateToken, requireRole("admin"), deleteProduct);

export default router;
