export default function messagesReducer(
    state = {
        messages: []
    },
    action
) {
    let keepers;
    switch (action.type) {
        case 'STORE_MESSAGES':
            return {
                ...state,
                messages: action.messages
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case 'REMOVE_MESSAGE':
            keepers = state.messages.filter(message => message.id !== action.messageID)
            return {
                ...state,
                messages: [...keepers]
            }
    default: return state;
    }
}