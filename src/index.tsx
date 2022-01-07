import React from 'react';
import ReactDOM from 'react-dom';

import { init as httpInit } from 'utils/http';

import Providers from 'providers';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialize HTTP Client (axios)
httpInit();

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
