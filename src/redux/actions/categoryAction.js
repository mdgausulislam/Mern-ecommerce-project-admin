import axiosInstance from "../../Axios/AxiosSecure";
import { categoryConstansts } from "./constant";


export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST })
        const res = await axiosInstance.get(`/category/getcategory`);
        console.log(res);

        if (res.status === 200) {
            const { categoryList } = res.data;

            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            })
        } else {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}
export const addCategory = (form) => {
    dispatch({ type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST })
    return async dispatch => {
        const res = await axiosInstance.post(`category/create`, form);
        console.log(res);
        if (res.status === 201) {
            dispatch({
                type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                payload: res.data.category
            })
        } else {
            dispatch({
                type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

