import { getProducts, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, getProduct, GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR} from './productAction';
import { signIn, signInFail, signInSuccess, signOut, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL, signUp } from "./authAction";
import { GET_ACCOUNT, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_ERROR, getAccount,
         UPDATE_ACCOUNT, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_ERROR, updateAccount,} from "./accountAction"
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_ALL_PRODUCT_FROM_CART } from "./shoppingCartAction";
import { PUT_ORDER, PUT_ORDER_SUCCESS, PUT_ORDER_FAIL, putOrder } from "./orderAction";

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
    // update account
    updateAccount,
    UPDATE_ACCOUNT,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_ERROR,
    // cart
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL_PRODUCT_FROM_CART,
    // signIn
    signIn,
    signInFail,
    signInSuccess,
    // signOut
    signOut,
    // signUp
    signUp,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    // putOrder
    putOrder,
    PUT_ORDER,
    PUT_ORDER_SUCCESS,
    PUT_ORDER_FAIL,
};

export default allAction;
