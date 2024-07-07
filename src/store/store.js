// store.js

import { createStore } from 'redux';
import rootReducer from './root.reducer'; // Adjust path as per your project structure

const store = createStore(rootReducer);

export default store; // Ensure 'store' is exported correctly

