import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalSyle from './globalStyled';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalSyle></GlobalSyle>
  </React.StrictMode>,
  document.getElementById('root')
);

