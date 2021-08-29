import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, initialState} from '../actions/authAction';
import {persistConfig} from "./index";

const signIn = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return {...state,}
        case SIGN_IN_SUCCESS:
            return {...state, isLoggedIn: true};
        case SIGN_IN_FAIL:
            return [...state, action.error];
        case SIGN_OUT:
            persistConfig.storage.removeItem("token")
            return {...state, isLoggedIn: false};
        default:
            return state;
    };
};

export default signIn;