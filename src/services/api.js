import axios from 'axios';
import 'dotenv/config';
import auth from '../config/authAPI';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNWQxOGFiMzBlNjU2MzJiZGY1NDlkYyIsImlhdCI6MTU4MzE3ODk0MSwiZXhwIjoxNTgzNzgzNzQxfQ.uVWINEMM17nHU1eeMQyTkESnff4AEy_2uPWkjztmB3Y`,
  },
});

export default api;
