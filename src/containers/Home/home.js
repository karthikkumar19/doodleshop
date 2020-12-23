import React,{useState} from 'react';
import Category from '../Category/category';
import Filter from '../Filter/filter';
import TopProducts from '../TopProducts/topProducts';
import Products from '../Products/Products';
import classes from './home.module.css';
import Layout from '../../hoc/Layout';
import Modal from '../../components/UI/Modal/Modal';
import AddProduct from '../Products/AddProduct';


const Home = () => {
    const [open,setOpen] = useState(false);


   const CancelHandler = () => {
        setOpen(false)
        }
        
    let addproduct = <AddProduct onCancel={CancelHandler}/>
    return (
        <Layout>

      
        <span style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <h1 style={{marginLeft:'5%',paddingTop:'20px'}}>Products</h1>
                        <button onClick={() => setOpen(true)}  className={classes.button}>
       <b style={{color:'white'}}>Add Product</b> 
      </button>

        </span>
        <div className={classes.home}>
            <div className={classes.leftSection}>
                <div className={classes.category}>
                <Category/>
                </div>
          <div className={classes.filter}>
          <Filter/>
          </div>
           <div className={classes.topProducts}>
           <TopProducts/>
           </div>
           
            </div>
            <div className={classes.rightSection}>
           
                <div className={classes.products}>
                
                <Products/>
                </div>
           
            </div>
           
            
        </div>
        <Modal show={open} modalClosed={CancelHandler}>
              {addproduct}
              </Modal> 
        </Layout>
    )
}

export default Home
