import axios from 'axios';

const url = "http://localhost:5000";

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get(`${url}/posts`, { withCredentials: true })
        const data = response.data
        console.log(data)
        const posts = data.posts
        dispatch({ type: 'SAVE_POSTS', posts })
    }
}