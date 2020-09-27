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
                currentUser: action.user,
                requesting: false
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: undefined,
                requesting: false
            }
        case 'LOGIN_ERROR':
            console.log(action)
            return {
                ...state,
                errors: action.err,
                requesting: false
            }
        case 'START_SESSION_REQUEST':
            // debugger
            return {
                ...state,
                requesting: true
            }
        case 'END_SESSION_REQUEST':
            return {
                ...state,
                requesting: false
            }
        default: return state;
    }
}