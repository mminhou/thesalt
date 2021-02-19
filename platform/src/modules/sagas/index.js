import { takeEvery, put, call, delay } from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';


function* getProduct() {
    console.log("제품 가져오기 성공");
    try{
        const { data } = yield call(api.searchProduct);
        yield put(allAction.loadProductSuccess(data));
    }catch(error){
        yield put(allAction.loadProductFail(error));
    }
}

function* signIn({ payload }) {
    console.log("로그인 성공");
    try{
        const result = yield call(api.signIn, payload.signInData);
        // token
        // console.log(result.data)
        // console.log(result)
        yield delay(500)
        yield put(allAction.signInSuccess());
    }catch(error){
        yield put({
            type: allAction.signInFail,
        });
    }
}

function* rootSaga(){
    yield takeEvery("LOAD_PRODUCT", getProduct);
    yield takeEvery("SIGN_IN_REQUEST", signIn);
}

export default rootSaga;