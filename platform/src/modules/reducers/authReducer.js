import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL} from '../actions/authAction';

export const initialState = {
    isLoggedIn: false,
    isLoggingOut: false,
    isLoggingIn: false,
    logInErrorReason: '',
    isSignedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
    token: {},
    id: {},
    email: {},
}

const signIn = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return {...state,}
        case SIGN_IN_SUCCESS:
            return {...state, isLoggedIn: true, token: action.payload.signInData.token,
                id: action.payload.signInData.user.id, email: action.payload.signInData.user.email};
        case SIGN_IN_FAIL:
            return [...state, action.error];
        case SIGN_OUT:
            return {...state, isLoggedIn: false, token: {}, id: {}, email: {}};
        case SIGN_UP:
        case SIGN_UP_SUCCESS:
        case SIGN_UP_FAIL:
            return state;
        default:
            return state;
    };
};


export default signIn;