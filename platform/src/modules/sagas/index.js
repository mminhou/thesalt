import {call, delay, put, takeEvery, select} from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';
import {persistConfig} from "../reducers";

function* getProductsSaga() {
    try {
        const products = yield call(api.getProducts);
        yield put({
            type: allAction.GET_PRODUCTS_SUCCESS,
            payload: products.data
        });
    } catch (e) {
        yield put({
            type: allAction.GET_PRODUCTS_ERROR,
            error: true,
            payload: e
        });
    }
}

function* getProductSaga(action) {
    const param = action.payload;
    const id = action.meta;
    try {
        const product = yield call(api.getProduct, param);
        yield put({
            type: allAction.GET_PRODUCT_SUCCESS,
            payload: product.data,
            meta: id
        });
    } catch (e) {
        yield put({
            type: allAction.GET_PRODUCT_ERROR,
            error: true,
            payload: e,
            meta: id
        });
    }
}

function* getAccountSaga(action) {
    const param = action.payload;
    const token = yield select(state => state.signIn.token)
    const headerParams = {
        Authorization: `Token ${token}`
    };
    try {
        const account = yield call(api.getAccount, param, headerParams);
        yield put({
            type: allAction.GET_ACCOUNT_SUCCESS,
            payload: account.data[0],
        });
    } catch (e) {
        yield put({
            type: allAction.GET_ACCOUNT_ERROR,
            error: true,
            payload: e,
        });
    }
}

function* updateAccountSaga(action) {
    const param = action.payload;
    const token = yield select(state => state.signIn.token)
    const headerParams = {
        Authorization: `Token ${token}`
    };
    try {
        const account = yield call(api.updateAccount, param, headerParams);
        yield put({
            type: allAction.UPDATE_ACCOUNT_SUCCESS,
            payload: account.data,
        });
        alert("Your account has been successfully updated");
    } catch (e) {
        yield put({
            type: allAction.UPDATE_ACCOUNT_ERROR,
            error: true,
            payload: e,
        });
    }
}


function* signIn({payload}) {
    try {
        const result = yield call(api.signIn, payload.signInData);
        yield put(allAction.signInSuccess(result.data));
        yield delay(500)
        alert("Welcome to The Salt of the future.");
    } catch (e) {
        alert("Failed logged in. Please check on your email, password");
        window.location.reload();
        yield put(allAction.signInFail(e));
    }
}

function* signUp({payload}) {
    try {
        const result = yield call(api.createAccount, payload.signUpData);
        yield delay(300)
        alert("Welcome to oue membership");
        window.location.reload();

    } catch (e) {
        yield put({
            type: allAction.SIGN_UP_FAIL,
            error: true,
            payload: e,
        });
        alert("Sorry, this username(email) already taken");
        window.location.reload();
    }
}


function* rootSaga() {
    yield takeEvery("GET_PRODUCTS", getProductsSaga);
    yield takeEvery("GET_PRODUCT", getProductSaga);
    yield takeEvery("SIGN_IN_REQUEST", signIn);
    // yield takeEvery("SIGN_OUT", signOut);
    yield takeEvery("SIGN_UP", signUp);
    yield takeEvery("GET_ACCOUNT", getAccountSaga);
    yield takeEvery("UPDATE_ACCOUNT", updateAccountSaga);
}

export default rootSaga;