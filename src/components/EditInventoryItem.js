import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { Button, CancelButton } from "../styles/global/components/Button"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleEdit } from "../utils/crud"
import { IoChevronBackSharp } from 'react-icons/io5'
import { BodyItem, BoxInputs, InputItens, 
         ItemEdit, SelectItem, SpanItem, TopEdit 
        } from "../styles/global/components/BodyItem"

export const EditInventoryItem = ({states}) => {
    const { setState, state, setselectedItem, selectedItem } = states
    const filterSelected = state?.find(item => item._id === selectedItem?.id)

    const { category, subcategory, product } = useContext(ProductContext)
    const [chosen, setChosen] = useState({ ...filterSelected })
    const [editing, setEditing] = useState(true)
    const navigate = useNavigate()

    const dontSaveDb = ['total', '_id', 'updatedAt', 'createdAt', '__v']
    const deleteItens = (arr, obj) => arr.map(item => delete obj[item])
    deleteItens(dontSaveDb, chosen)

    const endpoint = '/api/inventory/'

    const filterSubcategory = subcategory?.filter(item => item.category === chosen.category)
    const filterProduct = product?.filter(item => {
        return item.category === chosen.category &&
            item.subcategory === chosen.subcategory
    }
    )

    const EditItem = ()  => {
       handleEdit(endpoint, filterSelected._id, { ...chosen }, state, setState, setEditing)
       navigate('/Estoque')
       setselectedItem('') 
    }

    return (
        <BodyItem>
            <TopEdit>
                <NavLink to='/Estoque/'><IoChevronBackSharp /></NavLink>
                <Subtitle>Editar Item</Subtitle>
            </TopEdit>

            <BoxInputs>
            <ItemEdit>
                <SpanItem>Categoria</SpanItem>
                <SelectItem value={chosen.category} onChange={e => setChosen({ ...chosen, category: e.target.value })}>
                    <option value=''>Categoria</option>
                    {category !== undefined && category.map(item => (
                        <option key={item._id}>{item.categoryName}</option>
                    ))}
                </SelectItem>
            </ItemEdit>

            <ItemEdit>
                <SpanItem>Subcategoria</SpanItem>
                <SelectItem value={chosen.subcategory} onChange={e => setChosen({ ...chosen, subcategory: e.target.value })}>
                    <option value=''>Subcategoria</option>
                    {subcategory !== undefined && filterSubcategory.map(item => (
                        <option key={item._id}>{item.subcategory}</option>
                        ))}
                </SelectItem>
            </ItemEdit>

            <ItemEdit>
                <SpanItem>Produto</SpanItem>
                <SelectItem value={chosen.product} onChange={e => setChosen({ ...chosen, product: e.target.value })}>
                    <option value=''>Produto</option>
                    {product !== undefined && filterProduct.map(item => (
                        <option key={item._id}>{item.product}</option>
                        ))}
                </SelectItem>
            </ItemEdit>

            <ItemEdit>
                <SpanItem>Tamanho</SpanItem>
                <InputItens type='text'
                    value={chosen.size}
                    placeholder='Tamanho'
                    onChange={e => setChosen({ ...chosen, size: e.target.value })}
                />
            </ItemEdit>

            <ItemEdit>
                <SpanItem>Cor</SpanItem>
                <InputItens type='text'
                    value={chosen.color}
                    placeholder='Cor'
                    onChange={e => setChosen({ ...chosen, color: e.target.value })}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Quantidade</SpanItem>
                <InputItens type='number'
                    value={chosen.amount}
                    placeholder='Qtde'
                    onChange={e => setChosen({ ...chosen, amount: e.target.value })}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Preço de Custo</SpanItem>
                <InputItens type='text'
                    value={chosen.costPrice}
                    placeholder='Preço de Custo'
                    onChange={e => setChosen({ ...chosen, costPrice: e.target.value })}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Preço de Venda</SpanItem>
                <InputItens type='text'
                    value={chosen.salePrice}
                    placeholder='Preço de Venda'
                    onChange={e => setChosen({ ...chosen, salePrice: e.target.value })}
                />
            </ItemEdit>
            </BoxInputs>
            <Button onClick={EditItem}>Editar</Button>
            <NavLink to='/Estoque'>
                <CancelButton>Cancelar</CancelButton>
            </NavLink>
        </BodyItem>
    )
}