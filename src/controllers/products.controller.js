import * as productsService from "../services/products.service.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productsService.findAll();
        res.json({
            success: true,
            data: products,
        });
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID del producto es requerido",
            });
        }

        const product = await productsService.findById(id);
        res.json({
            success: true,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req, res, next) => {
    try {
        const { nombre, precio } = req.body;

        if (!nombre || !precio) {
            return res.status(400).json({
                success: false,
                error: "Nombre y precio son requeridos",
            });
        }

        const newProduct = await productsService.create({ nombre, precio });

        res.status(201).json({
            success: true,
            data: newProduct,
        });
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, precio } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID del producto es requerido",
            });
        }

        if (!nombre || !precio) {
            return res.status(400).json({
                success: false,
                error: "Nombre y precio son requeridos",
            });
        }

        const updatedProduct = await productsService.update(id, {
            nombre,
            precio,
        });

        res.json({
            success: true,
            data: updatedProduct,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID del producto es requerido",
            });
        }

        await productsService.remove(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
