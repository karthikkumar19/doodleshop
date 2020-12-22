import React,{useState} from 'react';
import classes from './products.module.css';
import ReactPaginate from "react-paginate";
import Product from '../../components/Product/product';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import ProductsData from '../../data/product-data';

const PER_PAGE = 9;

const Products = () =>  {
    const [currentPage, setCurrentPage] = useState(0);
    const [ProductData, setProductData] = useState(ProductsData);
   

    console.log(ProductData);


    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }
    
      const offset = currentPage * PER_PAGE;
    
      const currentPageData = ProductData
        .slice(offset, offset + PER_PAGE)
        .map(( value ) =>   <div className={classes.element}>
        <Product name={value.name} image={value.image} price={value.price}/>
        </div> );
    
      const pageCount = Math.ceil(ProductData.length / PER_PAGE);


return (
    <div>
        <div >
        <b style={{marginLeft:'15px'}}>Showing 1-8 of 9 results</b>
          
            <DropdownButton  style={{float:'right',marginRight:'35px',backgroundColor:'silver'}} variant='default'  id="dropdown-basic-button" title="Dropdown button">
<Dropdown.Item href="#/action-1">Default Sorting</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
          
        </div>
<div className={classes.products}>
  {/* {ProductsRender} */}
  {currentPageData}
  
  </div>
  <ReactPaginate
        previousLabel={"← "}
        nextLabel={" →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={classes.pagination}
        previousLinkClassName={classes.pagination__link}
        nextLinkClassName={classes.pagination__link}
        disabledClassName={classes.pagination__link__disabled}
        activeClassName={classes.pagination__link__active}
      />
    </div>
   
)

}
   
 


export default Products
