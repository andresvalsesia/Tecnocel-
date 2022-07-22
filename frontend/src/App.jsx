import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import userActions from './redux/actions/userActions';
import productActions from './redux/actions/productActions';
import LoginSignUp from '../src/component/login/LoginSignUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditarProduct from './component/admin/EditarProduct';
import ScrollToTop from 'react-scroll-to-top';
import Cart from '../src/component/cart/Cart';
import Header from '../src/component/home/Header';
import Footer from '../../frontend/src/Footer';
import About from '../src/component/about/About';
import Admin from '../src/component/admin/Admin';
import Contact from '../src/component/contact/Contact';
import Home from '../src/component/home/Home';
import Products from '../src/component/Products/Products';
import './App.css';
import ProductDetails from './component/Products/ProductDetails';
import Politicas from './component/politicas/Politicas';

const storage = JSON.parse(localStorage.getItem('carrito'))

function App() {

  const [reload, setReload] = useState(false)
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(productActions.getAllProducts())
    localStorage.setItem('carrito', JSON.stringify(carrito))

    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      dispatch(userActions.verificarToken(token))
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

  }, [reload]);

  let products = useSelector(store => store.productReducer.products)
  let carrito = useSelector(store => store.productReducer.carrito)
  let user = useSelector(store => store.userReducer.user)



  if (storage) {
    carrito = storage;
  }


  let message = useSelector(store => store.userReducer.snackbar)

  if (message.view) {

    message.success ? toast.success(message.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
      :

      toast.warn(message.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


    if (Array.isArray(message.message)) {
      message.message.map((text) => { toast['error'](text.message) })
    }

    dispatch({ type: 'MESSAGE', payload: { view: false, message: "", success: false } })
  }





  const addToCart = async (id) => {

    await dispatch(productActions.agregarCarrito(id))
    setReload(!reload)

  };

  const removeToCart = async (id, all = false) => {

    if (all) {

      await dispatch(productActions.removerTodoCarrito(id))
      setReload(!reload)

    } else {
      await dispatch(productActions.removerCarrito(id))
      setReload(!reload)
    }

  };

  const clearCart = async () => {

    await dispatch(productActions.limpiarCarrito())
    setReload(!reload)

  };


  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Admin />} />
        {/* <Route path="/cart" element={<Cart/>}/> */}
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<EditarProduct />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/politicas" element={<Politicas />} />

      </Routes>

      <Footer />
      <ScrollToTop style={{ right: '8px' }}
        smooth
        viewBox="0 0 24 24"
        component={<ArrowUpwardIcon />}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    </>

  );
}

export default App;


{/*  <h1>CARRITO DE COMPRAS</h1>
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
          <button onClick={()=>removeToCart(item._id)}>Eliminar uno</button>
          <button onClick={()=>removeToCart(item._id,true)}>Eliminar todos</button>
         </div> ) }

       </article>
 */}