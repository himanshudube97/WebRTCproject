import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, //we do this as to send cookies with request and also to set the cookie in the client side. this has to be done in cors backend also.
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data: object) => api.post("/api/send-otp", data);
export const verifyOtp = (data: object) => api.post("/api/verify-otp", data);
export const activate = (data:object) => api.post("/api/activate", data);
export default api;
