import axios from 'axios';
import 'dotenv/config';
import auth from '../config/authAPI';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJkMGM5OGY0ZjUxZjE2ZjUyYzc5YiIsImlhdCI6MTU3NTIyNTExNywiZXhwIjoxNTc1ODI5OTE3fQ.aFuj5u5MKnHiMNEuxcJqWNXFVjWMxbm4hAlMblteeaI`,
  },
});

export default api;
