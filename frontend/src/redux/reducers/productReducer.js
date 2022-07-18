const initialState={
    products:[],
    oneProduct:{}
   
}

const productReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'GET_PRODUCTS':
               return{
                ...state,
                products:action.payload
               }
          
        case 'GET_ONE_PRODUCT':
                return{
                 ...state,
                 oneProduct:action.payload
                }
     

                default:
                    return state;
        }
    }
export default productReducer;