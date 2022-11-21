import { MdChecklistRtl } from "react-icons/md"
import { Section } from "../styles/global/components/Section"
import { TopPage } from "../styles/global/components/TopPage"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { TableInventory } from "../components/TableInventory";
import { AddInventoryItem, InventoryItem } from "../components/AddInventoryItem";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { EditInventoryItem } from "../components/EditInventoryItem";

export const Inventory = () => {
    const { inventory, setInventory } = useContext(ProductContext)  
    const [ inventorySelected, setInventorySelected] = useState({})
    const [ selectedItem, setselectedItem] = useState()

    return(
        <Section>
            <TopPage>
                <MdChecklistRtl />
                <h2>Estoque</h2>
            </TopPage>
            <NavLink to='/Estoque/'>Estoque</NavLink>
            <NavLink to='/Estoque/Adicionar'>Adicionar</NavLink>
            <NavLink to='/Estoque/Editar'>Editar</NavLink>
                <Routes>
                    <Route path='/' element={
                        <TableInventory inventory={inventory} selectedItem={selectedItem} setselectedItem={setselectedItem} />} />
                    <Route path='/Adicionar' element={
                        <AddInventoryItem setInventory={setInventory} inventory={inventory} />} />
                    <Route path='/Editar' element={
                        <EditInventoryItem selectedItem={selectedItem} inventory={inventory} setselectedItem={setselectedItem} />} />
                    <Route path='/Movimentar' />
                </Routes>  
            
        </Section>
    )
}