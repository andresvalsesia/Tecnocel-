import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from "./data";
import logo from '../../Assets/logo2.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Paypal from "./Paypal";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );


  console.log(data)

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return toast.error("Product Stock Limited");
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const subtotal = data.map((item) => item.price * item.quantity)

  const total = subtotal.reduce((sum, a) => sum + a, 0)


  return (
    <div className="contenedor">
    <div className="logo-linkdiv">
      <div className="logo-link">
        <Link className="link-inicio" to="/">Ir al Inicio</Link>
        <img src={logo} alt="logo" height={150}></img>
      </div>
    </div>
      {data.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <p className="text-envios-gratis"> Envio gratis y 6 cuotas sin interes desde $1.000</p>
          <div className="boxes">
            <div className="box-productos">
              <div className="titulo-productos">
              <p>Producto</p>
              <p>Precio unitario</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
              </div>
                {data.map((item) => (
                  <div className="productos">
                    <div className="img-texto">
                    <img src={item.images} alt={item.name} height="90rem" width="90rem"></img>
                    <h3>{item.name}</h3>
                    </div>
                    <p style={{fontWeight: "bold"}}>$ {item.price}</p>
                    <div className="cantidad">
                    <RemoveIcon style={{color: "#88D317", cursor: "pointer"}}/>
                    <p>{item.quantity}</p>
                    <AddIcon style={{color: "#88D317", cursor: "pointer"}}/>
                    </div>
                    <h5>$ {item.quantity * item.price}</h5>
                    <DeleteIcon style={{color: "#88D317", cursor: "pointer"}} />
                  </div>
                ))}
                <p className="vaciar-carrito"> <DeleteIcon style={{color: "#88D317", cursor: "pointer"}} />Vaciar Carrito</p>
            </div>
            <div className="box-resumen">
              <h4>Resumen de compra</h4>
              <div className="total-link">
                <p>Total: {total}</p>
                <p>{}</p>
                <Link className="button-compra">
                  Iniciar Compra
                </Link>
                <Paypal/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
