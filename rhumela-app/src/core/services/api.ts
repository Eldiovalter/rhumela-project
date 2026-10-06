import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL ||
  (__DEV__ ? "http://localhost:3333/api" : undefined);

if (!baseURL) {
  throw new Error("EXPO_PUBLIC_API_URL is required in production.");
}

export const api = axios.create({
  baseURL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});
