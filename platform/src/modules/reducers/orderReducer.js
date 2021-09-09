import {PUT_ORDER, PUT_ORDER_SUCCESS, PUT_ORDER_FAIL} from "../actions/orderAction";


const order = (state = [], action) => {
    switch (action.type) {
        case PUT_ORDER:
        case PUT_ORDER_SUCCESS:
        case PUT_ORDER_FAIL:
        default:
            return state;
    }
}

export default order