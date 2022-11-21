import { Table } from "../styles/global/components/Table";

export const TableInventory = ({inventory}) => {
    return(
        <Table>
        <thead>
            <tr>
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
    )
}