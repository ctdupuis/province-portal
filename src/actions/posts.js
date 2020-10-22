import axios from 'axios';

const url = "http://localhost:5000";

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${url}/posts`, { withCredentials: true })
        const posts = response.data
        dispatch({ type: 'SAVE_POSTS', posts })
        dispatch({ type: 'END_LOAD'})
    }
}

export const addPost = (postdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${url}/posts`,
        {
            content: postdata.content,
            user_id: postdata.userID
        },
        { withCredentials: true } )
        const post = response.data
        dispatch({ type: 'ADD_POST', post })
        dispatch({ type: 'END_LOAD'})
    }
}

export const addComment = (commentdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const response = await axios.post(`${url}/posts/${commentdata.postID}/comments`,
        {
            content: commentdata.content,
            user_id: commentdata.userID,
            post_id: commentdata.postID,
        },
        { withCredentials: true } )
        const comment = response.data
        console.log(comment)
        dispatch({ type: 'ADD_COMMENT', comment })
        dispatch({ type: 'END_LOAD'})
    }
}