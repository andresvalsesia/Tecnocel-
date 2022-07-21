import axios from 'axios';
import apiUrl from '../../apiUrl';


const productActions= {

    getAllProducts: ()=>{

       return async(dispatch,getState)=>{
           const res= await axios.get(`${apiUrl}products`);
           dispatch({type:'GET_PRODUCTS', payload: res.data.response.products})
       } 

    },
    
    getOneProduct: (id)=>{
         
        return async(dispatch,getState)=>{
            const res= await axios.get(`${apiUrl}product/${id}`);
            dispatch({type:'GET_ONE_PRODUCT',payload: res.data.response.product})
        }

    },

    agregarCarrito:(id)=>{
      
        return async(dispatch,getState)=>{
            const res= await axios.get(`${apiUrl}product/${id}`);
            dispatch({type:'AGREGAR_CARRITO',payload: res.data.response.product})
        }

    },

    removerCarrito:(id)=>{

        return async(dispatch,getState)=>{
           
            dispatch({type:'QUITAR_CARRITO',payload:id})
         
        }

    },
    removerTodoCarrito:(id)=>{

        return async(dispatch,getState)=>{
             
            dispatch({type:'QUITAR_TODO_CARRITO',payload:id})
           
        }

    },

    limpiarCarrito:()=>{
        return async(dispatch,getState)=>{
            dispatch({type:'LIMPIAR_CARRITO'})
        }

    }
    
    // filterProducts: (input) => {
    //     return async (dispatch, getState) => {
    //         dispatch ({type:"FILTERPRODUCTS", payload: input})
    //     }
    // }
    


}

export default productActions;