import axios from 'axios';

const apiClient = axios.create({
//   baseURL: 'http://localhost:5000', 
     baseURL: 'https://matchesbackend.onrender.com'
});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;