import axios from 'axios'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts() {
    return (dispatch) => {
      const request = axios.get('http://localhost:8000/api/products/');
        return request
            .then(res => res.data)
            .then(data => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    payLoad: data
                });
            })
    }
}

const initialState = [];

export default function ProductReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return { ...state, productList: action.payLoad };
        default:
            return state;
    }
}