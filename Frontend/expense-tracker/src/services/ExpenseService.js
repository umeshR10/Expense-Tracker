import axios from 'axios';

const API_URL = 'http://localhost:8080/api/expenses';

const getExpenses = () => {
  return axios.get(API_URL);
};

const addExpense = (expense) => {
  return axios.post(API_URL, expense);
};

const updateExpense = (id, expense) => {
  return axios.put(`${API_URL}/${id}`, expense);
};

const deleteExpense = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
};
