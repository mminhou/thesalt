import axios from 'axios';
// import { BASE_URL } from '../../config/config.json';

const BASE_URL = 'http://localhost:8000/api'

const searchProduct = () => {
    return axios.get(
        `${BASE_URL}/products`
    );
};

const api = {
    searchProduct
};

export default api;