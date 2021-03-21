export default function itemsReducer(
    state = {
        items: []
    },
    action
) {
    let keepers; //save this for edit/delete actions
    let idx; //for injecting updates
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
        case 'UPDATE_ITEM':
            keepers = state.items.filter(item => item.id !== action.item.id)
            idx = state.items.map((i) => i.id).indexOf(action.item.id)
            keepers.splice(idx, 0, action.item)
            return {
                ...state,
                items: [...keepers]
            }
        case 'REMOVE_ITEM':
            keepers = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: [...keepers]
            }
        case 'CLEAR_ITEMS':
            return {
                ...state,
                items: []
            }
    default: return state;
    }
}