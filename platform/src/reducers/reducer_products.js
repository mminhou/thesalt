import React from "react";
import axios from 'axios'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ERROR = 'ERROR';

export function fetchProducts() {
    return (dispatch) => {
      const request = axios.get('http://localhost:8000/api/products/');
        return request
            .then(data => dispatch({type: FETCH_PRODUCTS, payLoad: data}))
            .catch(err => dispatch({type: ERROR, payload: err}));
    }
}

const initialState = {
    // errors: []
};

export default function ProductReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return { ...state, productList: action.payLoad.data };
        case ERROR:
            return { ...state, errors: action.payload}
        default:
            return state;
    }
}