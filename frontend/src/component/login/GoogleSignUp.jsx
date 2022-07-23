import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import userActions from '../../redux/actions/userActions'
/*  import {useNavigate} from 'react-router-dom'  */

export default function GoogleSignUp() {
    
    const dispatch = useDispatch()
   /*  const navigate = useNavigate()  */
    
    async function handleCallbackResponse(response) {
        console.log(response.credential)
         let userObject = jwt_decode(response.credential);
        console.log(userObject)
        const userData ={
            name: userObject.given_name,
            surname: userObject.family_name,
            email: userObject.email, 
            photoUser: userObject.picture, 
            password: userObject.sub,
            country:'Argentina',
            from: 'google'
        }
        
        const res = await dispatch(userActions.signUpUserMessage (userData))
        if(res.data.success){
             /* navigate('/login' */ 
        }} 

    useEffect (() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '949538147455-clcn44k8oer7nk45bduuu6v4urimlcln.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium"}
        )
    });

    return (
        <div>
            <div id='buttonDiv'>{                 
            <IconButton sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <GoogleIcon />
                </IconButton>}
            </div>
        </div>
    )
}