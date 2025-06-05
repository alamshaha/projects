import axios from 'axios';

// Set up Axios to send credentials with requests (cookies for Sanctum)
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your Laravel backend URL
  withCredentials: true, // Ensure cookies are sent
});

export default axiosInstance;