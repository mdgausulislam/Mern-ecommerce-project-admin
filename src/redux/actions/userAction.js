import axiosInstance from "../../Axios/AxiosSecure";
import { userContant } from "./constant"

export const signup = (user) => {
    console.log(user);

    return async (dispatch) => {
        dispatch({ type: userContant.USER_REGISTER_REQUEST })
        const res = await axiosInstance.post(`/admin/signup`, {
            ...user
        })

        if (res.status === 201) {
            const { message } = res.data;

            dispatch({
                type: userContant.USER_REGISTER_SUCCESS,
                payload: { message }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userContant.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}
