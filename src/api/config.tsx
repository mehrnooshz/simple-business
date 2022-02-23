import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jsonbin.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
