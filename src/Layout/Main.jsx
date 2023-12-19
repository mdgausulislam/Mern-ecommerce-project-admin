import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";



const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
};

export default Main;