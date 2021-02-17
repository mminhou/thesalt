import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';

function* getProduct() {
    console.log("제품 가져오기 성공");
    try{
        const { data } = yield call(api.searchProduct);
        console.log(data);
        yield put(allAction.loadProductSuccess(data));
    }catch(error){
        yield put(allAction.loadProductFail(error));
    }
}

function* rootSaga(){
    yield takeEvery("LOAD_PRODUCT", getProduct);
}

export default rootSaga;