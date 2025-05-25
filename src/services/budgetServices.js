// src/services/budgetService.js
import apiClient from './apiClient';

export const createBudget = async (budgetData) => {
  try {
    const response = await apiClient.post('/budgets', budgetData);
    return response.data; // Devuelve el presupuesto creado
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};

export const listBudgets = async () => {
  try {
    const response = await apiClient.get('/budgets');
    return response.data; // Devuelve array de presupuestos
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};

export const getBudgetById = async (budgetId) => {
  try {
    const response = await apiClient.get(`/budgets/${budgetId}`);
    return response.data; // Devuelve el presupuesto detallado
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};

export const deleteBudget = async (budgetId) => {
  try {
    const response = await apiClient.delete(`/budgets/${budgetId}`);
    return response.data; // Devuelve el presupuesto detallado
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};

export const updateBudget = async (budgetId, budgetData) => {
  try {
    const response = await apiClient.put(`/budgets/${budgetId}`, budgetData);
    return response.data; // Devuelve el presupuesto detallado
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error de red o servidor');
  }
};