import api from "./api";

export const fetchAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};
