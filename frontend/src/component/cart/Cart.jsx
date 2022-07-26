import React,{useState,useEffect} from "react";
import './Cart.css';
import { useSelector, useDispatch } from "react-redux";
import productActions from '../../redux/actions/productActions';
import { Typography,Button } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../../Assets/Tecnocel.png';
import EmptyCart from "./EmptyCart";


const Cart = () => {

  
  const [reload,setReload]=useState(false);
  const dispatch = useDispatch();

  let carrito = useSelector(store => store.productReducer.carrito) 

  let subtotal = carrito.map((item) => item.price * item.__v) 

  let total = subtotal.reduce((sum, a) => sum + a, 0)
  
  


const addToCart = async (id) => {

  await dispatch(productActions.agregarCarrito(id))


};

const removeToCart = async (id, all = false) => {

  if (all) {

    await dispatch(productActions.removerTodoCarrito(id))
   

  } else {
    await dispatch(productActions.removerCarrito(id))
    
  }

};

const clearCart = async () => {
  
  await dispatch(productActions.limpiarCarrito())
 

};

console.log(carrito.length)


  return (
    <div className="contenedor">
    <div className="logo-linkdiv">
      <div className="logo-link">
        <Link className="link-inicio" to="/">Ir al Inicio</Link>
        <img src={logo} alt="logo" height={150}></img>
      </div>
    </div>
       
       {/*  <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div> */}
       
        {/* <EmptyCart/> */}
          <p className="text-envios-gratis"> Envio gratis y 12 cuotas sin interes desde $1.000</p>
          <div className="boxes">
            <div className="box-productos">
              <div className="titulo-productos" style={carrito.length !== 0 ? { display:'grid'} : {display : 'none'}}>
              <p>Producto</p>
              <p>Precio unitario</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
            </div>
              {carrito.length !== 0 ? carrito.map(item=>
              
              
                
                <div key={item.name} className="productos">
                    <div className="img-texto">
                    <img src={item.images} alt="" height="90rem" width="90rem"></img>
                    <h3>{item.name}</h3>
                    </div>
                    <p style={{fontWeight: "bold", fontSize: "16px"}}>$ {item.price}</p>
                    <div className="cantidad">
                  <button className="button-cart" onClick={()=>removeToCart(item._id)}> <RemoveIcon style={{color: "#88D317", cursor: "pointer", fontSize: "2.3rem"}}/></button>
                    <p style={{fontWeight: "bold"}}>{item.__v}</p>
                   <button className="button-cart" onClick={()=>addToCart(item._id)}><AddIcon style={{color: "#88D317", cursor: "pointer", fontSize: "2.3rem"}}/></button>
                    </div>
                    <h5>$ {item.price*item.__v}</h5>
                 <button className="button-cart" onClick={()=>removeToCart(item._id,true)}><DeleteIcon style={{color: "#88D317", cursor: "pointer", fontSize: "2.3rem"}} /></button>
                  </div>
                
                
                ):<EmptyCart/>}


                <button onClick={clearCart} className="vaciar-carrito" style={carrito.length !== 0 ? { display:'flex', backgroundColor: 'transparent', border: 'none', justifyContent: 'center'} : {display : 'none'}}> <DeleteIcon style={{color: "#88D317", cursor: "pointer", fontSize: "2.3rem"}} />Vaciar Carrito</button>
            </div>
            <div className="box-resumen" style={carrito.length !== 0 ? { display:'block'} : {display : 'none'}}>
              <h4>Resumen de compra</h4>
              <div className="total-link">
                <p>Total: ${total}</p>
                
                <button className="button-compra">
                  Iniciar Compra
                </button>
            {/*     <Paypal/> */}
              </div>
            </div>
          </div> 
          </div>
      )
      
};

export default Cart;
