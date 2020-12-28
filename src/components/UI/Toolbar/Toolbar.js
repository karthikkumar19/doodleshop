import React from 'react';
import classes from './Toolbar.module.css'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div >
        </div>
       
    </header>
);

export default toolbar;