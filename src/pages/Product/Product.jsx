import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProductById } from '../../redux/actions/productAction';
import Table from 'react-bootstrap/Table';
import './product.css';
import { generatedPublicUrl } from '../../../urlConfig';

const Product = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [productToDelete, setProductToDelete] = useState(null);
    const category = useSelector((state) => state.category);
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();


    const handleClose = () => {
        const form = new FormData();

        form.append("name", name);
        form.append("quantity", quantity);
        form.append("price", price);
        form.append("description", description);
        form.append("category", categoryId);

        for (let pic of productPictures) {
            form.append("productPictures", pic);
        }

        dispatch(addProduct(form))

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

    const handleProductPicture = (e) => {
        setProductPictures([...productPictures, e.target.files[0]])
    }

    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Product Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map((product, index) => <tr
                                onClick={() => showProductDetailsModal(product)}
                                key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.category.name}</td>
                                <td><button className='btn btn-info'>Info</button>
                                    <button className='btn btn-danger' onClick={() => showDeleteProductModal(product)}>
                                        Delete
                                    </button></td>
                            </tr>) : null
                    }
                </tbody>
            </Table>
        );
    }



    const renderAddProductModal = () => {
        return (
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
                        className="form-select mb-3"
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

                    {
                        productPictures.length > 0 ?
                            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                    }

                    <input type='file' name='productPictures' onChange={handleProductPicture} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create Product
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }




    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    };

    const showProductDetailsModal = (product) => {
        setProductDetails(product);
        setProductDetailModal(true);
        console.log(product);
    };

    const renderProductDetailsModal = () => {
        if (!productDetails) {
            return null; // or handle this case as needed
        }

        // Check if productPictures is null or undefined
        if (!productDetails.productPictures) {
            return null; // or handle this case as needed
        }


        return (
            <Modal show={productDetailModal} onHide={handleCloseProductDetailsModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md='6'>
                            <label className="key">Name</label>
                            <p className="value">{productDetails.name}</p>
                        </Col>
                        <Col md="6">
                            <label className="key">Price</label>
                            <p className="value">{productDetails.price}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <label className="key">Quantity</label>
                            <p className="value">{productDetails.quantity}</p>
                        </Col>
                        <Col md="6">
                            <label className="key">Category</label>
                            <p className="value">{productDetails.category.name}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <label className="key">Description</label>
                            <p className="value">{productDetails.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label className="key">Product Pictures</label>
                            <div style={{ display: "flex" }}>
                                {productDetails.productPictures.map((picture, index) => (
                                    <div key={index} className="productImgContainer">
                                        <img src={generatedPublicUrl(picture.img)} alt="" />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseProductDetailsModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }



    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const showDeleteProductModal = (product) => {
        setProductToDelete(product);
        setShowDeleteModal(true);
    };


    const renderProductDeleteModal = () => {
        if (!productToDelete) {
            return null; // or handle this case as needed
        }

        // Check if productPictures is null or undefined
        if (!productDetails.productPictures) {
            return null; // or handle this case as needed
        }

        return (
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Product Delete Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md='6'>
                            <label className="key">Name</label>
                            <p className="value">{productDetails.name}</p>
                        </Col>
                        <Col md="6">
                            <label className="key">Price</label>
                            <p className="value">{productDetails.price}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <label className="key">Quantity</label>
                            <p className="value">{productDetails.quantity}</p>
                        </Col>
                        <Col md="6">
                            <label className="key">Category</label>
                            <p className="value">{productDetails.category.name}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <label className="key">Description</label>
                            <p className="value">{productDetails.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label className="key">Product Pictures</label>
                            <div style={{ display: "flex" }}>
                                {productDetails.productPictures.map((picture, index) => (
                                    <div key={index} className="productImgContainer">
                                        <img src={generatedPublicUrl(picture.img)} alt="" />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDeleteProduct(productToDelete)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleDeleteProduct = (product) => {
        const payload = {
            productId: product._id,
        };
        dispatch(deleteProductById(payload));
        handleCloseDeleteModal();
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className='d-flex justify-content-between'>
                            <h3>Product</h3>
                            <button className='btn btn-primary' onClick={handleShow}>Create Product</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
            {renderAddProductModal()}
            {renderProductDetailsModal()}
            {renderProductDeleteModal()}
        </div>
    );
};

export default Product;
