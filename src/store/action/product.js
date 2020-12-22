export const CATEGORY_PRODUCT = 'CATEGORY_PRODUCT';
export const SET_PRODUCT = 'SET_PRODUCT';
export const RANGE_FILTER = 'RANGE_FILTER';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SELECTOR = 'SELECTOR';


export const categoryProduct = categoryName => {
    return  (dispatch) => {
         dispatch(
             {
        type: CATEGORY_PRODUCT,
        name:categoryName
    }
         )
     }
}


export const setProduct = () => {
    console.log('set')
    return(dispatch) => {
        dispatch(
            {
                type:SET_PRODUCT
            }
        )
    }
}

export const rangeFilter = (from,to) => {
    return(dispatch) => {
        dispatch(
            {
                type:RANGE_FILTER,
                from:from,
                to:to
            }
        )
    }
}

export const addProduct = (id,name,category,image,price,topProduct) => {
    return(dispatch) => {
        dispatch({
            type:ADD_PRODUCT,
            id:id,
            name:name,
            category:category,
            image:image,
            price:price,
            topProduct:topProduct
        })
    }
}

