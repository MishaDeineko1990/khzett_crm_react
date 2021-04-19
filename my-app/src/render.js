
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {debag_encode} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
}