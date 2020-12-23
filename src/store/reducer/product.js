import ProductsData from '../../data/product-data';
import Product from '../../modal/Product';
import {CATEGORY_PRODUCT,SET_PRODUCT,RANGE_FILTER,ADD_PRODUCT,EDIT_PRODUCT} from '../action/product';

const initialState = {
    totalProducts: ProductsData,
    categorizedProducts:ProductsData,
    products : ProductsData,
    rangeFilterdData:ProductsData,
    categoryName:false,
    rangeFilter:false
  
}

export default  (state = initialState,action ) => {
    switch(action.type){

        case SET_PRODUCT:
            return{
                ...state,
                products:state.products,
                categorizedProducts:state.products,
                rangeFilterdData:state.products
            }
        case ADD_PRODUCT:
                const newProduct = new Product(
                    action.id,
                    action.name,
                    action.category,
                    action.image,
                    action.price,
                    action.topProduct
                  );
            return{
                ...state,  
             products: state.products.concat(newProduct),
            }
        case EDIT_PRODUCT:
                const productIndex = state.products.findIndex(
                    prod => prod.id === action.id
                );
                const updatedProduct = new Product(action.id,
                    action.name,
                    action.category,
                    action.image,
                    action.price,
                    action.topProduct
                   );
                    const updatedProducts = [...state.products];
                    updatedProducts[productIndex] = updatedProduct;
                const categorizedProductIndex = state.categorizedProducts.findIndex(
                    prod => prod.id === action.id
                );
                const updatedCategorizedProducts = [...state.categorizedProducts];
                updatedCategorizedProducts[categorizedProductIndex] = updatedProduct;

                //for filtered products

                const rangeFilteredProductIndex = state.rangeFilterdData.findIndex(
                    prod => prod.id === action.id
                );
                const updatedRangeFilteredProducts = [...state.rangeFilterdData];
                updatedRangeFilteredProducts[rangeFilteredProductIndex] = updatedProduct;
                return{
                    ...state,
                    products: updatedProducts,
                    categorizedProducts : updatedProducts,
                    rangeFilterdData : updatedProducts
                    
                }
        case CATEGORY_PRODUCT:
            let filteredArray = [];
            state.products.map((value,index) => {
                if(value.category === action.name){
                    filteredArray.push(value)
                }
            })
            return{
                ...state,
                
                    categoryName : true,
                    categorizedProducts : filteredArray }
        case RANGE_FILTER:
                let filteredRangeArray = [];
                state.categorizedProducts.map((value,index) => {
                    if(value.price >= action.from && value.price <= action.to){
                        filteredRangeArray.push(value)
                    }
                })
                    return{
                        ...state,
                        categoryName:false,
                        rangeFilter:true,
                        rangeFilterdData : filteredRangeArray
                        // products:state.categorizedProducts.filter(product => 
                        //     product.price >= action.from && product.price <= action.to)
                    }
                    default:
                        return state
        }
        
      
};