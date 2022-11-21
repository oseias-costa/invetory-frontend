import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { Button } from "../styles/global/components/Button"
import { InputItens } from "../styles/global/components/InputItens"
import { SelectItem } from "../styles/global/components/SelectItem"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleEdit } from "../utils/crud"

export const EditInventoryItem = ({setInventory, selectedItem, inventory}) => {
    const filterSelected = inventory?.find(item => item._id === selectedItem?.id)
    
    const { category, subcategory, product } = useContext(ProductContext)
    const [ chosen, setChosen ] = useState({...filterSelected})
    const [ editing, setEditing ] = useState(true)
    
    delete chosen.total
    delete chosen._id
    delete chosen.updatedAt
    delete chosen.createdAt

    const endpoint = '/api/inventory/'
        console.log(chosen)
    const filterSubcategory = subcategory?.filter(item => item.category === chosen.category)
    const filterProduct = product?.filter(item => {
        return item.category === chosen.category &&
               item.subcategory === chosen.subcategory
            }
    )
    
    const EditItem = () => {
        handleEdit(endpoint, filterSelected._id, {...chosen}, inventory, setInventory, setEditing)
    }

    return(
        <div>
            <Subtitle>Editar Item</Subtitle>
            <SelectItem value={chosen.category} onChange={e => setChosen({...chosen, category: e.target.value})}>
                <option value=''>Categoria</option>
                {category !== undefined && category.map(item => (
                     <option>{item.categoryName}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.subcategory} onChange={e => setChosen({...chosen, subcategory: e.target.value})}>
                <option value=''>Subcategoria</option>
                {subcategory !== undefined && filterSubcategory.map(item => (
                     <option>{item.subcategory}</option>
                ))}
            </SelectItem>
            <SelectItem value={chosen.product} onChange={e => setChosen({ ...chosen, product: e.target.value})}>
                <option value=''>Produto</option>
                {product !== undefined && filterProduct.map(item => (
                     <option>{item.product}</option>
                ))}
            </SelectItem>
            <InputItens type='text' 
                value={chosen.size} 
                placeholder='Tamanho'
                onChange={e => setChosen({...chosen, size: e.target.value})} 
            />
            <InputItens type='text' 
                value={chosen.color} 
                placeholder='Cor'
                onChange={e => setChosen({...chosen, color: e.target.value})} 
            />
            <InputItens type='number' 
                value={chosen.amount} 
                placeholder='Qtde'
                onChange={e => setChosen({...chosen, amount: e.target.value})} 
            />
            <InputItens type='text' 
                value={chosen.costPrice} 
                placeholder='Preço de Custo'
                onChange={e => setChosen({...chosen, costPrice: e.target.value})} 
            />
            <InputItens type='text' 
                value={chosen.salePrice} 
                placeholder='Preço de Venda'
                onChange={e => setChosen({...chosen, salePrice: e.target.value})} 
            />
            <Button onClick={EditItem}>Editar</Button>
        </div>
    )
}