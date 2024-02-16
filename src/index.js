import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppDemo from './AppDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppDemo /> */}
  </React.StrictMode>
);
