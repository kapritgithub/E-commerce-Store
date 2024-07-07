// root.reducer.js

import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  // other reducers
});

export default rootReducer;


