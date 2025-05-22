// src/services/authService.js
import apiClient from './apiClient';

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    if (response.data && response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user)); 
    }
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
