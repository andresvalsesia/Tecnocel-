import './Product.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import { Link as LinkRouter } from 'react-router-dom'


export default function Card({props}) {

    return( 
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
                                <button>
                                    <IconButton
                                        sx={{ color: '#E65100' }}
                                        aria-label={`info about ${props.name}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </button>
                            }
                        />
                    </ImageListItem>

            </ImageList>
            );
        }