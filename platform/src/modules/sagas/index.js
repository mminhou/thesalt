import { takeEvery, put, call, delay } from 'redux-saga/effects';
import api from '../../api/index';
import allAction from '../actions/index';
import {persistConfig} from "../reducers";
// import storage from "redux-persist/lib/storage";


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




// function* getProduct() {
//     console.log("제품 가져오기 성공");
//     try{
//         const { data } = yield call(api.searchProduct);
//         yield put(allAction.loadProductSuccess(data));
//     }catch(error){
//         yield put(allAction.loadProductFail(error));
//     }
// }

function* signIn({ payload }) {
    try{
        const result = yield call(api.signIn, payload.signInData);
        // tokens
        // console.log(result.data)
        persistConfig.storage.setItem("token", result.data)
        // console.log(persistConfig.storage.setItem(token, result.data))
        yield delay(500)
        yield put(allAction.signInSuccess(result.data));
        // console.log("login 성공")
        alert("환영합니다.")
    }catch(error){
        // console.log("login 실패");
        alert("로그인에 실패하셨습니다. 다시 입력해주시기 바랍니다.");
        window.location.reload();
        yield put(allAction.signInFail(error));
    }
}

function* rootSaga(){
    yield takeEvery("GET_PRODUCTS", getProductsSaga);
    yield takeEvery("SIGN_IN_REQUEST", signIn);
}

export default rootSaga;