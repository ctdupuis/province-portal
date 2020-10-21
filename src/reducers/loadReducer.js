export default function loadReducer(
    state = {
        loading: ''
    },
    action
) {
    // let keepers; //save this for edit/delete actions
    switch (action.type) {
        case 'START_LOAD':
            return {
                ...state,
                loading: true
            }
        case 'END_LOAD':
            return {
                ...state,
                loading: false
            }
    default: return state;
    }
}