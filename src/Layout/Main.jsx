// import { NavLink, Outlet } from "react-router-dom";
// import NavBar from "../Components/Shared/NavBar/NavBar";
// import { Col, Container, Row } from "react-bootstrap";
// import './Main.css'

// const Main = () => {
//     return (
//         <div>
//             <NavBar />
//             {
//                 <Outlet /> ?
//                     <Container fluid>
//                         <Row>
//                             <Col md={2} className='sidebar'>
//                                 <ul>
//                                     <li><NavLink to='/'>Home</NavLink></li>
//                                     <li><NavLink to='/page'>Page</NavLink></li>
//                                     <li><NavLink to='/category'>Category</NavLink></li>
//                                     <li><NavLink to='/product'>Products</NavLink></li>
//                                     <li><NavLink to='/order'>Orders</NavLink></li>
//                                 </ul>
//                             </Col>
//                             <Col md={10} style={{ marginLeft: 'auto', paddingTop: "60px" }}>{<Outlet />}</Col>
//                         </Row>
//                     </Container> : <Outlet />
//             }
//         </div>
//     );
// };

// export default Main;


import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import './Main.css'

// Other imports...

const Main = () => {
    const location = useLocation();

    // Define an array of routes where you want to show the sidebar
    const showSidebarRoutes = ['/', '/page', '/category', '/product', '/order'];

    // Check if the current route is included in showSidebarRoutes
    const showSidebar = showSidebarRoutes.includes(location.pathname);

    return (
        <div>
            <NavBar />
            {showSidebar && (
                <Container fluid>
                    <Row>
                        <Col md={2} className='sidebar'>
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/page'>Page</NavLink></li>
                                <li><NavLink to='/category'>Category</NavLink></li>
                                <li><NavLink to='/product'>Products</NavLink></li>
                                <li><NavLink to='/order'>Orders</NavLink></li>
                            </ul>
                        </Col>
                        <Col md={10} style={{ marginLeft: 'auto', paddingTop: "60px" }}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            )}
            {!showSidebar && <Outlet />} {/* Render Outlet for pages without sidebar */}
        </div>
    );
};

export default Main;
