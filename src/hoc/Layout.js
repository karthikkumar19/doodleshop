import React, { Component } from 'react';
import Aux from './Aux/Aux';
import Toolbar from '../components/UI/Toolbar/Toolbar';
import SideDrawer from '../components/UI/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar
                 drawerToggleClicked={this.sideDrawerToggleHandler} 
                  />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
               
                    {this.props.children}
              
            </Aux>
        )
    }
}




export default Layout;