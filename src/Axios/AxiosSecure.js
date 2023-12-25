import axios from 'axios';
import { api } from '../../urlConfig';
import store from '../redux/store/store';
import { authConstant } from '../redux/actions/constant';

const token = window.localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        "Authorization": token ? `Bearer ${token}` : ''
    },

});

axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
})
axiosInstance.interceptors.request.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const { status } = error.response;
    if (status === 500) {
        localStorage.clear();
        store.dispatch({ type: authConstant.LOGOUT_SUCCESS })
    }
    return Promise.reject(error)
})

export default axiosInstance;