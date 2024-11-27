
// Axios
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseToken = AsyncStorage.getItem("firebaseToken");
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const axiosApi = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${firebaseToken}`,
  },
});

export const axiosError = (error: any, path: string, errorMessage: string) => {
  if (error.response) {
    return error.response.data;
  }
  return {
    error: {
      message: error.message,
      path: path,
      type: "Unexpected error",
      statusCode: error.statusCode,
      friendlyMsg: {
        title: "Error",
        message: errorMessage,
      },
    },
  };
};

axiosApi.interceptors.request.use(async (config) => {
  return config;
});