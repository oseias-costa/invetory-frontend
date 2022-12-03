import { useContext, useEffect, useState } from "react"
import { IoChevronBackSharp } from "react-icons/io5"
import { NavLink, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { BodyItem, BoxInputs, InputItens, ItemEdit, SelectItem, SpanItem, TopEdit } from "../styles/global/components/BodyItem"
import { Button, CancelButton } from "../styles/global/components/Button"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleCreate } from "../utils/crud"

export const AddInventoryItem = ({states}) => {
    const { state, setState } = states
    const { category, subcategory, product } = useContext(ProductContext)
    const [ chosen, setChosen ] = useState({ category:'', subcategory:'', product:''})
    const navigate = useNavigate()

    useEffect(()=> {
        if(!chosen.salePrice || !chosen.amount){
            setChosen({...chosen, total: ''})
        } else {
            setChosen({...chosen, total: chosen?.amount * chosen?.salePrice})
        }
    }, [chosen.salePrice, chosen.amount])

    console.log(chosen)

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

    console.log('add item:', chosen)
    return(
        <BodyItem>

            <TopEdit>
                <NavLink to='/Estoque/'><IoChevronBackSharp /></NavLink>
                <Subtitle>Adicionar Item</Subtitle>
            </TopEdit>

            <BoxInputs>
                <ItemEdit>
                    <SpanItem>Categoria</SpanItem>
                    <SelectItem value={chosen.category} onChange={e => setChosen({category: e.target.value})}>
                        <option value=''>Categoria</option>
                        {category !== undefined && category.map(item => (
                            <option>{item.categoryName}</option>
                            ))}
                    </SelectItem>
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Subcategoria</SpanItem>
                    <SelectItem value={chosen.subcategory} onChange={e => setChosen({...chosen, subcategory: e.target.value})}>
                        <option value=''>Subcategoria</option>
                        {subcategory !== undefined && filterSubcategory.map(item => (
                            <option>{item.subcategory}</option>
                            ))}
                    </SelectItem>
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Produto</SpanItem>
                    <SelectItem value={chosen.product} onChange={e => setChosen({ ...chosen, product: e.target.value})}>
                        <option value=''>Produto</option>
                        {product !== undefined && filterProduct.map(item => (
                            <option>{item.product}</option>
                            ))}
                    </SelectItem>
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Tamanho</SpanItem>
                    <InputItens type='text' 
                        value={chosen.size} 
                        placeholder='Tamanho'
                        onChange={e => setChosen({...chosen, size: e.target.value})} 
                    />
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Cor</SpanItem>
                    <InputItens type='text' 
                        value={chosen.color} 
                        placeholder='Cor'
                        onChange={e => setChosen({...chosen, color: e.target.value})} 
                    />
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Qtde</SpanItem>
                    <InputItens type='number' 
                        value={chosen.amount} 
                        placeholder='Qtde'
                        onChange={e => setChosen({...chosen, amount: e.target.value})} 
                    />
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Preço de Custo</SpanItem>
                    <InputItens type='text' 
                        value={chosen.costPrice} 
                        placeholder='Preço de Custo'
                        onChange={e => setChosen({...chosen, costPrice: e.target.value})} 
                    />
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Preço de Venda</SpanItem>
                    <InputItens type='text' 
                        value={chosen.salePrice} 
                        placeholder='Preço de Venda'
                        onChange={e => setChosen({...chosen, salePrice: e.target.value})} 
                    />
                </ItemEdit>
                <ItemEdit>
                    <SpanItem>Total</SpanItem>
                    <InputItens type='text' 
                        value={chosen.total} 
                        placeholder='Total' 
                        disabled={+true}
                    />
                </ItemEdit>
            </BoxInputs>
            <Button onClick={addNewItem}>Adicionar</Button>
            <NavLink to='/Estoque'>
                <CancelButton>Cancelar</CancelButton>
            </NavLink>
        </BodyItem>
    )
}