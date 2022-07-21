import './App.css';
import react,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import productActions from './redux/actions/productActions';
import Products from './component/Products/Products';

// const storage = JSON.parse(localStorage.getItem('carrito'))

function App() {

  // const [reload,setReload]=useState(false)
  const dispatch=useDispatch();


  useEffect(() => {
   
     dispatch(productActions.getAllProducts())

     
    

  }, []);

  let products = useSelector(store=>store.productReducer.products)
  console.log(products)

//  let products=useSelector(store=>store.productReducer.products)
//  let carrito=useSelector(store=>store.productReducer.carrito)
 

 
//  if (storage) {
//    carrito = storage;
//  } 




//  const addToCart = async (id) =>{
  
//   await dispatch(productActions.agregarCarrito(id))
//   setReload(!reload)
 
//  };

//  const removeToCart = async (id,all=false) =>{

//    if(all){

//       await dispatch(productActions.removerTodoCarrito(id))
//       setReload(!reload)

//    } else{
//       await dispatch(productActions.removerCarrito(id))
//       setReload(!reload)
//    }
 
//  };   

//  const clearCart = async () =>{

//      await dispatch(productActions.limpiarCarrito())
//      setReload(!reload)
      
//  };


  return (
     <>
    
      <Products/>

      </>  

  );
}

export default App;
