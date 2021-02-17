const products = (state = [], action) => {
    switch(action.type){
        case "LOAD_PRODUCT_SUCCESS":
            return [...state, ...action.products];
        case "LOAD_PRODUCT_FAIL":
            return [...state, action.error];
        default:
            return state;
    }
};

export default products;