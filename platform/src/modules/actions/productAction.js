export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const LOAD_PRODUCT_SUCCESS = "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT_FAIL = "LOAD_PRODUCT_FAL";

export const loadProduct = () => {
    return{
        type: LOAD_PRODUCT
    };
};

export const loadProductSuccess = products => {
    return{
        type: LOAD_PRODUCT_SUCCESS,
        products: products
    };
};

export const loadProductFail = error => {
    return{
        type: LOAD_PRODUCT_FAIL,
        error
    };
};