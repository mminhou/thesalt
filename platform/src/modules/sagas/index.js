import {call, delay, put, takeEvery, select} from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';

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

function* getProductSaga({payload}) {
    try {
        const product = yield call(api.getProduct, payload);
        yield put({
            type: allAction.GET_PRODUCT_SUCCESS,
            payload: product.data,
        });
    } catch (e) {
        yield put({
            type: allAction.GET_PRODUCT_ERROR,
            error: true,
            payload: e,
        });
    }
}

function* getAccountSaga({payload}) {
    const token = yield select(state => state.signIn.token);
    const headerParams = {
        Authorization: `Token ${token}`
    };
    try {
        const account = yield call(api.getAccount, payload, headerParams);
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

function* updateAccountSaga({payload}) {
    const token = yield select(state => state.signIn.token);
    const headerParams = {
        Authorization: `Token ${token}`
    };
    try {
        const account = yield call(api.updateAccount, payload, headerParams);
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


function* signInSaga({payload}) {
    try {
        const result = yield call(api.signIn, payload.signInData);
        yield put(allAction.signInSuccess(result.data));
        yield delay(300);
        alert("Welcome to The Salt of the future.");
    } catch (e) {
        alert("Failed logged in. Please check on your email, password");
        window.location.reload();
        yield put(allAction.signInFail(e));
    }
}

function* signUpSaga({payload}) {
    try {
        const result = yield call(api.createAccount, payload.signUpData);
        yield delay(300);
        yield put({
            type: allAction.SIGN_UP_SUCCESS,
        });
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

function* orderSaga({payload}) {
    try {
        const token = yield select(state => state.signIn.token);
        const headerParams = {
            Authorization: `Token ${token}`
        };
        const result = yield call(api.order, payload.orderData, headerParams);
        yield put({
            type: allAction.PUT_ORDER_SUCCESS
        });
        yield put({
            type: allAction.REMOVE_ALL_PRODUCT_FROM_CART
        })
        alert("Thank you for your order. We will ship your order as soon as possible");
        window.location.replace('/home');
    } catch (e) {
        yield put({
            type: allAction.PUT_ORDER_FAIL,
            error: true,
        });
        console.log(e.message)
    }
}


function* rootSaga() {
    yield takeEvery("GET_PRODUCTS", getProductsSaga);
    yield takeEvery("GET_PRODUCT", getProductSaga);
    yield takeEvery("SIGN_IN_REQUEST", signInSaga);
    // yield takeEvery("SIGN_OUT", signOut);
    yield takeEvery("SIGN_UP", signUpSaga);
    yield takeEvery("GET_ACCOUNT", getAccountSaga);
    yield takeEvery("UPDATE_ACCOUNT", updateAccountSaga);
    yield takeEvery("PUT_ORDER", orderSaga);
}

export default rootSaga;