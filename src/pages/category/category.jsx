import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../redux/actions/categoryAction';


const Category = () => {
    const category = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const handleClose = () => {

        const form = new FormData();


        form.append('name', categoryName);

        form.append('parentId', parentCategoryId);
        console.log("parentid", parentCategoryId);

        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));

        setShow(false);
    };
    const handleShow = () => setShow(true);

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


    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId,
                type: category.type
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className='d-flex justify-content-between'>
                            <h3>category</h3>
                            <button onClick={handleShow}>Add</button>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={categoryName}
                        placeholder={`Category Name`}
                        onChange={(e) => setCategoryName(e.target.value)} />

                    <select
                        className="form-control mb-3"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>select category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option
                                    key={option.value}
                                    value={option.value}>
                                    {option.name}
                                </option>
                            )
                        }
                    </select>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Category;

