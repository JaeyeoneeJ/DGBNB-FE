import axios from "axios";

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_URL,
  // baseURL: "http://3.34.143.16/",
  baseURL: "http://13.209.21.117:3000",
  // baseURL: "http://52.78.244.135",
});