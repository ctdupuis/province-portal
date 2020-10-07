import axios from 'axios';

const url = "http://localhost:5000";

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get(`${url}/posts`, { withCredentials: true })
        const data = response.data
        const posts = data.posts
        dispatch({ type: 'SAVE_POSTS', posts })
    }
}

export const addPost = (postdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.post(`${url}/posts`,
        {
            content: postdata.content,
            user_id: postdata.userID
        },
        { withCredentials: true } )
        const data = response.data
        console.log(data)
        const post = data.post
        dispatch({ type: 'ADD_POST', post })
    }
}