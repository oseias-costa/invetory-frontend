import { useState } from 'react';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';

export const Product = ({product, setProduct, chosen, setChosen}) => {
    const [newProduct, setNewProduct] = useState({product:''})
    const [editProduct, setEditProduct] = useState(false)

    const endpointProduct = '/api/product/'

    const createProduct = () => {
        handleCreate(endpointProduct, {
            category: chosen.category,
            subcategory: chosen.subcategory,
            product: newProduct.product},
            product, setProduct)
        setNewProduct({ 
            category: '', subcategory: '', product: '', _id: '', updatedAt: '' })
    }

    const editProductItem = () => {
        handleEdit(endpointProduct, newProduct._id,{
            category: chosen.category, 
            subcategory: chosen.subcategory,
            product: newProduct.product },
            product, setProduct, setEditProduct)
    
          setNewProduct({ product: '', _id: '', updatedAt: '' })  
      }
      
    const showProduct = product.find(item => item.category == chosen.category) ? product?.filter(item => {
        item.category.includes(chosen.category) &&
        item.subcategory.includes(chosen.subcategory)
        } 
    ) : ''
     
    // showProduct.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

    return(
        <div>
        <input type='text' required={+true} value={newProduct.product} onChange={e => setNewProduct({...newProduct, product : e.target.value})} />
        <button onClick={editProduct 
          ? editProductItem 
          : createProduct}>
            {editProduct ? 'Editar' : 'Salvar'}
        </button>
        {/* {product && showProduct.map((item) =>
           (<div key={item._id}>
              <p>{item.category}</p>
              <p>{item.subcategory}</p>
              <h3>{item.product}</h3>
              <button value={item._id} onClick={e => handleDelete(e, endpointProduct, product, setProduct)}>
                  delete
              </button>
              <button value={item._id} onClick={e => selectedForEditing(e, setEditProduct, product, setNewProduct)}>Editar</button>
           </div>)
        )} */}
        </div>
    )
}