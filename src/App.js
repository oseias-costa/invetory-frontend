import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { useGetAll } from './hooks/useGetAll';
import { handleCreate, handleDelete } from './utils/crud';


function App() {
  
  const [category, setCategory] = useGetAll('/api/category')
  const [newCategory, setNewCategory] = useState({categoryName:''})
  const [editCategory, setEditCategory] = useState(false)
  const [chosenCategory, setChosenCategory] = useState('')

  const endpointCategory = '/api/category/'

  const deleteFromList = (id, arr) => {
    const indexCategory = arr.findIndex(item => item._id === id)
      arr.splice(indexCategory, 1)}
     
  // const handleSave = () => {
  //   if(newCategory.categoryName !== ''){
  //         axios.post('/api/category',{
  //         categoryName: newCategory.categoryName
  //     }).then( response => setCategory([...category, response.data]))
  //       .catch(err => console.log(err))
  //   }
  //   setNewCategory({})
  // }

  const createCategory = () => {
    handleCreate( endpointCategory,
      { categoryName: newCategory.categoryName },
      category, setCategory)
    
    setNewCategory({
      categoryName: '',
      _id: '',
      updatedAt: ''
    })
  } 

  const handleEdit = () => {
     if(newCategory._id !== '') {
          axios.patch(`/api/category/${newCategory._id}`,{
          categoryName: newCategory.categoryName
    }).then(response => {
          deleteFromList(newCategory._id, category)
          setCategory([response.data, ...category])
      if(response.ok){
         category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      }
          setNewCategory({categoryName: ''})
    }).then(setCategory(category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))))
      .catch(err => console.log(err))}
          setNewCategory({})
          setEditCategory(false)
  }

  const handleEditCategory = (item) => {
    setEditCategory(true)
    const id = item.target.value
    const findItem = category.find(item => item._id.includes(id))
    setNewCategory(findItem)
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
      <button onClick={editCategory ? handleEdit : createCategory}>{editCategory ? 'Editar' : 'Salvar'}</button>
      
      <p>item escolhido: {chosenCategory}</p>
      {category && category.map((item) =>
         (<div style={divStyle} key={item._id}>
            <p>{item._id}</p>
            <h3 id={item._id} onClick={e => setChosenCategory(e.target.id)}>{item.categoryName}</h3>
            <button value={item._id} onClick={e => handleDelete(e, endpointCategory, category, setCategory)}>delete</button>
            <button value={item._id} onClick={handleEditCategory}>Editar</button>
         </div>)
      )}
    </div>
  );
}

export default App
