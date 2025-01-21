import axios from "axios";

export const API_URL = "https://api.github.com"
console.log(API_URL);
const Api = axios.create({
    baseURL: API_URL
});

export {
    Api
};