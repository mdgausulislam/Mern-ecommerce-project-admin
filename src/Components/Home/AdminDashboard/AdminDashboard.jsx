import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AdminDashBoard.css'


const AdminDashboard = () => {
    return (
        <div>
            {/* <div style={{ margin: '5rem' }} className="container jumbotron text-center bg-primary">
                <h1 className="display-4">Welcome To Admin Dashnboard</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora nam placeat maxime non eveniet in accusamus, consectetur sit magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora nam placeat maxime non eveniet in accusamus, consectetur sit magnam.
                </p>
            </div> */}

            <Container fluid>
                <Row>
                    <Col md={2} className='sidebar'>SideBar</Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>Conatiner</Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminDashboard;