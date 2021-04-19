// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';
// import {NavLink} from "react-router-dom"

import React from 'react';
import s from './Site_body.module.css';
import {NavLink, Route} from "react-router-dom";
import Zvit from './Zvit/Zvit';


const Site_body = () =>{

    return (
        <div>
          <Route path={'/zvit'} render={ () => <Zvit/> }/>
        </div>
    )

}

export default Site_body;