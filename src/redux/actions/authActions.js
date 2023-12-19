import axiosInstance from "../../Axios/AxiosSecure";
import authConstant from "./constant"

const login = (user) => {
    console.log(user);

    return async (dispatch) => {
        dispatch({ type: authConstant.LOGIN_REQUEST })
        const res = await axiosInstance.post(`/admin/signin`, {
            ...user
        })

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }
        // dispatch({
        //     type: authConstant.LOGIN_REQUEST,
        //     payload: {
        //         ...user
        //     }
        // })
    }
}
export default login;