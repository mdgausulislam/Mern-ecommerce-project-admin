import axiosInstance from "../../Axios/AxiosSecure";
import authConstant from "./constant"

const login = (user) => {
    console.log(user);

    return async (dispatch) => {

        const res=await axiosInstance.post(`/admin/signin`,{
            ...user
        })
        dispatch({
            type: authConstant.LOGIN_REQUEST,
            payload: {
                ...user
            }
        })
    }
}
export default login;