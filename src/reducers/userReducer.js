export default function userReducer(
    state = {
        currentUser: undefined, 
        contacts: []
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
            return {
                ...state,
                errors: action.err,
            }
        case 'STORE_CONTACT_LIST':
            return {
                ...state,
                contacts: action.contacts
            }
        default: return state;
    }
}