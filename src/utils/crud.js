import axios from 'axios'

   const deleteFromList = (id, arr) => {
    const indexCategory = arr.findIndex(item => item._id === id)
      arr.splice(indexCategory, 1)
  }  
  
  export const handleDelete = (item, endpoint, arr, setArr) => {
    const id = item.target.value
    axios.delete(`${endpoint}${id}`).then(() => {
      deleteFromList(id, arr)
      setArr([...arr])
    }).catch(err => console.log(err))
  }

  export const handleCreate = (endpoint, obj, state, setState) => {
        axios.post(endpoint, obj)
        .then( response => setState([...state, response.data]))
        .catch(err => console.log(err))
  }