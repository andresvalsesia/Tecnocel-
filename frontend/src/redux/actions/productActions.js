import axios from 'axios';
import apiUrl from '../../url';


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

    createProduct: (data)=>{
        return async(dispatch,getState)=>{
            const res= await axios.post(`${apiUrl}product/new`,{data});
            dispatch({type:'MESSAGE', payload: {view:true,message:res.data.message,success:res.data.success}});
        }

    },

    deleteProduct:(id)=>{

        return async(dispatch,getState)=>{
            const res= await axios.delete(`${apiUrl}product/${id}`);
            dispatch({type:'MESSAGE', payload: {view:true,message:res.data.message,success:res.data.success}});
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
    


}

export default productActions;