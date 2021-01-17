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
        {
            items: []
        },
        { withCredentials: true })
        const items = response.data
        dispatch({ type: 'ADD_ITEMS', items })
        dispatch({ type: 'END_LOAD'})
    }
}