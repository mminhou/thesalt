import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {reducer as formReducer} from 'redux-form';
import products  from "./productReducer";
import account from "./accountReducer";
import signIn from "./authReducer";
import shoppingCart from "./shoppingCartReducer";
import {categoriesIsLoading, categories} from "./shoppingCartReducer";


export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['signIn', 'shoppingCart', 'categories']
  // blacklist
};

const rootReducer = combineReducers({
    products,
    signIn,
    account,
    shoppingCart,
    categoriesIsLoading,
    categories,
    form: formReducer
});

export default persistReducer(persistConfig, rootReducer);