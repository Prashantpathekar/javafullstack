import axios from "axios";
// 🔗 Backend base URL
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // (optional, future cookies ke liye)
});

// 🔐 REQUEST INTERCEPTOR → JWT auto add
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 RESPONSE INTERCEPTOR → 401 handle
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
