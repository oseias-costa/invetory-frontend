import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Route, Routes } from "react-router-dom";
import { MdChecklistRtl } from "react-icons/md"
import { Section } from "../styles/global/components/Section"
import { TopPage } from "../styles/global/components/TopPage"
import { inventoryData } from "../utils/inventoryData";
import { AddInventoryItem } from "../components/AddInventoryItem";
import { EditInventoryItem } from "../components/EditInventoryItem";
import { MoveStock } from "../components/MoveStock";
import { Table } from "../components/Table";

export const Inventory = () => {
    const { inventory, setInventory } = useContext(ProductContext)  
    const [ selectedItem, setSelectedItem] = useState(null)

    const states =  {
        state: inventory, setState: setInventory, 
        selectedItem, setSelectedItem 
    }
    
    return(
        <Section>
            <TopPage>
                <MdChecklistRtl />
                <h2>Estoque</h2>
            </TopPage> 
                <Routes>
                    <Route path='/' element={
                        <Table states={states} data={inventoryData} />} 
                    />
                    <Route path='/Adicionar' element={
                        <AddInventoryItem states={states} />} 
                    />
                    <Route path='/Editar' element={
                        <EditInventoryItem states={states} />} 
                    />
                    <Route path='/Movimentar' element={
                        <MoveStock states={states} />}  
                    />
                </Routes>  
        </Section>
    )
}