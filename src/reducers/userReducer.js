export default function userReducer(
    state = {
        currentUser: undefined
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: undefined
            }
        case 'LOGIN_ERROR':
            console.log(action)
            return {
                ...state,
                errors: action.err
            }
        case 'START_SESSION_REQUEST':
            return {
                ...state
            }
   
        default: return state;
    }
}