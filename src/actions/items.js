import axios from 'axios';
import { API_ROOT } from '../constants';

export const getItems = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/items`, { withCredentials: true })
        const items = response.data
        dispatch({ type: 'STORE_ITEMS', items })
        dispatch({ type: 'END_LOAD' })
    }
}

export const addItems = (itemData) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/items`,
        { itemData },
        { withCredentials: true })
        const items = response.data
        dispatch({ type: 'ADD_ITEMS', items })
        dispatch({ type: 'END_LOAD'})
    }
}

export const updateItem = (itemdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.patch(`${API_ROOT}/items/${itemdata.id}`,
        {
            id: itemdata.id,
            product_name: itemdata.product_name,
            quantity: itemdata.quantity,
            unit_of_measurement: itemdata.unit_of_measurement
        }, { withCredentials: true })
        const item = response.data
        console.log(item)
        // dispatch({ type: 'UPDATE_ITEM', item })
        dispatch({ type: 'END_LOAD' })
    }
}