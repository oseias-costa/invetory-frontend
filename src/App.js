import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [category, setCategory] = useState([])
  const [newCategory, setNewCategory] = useState({categoryName:''})
  const [editCategory, setEditCategory] = useState(false)
    
  useEffect(() => {
    getData()
  }, [])
  
 const getData = () => axios.get('/api/category').then(res => {
    const dados = res.data
    setCategory(dados)
  }).catch(err => console.log(err))

  const deleteFromList = (id, arr) => {
    const indexCategory = arr.findIndex(item => item._id === id)
      arr.splice(indexCategory, 1)
  }
     
  const handleDelete = (item) => {
    const id = item.target.value
    axios.delete(`/api/category/${id}`).then(() => {
      deleteFromList(id, category)
      setCategory([...category])
    }).catch(err => console.log(err))
  }

  const handleSave = () => {
    if(newCategory.categoryName !== ''){
      axios.post('/api/category',{
        categoryName: newCategory.categoryName
      }).then( response => setCategory([...category, response.data]))
      .catch(err => console.log(err))
    }
    setNewCategory({})
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

  console.log('ORDEMMM', category.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
  const handleEditCategory = (item) => {
    setEditCategory(true)
    const id = item.target.value
    const findItem = category.find(item => item._id.includes(id))
    setNewCategory(findItem)
  }
  console.log(newCategory)
  const divStyle = {
    display: 'flex'
  }
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
      <button onClick={editCategory ? handleEdit : handleSave}>{editCategory ? 'Editar' : 'Salvar'}</button>
      

      {category && category.map((item) =>
         (<div style={divStyle}>
            <p>{item._id}</p>
            <h3>{item.categoryName}</h3>
            <button value={item._id} onClick={handleDelete}>delete</button>
            <button value={item._id} onClick={handleEditCategory}>Editar</button>
         </div>)
      )}
    </div>
  );
}

export default App
