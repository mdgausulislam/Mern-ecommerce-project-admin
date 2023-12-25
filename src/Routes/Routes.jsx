// import {
//     createBrowserRouter,
// } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../Components/Home/Home/Home";
// import SignUp from "../Components/SignUp/SignUp";
// import Login from "../Components/Login/Login";
// import PrivateRoutes from "./PrivateRoutes";

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main />,
//         children: [
//             {
//                 path: "/",
//                 element: < Home />
//             },

//             {
//                 path: "/signup",
//                 element: <SignUp />
//             },

//             {
//                 path: "/login",
//                 element: <Login />
//             },
//         ]
//     },
// ]);


import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Home from '../Components/Home/Home/Home';
import Main from '../Layout/Main';
import PrivateRoutes from './PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../redux/actions/authActions';
import Order from '../pages/Order/Order';
import Product from '../pages/Product/Product';
import Category from '../pages/category/category';
import { getAllCategory } from '../redux/actions/categoryAction';
import { getInitialData } from '../redux/actions/initialDataAction';
import NewPage from '../pages/category/NewPage/NewPage';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
        dispatch(getInitialData());
    }, [])
    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Main />}>
                    {/* Public Routes */}
                    <Route index element={<PrivateRoutes Component={Home} />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/page" element={<NewPage />} />
                    <Route path="/category" element={<PrivateRoutes Component={Category} />} />
                    <Route path="/product" element={<Product />} />


                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;



