import { categoryConstansts } from "../actions/constant";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if (parentId == undefined) {
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                type: category.type,
                children: []
            }
        ];
    }


    for (let cat of categories) {

        if (cat._id == parentId) {

            myCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            })
        } else {
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }
    }
    return myCategories;
}


const categoryReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories
            };
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            console.log("category updated in categoryAction is data receiver: ", category);
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
            console.log('updated categoires data updated', updatedCategories);
            return {
                ...state,
                categories: updatedCategories,
                loading: false
            };

        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            return {
                ...initState,
                error: action.payload.error,
                loading: false

            };
        default:
            return state;
    }
}
export default categoryReducer;