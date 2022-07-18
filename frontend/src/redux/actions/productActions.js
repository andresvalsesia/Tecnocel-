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

    }


}

export default productActions;