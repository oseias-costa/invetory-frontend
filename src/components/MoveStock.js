import { useContext, useEffect, useState } from "react"
import { IoChevronBackSharp } from "react-icons/io5"
import { NavLink, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { BodyItem, BoxInputs, InputItens, ItemEdit, SelectItem, SpanItem, TopEdit } from "../styles/global/components/BodyItem"
import { Button } from "../styles/global/components/Button"
import { Subtitle } from "../styles/global/components/Subtitle"
import { handleCreate, handleDelete, handleEdit } from "../utils/crud"

export const MoveStock = ({states}) => {
    const { state, setState, selectedItem, setSelectedItem } = states
    const filterSelected = state?.find(item => item._id === selectedItem?.id)
    
    const { category, subcategory, product, movement, setMovement } = useContext(ProductContext)
    const [chosen, setChosen] = useState({ ...filterSelected})
    const [move, setMove] = useState({...chosen })
    const [editing, setEditing] = useState(true)
    const navigate = useNavigate()
    
    const dontSaveDb = ['updatedAt', 'createdAt', '__v', '_id']
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
        <BodyItem>
            <TopEdit>
                <NavLink to='/Estoque/'><IoChevronBackSharp /></NavLink>
                <Subtitle>Movimentar Item</Subtitle>
            </TopEdit>

            <BoxInputs>
            <ItemEdit>
                <SpanItem>Categoria</SpanItem>
                <SelectItem value={chosen.category} disabled={+true}>
                    <option value=''>Categoria</option>
                    {category !== undefined && category.map(item => (
                        <option key={item._id}>{item.categoryName}</option>
                        ))}
                </SelectItem>
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Subcategoria</SpanItem>
                <SelectItem value={chosen.subcategory}  disabled={+true}>
                    <option value=''>Subcategoria</option>
                    {subcategory !== undefined && filterSubcategory.map(item => (
                        <option key={item._id}>{item.subcategory}</option>
                        ))}
                </SelectItem>
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Produto</SpanItem>
                <SelectItem value={chosen.product} disabled={+true}>
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
                    disabled={+true}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Cor</SpanItem>
                <InputItens type='text'
                    value={chosen.color}
                    placeholder='Cor'
                    disabled={+true}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Qtde</SpanItem>
                <InputItens type='number'
                    value={chosen.amount}
                    placeholder={selectedItem.amount}
                    onChange={e => {
                        setChosen({ ...chosen, amount: Number(e.target.value)})
                        setMove({ ...chosen, ...move, amount: Number(e.target.value),
                            total: move.salePrice * e.target.value })
                        }}
                />
                <p>{checkSelect < 0 && 'A quantidade é maior do que tem em estoque'}</p>
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Preço de Custo</SpanItem>
                <InputItens type='text'
                    value={chosen.costPrice}
                    placeholder='Preço de Custo'
                    disabled={+true}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Preço de Venda</SpanItem>
                <InputItens type='text'
                    value={chosen.salePrice}
                    placeholder='Preço de Venda'
                    disabled={+true}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Descrição</SpanItem>
                <InputItens type='text'
                    value={chosen.description}
                    placeholder='Descrição'
                    disabled={+false}
                    onChange={e => setMove({...chosen, ...move, description: e.target.value})}
                />
            </ItemEdit>
            <ItemEdit>
                <SpanItem>Destino</SpanItem>
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
            </ItemEdit>
            </BoxInputs>
            <Button value={filterSelected?._id} onClick={moveItem}>Movimentar</Button>
        </BodyItem>
    )
}