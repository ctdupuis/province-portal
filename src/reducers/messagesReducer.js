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
    default: return state;
    }
}