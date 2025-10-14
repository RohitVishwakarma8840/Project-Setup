// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api", 
//   headers: {
//     "Content-Type": "application/json",
//   },
});

//  attach token automatically 
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); //  localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//  handle expired token globally
axiosInstance.interceptors.response.use(
  (response) => {
    if(response.status==200 || response.status==201){
      toast.success("Action Successful");
    }
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Redirecting to login...");
      toast.error("Something Went wrong ");
      // e.g., window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
