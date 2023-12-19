import { authConstant, userContant } from "../actions/constant";

const initState = {
    error: '',
    message: '',
    loading: false
};

const userReducers = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case userContant.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userContant.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            };

        case userContant.USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};

export default userReducers;
