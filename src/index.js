import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/Components/App/App';

const router = <BrowserRouter> <App /> </BrowserRouter>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);



