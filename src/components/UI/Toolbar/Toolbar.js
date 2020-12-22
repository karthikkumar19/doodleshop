import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div >
        </div>
       
    </header>
);

export default toolbar;