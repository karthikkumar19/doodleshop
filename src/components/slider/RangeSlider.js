import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import * as productActions from '../../store/action/product';

const useStyles = makeStyles({
  root: {
    width: '100%',
   
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([29, 599]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        FILTER BY PRICE
      </Typography>
      <Slider
      color="primary"
      style={{color:'gray'}}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={10}
        max={1000}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Button onClick={() =>  dispatch(productActions.rangeFilter(value[0],value[1]))} variant="contained" color="secondary" style={{fontSize:'12px',padding:0}}>
       <b>Filter</b> 
      </Button>
      <b style={{color:'gray'}}>price:${value[0]}-${value[1]}</b>
      </div>
      
    </div>
  );
}
