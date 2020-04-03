import axios from 'axios';
import 'dotenv/config';
import auth from '../config/authAPI';

import { monthData } from './monthActual';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer ${monthData.authorization}`,
  },
});

export default api;
