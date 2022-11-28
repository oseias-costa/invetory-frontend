import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { Button } from "../styles/global/components/Button"
import { InputItens } from "../styles/global/components/InputItens"
import { SelectItem } from "../styles/global/components/SelectItem"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleCreate, handleDelete, handleEdit } from "../utils/crud"

export const MoveStock = ({states}) => {
    const { state, setState, selectedItem, setSelectedItem } = states
    const filterSelected = state?.find(item => item._id === selectedItem?.id)

    const { category, subcategory, product, movement, setMovement } = useContext(ProductContext)
    const [chosen, setChosen] = useState({ ...filterSelected })
    const [move, setMove] = useState({...chosen})
    const [editing, setEditing] = useState(true)
    const navigate = useNavigate()

    const dontSaveDb = ['total', 'updatedAt', 'createdAt', '__v', '_id']
    const deleteItens = (arr, obj) => arr.map(item => delete obj[item])
    deleteItens(dontSaveDb, chosen)
    deleteItens(dontSaveDb, move)

    const endpoint = '/api/inventory/'
    const endpointMovement = '/api/movement'

    const filterSubcategory = subcategory?.filter(item => item.category === chosen.category)
    const filterProduct = product?.filter(item => {
        return item.category === chosen.category &&
            item.subcategory === chosen.subcategory
        }
    )

    console.log(move)
    const checkSelect = selectedItem.amount - chosen.amount

    const moveItem = (event) => {
        if(checkSelect > 0){

            const reduce = selectedItem.amount - chosen.amount
            handleEdit(endpoint, filterSelected._id, { ...chosen, amount: reduce}, state, setState, setEditing)
            handleCreate(endpointMovement, move, movement, setMovement)
            navigate('/Estoque')
            setSelectedItem(null)

        } else if(checkSelect == 0){
            
            handleDelete(event, endpoint, state, setState)
            handleCreate(endpointMovement, move, movement, setMovement)
            navigate('/Estoque')
            setSelectedItem(null)
            
        } else {
            console.log('chosen é maior')
        }
    }

    return (
        <div>
            <NavLink to='/Estoque/'>Voltar</NavLink>
            <Subtitle>Editar Item</Subtitle>
            <SelectItem value={chosen.category} disabled={+true}>
                <option value=''>Categoria</option>
                {category !== undefined && category.map(item => (
                    <option key={item._id}>{item.categoryName}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.subcategory}  disabled={+true}>
                <option value=''>Subcategoria</option>
                {subcategory !== undefined && filterSubcategory.map(item => (
                    <option key={item._id}>{item.subcategory}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.product} disabled={+true}>
                <option value=''>Produto</option>
                {product !== undefined && filterProduct.map(item => (
                    <option key={item._id}>{item.product}</option>
                ))}
            </SelectItem>
            <InputItens type='text'
                value={chosen.size}
                placeholder='Tamanho'
                disabled={+true}
            />
            <InputItens type='text'
                value={chosen.color}
                placeholder='Cor'
                disabled={+true}
            />
            <InputItens type='number'
                value={chosen.amount}
                placeholder={selectedItem.amount}
                onChange={e => {
                    setChosen({ ...chosen, amount: e.target.value })
                    setMove({ ...chosen, amount: e.target.value })
                }}
            />
            <p>{checkSelect < 0 && 'A quantidade é maior do que tem em estoque'}</p>
            <InputItens type='text'
                value={chosen.costPrice}
                placeholder='Preço de Custo'
                disabled={+true}
            />
            <InputItens type='text'
                value={chosen.salePrice}
                placeholder='Preço de Venda'
                disabled={+true}
            />
            <InputItens type='text'
                value={chosen.description}
                placeholder='Descrição'
                disabled={+false}
                onChange={e => setMove({...chosen, ...move, description: e.target.value})}
            />
            <SelectItem 
                value={chosen.type} 
                disabled={+false} 
                onChange={e => setMove({...chosen, ...move, type: e.target.value})}
            >
                <option value=''>Tipo</option>
                <option>Venda</option>
                <option>Devolução</option>
                <option>Perda</option>
            </SelectItem>
            <Button value={filterSelected?._id} onClick={moveItem}>Movimentar</Button>
        </div>
    )
}