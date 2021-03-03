export default function postsReducer(
    state = {
        posts: []
    },
    action
) {
    let keepers; //save this for edit/delete actions
    let idx; //for injecting post/comment updates
    let post;
    switch (action.type) {
        case 'SAVE_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'CLEAR_POSTS':
            return {
                ...state,
                posts: []
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        case 'UPDATE_POST':
            keepers = state.posts.filter(post => post.id !== action.post.id)
            idx = state.posts.map((p) => { return p.id }).indexOf(action.post.id)
            keepers.splice(idx, 0, action.post)
            return {
                posts: [...keepers]
            }
        case 'REMOVE_POST':
            keepers = state.posts.filter(post => post.id !== action.postID)
            return {
                posts: [...keepers]
            }
        case 'ADD_COMMENT':
            post = state.posts.find(post => post.id === action.comment.post_id)
            post.comments.push(action.comment);
            return {
                ...state,
                posts: [...state.posts]
            }
        case 'UPDATE_COMMENT':
            post = state.posts.find(post => post.id === action.comment.post_id)
            idx = post.comments.map((c) => { return c.id }).indexOf(action.comment.id)
            keepers = post.comments.filter(c => c.id !== action.comment.id)
            keepers.splice(idx, 0, action.comment)
            post.comments = [...keepers]
            return {
                ...state
            }
        case 'REMOVE_COMMENT':
            post = state.posts.find(post => post.id === action.postID)
            keepers = post.comments.filter(c => c.id !== action.commentID)
            post.comments = [...keepers]
            return {
                ...state
            }
    default: return state;
    }
}