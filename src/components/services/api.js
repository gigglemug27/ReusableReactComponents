// api.js
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7063/Customer';

export const registerCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/RegisterCustomer`, data);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginCustomer = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/LoginCustomer`, data);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
