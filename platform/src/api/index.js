import axios from 'axios';
// import { BASE_URL } from '../../config/config.json';

const BASE_URL = 'http://localhost:8000/api';
const AUTH_URL = 'http://localhost:8000/api-token-auth';

const getProducts = () => {
    return axios.get(`${BASE_URL}/products/`);
};
const getProduct = (id) => {
    // console.log(`${BASE_URL}/products/${id}/`);
    return axios.get(`${BASE_URL}/products/${id}/`);
}

const getAccount = (email) => {
    return axios.get(`${BASE_URL}/accounts/?email=${email}`)
}

const signIn = (signInData) => {
    return axios.post(`${AUTH_URL}/`, signInData);
};

const api = {
    getProducts,
    getProduct,
    getAccount,
    signIn
};

export default api;