import React from 'react';
import classes from './products.module.css';
import Product from '../../components/Product/product';
import {Dropdown,DropdownButton} from 'react-bootstrap';

const products = () => {
    return (
        <div>
            <div >
            <b style={{marginLeft:'15px'}}>Showing 1-8 of 9 results</b>
              
                <DropdownButton  style={{float:'right',marginRight:'35px',backgroundColor:'silver'}} variant='default'  id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Default Sorting</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
              
            </div>
 <div className={classes.products}>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div> <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
          <div className={classes.element}>
          <Product/>
          </div>
      
      </div>
        </div>
       
    )
}

export default products
