
import { Button, Col, Modal, Row } from 'react-bootstrap';
const UpdateCategoryModal = ({
    show,
    closeModal,
    expandeddArray,
    checkedArray,
    handleCategoryInput,
    createCategoryList,
    updateCategoriesForm,
    category
}) => {

    return (
        <Modal show={show} onHide={closeModal} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Update Categories</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row>
                    <Col>
                        <h6>Expanded</h6>
                    </Col>
                </Row>

                {
                    expandeddArray.length > 0 &&
                    expandeddArray.map((item, index) =>
                        <Row key={index}>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    value={item.name}
                                    placeholder={`Category Name`}
                                    onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')} />

                            </Col>
                            <Col>
                                <select
                                    className="form-select mb-3"
                                    value={item.parentId}
                                    onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>
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
                            </Col>
                            <Col>
                                <select className="form-select mb-3">
                                    <option value=''>Select Type</option>
                                    <option value='store'>Store</option>
                                    <option value='product'>Product</option>
                                    <option value='page'>Page</option>
                                </select>
                            </Col>
                        </Row>

                    )
                }
                <h6>Checked Category</h6>
                {
                    checkedArray.length > 0 &&
                    checkedArray.map((item, index) =>
                        <Row key={index}>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    value={item.name}
                                    placeholder={`Category Name`}
                                    onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')} />

                            </Col>
                            <Col>
                                <select
                                    className="form-select mb-3"
                                    value={item.parentId}
                                    onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>
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
                            </Col>
                            <Col>
                                <select className="form-select mb-3">
                                    <option value=''>Select Type</option>
                                    <option value='store'>Store</option>
                                    <option value='product'>Product</option>
                                    <option value='page'>Page</option>
                                </select>
                            </Col>
                        </Row>

                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button style={{ backgroundColor: "#333", color: "#fff" }} onClick={updateCategoriesForm}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateCategoryModal;
