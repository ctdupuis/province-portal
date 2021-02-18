import axios from 'axios';
import { API_ROOT } from '../constants';

export const getConversation = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/messages`, { withCredentials: true })
        const messages = response.data
        dispatch({ type: 'STORE_MESSAGES', messages })
        dispatch({ type: 'END_LOAD'})
    }
}

export const createMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/messages`,
        { text: messageData.body, user: messageData.currentUser },
        { withCredentials: true })
        const newMessage = response.data
        console.log(newMessage)
        dispatch({ type: 'END_LOAD' })
    }
}

export const addMessage = (message) => {
    return async (dispatch) => {
        dispatch({ type: 'ADD_MESSAGE', message})
    }
}