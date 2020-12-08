import { combineReducers } from "redux";
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import loadReducer from './loadReducer';
import scheduleReducer from './scheduleReducer';


const rootReducer = combineReducers({
    userReducer, postsReducer, loadReducer, scheduleReducer
})

export default rootReducer;