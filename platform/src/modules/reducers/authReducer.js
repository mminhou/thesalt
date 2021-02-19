import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from '../actions/authAction';

const signIn = (state = [], action) => {
    switch(action.type){
        case SIGN_IN_SUCCESS:
            console.log("리듀서도 성공@@@")
            return [...state];
        case SIGN_IN_FAIL:
            return [...state, action.error];
        default:
            return state;
    };
};

export default signIn;