import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    const auth = useSelector(state => state.auth);



    const loggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className='nav-link'>SignOut</span>
                </li>
            </Nav>
        )
    }

    const nonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item ">
                    <NavLink to='/login' className='nav-link'>Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/signup' className='nav-link'>SignUp</NavLink>
                </li>
            </Nav>
        )
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-white text-light" style={{ zIndex: 1 }}>
                <Container fluid>
                    <Link to='/' className='navbar-brand'>Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {auth.authenticate ? loggedInLinks() : nonLoggedInLinks()}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;