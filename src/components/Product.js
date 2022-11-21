import { useContext, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdAddCircle } from 'react-icons/md';
import { ProductContext } from '../context/ProductContext';
import { Subtitle } from '../styles/global/components/Subtitle';
import { ProdItensButton } from '../styles/ProductsManager/ProdItensButton';
import { ProductInput, ProductInputButton } from '../styles/ProductsManager/ProductInput';
import { ProductItem } from '../styles/ProductsManager/ProductItem';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';

export const Product = ({chosen, setChosen}) => {
    const { product, setProduct } = useContext(ProductContext)
    const [newProduct, setNewProduct] = useState({product:''})
    const [editProduct, setEditProduct] = useState(false)

    const endpointProduct = '/api/product/'

    const createProduct = () => {
        if(newProduct.product !== ''){
        handleCreate(endpointProduct, {
            category: chosen.category,
            subcategory: chosen.subcategory,
            product: newProduct.product},
            product, setProduct)
        setNewProduct({ 
            category: '', subcategory: '', product: '', _id: '', updatedAt: '' })
        }
    }

    const editProductItem = () => {
        if(newProduct.product !== ''){
        handleEdit(endpointProduct, newProduct._id,{
            category: chosen.category, 
            subcategory: chosen.subcategory,
            product: newProduct.product },
            product, setProduct, setEditProduct)
    
          setNewProduct({ product: '', _id: '', updatedAt: '' })  
        }
      }
      
    const showProduct = product !== undefined && 
        product.filter(item => {
        return item.category.includes(chosen.category) &&
        item.subcategory.includes(chosen.subcategory)
        })
    
        const ItemSelected = (item) => {
            return chosen.product && chosen.product === item.product 
             ? 'ButtonActiv' : 'hidden'
           }
   
     showProduct && showProduct.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

    return(
        <div>
        <Subtitle>Produto</Subtitle>
        <ProductInput 
            type='text' 
            required={+true} 
            placeholder='Adicionar'
            value={newProduct.product} 
            onChange={e => setNewProduct({...newProduct, product : e.target.value})} 
        />
        <ProductInputButton onClick={editProduct 
          ? editProductItem 
          : createProduct}>
            {editProduct ? <AiFillCheckCircle /> : <MdAddCircle />}
        </ProductInputButton>
        {chosen.subcategory !== undefined 
        && product !== undefined
        && showProduct.map((item) =>
           (<ProductItem key={item._id}>
              <ProdItensButton
                id={item.product} 
                className={chosen.product === item.product ? 'ItemActive' : ''}
                onClick={e => setChosen({...chosen, product: e.target.id})}
                >{item.product}
              </ProdItensButton>

              <button 
                  className={ItemSelected(item)} 
                  value={item._id} onClick={e => handleDelete(e, endpointProduct, product, setProduct)}>
                  delete
              </button>
              <button 
                 className={ItemSelected(item)} 
                 value={item._id} onClick={e => selectedForEditing(e, setEditProduct, product, setNewProduct)}>
                 Editar
             </button>

           </ProductItem>)
        )}
        </div>
    )
}