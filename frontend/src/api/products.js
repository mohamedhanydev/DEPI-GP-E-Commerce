// frontend/src/api/products.js

const API_BASE_URL = "http://localhost:3600/api";

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch products");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
