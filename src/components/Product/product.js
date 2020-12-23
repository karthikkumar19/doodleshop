import React from 'react';
import {Card,Button} from 'react-bootstrap';
import classes from './product.module.css';


const  product = props =>  {
    return (
        <div className={classes.productMain} onClick={props.onClick}  >
            <Card className={classes.product}>
                <span style={{height:'70%'}}>
                 {props.discount ? <Button size='sm' className={classes.sale} variant='danger'>Sale!</Button> :null } 
                <img style={{width:'100%',height:'100%', objectFit:'fill'}} variant="top" src={props.image} />
                </span>
  <Card.Body style={{textAlign:'center',alignItems:'center'}}>
    <b>{props.name}</b>
    <Card.Text >
   {props.discount ? <b style={{textDecoration:'line-through',color:'gray',fontWeight:'lighter'}}>${props.discount}</b> : null}  $ {props.price}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default product
