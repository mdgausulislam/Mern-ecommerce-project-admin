import { Button, Modal, Col, Row } from 'react-bootstrap';
const AddCategoryModal = ({ show, handleClose, categoryName, setCategoryName, parentCategoryId, setParentCategoryId, handleCategoryImage, createCategoryList, category }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row>
                    <Col>
                        <input
                            type="text"
                            className="form-control mb-3 form-control-sm"
                            value={categoryName}
                            placeholder={`Category Name`}
                            onChange={(e) => setCategoryName(e.target.value)} />
                    </Col>
                    <Col>
                        <select
                            className="form-select mb-3 form-select-sm"
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="file" name="categoryImage" onChange={handleCategoryImage} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button style={{ backgroundColor: "#333", color: "#fff" }} onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCategoryModal;