export default function alertsReducer(
    state = {
        alerts: []
    },
    action
) {
    switch (action.type) {
        case 'ADD_ALERT':
            console.log(action)
            return {
                ...state,
                alerts: [...state.alerts, action.alert]
            }
    default: return state;
    }
}