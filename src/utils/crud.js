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

  export const handleEdit = (endpoint, id, obj, state, setState, setTrueEditing) => {
    if(id !== '') {
         axios.patch(`${endpoint}${id}`, obj)
         .then(response => {
         deleteFromList(id, state)
         setState([response.data, ...state])
     if(response.ok){
        state.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
     }
     setTrueEditing(false)
   }).catch(err => console.log(err))}
 }

 export const selectedForEditing = (event, setTrueEditing, state, setNewItem) => {
  setTrueEditing(true)
  const id = event.target.value
  const findItem = state.find(item => item._id.includes(id))
  setNewItem(findItem)
}