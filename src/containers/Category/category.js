import React from 'react';
import classes from './category.module.css';
import {Card,ListGroup} from 'react-bootstrap';


const category = () => {
    return (
        <div className={classes.border}>
            <h6>CATEGORIES</h6>
           <Card >
  <ListGroup variant="flush">
    <ListGroup.Item style={{backgroundColor:'whitesmoke'}}>Books</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:'whitesmoke'}}>Hoodie / T-shirt</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:'whitesmoke'}}>Bags</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:'whitesmoke'}}>Misc</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
}

export default category
