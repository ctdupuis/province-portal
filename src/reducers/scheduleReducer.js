export default function scheduleReducer(
    state = {
        schedule: []
    },
    action
) {
    let keepers;
    switch (action.type) {
        case 'SAVE_SCHEDULE':
            return {
                ...state,
                schedule: action.schedule
            }
        case 'CLEAR_SCHEDULE':
            return {
                ...state,
                schedule: undefined
            }
        case 'REMOVE_SCHEDULE':
            keepers = state.schedule.filter(sch => sch.user_id !== action.userID)
            return {
                ...state,
                schedule: [...keepers]
            }
    default: return state;
    }
}