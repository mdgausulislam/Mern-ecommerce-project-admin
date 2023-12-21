import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";



const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    category: categoryReducer,
    product: productReducer,
})

export default rootReducer;