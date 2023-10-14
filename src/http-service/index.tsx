import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp =(data:object)=> api.post("/api/send-otp", data);
export const verifyOtp =(data:object) => api.post("/api/verify-otp", data);
export default api;