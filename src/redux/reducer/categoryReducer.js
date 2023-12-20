import { categoryConstansts } from "../actions/constant";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const categoryReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories
            };
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            return {
                ...initState,
               
            };
        default:
            return state;
    }
}
export default categoryReducer;