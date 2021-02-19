import { loadProduct, loadProductFail, loadProductSuccess } from './productAction';
import { signIn, signInFail, signInSuccess } from "./authAction";

const allAction = {
    // product
    loadProduct,
    loadProductSuccess,
    loadProductFail,
    // signIn
    signIn,
    signInFail,
    signInSuccess,
};

export default allAction;
