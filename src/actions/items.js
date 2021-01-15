import axios from 'axios';
import { API_ROOT } from '../constants';

export const getItems = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/items`, { withCredentials: true })
        const items = response.data
        // debugger
        dispatch({ type: 'STORE_ITEMS', items })
        dispatch({ type: 'END_LOAD' })
    }
}