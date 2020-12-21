import React from 'react';
import SimpleRating from '../rating/SimpleRating';



const topProduct = () => {
    return (
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row', borderBottom:'1px solid lightgrey'}}>
            <div style={{margin:'5px'}}>
                <img style={{objectFit:'fill',width:'60px',height:'60px'}} src="https://cdn11.bigcommerce.com/s-7edce/images/stencil/850x850/products/5747/100369/Draw-your-life-take-notes-plain-notebook-05__88939.1491915228.jpg?c=2" />
            </div>
            <div style={{margin:'5px'}}>
                <h6>Name</h6>
                <SimpleRating/>
                <b>$66.6</b>
            </div>
        </div>
    )
}

export default topProduct
 