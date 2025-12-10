import api from "./api";

export const fetchAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await api.post("/products", productData);
    return response.data.data;
  } catch (error) {
    console.error("Error creating product:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await api.patch(`/products/${id}`, productData);
    return response.data.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};
