import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "127.0.0.1:3001/api"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
export default api;