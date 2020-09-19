import axios from 'axios';

const url = "http://localhost:5000"

export const login = (userdata, history) => {
    return  async (dispatch) => {
    dispatch({ type: 'START_SESSION_REQUEST' })
    const response = await axios.post(`${url}`, {
            username: userdata.username,
            password: userdata.password
        }, { withCredentials: true }
    )
    const resp = response.data
        if (resp.logged_in === true) {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/dashboard')
        } else {
            const err = resp.error
            dispatch({ type: 'LOGIN_ERROR', err })
            history.push('/dashboard')
        }
    }
}
export const getLoginStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get(`${url}/logged_in`, { withCredentials: true })
        const data = response.data
        if (data.logged_in === true ) {
            const user = data.user
            dispatch({ type: 'LOGIN_USER', user })
        }
    }
}

export const endSession = () => {
    return (dispatch) =>  {
        axios.get(`${url}/logout`, { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
        })
    }
}