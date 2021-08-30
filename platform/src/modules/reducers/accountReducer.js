import { reducerUtils, handleAsyncActions, handleAsyncActionsById} from '../../lib/asyncUtils';
import allAction from '../actions/index';

const initialAccountState = {
  account: reducerUtils.initial()
};

const account = (state = initialAccountState, action) => {
  switch (action.type) {
    case allAction.GET_ACCOUNT:
    case allAction.GET_ACCOUNT_SUCCESS:
    case allAction.GET_ACCOUNT_ERROR:
      return handleAsyncActionsById("GET_ACCOUNT", 'account', true)(state, action);
    default:
      return state;
  }
}

export default account;