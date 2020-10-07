import axios from 'axios';

const url = "http://localhost:5000";

export const login = (userdata, history) => {
    return  async (dispatch) => {
    dispatch({ type: 'START_SESSION_REQUEST' })
    const response = await axios.post(`${url}`, {
            username: userdata.username,
            password: userdata.password
        }, { withCredentials: true }
    )
    const resp = response.data
        if (resp.first_login) {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/update-info')
        } else if (resp.logged_in === true) {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/dashboard')
        } else {
            const err = resp.error
            dispatch({ type: 'LOGIN_ERROR', err })
            history.push('/')
        }
    }
}

export const updateInfo = (userdata, history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST'})
        const response = await axios.post(`${url}/update`, {
            username: userdata.username,
            password: userdata.password,
            password_confirm: userdata.password_confirm
        }, { withCredentials: true })
        const data = response.data
        if (data.logged_in) {
            const user = data.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/dashboard')
        } else {
            const err = response.error
            dispatch({ type: 'LOGIN_ERROR', err })
            history.push('/update-info')
        }
    }
}

export const getLoginStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get(`${url}/logged_in`, { withCredentials: true })
        const data = response.data
        console.log(data)
        if (data.logged_in === true ) {
            const user = data.user
            dispatch({ type: 'LOGIN_USER', user })
        } else {
            dispatch({ type: 'END_SESSION_REQUEST' })
        }
    }
}

export const endSession = (history) => {
    return async (dispatch) =>  {
        axios.get(`${url}/logout`, { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
        })
        history.push('/')
    }
}