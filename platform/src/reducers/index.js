import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  productReducer: ProductsReducer,
  form: formReducer
});
export default rootReducer;