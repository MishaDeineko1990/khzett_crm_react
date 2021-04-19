import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import {BrowserRouter, Route, NavLink} from "react-router-dom";


// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

function App() {


  return (
    <BrowserRouter>  
      <div>
        <Header />
        <Contents />
      </div>
    </BrowserRouter>
  );
}

export default App;
