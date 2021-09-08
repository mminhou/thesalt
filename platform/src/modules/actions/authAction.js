export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_REQUEST_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_REQUEST_FAIL";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const signIn = (data) => {
    return{
        type: SIGN_IN_REQUEST,
        payload: {
            signInData: data,
        },
    };
};

export const signInSuccess = (data) => {
    return{
        type: SIGN_IN_SUCCESS,
        payload: {
            signInData: data,
        },
    };
};

export const signInFail = error => {
    return{
        type: SIGN_IN_FAIL,
    };
};

export const signOut = () => {
    return{
        type: SIGN_OUT,
    }
}

export const signUp = (data) => {
    return {
        type: SIGN_UP,
        payload: {
            signUpData: data,
        }
    }
}

