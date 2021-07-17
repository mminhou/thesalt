import { getProducts, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, getProduct, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR} from './productAction';
import { signIn, signInFail, signInSuccess } from "./authAction";

const allAction = {
    // products
    getProducts,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    // product
    getProduct,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,

    // signIn
    signIn,
    signInFail,
    signInSuccess,
};

export default allAction;
