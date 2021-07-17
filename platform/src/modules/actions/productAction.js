// All product
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
// Each product
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const getProducts = () => {return{ type: GET_PRODUCTS }};

// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getProduct = id => {
    return {
        type: GET_PRODUCT,
        payload: id,
        meta: id
    }
};
