import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://baby-taxi.xyz/api/',
});

axiosInstance.interceptors.request.use(config => {

  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
