import axios from 'axios';
import { API_ROOT } from '../constants';

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/posts`, { withCredentials: true })
        const posts = response.data
        dispatch({ type: 'SAVE_POSTS', posts })
        dispatch({ type: 'END_LOAD'})
    }
}

export const addPost = (postdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/posts`,
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

export const updatePost = (postdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const response = await axios.patch(`${API_ROOT}/posts/${postdata.id}`, 
        {
            content: postdata.content
        },
        { withCredentials: true })
        const post = response.data
        dispatch({ type: 'UPDATE_POST', post })
        dispatch({ type: 'END_LOAD'})
    }
}

export const removePost = (postID) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.delete(`${API_ROOT}/posts/${postID}`, { withCredentials: true })
        const data = response.data
        dispatch({ type: 'REMOVE_POST', postID})
        dispatch({ type: 'END_LOAD' })
    }
}

export const addComment = (commentdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const response = await axios.post(`${API_ROOT}/posts/${commentdata.postID}/comments`,
        {
            content: commentdata.content,
            user_id: commentdata.userID,
            post_id: commentdata.postID,
        },
        { withCredentials: true } )
        const comment = response.data
        dispatch({ type: 'ADD_COMMENT', comment })
        dispatch({ type: 'END_LOAD' })
    }
}

export const updateComment = (commentdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.patch(`${API_ROOT}/posts/${commentdata.post_id}/comments/${commentdata.comment_id}`,
        {
            content: commentdata.content
        },
        { withCredentials: true })
        const comment = response.data
        dispatch({ type: 'UPDATE_COMMENT', comment })
        dispatch({ type: 'END_LOAD' })
    }
}

export const removeComment = (commentID, postID) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.delete(`${API_ROOT}/posts/${postID}/comments/${commentID}`, {withCredentials: true})
        dispatch({ type: 'REMOVE_COMMENT', commentID: commentID, postID: postID })
        dispatch({ type: 'END_LOAD' })
    }
}