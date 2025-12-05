import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    if (response.data.credentials.token) {
      localStorage.setItem("token", response.data.credentials.token);
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error.response ? error.response.data : error.message);
    throw error.response ? new Error(error.response.data.message) : error;
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
