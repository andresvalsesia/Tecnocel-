import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import productActions from '../../redux/actions/productActions';
import './admin.css';

const Admin = () => {

const dispatch=useDispatch();
const { id } = useParams();

useEffect(() => {
   
    dispatch(productActions.getOneProduct(id))
 

 }, []);

 const modifiProduct = async (e) => {
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
    }
 

 


 let product=useSelector(store=>store.productReducer.oneProduct)
 



  return (
    <div className="container">
      
      <div className="admin-product-form-container">
         
         <form onSubmit={modifiProduct}>
            <h3>Editar producto</h3>
            <input type="text" value={product.name} placeholder="Ingrese el nombre del producto" name="producto_nombre" className="box" required />
            <input type="text" value={product.description}  placeholder="Ingrese la descripcion del producto" name="producto_descrep" className="box" required />
            <input type="number" value={product.price}  placeholder="Ingrese el precio del producto" name="producto_precio" className="box" required />
            <input type="text" value={product.brand}  placeholder="Ingrese la marca del producto" name="producto_marca" className="box" />
            <input type="text" value={product.color}  placeholder="Ingrese el color del producto" name="producto_color" className="box" />
            <input type="text" value={product.sizeTv}  placeholder="Ingrese las pulgadas " name="producto_pulgadas" className="box" />
            <input type="text" value={product.RAM}  placeholder="Ingrese capacidad de memoria RAM" name="producto_RAM" className="box" />
            <input type="text" value={product.category}  placeholder="Ingrese la categoria del producto" name="producto_cat" className="box" required />
            <input type="number" value={product.stock}  placeholder="Ingrese el stock" name="producto_stock" className="box" required />
            <input type="text" value={product.system}  placeholder="Ingrese el sistema operativo" name="producto_system" className="box" />
            <input type="text" value={product.disc}  placeholder="Ingrese el disco del producto" name="producto_disco" className="box" />
            <input type="text" value={product.processor}  placeholder="Ingrese el procesador del producto" name="producto_prosser" className="box" />
 
            <input  type="text" value={product.images} placeholder="Ingrese la imagen del producto" name="producto_imagen" className="box" required />
            {/* <input type="file" accept="image/png, image/jpeg, image/jpg"  name="producto_image" className="box" /> */}
            <input type="submit" className="btn" name="add_product" value="Editar" />
         </form>

      </div>
      
   

    </div>
  )
}

export default Admin