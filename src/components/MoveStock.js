import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { Button } from "../styles/global/components/Button"
import { InputItens } from "../styles/global/components/InputItens"
import { SelectItem } from "../styles/global/components/SelectItem"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleEdit } from "../utils/crud"

export const MoveStock = ({ setInventory, selectedItem, inventory, setselectedItem }) => {
    const filterSelected = inventory?.find(item => item._id === selectedItem?.id)

    const { category, subcategory, product } = useContext(ProductContext)
    const [chosen, setChosen] = useState({ ...filterSelected, amount: '' })
    const [editing, setEditing] = useState(true)
    const navigate = useNavigate()

    const dontSaveDb = ['total', 'updatedAt', 'createdAt', '__v']
    const deleteItens = (arr, obj) => arr.map(item => delete obj[item])
    deleteItens(dontSaveDb, chosen)

    const endpoint = '/api/inventory/'

    const filterSubcategory = subcategory?.filter(item => item.category === chosen.category)
    const filterProduct = product?.filter(item => {
        return item.category === chosen.category &&
            item.subcategory === chosen.subcategory
        }
    )
    const reduce = 
    console.log('moveeeeee', selectedItem.amount - chosen.amount)

    

    console.log(selectedItem)
    const moveItem = () => {
        if(chosen.amount < selectedItem.amount){
            const reduce = selectedItem.amount - chosen.amount
            handleEdit(endpoint, filterSelected._id, { ...chosen, amount: reduce}, inventory, setInventory, setEditing)
        } else if(chosen.amount == selectedItem.amount){
            console.log('chosen é igual')
        } else {
            console.log('chosen é maior')
        }
    }

    /*const EditItem = ()  => {
       handleEdit(endpoint, filterSelected._id, { ...chosen }, inventory, setInventory, setEditing)
       navigate('/Estoque')
       setselectedItem('') 
    } */

    return (
        <div>
            <Subtitle>Editar Item</Subtitle>
            <SelectItem value={chosen.category} disabled={+true}>
                <option value=''>Categoria</option>
                {category !== undefined && category.map(item => (
                    <option key={item._id}>{item.categoryName}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.subcategory} onChange={e => setChosen({ ...chosen, subcategory: e.target.value })}>
                <option value=''>Subcategoria</option>
                {subcategory !== undefined && filterSubcategory.map(item => (
                    <option key={item._id}>{item.subcategory}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.product} onChange={e => setChosen({ ...chosen, product: e.target.value })}>
                <option value=''>Produto</option>
                {product !== undefined && filterProduct.map(item => (
                    <option key={item._id}>{item.product}</option>
                ))}
            </SelectItem>
            <InputItens type='text'
                value={chosen.size}
                placeholder='Tamanho'
                onChange={e => setChosen({ ...chosen, size: e.target.value })}
            />
            <InputItens type='text'
                value={chosen.color}
                placeholder='Cor'
                onChange={e => setChosen({ ...chosen, color: e.target.value })}
            />
            <InputItens type='number'
                value={chosen.amount}
                placeholder='Qtde'
                onChange={e => setChosen({ ...chosen, amount: e.target.value })}
            />
            <InputItens type='text'
                value={chosen.costPrice}
                placeholder='Preço de Custo'
                onChange={e => setChosen({ ...chosen, costPrice: e.target.value })}
            />
            <InputItens type='text'
                value={chosen.salePrice}
                placeholder='Preço de Venda'
                onChange={e => setChosen({ ...chosen, salePrice: e.target.value })}
            />
            <Button onClick={moveItem}>Movimentar</Button>
        </div>
    )
}