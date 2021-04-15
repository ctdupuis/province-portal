import axios from 'axios';
import { API_ROOT } from '../constants';

export const login = (userdata, history) => {
    return  async (dispatch) => {
    dispatch({ type: 'START_LOAD' })
    const response = await axios.post(`${API_ROOT}`, {
            username: userdata.username,
            password: userdata.password
        }, { withCredentials: true }
    )
    const resp = response.data
        if (resp.first_login) { //send them to update password
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({ type: 'END_LOAD'})
            history.push('/update-info')
        } else if (resp.logged_in === true) {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({type: 'END_LOAD'})
            history.push('/dashboard')
        } else {
            const alert = resp.alert
            dispatch({ type: 'ADD_ALERT', alert })
            dispatch({type: 'END_LOAD'})
            history.push('/')
        }
    }
}

export const updateInfo = (userdata, history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const response = await axios.post(`${API_ROOT}/update`, {
            username: userdata.username,
            password: userdata.password,
            password_confirm: userdata.password_confirm,
            email: userdata.email,
            phone: userdata.phone
        }, { withCredentials: true })
        const data = response.data
        if (data.logged_in) {
            const user = data.user
            dispatch({ type: 'UPDATE_USER', user})
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({type: 'END_LOAD'})
            history.push('/')
        } else {
            const err = response.error
            dispatch({ type: 'LOGIN_ERROR', err })
            dispatch({type: 'END_LOAD'})
            history.push('/update-info')
        }
    }
}

export const getLoginStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/logged_in`, { withCredentials: true })
        const data = response.data
        console.log(data)
        if (data.logged_in === true ) {
            const user = data.user
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({ type: 'END_LOAD' })
        } else {
            dispatch({ type: 'END_LOAD' })
        }
    }
}

export const endSession = () => {
    return async (dispatch) =>  {
        dispatch({ type: 'START_LOAD'})
        axios.get(`${API_ROOT}/logout`, { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
            dispatch({ type: 'CLEAR_POSTS' })
            dispatch({ type: 'RESET_CONTACTS' })
            dispatch({ type: 'CLEAR_SCHEDULE' })
            dispatch({ type: 'CLEAR_ITEMS'})
            dispatch({ type: 'END_LOAD' })
        })
    }
}

export const getContacts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/contacts`, { withCredentials: true })
        const contacts = response.data
        dispatch({ type: 'STORE_CONTACT_LIST', contacts})
        dispatch({ type: 'END_LOAD'})
    }
}

export const createUser = (userdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/users`, 
        {
            username: userdata.username,
            first_name: userdata.first_name,
            last_name: userdata.last_name,
            phone: userdata.phone,
            email: userdata.email,
            password: userdata.password,
            admin: userdata.admin
        },
        { withCredentials: true })
        const user = response.data
        dispatch({ type: 'ADD_USER', user })
        dispatch({ type: 'END_LOAD' })
    }
}

export const removeUser = (userID) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/users/${userID}/delete`, { withCredentials: true })
        const data = response.data
        dispatch({ type: 'REMOVE_USER', userID })
        dispatch({ type: 'REMOVE_SCHEDULE', userID })
        dispatch({ type: 'END_LOAD'})
    }
}