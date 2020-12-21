import React from 'react';
import {Card} from 'react-bootstrap';
import classes from './product.module.css';


const  product = () =>  {
    return (
        <div className={classes.productMain} >
            <Card className={classes.product}>
                <span style={{height:'70%'}}>
                <img style={{width:'100%',height:'100%', objectFit:'fill'}} variant="top" src="https://cdn11.bigcommerce.com/s-7edce/images/stencil/850x850/products/5747/100369/Draw-your-life-take-notes-plain-notebook-05__88939.1491915228.jpg?c=2" />
                </span>
  <Card.Body style={{textAlign:'center',alignItems:'center'}}>
    <h5>Developer Hoodie</h5>
    <Card.Text >
      blah blah
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default product
