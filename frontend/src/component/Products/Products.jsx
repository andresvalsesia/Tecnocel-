import * as React from 'react';
import './Product.css'
import Box from '@mui/material/Box';
import Card from './productCard'
import Notfound from '../Products/Notfound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import { useSelector } from 'react-redux';

function Products(props) {
  

    const [search, setSearch] = React.useState('')
    const dispatch = useDispatch() 

    useEffect (() => { 
        dispatch(productActions.getAllProducts())
        //eslint-disable-next-line
    },[]);

    // const product = useSelector(store => store.productReducer.filter)
    const products = useSelector(store => store.productReducer.products)
    console.log(products)
   
   
    return (
        
       
        <div className='contenedor-productos'>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', paddingTop:'8rem' }}>
            <div className='searchConteiner'>
            <input className='search' onKeyUp={(e) => { setSearch(e.target.value) }} placeholder='Search product' type='text'></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></div>
        </Box>
        

    <Box className='contenedor-tarjetas' >
    {
        products && products.map((item, index) => <Card key={index} props={item} />)
    }
    </Box>
    </div>
    
    )

}
export default Products;
