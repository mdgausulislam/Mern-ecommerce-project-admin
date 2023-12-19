import authConstant from "../actions/constant";

const initState = {
    token: null
};

const authReducers = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default authReducers;
