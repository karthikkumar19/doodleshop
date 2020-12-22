import React from 'react';
import classes from './category.module.css';
import {Card,ListGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import * as productActions from '../../store/action/product';


const Category = () => {
  const dispatch =  useDispatch();
    return (
        <div className={classes.border}>
            <h6>CATEGORIES</h6>
           <Card >
  <ListGroup variant="flush">
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Books'))} style={{backgroundColor:'whitesmoke'}}>Books</ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Hoodie / T-shirt'))} style={{backgroundColor:'whitesmoke'}}>Hoodie / T-shirt</ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Bags'))} style={{backgroundColor:'whitesmoke'}}>Bags</ListGroup.Item>
    <ListGroup.Item onClick={() => dispatch(productActions.categoryProduct('Misc'))} style={{backgroundColor:'whitesmoke'}}>Misc</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
}

export default Category
