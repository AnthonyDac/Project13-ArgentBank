import { createStore } from 'redux';
import rootReducer from '../reducers/index'; // Assurez-vous de créer ce fichier

const store = createStore(rootReducer);

export default store;
