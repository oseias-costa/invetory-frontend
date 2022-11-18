import { useState } from 'react';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';

export const Subcategory = ({subcategory, setSubcategory, chosen, setChosen}) => {
    const [newSubcategory, setNewSubcategory] = useState({subcategory:''})
    const [editSubcategory, setEditSubcategory] = useState(false)

    const endpointSubcategory = '/api/subcategory/'

    const createSubcategory = () => {
        handleCreate(endpointSubcategory, {
            category: chosen.category,
            subcategory: newSubcategory.subcategory},
            subcategory, setSubcategory)
        setNewSubcategory({ 
            category: '', subcategory: '', _id: '', updatedAt: '' })
    }

    const editSubcategoryItem = () => {
        handleEdit(endpointSubcategory, newSubcategory._id,{
            category: chosen.category, 
            subcategory: newSubcategory.subcategory },
            subcategory, setSubcategory, setEditSubcategory)
    
          setNewSubcategory({ subcategory: '', _id: '', updatedAt: '' })  
      }
      
    const showSubcategory = subcategory.filter(item => item.category.includes(chosen.category))
    showSubcategory.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

    return(
        <div>
            <input type='text' required={+true} value={newSubcategory.subcategory} onChange={e => setNewSubcategory({...newSubcategory, subcategory : e.target.value})} />
            <button onClick={editSubcategory 
                ? editSubcategoryItem 
                : createSubcategory}>
                {editSubcategory ? 'Editar' : 'Salvar'}
            </button>
            <ul>
                {subcategory && showSubcategory.map((item) => (
                    <li key={item._id}>
                        <p>{item.category}</p>
                        <h3 id={item.subcategory} onClick={e => setChosen({...chosen, subcategory: e.target.id})}>{item.subcategory}</h3>
                        <button value={item._id} onClick={e => handleDelete(e, endpointSubcategory, subcategory, setSubcategory)}>
                            delete
                        </button>
                        <button value={item._id} onClick={e => selectedForEditing(e, setEditSubcategory, subcategory, setNewSubcategory)}>Editar</button>
                    </li>)
                )}
            </ul>
        </div>
    )
}