import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import MainComponent from './components/MainComponent';
import '../node_modules/bootstrap/js/index.umd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainComponent/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
