// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Adjust path as per your project structure
import App from './App'; // Ensure App component is imported correctly

// Example usage of store in ReactDOM.render()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


