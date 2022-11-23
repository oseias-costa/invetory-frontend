import { useEffect } from "react";
import { Subtitle } from "../styles/global/components/Subtitle";
import { Table } from "../styles/global/components/Table";

export const TableInventory = ({inventory, selectedItem, setselectedItem}) => {

    useEffect(() => {
        setselectedItem(null)
    },[])
    return(
        <>
        <Subtitle>Estoque Mensal</Subtitle>
        <Table>
        <thead>
            <tr>
                <td>::</td>
                <td>Categoria</td>
                <td>Subtegoria</td>
                <td>Produto</td>
                <td>Tam</td>
                <td>Cor</td>
                <td>Qtde</td>
                <td>Preço Custo</td>
                <td>Preço Venda</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody>
            {inventory && inventory.map(item => (
                <tr key={item._id}>
                    <td><input 
                            type='checkbox' 
                            value={item._id} 
                            onChange={e => setselectedItem({id: e.target.value, amount: item.amount})}
                            checked={item._id === selectedItem?.id}
                        />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>{item.product}</td>
                    <td>{item.size}</td>
                    <td>{item.color}</td>
                    <td>{item.amount}</td>
                    <td>{item.costPrice}</td>
                    <td>{item.salePrice}</td>
                    <td>{item.amount * item.salePrice}</td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>
    )
}