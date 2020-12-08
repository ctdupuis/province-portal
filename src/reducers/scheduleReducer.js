export default function scheduleReducer(
    state = {
        schedule: {}
    },
    action
) {
    switch (action.type) {
        case 'SAVE_SCHEDULE':
            return {
                ...state,
                schedule: action.schedule
            }
    default: return state;
    }
}