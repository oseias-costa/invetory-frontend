import { useState } from 'react';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';

export const Category = ({category, setCategory, chosen, setChosen}) => {
    const [newCategory, setNewCategory] = useState({categoryName:''})
    const [editCategory, setEditCategory] = useState(false)
    
    const endpointCategory = '/api/category/'
    
    const createCategory = () => {
        handleCreate( endpointCategory,
          { categoryName: newCategory.categoryName },
          category, setCategory)
        
        setNewCategory({ categoryName: '', _id: '', updatedAt: '' })
      }

      const editCategoryItem = () => {
        handleEdit(endpointCategory, newCategory._id,
          { categoryName: newCategory.categoryName },
          category, setCategory, setEditCategory)
    
        setNewCategory({ categoryName: '', _id: '', updatedAt: '' })  
        }

        category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    return(
        <div>
              <input type='text' required={+true} value={newCategory.categoryName} onChange={e => setNewCategory({...newCategory, categoryName : e.target.value})} />
                <button onClick={editCategory 
                    ? editCategoryItem 
                    : createCategory}>
                    {editCategory ? 'Editar' : 'Salvar'}
                </button>
         <p>item escolhido: {chosen.category}</p>
            {category && category.map((item) =>
                (<div key={item._id}>
                    <p>{item._id}</p>
                    <h3 id={item.categoryName} onClick={e => setChosen({category: e.target.id})}>{item.categoryName}</h3>
                    <button value={item._id} onClick={e => handleDelete(e, endpointCategory, category, setCategory)}>delete</button>
                    <button value={item._id} onClick={e => selectedForEditing(e, setEditCategory, category, setNewCategory)}>Editar</button>
                </div>)
            )}
        </div> 
   )
}