import React from 'react';
import classes from './filter.module.css';
import RangeSlider from '../../components/slider/RangeSlider';

const filter = () => {
    return (
        <div className={classes.filterBorder}>
           
           <RangeSlider/>
        </div>
    )
}

export default filter
