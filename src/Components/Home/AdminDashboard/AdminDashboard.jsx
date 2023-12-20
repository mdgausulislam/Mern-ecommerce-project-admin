import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AdminDashBoard.css'
import { NavLink } from 'react-router-dom';


const AdminDashboard = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2} className='sidebar'>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/product'>Products</NavLink></li>
                            <li><NavLink to='/order'>Orders</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>Conatiner</Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminDashboard;