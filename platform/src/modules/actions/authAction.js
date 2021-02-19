// type
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_REQUEST_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_REQUEST_FAIL";
export const SIGN_OUT = "SIGN_OUT";

export const initialState = {
    isLoggedIn: false,
    isLoggingOut: false,
    isLoggingIn: false,
    logInErrorReason: '',
    isSignedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
}

// actions
export const signIn = (data) => {
    return{
        type: SIGN_IN_REQUEST,
        payload: {
            signInData: data,
        },
    };
};

export const signInSuccess = () => {
    return{
        type: SIGN_IN_SUCCESS,
        // payload: {
            // signInData: data,
        // },
    };
};

export const signInFail = error => {
    return{
        type: SIGN_IN_FAIL,
        // payload: {
            // signInData: data,
        // },
    };
};

export const signOut = () => {
    return{
        type: SIGN_OUT,
    }
}