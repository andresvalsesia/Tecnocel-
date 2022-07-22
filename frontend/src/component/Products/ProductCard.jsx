import React,{useState,useEffect} from 'react';
import './Product.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { useDispatch,useSelector } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import InfoIcon from '@mui/icons-material/Info';
import { Link as LinkRouter } from 'react-router-dom';
import {Button} from '@mui/material';

export default function Card({props}) {
  const dispatch = useDispatch()
  const [reload,setReload]=useState(false);

  useEffect(() => {
   
    dispatch(productActions.getAllProducts())
    localStorage.setItem('carrito',JSON.stringify(carrito))

 }, [reload]);

 let carrito=useSelector(store=>store.productReducer.carrito)

    const addToCart = async (id) =>{
        
        console.log(id)
        await dispatch(productActions.agregarCarrito(id))
        setReload(!reload);
       
       };

    return( 
        <>
      
 
            <ImageList className='imagenlist' sx={{ gap: '40px!important', width: "15%", height:"100%", width:"40%" }}>
         
                <ImageListItem key="Subheader" cols={2} >
                   
                </ImageListItem>
                    <ImageListItem key={props.images}>
                        <img className='img-products'
                            src={`${props.images}?w=248&fit=crop&auto=format`}
                            srcSet={`${props.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={props.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={props.name}
                            subtitle={props.price}
                            actionIcon={
                                <LinkRouter to={`/productDetails/${props._id}`}>
                                    <IconButton
                                        sx={{ color: '#E65100' }}
                                        aria-label={`info about ${props.name}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </LinkRouter>
                            }
                        />
                       
                    </ImageListItem>
                   

            </ImageList>
          
            <Button onClick={()=>addToCart(props._id)}>Agregar Carrito</Button>
             </>
            );
        }