import axios from 'axios';
import { API_ROOT } from '../constants';

export const getMessages = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/messages`, { withCredentials: true })
        const messages = response.data
        dispatch({ type: 'STORE_MESSAGES', messages })
        dispatch({ type: 'END_LOAD'})
    }
}

export const getConvo = async function() {
    const response = await axios.get(`${API_ROOT}/conversations`, { withCredentials: true })
    const convo = response.data
    return convo
}

export const createMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/messages`,
        { text: messageData.body, user: messageData.currentUser },
        { withCredentials: true })
        dispatch({ type: 'END_LOAD' })
    }
}

export const addMessage = (message) => {
    return async (dispatch) => {
        dispatch({ type: 'ADD_MESSAGE', message })
    }
}

export const removeMessage = (messageID) => {
    return async (dispatch) => {
        const response = await axios.delete(`${API_ROOT}/messages/${messageID}`, { withCredentials:true })
        dispatch({ type: 'REMOVE_MESSAGE', messageID })
    }
}