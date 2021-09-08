export const GET_ACCOUNT = 'GET_ACCOUNT';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const GET_ACCOUNT_ERROR = 'GET_ACCOUNT_ERROR';

export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS'
export const UPDATE_ACCOUNT_ERROR = 'UPDATE_ACCOUNT_ERROR'

export const getAccount = (data) => {
    return {
        type: GET_ACCOUNT,
        payload: data,
    }
};

export const updateAccount = (data) => {
    return {
        type: UPDATE_ACCOUNT,
        payload: data,
    }
}