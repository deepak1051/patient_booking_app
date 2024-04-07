import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://patient-booking-node-api.onrender.com',
  baseURL: 'https://patient-booking-node-api.onrender.com',
});
