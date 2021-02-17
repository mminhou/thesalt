import { combineReducers } from 'redux';
// import ProductsReducer from './reducer_products';
import { reducer as formReducer } from 'redux-form';
import products from "./reducers/productReducer";


const rootReducer = combineReducers({
  // productReducer: ProductsReducer,

  form: formReducer
});
export default rootReducer;