import axios from 'axios';
const REGISTER_URL = 'http://localhost:8000/register';
const BASE_URL = 'http://localhost:8000/api';
const AUTH_URL = 'http://localhost:8000/api-token-auth';
// const BASE_URL = 'http://ec2-3-36-116-59.ap-northeast-2.compute.amazonaws.com/api';
// const AUTH_URL = 'http://ec2-3-36-116-59.ap-northeast-2.compute.amazonaws.com/api-token-auth';

const getProducts = () => {
    return axios.get(`${BASE_URL}/products/`);
};
const getProduct = (id) => {
    return axios.get(`${BASE_URL}/products/${id}/`);
};
const getAccount = (email, token) => {
    return axios.get(`${BASE_URL}/accounts/?email=${email}`, { headers: token })
};
const createAccount = async (data) => {
    return await axios.post(`${REGISTER_URL}/`,  data)
};
const updateAccount = async (data, token) => {
    return await axios.put(`${BASE_URL}/accounts/${data.id}/`, data, { headers: token })
};
const signIn = (signInData) => {
    return axios.post(`${AUTH_URL}/`, signInData);
};
const order = async (data, token) => {
    return axios.post(`${BASE_URL}/order/`, data, { headers: token })
}
const api = {
    getProducts,
    getProduct,
    getAccount,
    createAccount,
    updateAccount,
    signIn,
    order,
};

export default api;