import axios from 'axios';

const url = "http://localhost:5000";

export const login = (userdata, history) => {
    return  async (dispatch) => {
    dispatch({ type: 'START_LOAD' })
    const response = await axios.post(`${url}`, {
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
            const err = resp.error
            dispatch({ type: 'LOGIN_ERROR', err })
            dispatch({type: 'END_LOAD'})
            history.push('/')
        }
    }
}

export const updateInfo = (userdata, history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const response = await axios.post(`${url}/update`, {
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
        const response = await axios.get(`${url}/logged_in`, { withCredentials: true })
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
        axios.get(`${url}/logout`, { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
            dispatch({ type: 'END_LOAD' })
        })
    }
}

export const getContacts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${url}/contacts`, { withCredentials: true })
        const contacts = response.data
        dispatch({ type: 'STORE_CONTACT_LIST', contacts})
        dispatch({ type: 'END_LOAD'})
    }
}

export const createUser = (userdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${url}/users`, 
        {
            username: userdata.username,
            first_name: userdata.first_name,
            last_name: userdata.last_name,
            phone: userdata.phone,
            email: userdata.email,
            password: userdata.password
        },
        { withCredentials: true })
        const user = response.data
        debugger
        dispatch({ type: 'ADD_USER', user })
        dispatch({ type: 'END_LOAD' })
    }
}