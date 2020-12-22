import React from 'react';
import SimpleRating from '../rating/SimpleRating';



const topProduct = props => {
    return (
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row', borderBottom:'1px solid lightgrey'}}>
            <div style={{margin:'5px'}}>
                <img style={{objectFit:'fill',width:'60px',height:'60px'}} src={props.image} />
            </div>
            <div style={{margin:'5px'}}>
                <h6>{props.name}</h6>
                <SimpleRating/>
                <b>$ {props.price}</b>
            </div>
        </div>
    )
}

export default topProduct
 