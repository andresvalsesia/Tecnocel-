const initialState={
    products:[],
    oneProduct:{},
    carrito:[],
    filter: []
   
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
          

          case 'QUITAR_CARRITO':                                         
               let itemABorrar=state.carrito.find(item=>item._id===action.payload)
            
               return itemABorrar.__v>1 ? {
                 ...state,
                 carrito: state.carrito.map(item=>item._id===action.payload?{...item,__v:item.__v-1}:item )
                } 
                : {
                    ...state,
                    carrito:state.carrito.filter(item=>item._id!==action.payload)
                }

              
          case 'QUITAR_TODO_CARRITO':
         
               return{
                ...state,
                carrito:state.carrito.filter(item=>item._id!==action.payload)
                
               }  

          case 'LIMPIAR_CARRITO':

         
                 return {
                    ...state,
                    carrito:[]
                 }

            // case "FILTERPRODUCTS":
            //     let productFilter = state.products.filter(item => item.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            //         return {
            //             ...state,
            //             filter: productFilter
            //         }
                  

                default:
                    return state;
        }

    }
export default productReducer;