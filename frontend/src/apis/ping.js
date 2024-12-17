import axios from "../config/axiosConfig.js";

export const pingApi = async () => {
  try {
    const response = await axios.get("/api/v1/ping");
    console.log("api response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
