import axios from "axios";
//import { useNavigate } from "react-router";
export const uploadClient = axios.create({
  baseURL: "http://localhost:3000", // Backend API URL
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});
export const axiosClient = axios.create({
  baseURL: "http://localhost:3000", // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // HTTP-Only cookies'in gönderilmesini sağlar
});
