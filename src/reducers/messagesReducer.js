export default function messagesReducer(
    state = {
        messages: []
    },
    action
) {
    switch (action.type) {
        case 'STORE_MESSAGES':
            return {
                ...state,
                messages: action.messages
            }
        case 'ADD_MESSAGE':
            console.log("Adding message to the state", action.message)
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
    default: return state;
    }
}