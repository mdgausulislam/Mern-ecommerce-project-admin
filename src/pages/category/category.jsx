import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';

const Category = () => {
    const category = useSelector(state => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const showCategoryData = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{showCategoryData(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;

    }

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
                    <ul>
                        {showCategoryData(category.categories)}
                    </ul>
                </Col>
            </Row>

        </Container>
    );
};

export default Category;

