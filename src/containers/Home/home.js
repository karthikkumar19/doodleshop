import React from 'react';
import Category from '../Category/category';
import Filter from '../Filter/filter';
import TopProducts from '../TopProducts/topProducts';
import Products from '../Products/Products';
import classes from './home.module.css';
import Button from '@material-ui/core/Button';



const home = () => {
    return (
        <div>

      
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <h3 style={{margin:'5%',marginTop:'2%'}}>Products</h3>
                        <Button variant="contained" color="secondary" style={{fontSize:'12px',width:'150px',height:'40px',margin:'4%',marginTop:'2%',marginRight:'8%'}}>
       <b>Add Product</b> 
      </Button>

        </div>
        <div className={classes.home}>
            <div className={classes.leftSection}>
                <div className={classes.category}>
                <Category/>
                </div>
          <div className={classes.filter}>
          <Filter/>
          </div>
           <div className={classes.topProducts}>
           <TopProducts/>
           </div>
           
            </div>
            <div className={classes.rightSection}>
           
                <div className={classes.products}>
                
                <Products/>
                </div>
           
            </div>
           
            
        </div>
        </div>
    )
}

export default home
