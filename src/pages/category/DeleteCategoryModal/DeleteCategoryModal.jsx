import { Button, Modal } from 'react-bootstrap';
const DeleteCategoryModal = ({ show, handleClose, expandeddArray, checkedArray, deleteCategories }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Are you sure Delete category Items?</h3>
                <h6>Expanded</h6>
                {expandeddArray.map((item, index) => <span key={index}>{item.name}</span>)}
                <h6>Checked</h6>
                {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="danger" onClick={deleteCategories}>
                    Yes, Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteCategoryModal;