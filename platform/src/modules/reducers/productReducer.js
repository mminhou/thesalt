import { reducerUtils, handleAsyncActions, handleAsyncActionsById} from '../../lib/asyncUtils';
import allAction from '../actions/index';

const initialProductState = {
  products: reducerUtils.initial(),
  product: reducerUtils.initial()
};

const products = (state = initialProductState, action) => {
  switch (action.type) {
    case allAction.GET_PRODUCTS:
    case allAction.GET_PRODUCTS_SUCCESS:
    case allAction.GET_PRODUCTS_ERROR:
      return handleAsyncActions("GET_PRODUCTS", 'products', true)(state, action);
    case allAction.GET_PRODUCT:
    case allAction.GET_PRODUCT_SUCCESS:
    case allAction.GET_PRODUCT_ERROR:
      return handleAsyncActionsById("GET_PRODUCT", 'product', true)(state, action);
    default:
      return state;
  }
}

export default products;