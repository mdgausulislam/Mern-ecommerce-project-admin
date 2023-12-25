import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import pageReducer from "./pageReducer";



const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    category: categoryReducer,
    product: productReducer,
    page: pageReducer,
})

export default rootReducer;