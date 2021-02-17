import { combineReducers } from 'redux';
// import ProductsReducer from './reducer_products';
import { reducer as formReducer } from 'redux-form';
import products from "./productReducer";

const rootReducer = combineReducers({
  // productReducer: ProductsReducer,
  products,
  form: formReducer
});
export default rootReducer;