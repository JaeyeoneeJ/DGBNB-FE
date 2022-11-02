import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://13.209.21.117:3000",
});