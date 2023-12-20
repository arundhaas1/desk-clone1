// store/index.js
import { createStore } from 'redux';
import rootReducer from './reducers.js'; // Create this file in the next step

const store = createStore(rootReducer);

export default store;
