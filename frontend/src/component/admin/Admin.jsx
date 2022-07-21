import React,{useState,useEffect} from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';
import productActions from '../../redux/actions/productActions';
import {Link as LinkRouter} from 'react-router-dom';
import './admin.css';

const Admin = () => {

const dispatch=useDispatch();
const [reload,setReload]=useState(false)
useEffect(() => {
   
    dispatch(productActions.getAllProducts())
 

 }, [reload]);

 const createProduct = async (e) => {
       e.preventDefault();
               
       const data={
        name:e.target[0].value,
        description:e.target[1].value,
        price:e.target[2].value,
        brand:e.target[3].value,
        color:e.target[4].value,
        sizeTv:e.target[5].value,
        RAM:e.target[6].value,
        category:e.target[7].value,
        stock:e.target[8].value,
        system:e.target[9].value,
        disc:e.target[10].value,
        processor:e.target[11].value,
        images:e.target[12].value

       }
       console.log(data)

   await dispatch(productActions.createProduct(data)) 
   setReload(!reload)        
 }

  const deleteProduct= async(id)=>{
        
    await dispatch(productActions.deleteProduct(id))
    setReload(!reload)
  }


 let products=useSelector(store=>store.productReducer.products)
 



  return (
    <div className="container">
      
      <div className="admin-product-form-container">
         
         <form onSubmit={createProduct}>
            <h3>Agregar producto</h3>
            <input type="text" placeholder="Ingrese el nombre del producto" name="producto_nombre" className="box" required />
            <input type="text" placeholder="Ingrese la descripcion del producto" name="producto_descrep" className="box" required />
            <input type="number" placeholder="Ingrese el precio del producto" name="producto_precio" className="box" required />
            <input type="text" placeholder="Ingrese la marca del producto" name="producto_marca" className="box" />
            <input type="text" placeholder="Ingrese el color del producto" name="producto_color" className="box" />
            <input type="text" placeholder="Ingrese las pulgadas " name="producto_pulgadas" className="box" />
            <input type="text" placeholder="Ingrese capacidad de memoria RAM" name="producto_RAM" className="box" />
            <input type="text" placeholder="Ingrese la categoria del producto" name="producto_cat" className="box" required />
            <input type="number" placeholder="Ingrese el stock" name="producto_stock" className="box" required />
            <input type="text" placeholder="Ingrese el sistema operativo" name="producto_system" className="box" />
            <input type="text" placeholder="Ingrese el disco del producto" name="producto_disco" className="box" />
            <input type="text" placeholder="Ingrese el procesador del producto" name="producto_prosser" className="box" />
 
            <input type="text" placeholder="Ingrese la imagen del producto" name="producto_imagen" className="box" required />
            {/* <input type="file" accept="image/png, image/jpeg, image/jpg"  name="producto_image" className="box" /> */}
            <input type="submit" className="btn" name="add_product" value="Agregar" />
         </form>

      </div>
      
      <div className="product-display">
         <table className="product-display-table">
         <thead>
            <tr>
            <td>IMAGEN</td>
            <td>PRODUCTO</td>
            <td>PRECIO</td>
            <td colspan="2">ACCION</td>
            </tr>
         </thead>
    {products && products.map((product,index) =><tr key={index}>
            <td><img src={product.images} alt="img" className="img-product"/></td>
            <td>{product.name}</td>
            <td>USD {product.price}</td>
            <td colspan="2">
              <LinkRouter to={`/product/${product._id}`}><button className="btn"><BorderColorIcon sx={{fontSize:'2rem',marginRight:'5px'}} /> EDITAR</button></LinkRouter>
                <button onClick={()=>deleteProduct(product._id)}  className="btn"><DeleteIcon sx={{fontSize:'2rem',marginRight:'5px'}} /> ELIMINAR</button>
            </td>
            </tr>)}     

         </table>

      </div>

    </div>
  )
}

export default Admin