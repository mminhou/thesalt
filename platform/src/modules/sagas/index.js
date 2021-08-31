import {takeEvery, put, call, delay} from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';
import {persistConfig} from "../reducers";


function* getProductsSaga() {
    try {
        const products = yield call(api.getProducts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
        yield put({
            type: allAction.GET_PRODUCTS_SUCCESS,
            payload: products.data
        }); // 성공 액션 디스패치
    } catch (e) {
        yield put({
            type: allAction.GET_PRODUCTS_ERROR,
            error: true,
            payload: e
        }); // 실패 액션 디스패치
    }
}

function* getProductSaga(action) {
    const param = action.payload;
    const id = action.meta;
    try {
        const product = yield call(api.getProduct, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
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

function* getAccount(action) {
    const param = action.payload;
    const email = action.meta;
    try {
        const account = yield call(api.getAccount, param)
        yield put({
            type: allAction.GET_ACCOUNT_SUCCESS,
            payload: account.data,
            meta: email
        });
    } catch (error) {
        yield put({
            type: allAction.GET_ACCOUNT_ERROR,
            error: true,
            meta: email
        });
    }
}

function* signIn({payload}) {
    try {
        const result = yield call(api.signIn, payload.signInData);
        // tokens
        persistConfig.storage.setItem("token", JSON.stringify(result.data))

        yield put(allAction.signInSuccess(result.data));
        yield delay(500)
        alert("환영합니다.");

        // call getAccount
        const account = yield call(api.getAccount, payload.signInData.email);
        persistConfig.storage.setItem("account", JSON.stringify(account.data[0]))
        persistConfig.storage.getItem("account").then(res => {
            // console.log(JSON.parse(res))
        })

    } catch (error) {
        // console.log("login 실패");
        alert("로그인에 실패하셨습니다. 다시 입력해주시기 바랍니다.");
        window.location.reload();
        yield put(allAction.signInFail(error));
    }
}

function* rootSaga() {
    yield takeEvery("GET_PRODUCTS", getProductsSaga);
    yield takeEvery("GET_PRODUCT", getProductSaga);
    yield takeEvery("SIGN_IN_REQUEST", signIn);
}

export default rootSaga;