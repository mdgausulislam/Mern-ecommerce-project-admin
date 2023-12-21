import axiosInstance from "../../Axios/AxiosSecure"

export const addProduct = form => {
    return async dispatch => {
        const res = await axiosInstance.post('/product/create', form);
        console.log(res);
        console.log(res.data);
    }
}