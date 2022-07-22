import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import data from './data';

const Paypal = () => {
    const [ErrorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    const initialOptions = { // Genero las opciones para enviarle al CDN
        "client-id": "ARH3kROeFLFG_kZ2qvJdKp6SR9vb1HiCEdym9TDseWoxyp2d7hicxm8cgcAirUO0L7jPMg186ch7KcyL",
        currency: "USD", //Establesco la moneda
        intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos
        
    };

    const subtotal = data.map((item) => item.price * item.quantity)

    const total = subtotal.reduce((sum, a) => sum + a, 0)

    let productsId= data.map(items=>items.id)
    console.log(productsId)

    const createOrder = (data, actions) => {
        //Creo la orden de con los datos, esta puede ser general o con detalle de items
       console.log(data)
     return actions.order.create({
             purchase_units: [
        {
           description:"items",
           amount: {
             value: total,
           },
         },
       ],
    })}

    const onApprove = (data, actions) => { //recibo el resultado de mi operacion
        console.log(data)
      return actions.order.capture()
      .then(function (details) {
          const { payer } = details;
          setSuccess(true);
          console.log('Capture result', details, JSON.stringify(details, null, 2)); //veo los datos en consola
                  var transaction = details.purchase_units[0].payments.captures[0];
                  alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
          console.log(details)
          setOrderID(transaction.id)
      });  
    };

    const onError = (data, actions) => { //Capturo error en caso de que exista
        setErrorMessage("An Error occured with your payment ");
      };

    const onCancel = (data) => {
        console.log('You have cancelled the payment!', data);
    }	        

  return (
    <PayPalScriptProvider options={initialOptions}>
    <PayPalButtons 
        createOrder={createOrder}
        onApprove={ onApprove}
        onError={onError}
        onCancel={onCancel}
    />
</PayPalScriptProvider>
  )
}

export default Paypal