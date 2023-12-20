import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';

const Category = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    return (
        <Container>
            <Row>
                <Col md={12}>

                    <div className='d-flex justify-content-between'>
                        <h3>category</h3>
                        <button>Add</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className='d-flex justify-content-between'>
                        <h3>category</h3>
                        <button>Add</button>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Category;