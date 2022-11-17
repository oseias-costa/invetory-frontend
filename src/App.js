import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useGetAll } from './hooks/useGetAll';
import { handleCreate, handleDelete, handleEdit, selectedForEditing } from './utils/crud';


function App() {
  const endpointCategory = '/api/category/'
  const endpointSubcategory = '/api/subcategory/'
  
  const [category, setCategory] = useGetAll(endpointCategory)
  const [newCategory, setNewCategory] = useState({categoryName:''})
  const [editCategory, setEditCategory] = useState(false)
  const [chosenCategory, setChosenCategory] = useState('')

  const [subcategory, setSubcategory] = useGetAll(endpointSubcategory)
  const [newSubcategory, setNewSubcategory] = useState({category:'', subcategory:''})
  const [editSubcategory, setEditSubcategory] = useState(false)
     
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

  const divStyle = {
    display: 'flex'
  }
  category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input type='text' required={+true} value={newCategory.categoryName} onChange={e => setNewCategory({...newCategory, categoryName : e.target.value})} />
      <button onClick={editCategory 
        ? editCategoryItem 
        : createCategory}>
          {editCategory ? 'Editar' : 'Salvar'}
      </button>
      
      <p>item escolhido: {chosenCategory}</p>
      {category && category.map((item) =>
         (<div style={divStyle} key={item._id}>
            <p>{item._id}</p>
            <h3 id={item._id} onClick={e => setChosenCategory(e.target.id)}>{item.categoryName}</h3>
            <button value={item._id} onClick={e => handleDelete(e, endpointCategory, category, setCategory)}>delete</button>
            <button value={item._id} onClick={e => selectedForEditing(e, setEditCategory, category, setNewCategory)}>Editar</button>
         </div>)
      )}
      {subcategory && subcategory.map((item) =>
         (<div style={divStyle} key={item._id}>
            <p>{item.category}</p>
            <h3 id={item._id} onClick={e => setChosenCategory(e.target.id)}>{item.subcategory}</h3>
            <button value={item._id} onClick={e => handleDelete(e, endpointCategory, category, setCategory)}>delete</button>
            <button value={item._id} onClick={e => selectedForEditing(e, setEditCategory, category, setNewCategory)}>Editar</button>
         </div>)
      )}
    </div>
  );
}

export default App
