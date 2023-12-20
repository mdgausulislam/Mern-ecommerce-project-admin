import axiosInstance from "../../Axios/AxiosSecure";
import { categoryConstansts } from "./constant";


export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST })
        const res = await axiosInstance.get('/category/getcategory');
        console.log(res);

        if (res.status === 200) {
            const { categoryList } = res.data;

            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { category: categoryList }
            })
        } else {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}