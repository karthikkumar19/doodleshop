import React from 'react';
import classes from './topProducts.module.css';
import TopProduct from '../../components/topProduct/topProduct';
import {useSelector} from 'react-redux';

const TopProducts = () => {
    const TopProducts = useSelector(state => state.products.filter(product => product.top_product ));
    let items = TopProducts.map((value,index) => (
        <TopProduct image={value.image} key={value.id} name={value.name} price={value.price}/>
    ))
    return (
        <div className={classes.topBorder}>
             <h6 style={{marginBottom:'30px',color:'gray',fontWeight:'bold'}}>TOP PRODUCTS</h6>
            {items}
        </div>
    )
}

export default TopProducts
