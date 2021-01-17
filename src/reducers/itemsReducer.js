export default function itemsReducer(
    state = {
        items: []
    },
    action
) {
    // let keepers; //save this for edit/delete actions
    switch (action.type) {
        case 'STORE_ITEMS':
            return {
                ...state,
                items: action.items
            }
        case 'ADD_ITEMS':
            return {
                ...state,
                items: [...state.items, ...action.items]
            }
        case 'CLEAR_ITEMS':
            return {
                ...state,
                items: []
            }
    default: return state;
    }
}