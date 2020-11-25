export default function userReducer(
    state = {
        currentUser: undefined, 
        contacts: [],
        errors: []
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user,
                errors: []
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: undefined,
                errors: []
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                errors: action.err,
            }
        case 'STORE_CONTACT_LIST':
            let contacts = action.contacts.filter(c => c.username !== "DEM")
            return {
                ...state,
                contacts: contacts
            }
        case 'RESET_CONTACTS':
            return {
                ...state,
                contacts: []
            }
        case 'ADD_USER':
            return {
                ...state,
                contacts: [...state.contacts, action.user]
            }
        case 'UPDATE_USER':
            const keepers = state.contacts.filter(u => u.id !== action.user.id) 
            return {
                ...state,
                contacts: [...keepers, action.user]
            }
        default: return state;
    }
}