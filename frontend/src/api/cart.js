import api from "./api";

export const fetchCart = async () => {
  try {
    const response = await api.get("/cart");
    return response.data.data;
  } catch (error) {
    console.error(
      "Error fetching cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const addItemToCart = async (productId, quantity) => {
  try {
    const response = await api.post("/cart", { productId, quantity });
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error adding item to cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const removeItemFromCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/${productId}`);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error removing item from cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const clearCartAPI = async () => {
  try {
    const response = await api.delete("/cart");
    return response.data.data;
  } catch (error) {
    console.error(
      "Error clearing cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const increaseItemInCart = async (productId) => {
  try {
    const response = await api.put(`/cart/increase/${productId}`);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error increasing item in cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const decreaseItemInCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/decrease/${productId}`);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error decreasing item in cart:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? new Error(error.response.data.message) : error;
  }
};
