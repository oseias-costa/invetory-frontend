import { useContext, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdAddCircle } from 'react-icons/md';
import { ProductContext } from '../context/ProductContext';
import { Subtitle } from '../styles/global/components/Subtitle';
import { ProdItensButton } from '../styles/ProductsManager/ProdItensButton';
import { ProductInput, ProductInputButton } from '../styles/ProductsManager/ProductInput';
import { ProductItem } from '../styles/ProductsManager/ProductItem';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from '../utils/crud';

export const Subcategory = ({chosen, setChosen}) => {
    const { subcategory, setSubcategory } = useContext(ProductContext)
    const [newSubcategory, setNewSubcategory] = useState({subcategory:''})
    const [editSubcategory, setEditSubcategory] = useState(false)

    const endpointSubcategory = '/api/subcategory/'

    const createSubcategory = () => {
        if(newSubcategory.subcategory !== ''){
        handleCreate(endpointSubcategory, {
            category: chosen.category,
            subcategory: newSubcategory.subcategory},
            subcategory, setSubcategory)
        setNewSubcategory({ 
            category: '', subcategory: '', _id: '', updatedAt: '' })
        }
    }

    const editSubcategoryItem = () => {
        if(newSubcategory.subcategory !== ''){
        handleEdit(endpointSubcategory, newSubcategory._id,{
            category: chosen.category, 
            subcategory: newSubcategory.subcategory },
            subcategory, setSubcategory, setEditSubcategory)
    
          setNewSubcategory({ subcategory: '', _id: '', updatedAt: '' })  
        }
      }
    
    const ItemSelected = (item) => {
        return chosen.subcategory && chosen.subcategory === item.subcategory 
         ? 'ButtonActiv' : 'hidden'
       }
      
    const showSubcategory = subcategory !== undefined && subcategory.filter(item => item.category.includes(chosen.category))
    subcategory !== undefined && showSubcategory.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

    return(
        <div>
            <Subtitle>Subcategoria</Subtitle>
            <ProductInput 
                type='text' 
                required={+true} 
                placeholder='Adicionar'
                value={newSubcategory.subcategory} 
                onChange={e => setNewSubcategory({...newSubcategory, subcategory : e.target.value})} 
            />
            <ProductInputButton onClick={editSubcategory 
                ? editSubcategoryItem 
                : createSubcategory}>
                {editSubcategory ? <AiFillCheckCircle /> : <MdAddCircle />}
            </ProductInputButton>
            <ul>
                {subcategory && showSubcategory.map((item) => (
                    <ProductItem key={item._id}>
                        <ProdItensButton
                            id={item.subcategory} 
                            className={chosen.subcategory === item.subcategory ? 'ItemActive' : ''}
                            onClick={e => setChosen({...chosen, subcategory: e.target.id})}>
                            {item.subcategory}
                        </ProdItensButton>
                        <button 
                            value={item._id} 
                            className={ItemSelected(item)}
                            onClick={e => handleDelete(e, endpointSubcategory, subcategory, setSubcategory)}>
                            delete
                        </button>
                        <button 
                            value={item._id} 
                            className={ItemSelected(item)}
                            onClick={e => selectedForEditing(e, setEditSubcategory, subcategory, setNewSubcategory)}>
                            Editar
                        </button>
                    </ProductItem>)
                )}
            </ul>
        </div>
    )
}