import React,{useEffect} from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import './admin.css';

const Admin = () => {

const dispatch=useDispatch();

useEffect(() => {
   
    dispatch(productActions.getAllProducts())
 

 }, []);

 let products=useSelector(store=>store.productReducer.products)

  return (
    <div className="container">
      
      <div className="admin-product-form-container">
         
         <form action="">
            <h3>Agregar producto</h3>
            <input type="text" placeholder="Ingrese el nombre del producto" name="producto_nombre" className="box" />
            <input type="number" placeholder="Ingrese el precio del producto" name="producto_precio" className="box" />
            <input type="file" accept="image/png, image/jpeg, image/jpg"  name="producto_image" className="box" />
            <input type="submit" class="btn" name="add_product" value="Agregar" />
         </form>

      </div>
      
      <div className="product-display">
         <table class="product-display-table">
         <thead>
            <tr>
            <td>IMAGEN</td>
            <td>PRODUCTO</td>
            <td>PRECIO</td>
            <td colspan="2">ACCION</td>
            </tr>
         </thead>
    {products && products.map(product =><tr>
            <td><img src={product.images} alt="img" className="img-product"/></td>
            <td>{product.name}</td>
            <td>USD {product.price}</td>
            <td colspan="2">
                <button className="btn"><BorderColorIcon sx={{fontSize:'2rem',marginRight:'5px'}} /> EDITAR</button>
                <button className="btn"><DeleteIcon sx={{fontSize:'2rem',marginRight:'5px'}} /> ELIMINAR</button>
            </td>
            </tr>)}     

         </table>

      </div>

    </div>
  )
}

export default Admin