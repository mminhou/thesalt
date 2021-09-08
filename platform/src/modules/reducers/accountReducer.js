import { reducerUtils, handleAsyncActions, handleAsyncActionsById} from '../../lib/asyncUtils';
import allAction from '../actions/index';

const initialAccountState = {
     account: {}
};

const account = (state = initialAccountState, action) => {
  switch (action.type) {
    case allAction.GET_ACCOUNT:
    case allAction.GET_ACCOUNT_SUCCESS:
      return {...state, account: action.payload}
    case allAction.GET_ACCOUNT_ERROR:
      return {...state}
    case allAction.UPDATE_ACCOUNT:
    case allAction.UPDATE_ACCOUNT_SUCCESS:
      return {...state, account: action.payload}
    case allAction.UPDATE_ACCOUNT_ERROR:
      return {...state}
    default:
      return state;
  }
}

export default account;