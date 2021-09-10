import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {reducer as formReducer} from 'redux-form';
import products  from "./productReducer";
import account from "./accountReducer";
import signIn from "./authReducer";
import shoppingCart from "./shoppingCartReducer";
import order from "./orderReducer";

export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['signIn', 'shoppingCart', 'account']
  // blacklist
};

const rootReducer = combineReducers({
    products,
    signIn,
    account,
    shoppingCart,
    order,
    form: formReducer
});

export default persistReducer(persistConfig, rootReducer);