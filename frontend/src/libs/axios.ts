import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (localStorage.getItem("token"))
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});