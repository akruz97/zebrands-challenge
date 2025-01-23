import axios from "axios";

export const API_URL = "https://api.github.com"


const Api = axios.create({
    baseURL: API_URL
});
 
Api.interceptors.request.use(
    (config) => {
      // Agregar la cabecera deseada
      const token = process.env.EXPO_PUBLIC_GITHUB_TOKEN; // Obtén el token desde donde lo almacenes
      console.log('TOKEN GITHUB: ', token);
      if (token) {
        config.headers['Accept'] = `application/vnd.github+json`
        config.headers['X-GitHub-Api-Version'] = `2022-11-28`
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Manejo de errores de configuración
      return Promise.reject(error);
    }
  );

export {
    Api
};