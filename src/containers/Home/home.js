import React,{useState} from 'react';
import Category from '../Category/category';
import Filter from '../Filter/filter';
import TopProducts from '../TopProducts/topProducts';
import Products from '../Products/Products';
import classes from './home.module.css';
import Button from '@material-ui/core/Button';
import Layout from '../../hoc/Layout';
import Modal from '../../components/UI/Modal/Modal';
import AddProduct from '../Products/AddProduct';


const Home = () => {
    const [open,setOpen] = useState(false);


   const CancelHandler = () => {
        setOpen(false)
        }
        
    let addproduct = <AddProduct/>
    return (
        <Layout>

      
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <h3 style={{margin:'5%',marginTop:'2%'}}>Products</h3>
                        <Button onClick={() => setOpen(true)} variant="contained" color="secondary" style={{fontSize:'12px',width:'150px',height:'40px',margin:'4%',marginTop:'2%',marginRight:'8%'}}>
       <b>Add Product</b> 
      </Button>

        </div>
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
