import { MdChecklistRtl } from "react-icons/md"
import { Section } from "../styles/global/components/Section"
import { TopPage } from "../styles/global/components/TopPage"
import { Subtitle } from "../styles/global/components/Subtitle";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { TableInventory } from "../components/TableInventory";
import { InventoryItem } from "../components/InventoryItem";

export const Inventory = () => {
    const { inventory, setInventory } = useContext(ProductContext)  
    const [ inventorySelected, setInventorySelected] = useState({})

    return(
        <Section>
            <TopPage>
                <MdChecklistRtl />
                <h2>Estoque</h2>
            </TopPage>
            <Subtitle>Estoque Mensal</Subtitle>
            <InventoryItem setInventory={setInventory} inventory={inventory}/>
            <TableInventory inventory={inventory} />
        </Section>
    )
}