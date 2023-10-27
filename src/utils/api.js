import axios from 'axios';

const API_BASE_URL = 'https://sleep-tracker-api.onrender.com'; // Your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints

export const createUser = async (userData) => {
  try {
    const response = await api.post('/user/createUser', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addSleepData = async (sleepData) => {
  try {
    const response = await api.post('/sleep/addSleepData', sleepData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (username) => {
  try {
    const response = await api.get(`/user/getUserData/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
