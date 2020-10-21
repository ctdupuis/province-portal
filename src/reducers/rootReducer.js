import { combineReducers } from "redux";
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import loadReducer from './loadReducer';


const rootReducer = combineReducers({
    userReducer, postsReducer, loadReducer
})

export default rootReducer;