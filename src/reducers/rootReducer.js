import { combineReducers } from "redux";
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import loadReducer from './loadReducer';
import scheduleReducer from './scheduleReducer';
import conversationReducer from './conversationReducer';


const rootReducer = combineReducers({
    userReducer, postsReducer, loadReducer, scheduleReducer, conversationReducer
})

export default rootReducer;