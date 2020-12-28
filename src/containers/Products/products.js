import React,{useState} from 'react';
import classes from './products.module.css';
import ReactPaginate from "react-paginate";
import {useDispatch,useSelector} from 'react-redux';
import Product from '../../components/Product/product';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import * as productActions from '../../store/action/product';
import Modal from '../../components/UI/Modal/Modal';
import AddProduct from '../Products/AddProduct';


const PER_PAGE = 9;

const Products = () =>  {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [productId,setProductId] = useState('');
    const [productName,setProductName] = useState('');
    const [categoryName,setCategoryName] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const [checked, setChecked] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

    const [currentFilter, setCurrentFilter] = useState('Default Sorting')
    let isFiltered = useSelector(state => state.categoryName);
    
    let ProductData = useSelector(state => state.products);
    let isRanged = useSelector(state => state.rangeFilter);
    
      let CategorizedData = useSelector(state => state.categorizedProducts);
      let RangeData = useSelector(state => state.rangeFilterdData);
      
    if(isFiltered){
      ProductData = CategorizedData
    }else if(isRanged){
      ProductData = RangeData
    }

   
    if(currentFilter === 'Price: Low to High'){
        ProductData.sort((a,b) => a.price - b.price)
    }
   else if(currentFilter === 'Price: High to Low'){
    ProductData.sort((a,b) => b.price - a.price)
   }

    
const modalHandler = (id,name,category,price,checked,image) => {
  setModalOpen(true);
  setProductId(id);
  setCategoryName(category);
  setProductName(name);
  setPrice(price);
  setChecked(checked);
  setImage(image)

}

const CancelHandler = () => {
  setModalOpen(false)
  }

  let addproduct = <AddProduct id={productId} name={productName} 
  category={categoryName} price={price} checked={checked} image={image} onCancel={CancelHandler}/>


    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }
    
      const offset = currentPage * PER_PAGE;
    
      const currentPageData = ProductData
        .slice(offset, offset + PER_PAGE)
        .map(( value ) =>   <div className={classes.element} key={value.id}>
        <Product   onClick={() => modalHandler(value.id,value.name,value.category,value.price,value.top_product,value.image)} name={value.name}
         image={value.image} price={value.price} discount={value.discount}/>
        </div> );
    
      const pageCount = Math.ceil(ProductData.length / PER_PAGE);

      const filterHandler = (name,value) => {
            setCurrentFilter(name);
           
        //     if(value == 'asc'){
        //         ProductData.sort((a,b) => a.price - b.price)
        //     }
        //    else if(value == 'dsc'){
        //     ProductData.sort((a,b) => b.price - a.price)
        //    }
           if(value ==='def'){
               dispatch(productActions.setProduct())
           }
      }

return (
    <div>
        <div  >
          
            <DropdownButton  className={classes.dropDown}  variant='default'  id="dropdown-basic-button" title={currentFilter}>
<Dropdown.Item  onClick={() =>  filterHandler('Default Sorting','def')} >Default Sorting</Dropdown.Item>
<Dropdown.Item onClick={() => filterHandler('Price: Low to High', 'asc')} >Price: Low to High</Dropdown.Item>
<Dropdown.Item onClick={() => filterHandler('Price: High to Low','dsc')}>Price: High to Low</Dropdown.Item>
</DropdownButton>
<b className={classes.result}>Showing 1 - {pageCount} of {ProductData.length} results</b>

        </div>
<div className={classes.products}>
  {currentPageData}
  <Modal show={modalOpen} modalClosed={CancelHandler}>
    {addproduct}
              </Modal> 
  </div>
  <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
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
