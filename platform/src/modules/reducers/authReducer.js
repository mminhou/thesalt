import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, initialState} from '../actions/authAction';


const signIn = (state = [], action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return {...state, isLoggedIn: true,}
        case SIGN_IN_SUCCESS:
            console.log("리듀서도 성공@@@")
            return {...state, isLoggedIn: true};
        case SIGN_IN_FAIL:
            return [...state, action.error];
        case SIGN_OUT:
            return {...state, isLoggedIn: false};
        default:
            return state;
    };
};

export default signIn;