export const PUT_ORDER = "PUT_ORDER";
export const PUT_ORDER_SUCCESS = "PUT_ORDER_SUCCESS"
export const PUT_ORDER_FAIL = "PUT_ORDER_FAIL"

export const putOrder = (data) => {
    return{
        type: PUT_ORDER,
        payload: {
            orderData: data,
        },
    };
}