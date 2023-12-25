import React, { useEffect, useState } from 'react';
import { Button, Modal, Col, Row, Container } from 'react-bootstrap';
import LinearCategories from '../../../Axios/LinearCategory';
import { useSelector } from 'react-redux';

const NewPage = () => {
    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [desc, setDesc] = useState('');
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);

    const category = useSelector(state => state.category);

    useEffect(() => {
        setCategories(LinearCategories(category.categories));
    }, [category])


    const handlBannerImage = (e) => {
        console.log(e);
        setBanners([...banners, e.target.files[0]]);
    }
    const handlProductImage = (e) => {
        console.log(e);
        setProducts([...products, e.target.files[0]]);
    }

    const submitPageForm = (e) => {
        e.target.preventDefault();

        // if(title === ""){
        //     alert('Title is required');
        //     setCreateModal(false);
        //     return;
        // }

        const form = new FormData();
        form.append('title', title);
        form.append('description', desc);
        form.append('category', categoryId);
        form.append('type', type);
        banners.forEach((banner, index) => {
            form.append('banners', banner);
        });
        products.forEach((product, index) => {
            form.append('products', product);
        });

        // dispatch(createPage(form));

        
    }


    return (
        <div>
            <Modal show={createModal} onHide={() => setCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <select
                                    className="form-select mb-3 form-select-sm"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}>
                                    <option value={''}>select category</option>
                                    {
                                        categories.map(cat =>
                                            <option
                                                key={cat._id}
                                                value={cat.value}>
                                                {cat.name}
                                            </option>
                                        )
                                    }
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control mb-3 form-control-sm"
                                    value={title}
                                    placeholder={`Page Title`}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control mb-3 form-control-sm"
                                    value={desc}
                                    placeholder={`Page Desc`}
                                    onChange={(e) => setDesc(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>

                            {
                                banners.length > 0 ?
                                    banners.map((banner, index) =>
                                        <Row key={index}>
                                            <Col>{banner.name}</Col>
                                        </Row>
                                    ) : null
                            }
                            <Col>
                                <input
                                    className='form-control mb-3 form-control-sm'
                                    type="file"
                                    name="banners"
                                    onChange={handlBannerImage} />
                            </Col>
                        </Row>
                        <Row>
                            {
                                products.length > 0 ?
                                    products.map((product, index) =>
                                        <Row key={index}>
                                            <Col>{product.name}</Col>
                                        </Row>
                                    ) : null
                            }
                            <Col>
                                <input
                                    className='form-control mb-3 form-control-sm'
                                    type="file"
                                    name="products"
                                    onChange={handlProductImage} />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setCreateModal(false)}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "#333", color: "#fff" }} onClick={() => setCreateModal(false)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <button onClick={() => setCreateModal(true)}>Create page</button>
        </div>
    );
};

export default NewPage;