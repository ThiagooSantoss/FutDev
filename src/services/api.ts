import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token 1064b3e9cd8c8b4a60a105eb3180858d7de1dd6f",
  },
});
