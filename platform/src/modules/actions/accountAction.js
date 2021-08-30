export const GET_ACCOUNT = 'GET_ACCOUNT';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const GET_ACCOUNT_ERROR = 'GET_ACCOUNT_ERROR';

export const getAccount = (email) => {
    return {
        type: GET_ACCOUNT,
        payload: email,
        meta: email
    }
};
