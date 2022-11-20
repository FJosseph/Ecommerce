import axios from 'axios'
export function getAllProducts() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/products')
                .then(data=>dispatch({
                    type: 'GET_ALL_PRODUCTS',
                    payload: data.data
                }))
    }    
}

export function getProductsBySearch(name) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/products?name=${name}`)
                .then(data=>dispatch({
                    type: 'GET_ALL_PRODUCTS',
                    payload: data.data
                }))
    }    
}

export function addProducts(body) {
    return function (dispatch) {
        return axios.post('http://localhost:3001/products', body)
                .then(data=>dispatch({
                    type: 'ADD_PRODUCTS',
                    payload: data.data
                }))
    }    
}

export function getCategories() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/categories')
                .then(data=>dispatch({
                    type: 'GET_CATEGORIES',
                    payload: data.data
                }))
    }    
}

export function addCategories(body) {
    return function (dispatch) {
        return axios.post('http://localhost:3001/categories', body)
                .then(data=>dispatch({
                    type: 'ADD_CATEGORIES',
                    payload: data.data
                }))
    }    
}