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


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Home from '../Components/Home/Home/Home';
import Main from '../Layout/Main';
import PrivateRoutes from './PrivateRoutes';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />}>
                        {/* Public Routes */}
                        <Route index element={<PrivateRoutes Component={Home} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;


