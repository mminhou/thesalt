export const loadProduct = () => {
    return{
        type: "LOAD_PRODUCT"
    };
};

export const loadProductSuccess = products => {
    return{
        type: "LOAD_PRODUCT_SUCCESS",
        products: products
    };
};

export const loadProductFail = error => {
    return{
        type: "LOAD_PRODUCT_FAIL",
        error
    };
};