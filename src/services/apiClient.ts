import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export const handleServiceError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Axios error:", error.response?.data || error.message);
  } else if (error instanceof Error) {
    console.error("General error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
  throw error;
};

export default API;
