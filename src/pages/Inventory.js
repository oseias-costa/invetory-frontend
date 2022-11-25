import { MdChecklistRtl } from "react-icons/md"
import { Section } from "../styles/global/components/Section"
import { TopPage } from "../styles/global/components/TopPage"
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { TableInventory } from "../components/TableInventory";
import { AddInventoryItem } from "../components/AddInventoryItem";
import { Route, Routes } from "react-router-dom";
import { EditInventoryItem } from "../components/EditInventoryItem";
import { MoveStock } from "../components/MoveStock";

export const Inventory = () => {
    const { inventory, setInventory } = useContext(ProductContext)  
    const [ selectedItem, setselectedItem] = useState(null)

    console.log('o que tem no', selectedItem)
    return(
        <Section>
            <TopPage>
                <MdChecklistRtl />
                <h2>Estoque</h2>
            </TopPage> 
       
                <Routes>
                    <Route path='/' element={
                        <TableInventory inventory={inventory} selectedItem={selectedItem} setselectedItem={setselectedItem} />} />
                    <Route path='/Adicionar' element={
                        <AddInventoryItem setInventory={setInventory} inventory={inventory} />} />
                    <Route path='/Editar' element={
                        <EditInventoryItem
                            inventory={inventory} 
                            setInventory={setInventory} 
                            selectedItem={selectedItem} 
                            setselectedItem={setselectedItem} />}
                        />
                    <Route path='/Movimentar' element={
                        <MoveStock
                            inventory={inventory} 
                            setInventory={setInventory} 
                            selectedItem={selectedItem} 
                            setselectedItem={setselectedItem}/>} 
                        />
                </Routes>  
            
        </Section>
    )
}