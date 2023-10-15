import axios from "axios";
import { getOriginalNode } from "typescript";

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
export const activate = (data: object) => api.post("/api/activate", data);
export const logout = () => api.post("/api/logout");
//interceptors
/**
 * The sit bw every req and resp in frontend
 */

//config has info about he response and little about req too.
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalReq = error.config;
    if (error.response.status === 401 && originalReq && !originalReq._isRetry) {
      // so to prevent endless loop. it the access token expires and refresh token aslo it will keep on retrying, hence what we do is once retry, if again 401 then error.config.isretry will be false.and this will end
      originalReq.isRetry = true;
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
          withCredentials: true,
        });

        //now after creating new tokens we again call the failed req.

        return api.request(originalReq);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }
);

export default api;
