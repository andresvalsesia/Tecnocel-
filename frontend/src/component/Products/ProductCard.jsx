import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import { Link as LinkRouter } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MetaData from "../../component/more/Metadata";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Cards({ props }) {

  const dispatch = useDispatch()
  const [reload, setReload] = useState(false);

  useEffect(() => {

    dispatch(productActions.getAllProducts())
    localStorage.setItem('carrito', JSON.stringify(carrito))

  }, [reload]);

  let carrito = useSelector(store => store.productReducer.carrito)

  const addToCart = async (id) => {

    console.log(id)
    await dispatch(productActions.agregarCarrito(id))
    setReload(!reload);

  };

  return (

    <>

      <MetaData title="Productos" />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          key={props.images}
          className='img-products'
          component="img"
          src={props.images}
          srcSet={props.images}
          alt={props.name}
          height="140"
        />
        <CardContent  >
          <Typography fontSize={"medium"} gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography fontSize={"medium"} variant="body2" color="#88D317">u$d:
            {props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={2}>

          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem'}}>
          <LinkRouter to={`/productDetails/${props._id}`}>
              <Button className='vermas' variant="contained" sx={{ color: '#88D317', fontSize: '', backgroundColor: '#6E3667' }}
                aria-label={`info about ${props.name}`}>Ver mas</Button>
            </LinkRouter>
            <LinkRouter to={``}>
              <AddShoppingCartIcon sx={{ color: '#88D317', fontSize: 'xx-large' }}>
              </AddShoppingCartIcon>
            </LinkRouter>
            </div>

          </Stack>
        </CardActions>
      </Card>
    </>
  );
}