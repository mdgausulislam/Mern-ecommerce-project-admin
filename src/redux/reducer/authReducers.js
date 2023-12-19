import authConstant from "../actions/constant";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
};

const authReducers = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                // ...action.payload
                authenticating: true
            };
        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            };
        default:
            return state;
    }
};

export default authReducers;
