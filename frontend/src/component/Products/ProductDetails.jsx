import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import productActions from '../../redux/actions/productActions';

export default function ProductDetails() {
    const {id}=useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getOneProduct(id))
        // eslint-disable-next-line
    }, [id])
        
    const card = useSelector(store => store.productsReducer.oneProduct)
    return (
        <>
        <div key={card._id} className='details'>
        <Card className='cardDetails' key='index' sx={{maxWidth: "200vh"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={card.images}
                    alt={card.name}
                />
                <CardContent>
                    <Typography style={{color: "white"}} gutterBottom variant="h5" component="div">
                        {card.name}
                        
                    </Typography>
                    <p style={{color: "white"}}>{card.description}</p>
                    
              </CardContent>
            </CardActionArea>
        </Card>
        
        
        </div>  
        </>
        )
    ;
}
