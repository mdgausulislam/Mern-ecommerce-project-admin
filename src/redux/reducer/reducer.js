import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducer";
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    category: categoryReducer
})

export default rootReducer;