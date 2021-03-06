import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Exercise/10StylingComponents/StylingComponents1/index.css'
import './Exercise/11ComponentComposition/ComponentComposition1/index.css'
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Root />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
