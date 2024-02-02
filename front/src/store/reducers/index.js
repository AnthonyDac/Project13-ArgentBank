import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: userReducer,
});

export default rootReducer;