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
    }, []);
        
    let card = useSelector(store => store.productReducer.oneProduct)
    console.log(card)
    return (
        <>

         {card && 
          
          <div key={card?._id} className='details'> 
        <Card className='cardDetails' key='index' sx={{maxWidth: "100vw"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={card?.images}
                    alt={card?.name}
                />
                <CardContent>
                    <Typography style={{color: "black"}} gutterBottom variant="h5" component="div">
                        {card?.name}
                        
                    </Typography>
                    <p style={{color: "black"}}>{card?.description}</p>
                    
              </CardContent>
            </CardActionArea>
        </Card>
        
        
         </div>   
        
        } 
        
        </>
        )
    ;
}