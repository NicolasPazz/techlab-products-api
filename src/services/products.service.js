import * as productsModel from "../models/products.model.js";

export const findAll = async () => {
    return await productsModel.findAll();
};

export const findById = async (id) => {
    return await productsModel.findById(id);
};

export const create = async (productData) => {
    return await productsModel.create(productData);
};

export const update = async (id, productData) => {
    return await productsModel.update(id, productData);
};

export const remove = async (id) => {
    return await productsModel.remove(id);
};
