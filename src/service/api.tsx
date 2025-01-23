import axios from "axios";

export const API_URL = process.env.EXPO_PUBLIC_API_URL;

const Api = axios.create({
  baseURL: API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const token = process.env.EXPO_PUBLIC_GITHUB_TOKEN; // Obtener el token desde .env
    if (token) {
      config.headers["Accept"] = `application/vnd.github+json`;
      config.headers["X-GitHub-Api-Version"] = `2022-11-28`;
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { Api };
