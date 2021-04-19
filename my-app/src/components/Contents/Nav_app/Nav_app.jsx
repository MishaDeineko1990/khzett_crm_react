// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

import React from 'react';
import s from './Nav_app.module.css';
import {NavLink} from "react-router-dom"

const Nav_app = () =>{

    return (
        <div>
            <NavLink to ="/">HOME</NavLink>
            <br/>
            <NavLink to ="/zvit">ZVIT</NavLink>
        </div>
    )

}

export default Nav_app;