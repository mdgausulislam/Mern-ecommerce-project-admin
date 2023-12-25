import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deletedCategories, getAllCategory, updateCategories } from '../../redux/actions/categoryAction';
import CheckboxTree from 'react-checkbox-tree';
import { IoIosAdd, IoIosArrowDropdown, IoIosArrowForward, IoIosCheckbox, IoIosCheckboxOutline, IoIosCloudUpload, IoIosTrash } from "react-icons/io";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import UpdateCategoryModal from './UpdateCategoryModal/UpdateCategoryModal';
import DeleteCategoryModal from './DeleteCategoryModal/DeleteCategoryModal';
import AddCategoryModal from './AddCategoryModal/AddCategoryModal';
import './category.css'

const Category = () => {
    const category = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandeddArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
    const dispatch = useDispatch();


    const handleClose = () => {

        const form = new FormData();

        if (categoryName === "") {
            alert('Category name is required');
            setShow(false);
            return;
        }

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const showCategoryData = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && showCategoryData(category.children)
                }
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

    const updateCategory = () => {
        updateCheckedAndExpandCategories();
        setUpdateCategoryModal(true);
    }

    const updateCheckedAndExpandCategories = () => {
        const categories = createCategoryList(category.categories);

        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && checkedArray.push(category)
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && expandedArray.push(category)
        })
        setCheckedArray(checkedArray)
        setExpandedArray(expandedArray)
    }

    const handleCategoryInput = (key, value, index, type) => {
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpendedArray = expandeddArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpendedArray);

        }
    }

    const updateCategoriesForm = () => {

        const form = new FormData();
        expandeddArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        dispatch(updateCategories(form))
            .then(result => {
                if (result) {
                    dispatch(getAllCategory());
                }
            })

        setUpdateCategoryModal(false)
    }

    const closeModal = () => {
        setUpdateCategoryModal(false);
    };


    const closeDeleteModal = () => {
        setDeleteCategoryModal(false);
    };

    const deleteCategory = () => {
        updateCheckedAndExpandCategories();
        setDeleteCategoryModal(true);
    }

    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
        const expandsIdsArray = expandeddArray.map((item, index) => ({ _id: item.value }));
        const idsArray = expandsIdsArray.concat(checkedIdsArray);
        if (checkedIdsArray.length > 0) {
            dispatch(deletedCategories(checkedIdsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory());
                        closeDeleteModal();
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className='d-flex justify-content-between'>
                            <h3>category</h3>
                            <div className="actionBtnContainer">
                                <span>Actions: </span>
                                <button onClick={handleShow}><IoIosAdd /> <span>Add</span></button>
                                <button onClick={deleteCategory}><IoIosTrash /> <span>Delete</span></button>
                                <button onClick={updateCategory}><IoIosCloudUpload /> <span>Edit</span></button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>

                        <CheckboxTree
                            nodes={showCategoryData(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}

                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDropdown />,
                            }}
                        />

                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <button onClick={deleteCategory}>Delete</button>
                        <button onClick={updateCategory}>Edit</button>
                    </Col>
                </Row> */}
            </Container>

            {/* added categories modal */}
            <AddCategoryModal
                show={show}
                handleClose={handleClose}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                handleCategoryImage={handleCategoryImage}
                createCategoryList={createCategoryList}
                category={category} />

            {/* edit categories modal*/}
            <UpdateCategoryModal
                show={updateCategoryModal}
                closeModal={closeModal}
                expandeddArray={expandeddArray}
                checkedArray={checkedArray}
                handleCategoryInput={handleCategoryInput}
                createCategoryList={createCategoryList}
                updateCategoriesForm={updateCategoriesForm}
                category={category} />

            {/* delete categories modal */}

            <DeleteCategoryModal
                show={deleteCategoryModal}
                handleClose={closeDeleteModal}
                expandeddArray={expandeddArray}
                checkedArray={checkedArray}
                deleteCategories={deleteCategories} />

        </div>
    );
};

export default Category;