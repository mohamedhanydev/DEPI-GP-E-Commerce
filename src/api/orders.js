import api from "./api";

export const fetchAllOrders = async () => {
  try {
    const response = await api.get("/orders");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching orders:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const getOrder = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching order with id ${id}:`, error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};
