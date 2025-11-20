const products = require("../database/products");
const getAllProducts = async () => {
  try {
    const allProducts = await products.getAllProducts();
    return allProducts;
  } catch (error) {
    throw error;
  }
};
const getOneProduct = async (productId) => {
  try {
    const oneProduct = await products.getOneProduct(productId);
    return oneProduct;
  } catch (error) {
    throw error;
  }
};
const createNewProduct = async (productData) => {
  try {
    const newProduct = await products.createNewProduct(productData);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
const updateOneProduct = async (productId) => {
  try {
    const updatedProduct = await products.updateOneProduct(productId);
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};
const deleteOneProduct = async (productId) => {
  try {
    const deletedProduct = await products.deleteOneProduct(productId);
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
