export default function postsReducer(
    state = {
        posts: []
    },
    action
) {
    let keepers; //save this for edit/delete actions
    let post;
    switch (action.type) {
        case 'SAVE_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        case 'ADD_COMMENT':
            post = state.posts.find(post => post.id === action.comment.post_id)
            post.comments.push(action.comment);
            return {
                ...state,
                posts: [...state.posts]
            }
        case 'UPDATE_POST':
            keepers = state.posts.filter(post => post.id !== action.post.id)
            return {
                posts: [...keepers, action.post]
            }
    default: return state;
    }
}