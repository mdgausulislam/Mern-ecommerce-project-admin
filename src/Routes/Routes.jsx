import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/signup",
                element: <SignUp />
            },

            {
                path: "/login",
                element: <Login />
            },
        ]
    },
]);