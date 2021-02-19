// type
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_REQUEST_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_REQUEST_FAIL";

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
