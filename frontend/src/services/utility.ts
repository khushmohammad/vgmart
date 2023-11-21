import { vegetables } from "@/types/typeGroup";
import axios from "axios";
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_SERVICE_PATH}`;
export const getItems = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

export const addItem = async (data: vegetables) => {
  const item = {
    ...data,
  };
  try {
    const response = await axios.post("/vegetables", item);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
