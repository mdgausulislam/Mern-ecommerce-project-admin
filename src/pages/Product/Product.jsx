import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const category = useSelector((state) => state.category);
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

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
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className='d-flex justify-content-between'>
                            <h3>Product</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
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
                        label='Name'
                        className="form-control mb-3"
                        value={name}
                        placeholder={`Product Name`}
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="text"
                        label='Quantity'
                        className="form-control mb-3"
                        value={quantity}
                        placeholder={`Quantity`}
                        onChange={(e) => setQuantity(e.target.value)} />
                    <input
                        type="text"
                        label='price'
                        className="form-control mb-3"
                        value={price}
                        placeholder={`price`}
                        onChange={(e) => setPrice(e.target.value)} />
                    <input
                        type="text"
                        label='Description'
                        className="form-control mb-3"
                        value={description}
                        placeholder={`Description`}
                        onChange={(e) => setDescription(e.target.value)} />

                    <select
                        className="form-control mb-3"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}>
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

                    <input type='file' name='productPicture' onChange={handleProductPicture} />

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

export default Product;