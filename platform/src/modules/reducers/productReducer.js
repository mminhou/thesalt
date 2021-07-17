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
    // case GET_POST:
    // case GET_POST_SUCCESS:
    // case GET_POST_ERROR:
    //   return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
    default:
      return state;
  }
}

// const products = (state = [], action) => {
//     switch(action.type){
//         case LOAD_PRODUCT_SUCCESS:
//             return [...state, ...action.products];
//         case LOAD_PRODUCT_FAIL:
//             return [...state, action.error];
//         case "LOADED_PRODUCT":
//             return {
//                 status: "complete",
//                 products: action.products,
//             };
//         default:
//             return state;
//     }
// };

export default products;