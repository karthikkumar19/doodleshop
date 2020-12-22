import React from 'react';
import {Card} from 'react-bootstrap';
import classes from './product.module.css';


const  product = props =>  {
    return (
        <div className={classes.productMain} >
            <Card className={classes.product}>
                <span style={{height:'70%'}}>
                <img style={{width:'100%',height:'100%', objectFit:'fill'}} variant="top" src={props.image} />
                </span>
  <Card.Body style={{textAlign:'center',alignItems:'center'}}>
    <h5>{props.name}</h5>
    <Card.Text >
     $ {props.price}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default product
