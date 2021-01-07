import { combineReducers } from "redux";
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import loadReducer from './loadReducer';
import scheduleReducer from './scheduleReducer';
import messagesReducer from './messagesReducer';


const rootReducer = combineReducers({
    userReducer, postsReducer, loadReducer, scheduleReducer, messagesReducer
})

export default rootReducer;