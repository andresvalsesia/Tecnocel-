import './App.css';
import react,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import productActions from './redux/actions/productActions';



function App() {
  const [reload,setReload]=useState(false)
  const dispatch=useDispatch();
  useEffect(() => {
   
     dispatch(productActions.getAllProducts())

  }, [reload]);

 let products=useSelector(store=>store.productReducer.products)
 let carrito=useSelector(store=>store.productReducer.carrito)

 console.log(products)
 console.log(carrito)

 const addToCart = (id) =>{
  
  dispatch(productActions.agregarCarrito(id))
  setReload(!reload)
 };

 const removeToCart = () =>{};
 const clearCart = () =>{};


  return (
     <>
     
    
       <h1>CARRITO DE COMPRAS</h1>
       <h3>productos</h3>
       <article className="box grid-responsive">
        {products && 
         products.map(item=><div
         style={{border:'thin solid gray',padding:'1rem'}}
         key={item._id}>
          <h3>{item.name}</h3>
          <h5>USD {item.price}</h5>

          {item.stock<=0 ?<h5 style={{color:'red'}}>Stock acabado</h5>: <h5>Stock: {item.stock}</h5> }
          
          <button onClick={()=>addToCart(item._id)}>Agregar</button>
         </div>)
        }

       </article>
       <h3>Carrito</h3>
       <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        

        {carrito && carrito.map((item,index) =><div
         style={{border:'thin solid gray',padding:'1rem'}}
         key={index}>
          <h3>{item.name}</h3>
          <h5>USD {item.price*item.__v}</h5>
          <h6>Cantidad: {item.__v}</h6>  
          <button>Eliminar uno</button>
          <button>Eliminar todos</button>
         </div> ) }

       </article>


      </>  

  );
}

export default App;
