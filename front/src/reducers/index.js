import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
    example: exampleReducer,
    // ... ajoutez d'autres reducers si nécessaire
});

export default rootReducer;