import axios from 'axios';
import { API_ROOT } from '../constants';

export const getConversation = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/conversations`, { withCredentials: true })
        const conversation = response.data
        dispatch({ type: 'SAVE_CONVERSATION', conversation })
        dispatch({ type: 'END_LOAD'})
    }
}

export const createMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/messages`,
        { text: messageData.body, user: messageData.currentUser },
        { withCredentials: true })
    }
}