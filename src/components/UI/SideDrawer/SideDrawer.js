import React from 'react';

import classes from './SideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import Category from '../../../containers/Category/category';
import Filter from '../../../containers/Filter/filter';
import TopProduct from '../../../containers/TopProducts/topProducts';
const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.category}>
                <Category/>
                </div>
                <div className={classes.filter}>
                <Filter/>
                    </div>
                    <div className={classes.topProducts}>
                    <TopProduct/>
                    </div>
              
              
               
            </div>
        </Aux>
    );
};

export default sideDrawer;