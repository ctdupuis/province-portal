export default function postsReducer(
    state = {
        posts: []
    },
    action
) {
    // let keepers; //save this for edit/delete actions
    let post;
    switch (action.type) {
        case 'SAVE_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'ADD_POST':
            post = action.post
            return {
                ...state,
                posts: [post, ...state.posts]
            }
        case 'ADD_COMMENT':
            post = state.posts.find(post => post.id === action.comment.post_id)
            // debugger
            const comment = action.comment            
            return {
                ...state,
                posts: [...state.posts, post.comments.concat(comment)]
            }
    default: return state;
    }
}