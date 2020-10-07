export default function postsReducer(
    state = {
        posts: []
    },
    action
) {
    let keepers; //save this for edit/delete actions
    switch (action.type) {
        case 'SAVE_POSTS':
            return {
                ...state,
                posts: action.posts
            }
    default: return state;
    }
}