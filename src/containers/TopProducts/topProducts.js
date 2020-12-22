import React from 'react';
import classes from './topProducts.module.css';
import TopProduct from '../../components/topProduct/topProduct';
import {useSelector} from 'react-redux';

const TopProducts = () => {
    const TopProducts = useSelector(state => state.products.filter(product => product.top_product ));
    console.log(TopProducts)
    let items = TopProducts.map((value,index) => (
        <TopProduct image={value.image} name={value.name} price={value.price}/>
    ))
    return (
        <div className={classes.topBorder}>
             <h6>TOP PRODUCTS</h6>
            {items}
        </div>
    )
}

export default TopProducts
