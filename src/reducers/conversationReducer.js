export default function conversationReducer(
    state = {
        conversation: []
    },
    action
) {
    switch (action.type) {
        case 'SAVE_CONVERSATION':
            return {
                ...state,
                conversation: action.conversation
            }
    default: return state;
    }
}