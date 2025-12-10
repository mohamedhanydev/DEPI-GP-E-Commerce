import ServiceError from "../errors/ServiceError.js";
import * as products from "../database/products.js";
export const getAllProducts = async () => {
  try {
    const allProducts = await products.getAllProducts();
    return allProducts;
  } catch (error) {
    throw error;
  }
};
export const getOneProduct = async (id) => {
  try {
    const oneProduct = await products.getOneProduct(id);
    if (!oneProduct) {
      throw new ServiceError(`Product with ID '${id}' not found.`, 404);
    }
    return oneProduct;
  } catch (error) {
    throw error;
  }
};
export const createOneProduct = async (data) => {
  try {
    const newProduct = await products.createOneProduct(data);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
export const updateOneProduct = async (id, changes) => {
  try {
    if (!id) {
      throw new ServiceError("Product ID is required for updating.", 400);
    }
    if (!changes || Object.keys(changes).length === 0) {
      throw new ServiceError("No update data provided.", 400);
    }
    const illegalKeys = ["_id", "id", "createdAt", "updatedAt"];
    const invalidChange = Object.keys(changes).find((key) =>
      illegalKeys.includes(key)
    );
    if (invalidChange) {
      throw new ServiceError(
        `Cannot update read-only field: '${invalidChange}'.`,
        400
      );
    }
    const updatedProduct = await products.updateOneProduct(id, changes);
    if (!updatedProduct) {
      throw new ServiceError(
        `Product with ID '${id}' not found for updating.`,
        404
      );
    }
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};
export const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await products.deleteOneProduct(id);
    if (deletedProduct === 0) {
      throw new ServiceError(
        `Product with ID '${id}' not found for deletion.`,
        404
      );
    }

    return { message: `Product with ID ${id} deleted successfully.` };
  } catch (error) {
    throw error;
  }
};
