import axios from 'axios';
import { API_ROOT } from '../constants';

export const getConversation = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/conversations`)
        const conversation = response.data
        dispatch({ type: 'SAVE_CONVERSATION', conversation })
        dispatch({ type: 'END_LOAD'})
    }
}