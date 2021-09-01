import { getProducts, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, getProduct, GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR} from './productAction';
import { signIn, signInFail, signInSuccess } from "./authAction";
import { GET_ACCOUNT, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_ERROR, getAccount } from "./accountAction"
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./shoppingCartAction";

const allAction = {
    // products
    getProducts,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    // product
    getProduct,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    // account
    getAccount,
    GET_ACCOUNT,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_ERROR,
    // cart
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    // signIn
    signIn,
    signInFail,
    signInSuccess,
};

export default allAction;
