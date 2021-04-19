// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

import React from 'react';
import s from './Contents.module.css';
import Site_body from './Site_body/Site_body';
import Nav_app from './Nav_app/Nav_app';

const Contents = () =>{


    return (
        <div>
            <div className={s.contents_wrap}>
                <Nav_app />
                <Site_body />
            </div>
        </div>
    )

}

export default Contents;