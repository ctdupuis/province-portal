import { combineReducers } from "redux";
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import loadReducer from './loadReducer';
import scheduleReducer from './scheduleReducer';
import messagesReducer from './messagesReducer';
import itemsReducer from './itemsReducer';


const rootReducer = combineReducers({
    userReducer, postsReducer, loadReducer, scheduleReducer, messagesReducer, itemsReducer
})

export default rootReducer;