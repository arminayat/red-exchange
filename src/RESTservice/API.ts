import { message } from "antd";
import axios from "axios";

export const BASE_URL = "https://v6.exchangerate-api.com";

const API_KEY = "9ae5a58ffff0451aa5f11ee4";
export const API_URL = BASE_URL + "/v6/" + API_KEY;

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

API.defaults.headers.post["Content-Type"] = "application/json";

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    message.error(
      error.response
        ? error.response.status + " : " + error.response.data.message
        : "Connection error"
    );
    return Promise.reject(error);
  }
);

export default API;
