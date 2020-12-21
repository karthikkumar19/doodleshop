import React from 'react';
import classes from './topProducts.module.css';
import TopProduct from '../../components/topProduct/topProduct';

const topProducts = () => {
    return (
        <div className={classes.topBorder}>
             <h6>TOP PRODUCTS</h6>
            <TopProduct/>
            <TopProduct/>
            <TopProduct/>
        </div>
    )
}

export default topProducts
