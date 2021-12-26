import React from 'react';
import ReactDOM from 'react-dom';
//Global Style
import './assets/styles/global.css';
//Routes
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>  
  </React.StrictMode>,
  document.getElementById('root')
);
