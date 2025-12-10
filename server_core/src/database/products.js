import Product from '../models/Product.js';
import ServiceError from '../errors/ServiceError.js';

export const getAllProducts = async () => {
    try {
        const allProducts = await Product.find();
        return allProducts;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

export const getOneProduct = async (id) => {
    try {
        const oneProduct = await Product.findById(id);
        return oneProduct;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

export const createOneProduct = async (data) => {
    try {
        const newProduct = new Product(data);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

export const updateOneProduct = async (id, changes) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, changes, { new: true });
        return updatedProduct;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};

export const deleteOneProduct = async (id) => {
    try {
        const result = await Product.deleteOne({ _id: id });
        return result.deletedCount;
    } catch (error) {
        throw new ServiceError(error.message, 500);
    }
};