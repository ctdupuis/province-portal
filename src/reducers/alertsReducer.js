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
        case 'CLEAR_ALERTS':
            return {
                ...state,
                alerts: []
            }
    default: return state;
    }
}