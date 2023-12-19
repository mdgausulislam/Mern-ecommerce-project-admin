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
            localStorage.setItem('user', JSON.stringify(user));
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


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: "Failed to login" }
            })
        }
    }
}


export const signOut = () => {
    return async dispatch => {
        localStorage.clear();
    }
}