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
    }
    const handlProductImage = (e) => {
        console.log(e);
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
                            <Col>
                                <input
                                    className='form-control mb-3 form-control-sm'
                                    type="file"
                                    name="banners"
                                    onChange={handlBannerImage} />
                            </Col>
                        </Row>
                        <Row>
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