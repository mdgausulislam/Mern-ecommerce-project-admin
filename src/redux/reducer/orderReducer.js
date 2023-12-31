import { orderConstants } from "../actions/constant";

const initState = {
    orders: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders,
            };
    }

    return state;
};