import axios from "axios";
const baseUrl = "http://localhost:5000";

const api = axios.create({
  baseURL: `${baseUrl}/api`, // Your backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to attach the token dynamically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
