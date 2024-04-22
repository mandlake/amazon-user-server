import axios from "axios";
import { parseCookies } from "nookies";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = parseCookies().accessToken;
    console.log("axios interceptors success");

    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer${accessToken}`;

    return config;
  },
  (error) => {
    console.log("axios interceptors error : ");
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use((response) => {
  if (response.status === 404) {
    console.log("axios interceptors error 404");
  }
  return response;
});

export default instance;
