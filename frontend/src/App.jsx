import './App.css';
import react,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import productActions from './redux/actions/productActions';



function App() {

  const dispatch=useDispatch();
  useEffect(() => {
   
     dispatch(productActions.getAllProducts())

  }, []);

 let products=useSelector(store=>store.productReducer.products)

 console.log(products)

  return (
     <>
     
    
       <h1>PROYECTO</h1>

      </>  

  );
}

export default App;
