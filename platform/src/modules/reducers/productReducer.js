import { LOAD_PRODUCT, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_SUCCESS } from '../actions/productAction'

const products = (state = [], action) => {
    switch(action.type){
        case LOAD_PRODUCT_SUCCESS:
            return [...state, ...action.products];
        case LOAD_PRODUCT_FAIL:
            return [...state, action.error];
        case "LOADED_PRODUCT":
            return {
                status: "complete",
                products: action.products,
            };
        default:
            return state;
    }
};

export default products;