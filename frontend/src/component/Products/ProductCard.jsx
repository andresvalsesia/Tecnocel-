import './Product.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// import { Link as LinkRouter } from 'react-router-dom'


export default function Card({ props }) {

    return (
        <>
            <ImageList className='imagenlist' sx={{ gap: '40px!important', height: "100%", width: "30%" }}>

                <ImageListItem key="Subheader" cols={1} >

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
                            <button className='buttonCard' >
                                <IconButton
                                    sx={{ color: '#1A0315', backgroundColor: '#88D317' }}
                                    aria-label={`info about ${props.name}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            </button>
                        }
                    />
                </ImageListItem>

            </ImageList>

            <ScrollToTop
                style={{ backgroundColor: "#272727", color: "#88D317" }}
                smooth
                component={< ArrowCircleUpIcon />}

            />
        </>
    );
}