import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
import { getLaunchParams } from "@lib/vk";
export const api = axios.create({
  baseURL,
  withCredentials: true,
});



api.interceptors.request.use(async (config) => {
  const vkParams = await getLaunchParams();

  config.params = {
    ...(config.params || {}),
    launchParams: vkParams,
  };

  return config;
});