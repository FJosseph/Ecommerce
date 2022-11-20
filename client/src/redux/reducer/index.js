const initialState = {
    products: [],
    allProducts: [],
    createdProducts: [],
    categories: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            const allProducts = action.payload
            console.log(allProducts);
            return {
                ...state,
                products: allProducts,
                allProducts: allProducts
            }
        case 'ADD_PRODUCTS':
            console.log(action.payload);
            return {
                ...state,
                createdProducts: [...state.createdProducts, action.payload]
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'ADD_CATEGORIES':
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}