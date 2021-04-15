import { defaultCipherList } from "constants";
import { start } from "repl";

export default function alertsReducer(
    state = {
        alerts: []
    },
    action
) {
    switch (action.type) {
        case 'ADD_ALERT':
            return {
                ...state,
                alerts: [...state.alerts, action.alert]
            }
    default: return state;
    }
}