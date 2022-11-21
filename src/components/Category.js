import { useContext, useState } from 'react';
import { Subtitle } from '../styles/global/components/Subtitle';
import { ProductInput, ProductInputButton } from '../styles/ProductsManager/ProductInput';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';
import { MdAddCircle } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import { ProdItensButton } from '../styles/ProductsManager/ProdItensButton';
import { ProductItem } from '../styles/ProductsManager/ProductItem';
import { ProductContext } from '../context/ProductContext';

export const Category = ({ chosen, setChosen}) => {
    const [newCategory, setNewCategory] = useState({categoryName:''})
    const [editCategory, setEditCategory] = useState(false)
    const { category, setCategory } = useContext(ProductContext)
    
    const endpointCategory = '/api/category/'
    
    const createCategory = () => {
      if(newCategory.categoryName !== '') {
        handleCreate( endpointCategory,
          { categoryName: newCategory.categoryName },
          category, setCategory)
        
        setNewCategory({ categoryName: '', _id: '', updatedAt: '' })
        }
      }

      const editCategoryItem = () => {
        if(newCategory.categoryName !== '') {
        handleEdit(endpointCategory, newCategory._id,
          { categoryName: newCategory.categoryName },
          category, setCategory, setEditCategory)
    
        setNewCategory({ categoryName: '', _id: '', updatedAt: '' })  
          }
        }
        
        const ItemSelected = (item) => {
         return chosen.category && chosen.category === item.categoryName 
          ? 'ButtonActiv' : 'hidden'
        }

        category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

    return(
        <div>
          <Subtitle>Categoria</Subtitle>
              <ProductInput  
                type='text' 
                required={+true} 
                value={newCategory.categoryName} 
                onChange={e => setNewCategory({...newCategory, categoryName : e.target.value})} 
                placeholder='Adicionar'
              />
              <ProductInputButton 
                onClick={editCategory ? editCategoryItem : createCategory}>
                {editCategory ? <AiFillCheckCircle /> : <MdAddCircle />}
              </ProductInputButton>
              {category && category.map((item) =>(
                <ProductItem key={item._id}>
                    <ProdItensButton 
                      id={item.categoryName} 
                      className={chosen.category === item.categoryName ? 'ItemActive' : ''}
                      onClick={e => setChosen({category: e.target.id})}>
                      {item.categoryName}
                    </ProdItensButton>

                    <button 
                      value={item._id} 
                      className={ItemSelected(item)}
                      onClick={e => selectedForEditing(e, setEditCategory, category, setNewCategory)}>
                        Editar
                    </button>
                    <button 
                      value={item._id}
                      className={ItemSelected(item)} 
                      onClick={e => handleDelete(e, endpointCategory, category, setCategory)}>
                         Excluir
                    </button>
                </ProductItem>)
            )}
        </div> 
   )
}