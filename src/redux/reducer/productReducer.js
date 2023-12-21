import { productConstants } from "../actions/constant";

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products
            }
    }

    return state;
}