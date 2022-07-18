const initialState={
    products:[],
    oneProduct:{},
    carrito:[]
   
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

         case 'AGREGAR_CARRITO':

            let itemCarrito=state.carrito.find(item=>item._id===action.payload._id)
            
            return itemCarrito ? 
            { ...state,
                carrito:state.carrito.map(item=>item._id===action.payload._id?{...item,__v:item.__v+1}:item )
            }       
            
             : { ...state,
                        carrito:[...state.carrito,{...action.payload,__v:1}]
               }     
              
                default:
                    return state;
        }

    }
export default productReducer;