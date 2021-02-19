import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {reducer as formReducer} from 'redux-form';
import products from "./productReducer";
import signIn from "./authReducer";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["signIn"]
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
    products,
    signIn,
    form: formReducer
});


// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);