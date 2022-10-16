import { BrowserRouter, HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <HashRouter> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </HashRouter> */}
    </React.StrictMode>,
);

reportWebVitals();
