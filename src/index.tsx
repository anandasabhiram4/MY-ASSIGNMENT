import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/abhiram/Desktop/My-assignment/src/index.css';
import App from '/Users/abhiram/Desktop/My-assignment/src/App.tsx';
import { Provider } from 'react-redux';
import store from '/Users/abhiram/Desktop/My-assignment/src/store/store.ts';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
