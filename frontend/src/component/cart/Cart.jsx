import React from "react";
import './Cart.css';
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {

  const dispatch = useDispatch();

/*   const subtotal = data.map((item) => item.price * item.quantity) */

/*   const total = subtotal.reduce((sum, a) => sum + a, 0) */



  return (
    <div className="contenedor">
    <div className="logo-linkdiv">
      <div className="logo-link">
        <Link className="link-inicio" to="/">Ir al Inicio</Link>
        <img src="https://www.clarin.com/img/2020/03/18/jubilados-y-pensionados-podran-comprarse___KZIwNegWR_340x340__1.jpg" alt="logo" height={150}></img>
      </div>
    </div>
       
       {/*  <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div> */}
       
        
          <p className="text-envios-gratis"> Envio gratis y 6 cuotas sin interes desde $1.000</p>
          <div className="boxes">
            <div className="box-productos">
              <div className="titulo-productos">
              <p>Producto</p>
              <p>Precio unitario</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
              </div>
              
                  <div className="productos">
                    <div className="img-texto">
                    <img src="https://www.clarin.com/img/2020/03/18/jubilados-y-pensionados-podran-comprarse___KZIwNegWR_340x340__1.jpg" alt="" height="90rem" width="90rem"></img>
                    <h3>Nombre Producto</h3>
                    </div>
                    <p style={{fontWeight: "bold"}}>$ Precio</p>
                    <div className="cantidad">
                    <RemoveIcon style={{color: "#88D317", cursor: "pointer"}}/>
                    <p>Cantidad</p>
                    <AddIcon style={{color: "#88D317", cursor: "pointer"}}/>
                    </div>
                    <h5>$ Total</h5>
                    <DeleteIcon style={{color: "#88D317", cursor: "pointer"}} />
                  </div>
           
                <p className="vaciar-carrito"> <DeleteIcon style={{color: "#88D317", cursor: "pointer"}} />Vaciar Carrito</p>
            </div>
            <div className="box-resumen">
              <h4>Resumen de compra</h4>
              <div className="total-link">
                <p>Total: TOTAL</p>
                <p>{}</p>
                <button className="button-compra">
                  Iniciar Compra
                </button>
           {/*      <Paypal/> */}
              </div>
            </div>
          </div>
          </div>
      )
      
};

export default Cart;