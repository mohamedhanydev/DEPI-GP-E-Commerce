class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}
const Product = require("../models/Product");
const getAllProducts = async (query) => {
  try {
    let filter = {};
    if (query.category) {
      filter.category = query.category;
    }
    if (query.search) {
      filter.name = { $regex: query.search, $options: "i" };
    }

    let sort = {};
    if (query.sort) {
      if (query.sort === "price_asc") {
        sort.newPrice = 1;
      } else if (query.sort === "price_desc") {
        sort.newPrice = -1;
      }
    }

    const allProducts = await Product.find(filter).sort(sort);
    return allProducts;
  } catch (error) {
    throw error;
  }
};
const getOneProduct = async (id) => {
  try {
    const oneProduct = await Product.findById(id);
    if (!oneProduct) {
      throw new ServiceError(`Product with ID '${id}' not found.`, 404);
    }
    return oneProduct;
  } catch (error) {
    throw error;
  }
};
const createOneProduct = async (data) => {
  try {
    const newProduct = await Product.create(data);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
const updateOneProduct = async (id, changes) => {
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
    const updatedProduct = await Product.findByIdAndUpdate(id, changes, {
      new: true,
    });
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
const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
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
module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
