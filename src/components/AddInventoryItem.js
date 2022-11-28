import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { Button } from "../styles/global/components/Button"
import { InputItens } from "../styles/global/components/InputItens"
import { SelectItem } from "../styles/global/components/SelectItem"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleCreate } from "../utils/crud"

export const AddInventoryItem = ({states}) => {
    const { state, setState } = states
    const { category, subcategory, product } = useContext(ProductContext)
    const [ chosen, setChosen ] = useState({category:'', subcategory:'', product:''})
    const navigate = useNavigate()

    const endpoint = '/api/inventory/'

    const filterSubcategory = subcategory?.filter(item => item.category === chosen.category)
    const filterProduct = product?.filter(item => {
        return item.category === chosen.category &&
               item.subcategory === chosen.subcategory
            }
    )
    
    const addNewItem = () => {
        handleCreate(endpoint, {...chosen}, state, setState)
        navigate('/Estoque')
    }

    return(
        <div>
            <NavLink to='/Estoque/'>Voltar</NavLink>
            <Subtitle>Adicionar Item</Subtitle>
            <SelectItem value={chosen.category} onChange={e => setChosen({category: e.target.value})}>
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
            <Button onClick={addNewItem}>Adicionar</Button>
        </div>
    )
}