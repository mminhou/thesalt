import axios from 'axios';
// import { BASE_URL } from '../../config/config.json';

const BASE_URL = 'http://localhost:8000/api';
const AUTH_URL = 'http://localhost:8000/api-token-auth';

const getProducts = () => {
    return axios.get(`${BASE_URL}/products/`);
};

const signIn = (signInData) => {
    return axios.post(`${AUTH_URL}/`, signInData);
};

const api = {
    getProducts,
    signIn
};

export default api;