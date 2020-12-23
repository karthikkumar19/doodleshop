import React,{Component} from 'react';
import Input from '../../components/UI/Input/input';
import classes from './products.module.css';
import {connect} from 'react-redux';
import {checkValidity,updateObject} from '../../shared/utility';
import * as actions from '../../store/action/product';
class AddProduct extends Component {
   componentWillReceiveProps(props){
       console.log('props',props.image)
    var someProperty = {...this.state.orderForm}
    someProperty.ProductTitle.value = props.name;
    someProperty.ProductCategory.value = props.category;
    someProperty.Price.value = props.price;
    
  //   someProperty.followers.value = followers;
  //   someProperty.instaId.value = insta_id;
  //   someProperty.pageLink.value = link;
    this.setState({someProperty,checked:props.checked,file:props.image,formIsValid:true,id:props.id})
   }
  constructor(props){
      super(props)
      
  this.state = {
      orderForm: {
        ProductCategory: {
          elementType: 'select',
          elementConfig: {
              options: [
                  {value: 'Books', displayValue: 'Books'},
                  {value: 'Hoodie / T-shirt', displayValue: 'Hoodie / T-shirt'},
                  {value: 'Bags', displayValue:'Bags'},
                  {value: 'Misc', displayValue:'Misc'}
              ],
              
          },
          value: 'Books',
         
          validation: {},
          valid: true
      },
          ProductTitle: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Enter Product Name'
              },
              value: '',
              validation: {
                  required: true
              },
              valid: false,
              touched: false
          },
          Price: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Enter Price'
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 1,
                  maxLength: 5,
                  isNumeric: true
              },
              valid: false,
              touched: false
          },
        
      },
      formIsValid: false,
      checked:false,
      file:null,
      id:null
  }
  this.handleChange = this.handleChange.bind(this)

  }

  

handleChange(event) {
  this.setState({
    file: URL.createObjectURL(event.target.files[0])
  })
}
  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
  }
  orderHandler = ( event ) => {
      event.preventDefault();
      const formData = {};
      for (let formElementIdentifier in this.state.orderForm) {
          formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
      }
      formData.topProducts = this.state.checked;
      formData.image = this.state.file;
    console.log(formData);
    if(this.props.id){
        this.props.onEditProduct(this.state.id,formData.ProductTitle,formData.ProductCategory,formData.image,formData.Price,formData.topProducts)
    }else{
        this.props.onAddProduct('p88',formData.ProductTitle,formData.ProductCategory,formData.image,formData.Price,formData.topProducts)
    }
  }

  

  inputChangedHandler = (event, inputIdentifier) => {
      const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier],{
              value:event.target.value,
              valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
              touched:true
      });
      const updatedOrderForm = updateObject(this.state.orderForm, {
          [inputIdentifier]:updatedFormElement
      });
      
      let formIsValid = true;
      for (let inputIdentifier in updatedOrderForm) {
          formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
      this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  }

  render () {

      const formElementsArray = [];
      for (let key in this.state.orderForm) {
          formElementsArray.push({
              id: key,
              config: this.state.orderForm[key]
          });
      }
      let form = (
          <form onSubmit={this.orderHandler}>
              {formElementsArray.map(formElement => (
                <div >
                <b style={{float:'left', padding:'10px'}}>{formElement.id}</b>
                  <Input 
                      key={formElement.id}
                      elementType={formElement.config.elementType}
                      elementConfig={formElement.config.elementConfig}
                      value={formElement.config.value}
                      invalid={!formElement.config.valid}
                      shouldValidate={formElement.config.validation}
                      touched={formElement.config.touched}
                      changed={(event) => this.inputChangedHandler(event, formElement.id)} /> </div>
              ))}
              <label > <input type="checkbox"
               checked={this.state.checked} 
               onChange={this.handleCheckClick} 
               />Top Products
              
              </label>
              <div>
        <input type="file"  onChange={this.handleChange}/>
                <b>{this.state.file}</b>
      </div>
              
              <div style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
              <button btnType="Success" >CANCEL</button>
              <button btnType="Success" disabled={!this.state.formIsValid}>SAVE</button>

              </div>
          </form>
          
      );
    
      return (
          <div className={classes.ContactData}>
              <h4 style={{marginBottom:'20px'}}>Add Product</h4>
              {form}
          </div>
      );
  }
}
const mapStateToProps = state =>{
    return{
        product: state.product
        // token: state.auth.token,
        // userId:state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
  return{
      onAddProduct : (id,name,category,image,price,topProduct) => dispatch(actions.addProduct(id,name,category,image,price,topProduct)),
      onEditProduct : (id,name,category,image,price,topProduct) => dispatch(actions.editProduct(id,name,category,image,price,topProduct)),

  }
};


export default connect( mapStateToProps,mapDispatchToProps)(AddProduct);
