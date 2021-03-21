export default function itemsReducer(
    state = {
        items: []
    },
    action
) {
    let keepers; //save this for edit/delete actions
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
            console.log("in the reducer:", action.item)
            return {
                ...state,
                items: [...keepers, action.item]
            }
        case 'REMOVE_ITEMS':
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