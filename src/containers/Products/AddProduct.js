import React,{Component} from 'react';
import Input from '../../components/UI/Input/input';
import classes from './products.module.css';
import {connect} from 'react-redux';
import {checkValidity,updateObject} from '../../shared/utility';
import * as actions from '../../store/action/product';
class AddProduct extends Component {
   UNSAFE_componentWillReceiveProps(props){
      
    var someProperty = {...this.state.orderForm}
    someProperty.ProductTitle.value = props.name;
    someProperty.ProductCategory.value = props.category;
    someProperty.Price.value = props.price;
        let formValid = props.id ? true : false;
    this.setState({someProperty,checked:props.checked,file:props.image,formIsValid:formValid,id:props.id})
   }
  constructor(props){
      super(props)
      
  this.state = {
      orderForm: {
        ProductCategory: {
          elementType: 'select',
          elementConfig: {
              options: [
                  {value:'none', displayValue:'Select an Option'},
                  {value: 'Books',  displayValue: 'Books'},
                  {value: 'Hoodie / T-shirt', displayValue: 'Hoodie / T-shirt'},
                  {value: 'Bags', displayValue:'Bags'},
                  {value: 'Misc', displayValue:'Misc'}
              ],
              
          },
          value: 'Select an Option',
         
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
              value: 0,
              validation: {
                  required: true,
                  minLength: 1,
                  maxLength: 8,
                  isNumeric: true
              },
              valid: false,
              touched: false
          },
        
      },
      formIsValid: false,
      checked:false,
      file:'no image selected',
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
   
    if(this.props.id){
        this.props.onEditProduct(this.state.id,formData.ProductTitle,formData.ProductCategory,formData.image,formData.Price,formData.topProducts)
    }else{
        this.props.onAddProduct(Math.random(),formData.ProductTitle,formData.ProductCategory,formData.image,formData.Price,formData.topProducts);
        var someProperty = {...this.state.orderForm}
        // someProperty.ProductTitle.value = null;
        // someProperty.ProductCategory.value = null;
        someProperty.Price.value = '';
        //     let formValid = false;
        let price = this.state.orderForm.Price;
        this.setState({someProperty,checked:false,file:null,someProperty})
        console.log(this.state.orderForm)
    }
   
    this.props.onCancel()
  }
  cancelCourse = () => { 
    document.getElementById("clear").reset();
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
          <form id='clear' onSubmit={this.orderHandler}  >
              {formElementsArray.map(formElement => (
                <div key={formElement.id}>
                <h6 style={{float:'left', padding:'6px'}}>{formElement.id}</h6>
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
              <label style={{fontWeight:'500'}}> <input type="checkbox"
              style={{margin:'5px'}}
               checked={this.state.checked} 
               onChange={this.handleCheckClick} 
               /> 
              Top Products
              </label>
              <div style={{display:'flex',flexDirection:'column'}}>
              <h6 style={{float:'left', padding:'5px'}}>Upload Product Image</h6>
              {/* <label style={{width:'20%'}} className={classes.label}  for="files">Upload</label> */}
        <input className={classes.label} type="file" style={{margin:'5px',marginBottom:'0px'}}   id="files"  onChange={this.handleChange}/> 
                <b  style={{overflow:'scroll',marginTop:'0px'}}>{this.state.file}</b>
      </div>
              <hr/>
              <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around',margin:'10px'}}>
              <button    className={classes.buttonCancel}>
       <b style={{color:'black'}}>Cancel</b> 
      </button>
              <button disabled={!this.state.formIsValid}  className={classes.button}>
       <b style={{color:'white'}}>SAVE</b> 
      </button>
             

              </div>
          </form>
          
      );
    
      return (
          <div className={classes.ContactData}>
              <h4 style={{textAlign:'center'}}>Add Product</h4>
              {form}
          </div>
      );
  }
}


const mapDispatchToProps = dispatch => {
  return{
      onAddProduct : (id,name,category,image,price,topProduct) => dispatch(actions.addProduct(id,name,category,image,price,topProduct)),
      onEditProduct : (id,name,category,image,price,topProduct) => dispatch(actions.editProduct(id,name,category,image,price,topProduct)),

  }
};


export default connect( '',mapDispatchToProps)(AddProduct);
