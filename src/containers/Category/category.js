import React from 'react';
import classes from './category.module.css';
import {Card,ListGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import * as productActions from '../../store/action/product';


const Category = () => {
  const dispatch =  useDispatch();
    return (
        <div className={classes.border}>
            <h6 style={{fontWeight:'bold',color:'gray'}}>CATEGORIES</h6>
           <Card >
  <ListGroup variant="flush">
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Books'))} style={{backgroundColor:'whitesmoke',cursor:'pointer'}}><b>Books</b></ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Hoodie / T-shirt'))} style={{backgroundColor:'whitesmoke',cursor:'pointer'}}><b>Hoodie / T-shirt</b></ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Bags'))} style={{backgroundColor:'whitesmoke',cursor:'pointer'}}><b>Bags</b></ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Misc'))} style={{backgroundColor:'whitesmoke',cursor:'pointer'}}><b>Misc</b></ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
}

export default Category
